// WEB
// menu impression - customer is viewing the menu for a given week
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Impression',
  gaEventLabel: HF Week|menu type,  // menu type refers to whether the menu is for past week which have already been delivered 'Delivered', scheduled and past cutoff 'Scheduled', or 'Future' for weeks where meals can still be changed
  gaEventNonInteraction: true
});

// customer selects a meal
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Meal Selected',
  gaEventLabel: HF Week|recipe type|recipe name|recipe id,  // recipe type refers to premium, dinner to lunch, etc. example value '2018-W33|Premium|Maple-Glazed Pork Chops|5a6f470dae08b57e4225d062'
  gaEventNonInteraction: false
});

// customer de-selects a meal
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Meal De-Selected',
  gaEventLabel: HF Week|recipe type|recipe name|recipe id,  // recipe type refers to premium, dinner to lunch, etc. example value '2018-W33|Premium|Maple-Glazed Pork Chops|5a6f470dae08b57e4225d062'
  gaEventNonInteraction: false
});

// customer saves their menu (hits 'Save' CTA)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Menu Saved',
  gaEventLabel: HF Week|recipe id|recipe id|recipe id,  // recipe id's of all 3 meals selected
  gaEventNonInteraction: false
});

// customer selects the bar on the bottom ('Meals you'll get this week')
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Current Selections Click',
  gaEventLabel: HF Week|recipe id|recipe id|recipe id,  // recipe id's of meals selected so far
  gaEventNonInteraction: false
});

// customer clicks 'Skip' button
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Skip',
  gaEventLabel: HF Week,  // HF week that was skipped
  gaEventNonInteraction: false
});

// customer clicks 'Unskip' button
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Unskip',
  gaEventLabel: HF Week,  // HF week that was skipped
  gaEventNonInteraction: false
});

// customer clicks on 'i' button to quick view a recipe
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Quick View',
  gaEventLabel: HF Week|recipe name|recipe id,  // recipe name and ID for the recipe that was quick-viewed
  gaEventNonInteraction: false
});

// APP
// menu impression - customer is viewing the menu for a given week
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Impression',
  gaEventLabel: HF Week|menu type,  // menu type refers to whether the menu is for past week which have already been delivered 'Delivered', scheduled and past cutoff 'Scheduled', or 'Future' for weeks where meals can still be changed
  gaEventNonInteraction: true,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Single Menu'
});

// customer selects a meal
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Meal Selected',
  gaEventLabel: HF Week|recipe type|recipe name|recipe id,  // recipe type refers to premium, dinner to lunch, etc. example value '2018-W33|Premium|Maple-Glazed Pork Chops|5a6f470dae08b57e4225d062'
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Single Menu'
});

// customer de-selects a meal
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Meal De-Selected',
  gaEventLabel: HF Week|recipe type|recipe name|recipe id,  // recipe type refers to premium, dinner to lunch, etc. example value '2018-W33|Premium|Maple-Glazed Pork Chops|5a6f470dae08b57e4225d062'
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Single Menu'
});

// customer saves their menu (hits 'Save' CTA)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Menu Saved',
  gaEventLabel: HF Week|recipe id|recipe id|recipe id,  // recipe id's of all 3 meals selected
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Single Menu'
});

// customer selects the bar on the bottom (Select X more green bar at the bottom)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Select X More',
  gaEventLabel: HF Week|recipe id|recipe id|recipe id,  // recipe id's of meals selected so far
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Single Menu'
});

// customer clicks 'Skip' button
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Skip',
  gaEventLabel: HF Week,  // HF week that was skipped
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Single Menu'
});

// customer clicks 'Unskip' button
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Unskip',
  gaEventLabel: HF Week,  // HF week that was skipped
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Single Menu'
});

// customer clicks on 'i' button to quick view a recipe
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Menu Screen',
  gaEventAction: 'Quick View',
  gaEventLabel: HF Week|recipe name|recipe id,  // recipe name and ID for the recipe that was quick-viewed
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Single Menu'
});

// allocation event
// web
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Optimizely',
  gaEventAction: 'single-menu-screen',
  gaEventLabel: [variant name],  // variant name as appears in Optimizely. ex: 'Variant 1'
  gaEventNonInteraction: true
});

// app
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Optimizely',
  gaEventAction: 'single-menu-screen',
  gaEventLabel: [variant name],  // variant name as appears in Optimizely. ex: 'Variant 1'
  gaEventNonInteraction: true,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Single Menu'
});