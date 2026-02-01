import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['pt', 'en'],

    // Used when no locale matches
    defaultLocale: 'pt'
});

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next`, `/_vercel`, or `/studio`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: ['/((?!api|_next|_vercel|studio|.*\\..*).*)', '/(pt|en)/:path*']
};
