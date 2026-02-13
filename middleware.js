import { NextResponse } from 'next/server';

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  
  // Block only aggressive SEO tool bots (NOT search engines)
  // Googlebot, Bingbot, etc. are ALLOWED for SEO
  const blockedBots = [
    'ahrefsbot',        // Ahrefs SEO tool
    'semrushbot',       // SEMrush SEO tool
    'mj12bot',          // Majestic SEO tool
    'dotbot',           // Moz/OpenSiteExplorer
    'blexbot',          // BLEXBot crawler
    'serpstatbot',      // Serpstat SEO tool
    'petalbot',         // Petalsearch crawler
    'megaindex',        // MegaIndex crawler
    'barkrowler',       // Spam bot
    'spbot',            // SEO Profiler bot
  ];
  
  const isBlockedBot = blockedBots.some(bot => 
    userAgent.toLowerCase().includes(bot)
  );

  if (isBlockedBot) {
    console.log('🚫 BOT BLOCKED:', userAgent);
    return new NextResponse('Forbidden', { status: 403 });
  }

  // Allow all search engines and real users
  return NextResponse.next();
}

// Apply middleware to all routes except static files
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg).*)',
  ],
};
