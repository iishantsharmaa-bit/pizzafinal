import { NextResponse } from 'next/server';

// In-memory rate limiting store
const rateLimitMap = new Map();

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  const ip = request.ip || request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  
  // Block aggressive SEO tool bots (NOT search engines - SEO safe)
  const blockedBots = [
    'ahrefsbot', 'semrushbot', 'mj12bot', 'dotbot', 
    'blexbot', 'serpstatbot', 'petalbot', 'megaindex',
    'barkrowler', 'spbot'
  ];
  
  const isBlockedBot = blockedBots.some(bot => 
    userAgent.toLowerCase().includes(bot)
  );

  if (isBlockedBot) {
    console.log('🚫 BLOCKED BOT:', userAgent);
    return new NextResponse('Forbidden', { status: 403 });
  }

  // Strict rate limiting for Facebook/Meta bot (allows social preview but controlled)
  const isFacebookBot = userAgent.includes('meta-externalagent') || 
                        userAgent.includes('facebookexternalhit') ||
                        userAgent.includes('Facebot');
  
  if (isFacebookBot) {
    const key = `fb-${ip}`;
    const now = Date.now();
    const windowMs = 60000; // 1 minute window
    const maxRequests = 3; // Max 3 requests per minute (strict but fair)
    
    let rateLimitData = rateLimitMap.get(key);
    
    if (!rateLimitData || now > rateLimitData.resetTime) {
      // New window or expired
      rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    } else if (rateLimitData.count >= maxRequests) {
      // Rate limit exceeded
      const retryAfter = Math.ceil((rateLimitData.resetTime - now) / 1000);
      console.log('⚠️ RATE LIMITED Facebook bot:', ip, 'requests:', rateLimitData.count);
      return new NextResponse('Too Many Requests - Please retry later', { 
        status: 429,
        headers: {
          'Retry-After': retryAfter.toString(),
          'X-RateLimit-Limit': maxRequests.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': rateLimitData.resetTime.toString(),
        }
      });
    } else {
      // Increment count
      rateLimitData.count++;
      rateLimitMap.set(key, rateLimitData);
    }
  }

  // Cleanup old entries periodically (1% chance per request)
  if (Math.random() < 0.01) {
    const cutoffTime = Date.now() - 300000; // 5 minutes ago
    for (const [key, data] of rateLimitMap.entries()) {
      if (data.resetTime < cutoffTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  // Allow Googlebot, Bingbot, and all legitimate traffic
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg).*)',
  ],
};
