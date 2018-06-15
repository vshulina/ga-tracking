// for US - multiple variants - D2L
// user clicks on promo
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'In-Menu Promo - D2L',
  gaEventAction: promo type,	// promo type refers to GIF, Promo card Logo, or Promo Card Label
  gaEventLabel: 'Click',
  gaEventNonInteraction: false,
  subscriptionID:[subscription id],
  shopCountryCode:[country code],
  customerId: [customer id],
  screenName:[screen name] // name of the current screen in the app
});

// user clicks X to close promo
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'In-Menu Promo - D2L',
  gaEventAction: promo type, // promo type refers to GIF, Promo card Logo, or Promo Card Label
  gaEventLabel: 'Dismiss',
  gaEventNonInteraction: false,
  subscriptionID:[subscription id],
  shopCountryCode:[country code],
  customerId: [customer id],
  screenName:[screen name] // name of the current screen in the app
});