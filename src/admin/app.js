export default {
    config: {
      // Configuración del logo
      auth: {
        logo: '/uploads/logo_baq_verde.png',
      },
      // Logo en el menú principal
      menu: {
        logo: '/uploads/logo_baq_verde.png',
      },
      // Favicon del navegador
      head: {
        favicon: '/uploads/logo_baq_verde.png',
      },
      // Configuración de locales existente
      locales: [
        'es',
      ],
      // Traducciones personalizadas si las necesitas
      translations: {
        es: {
          "app.components.LeftMenu.navbrand.title": "Barranquilla Verde",
        },
      },
    },
    bootstrap() {},
  };