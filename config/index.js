export const docs_menu_options = [
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
    }
  ]


export const BACKEND_ROOT_URL = process.env.NODE_ENV === "development" ? 'http://127.0.0.1:8000/' : 'http://159.65.152.43/'
export const FRONTEND_ROOT_URL = process.env.NODE_ENV === "development" ? 'http://127.0.0.1:3000/' : 'https://docs.spadebeta.in/'
