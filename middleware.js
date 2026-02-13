import { NextResponse } from 'next/server';

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  
  // Allow Facebook/Meta crawlers - they will get static cached content via ISR
  const facebookBots = [
    'meta-externalagent',
    'facebookexternalhit', 
    'facebot',
    'facebook',
  ];
  
  const isFacebookBot = facebookBots.some(bot => 
    userAgent.toLowerCase().includes(bot)
  );
  
  if (isFacebookBot) {
    console.log('✅ Serving static cached content to Facebook bot:', userAgent);
    // Let them through - they'll get the static cached HTML (ISR with 1-hour revalidation)
    const response = NextResponse.next();
    // Add aggressive caching for crawlers
    response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
    return response;
  }
  
  // Block aggressive SEO tool bots
  const blockedBots = [
    'ahrefsbot', 'semrushbot', 'mj12bot', 'dotbot', 
    'blexbot', 'serpstatbot', 'petalbot', 'megaindex',
    'barkrowler', 'spbot'
  ];
  
  const isBlockedBot = blockedBots.some(bot => 
    userAgent.toLowerCase().includes(bot)
  );

  if (isBlockedBot) {
    console.log('🚫 BLOCKED SEO bot:', userAgent);
    return new NextResponse('Forbidden', { status: 403 });
  }

  // Allow Googlebot, Bingbot, and all legitimate traffic (SEO SAFE)
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg).*)',
  ],
};
