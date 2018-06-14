// for AU - Gourmet
// user clicks on promo
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'In-Menu Promo - Gourmet',
  gaEventAction: 'Click',
  gaEventLabel: '',
  gaEventNonInteraction: false,
  subscriptionID:[subscription id],
  shopCountryCode:[country code],
  customerId: [customer id],
  screenName:[screen name] // name of the current screen in the app
});

// user clicks X to close promo
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'In-Menu Promo - Gourmet',
  gaEventAction: 'Dismiss',
  gaEventLabel: '',
  gaEventNonInteraction: false,
  subscriptionID:[subscription id],
  shopCountryCode:[country code],
  customerId: [customer id],
  screenName:[screen name] // name of the current screen in the app
});