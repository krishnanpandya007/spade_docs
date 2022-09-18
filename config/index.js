export const docs_menu_options = [
  {
    seperator: true,
    title: 'Basic Docs'
  },
    {
        name: 'welcome', // Must have _docs/welcome.mdx$
        title: 'Welcome',
    },
    {
      name: 'about', // Must have _docs/welcome.mdx$
      title: 'About',
    },
    {
      name: 'terms-and-conditions', // Must have _docs/welcome.mdx$
      title: 'Terms & Conditions',
    },
    {
      name: 'privacy-and-policy', // Must have _docs/welcome.mdx$
      title: 'Privacy & Policy',
    },
    {
      name: 'cookies-policy', // Must have _docs/welcome.mdx$
      title: 'Cookies policy',
    },
    {
      seperator: true,
      title: 'Features'
    },{
      name: 'feature-delink-post', // Must have _docs/welcome.mdx$
      title: 'De-linking Post',
    },
    {
      name: 'feature-daily-share', // Must have _docs/welcome.mdx$
      title: 'Daily Share',
    }
    ,{
      name: 'feature-clone-recommendation', // Must have _docs/welcome.mdx$
      title: 'Clone Recommendation (BETA)',
    },
    {
      seperator: true,
      title: 'Patch Notes'
    },
    {
      name: 'patch-notes-0-0',
      title: 'Version 0.0'
    }
  ]


export const BACKEND_ROOT_URL = process.env.NODE_ENV === "development" ? 'http://127.0.0.1:8000/' : 'http://134.209.148.176/'
export const FRONTEND_ROOT_URL = process.env.NODE_ENV === "development" ? 'http://127.0.0.1:3000/' : 'https://docs.spadebeta.in/'
