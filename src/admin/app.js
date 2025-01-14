import logoUrl from './extensions/logo_baq_verde.png';

export default {
  config: {
    locales: [
      'es',
    ],
    
    // Theme customization
    theme: {
      colors: {
        primary100: '#f6ecfc',
        primary200: '#e0c1f4',
        primary500: '#ac73e6',
        primary600: '#9736e8',
        primary700: '#8312d1',
        danger700: '#b72b1a'
      },
    },
    
    // Custom logo
    auth: {
      logo: logoUrl
    },
    
    // Menu logo
    menu: {
      logo: logoUrl
    },
    
    // Header logo
    head: {
      favicon: logoUrl,
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
