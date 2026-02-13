import { NextResponse } from 'next/server';

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  
  // NUCLEAR OPTION: Block Facebook bot completely (stops redirect loop)
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
    console.log('🚫 BLOCKED Facebook bot completely:', userAgent);
    // Return static response to stop redirect loop
    return new NextResponse('Bot access denied', { 
      status: 403,
      headers: {
        'Cache-Control': 'public, max-age=86400',
      }
    });
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
