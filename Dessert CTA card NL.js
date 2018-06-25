//Click on ADDON CTA
//When a customer clicks on the "add it" or "know more" CTA button of a dessert that shows up in a view mode of My Menu

​​​dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'addon_CTA_clik', 
  gaEventAction: button clicked,   // 'addit', 'knowmore'
  gaEventLabel: hfWeek|recipeID,
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'nl',
  customerID: customerID,
  screenName:'MyMenu'
});


// ADDON CTA confirmation popup
// When a customer  clicks on "Not Now" or "Continue" ona  price confirmation popup

​​​dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'addon_CTA_confirmation'
  gaEventAction: button clicked, // 'notnow' or 'continue'
  gaEventLabel: hfWeek|recipeID,
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'nl',
  customerID: customerID,
  screenName:'MyMenu'
});

// ADDON CTA  recipe view
// When a customer clicks on "add for x price" on a recipe detailed page - intermediate step

​​​dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'addon_CTA_intermediate_add'
  gaEventAction: number of servings, // 2 or 4
  gaEventLabel: hfWeek|recipeID, 
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'nl',
  customerID: customerID,
  screenName:'MyMenu'
});