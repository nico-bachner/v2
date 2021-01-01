module.exports = {
    i18n: {
        // supported locales
        locales: ['en', 'de', 'fr', 'dk', 'lu'],
        // default locale to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'en',
        // This is a list of locale domains and the default locale they
        // should handle (these are only required when setting up domain routing)
        domains: [
            {
                domain: 'nicobachner.com',
                defaultLocale: 'en',
            },
            {
                domain: 'nico.bachner.lu',
                defaultLocale: 'lu',
            },
        ],
    },
  }