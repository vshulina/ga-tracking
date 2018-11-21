// WEB
// customer lands on My Deliveries and is exposed to seamless one-off experiment
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Seamless One-Off',
  gaEventAction: 'Impression',
  gaEventLabel: '',  
  gaEventNonInteraction: true
});

// customer is in edit mode and 'add extra meal' UI is displayed ('Include this extra meal for $10.00')
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Seamless One-Off',
  gaEventAction: 'Add Extra Meal Displayed',
  gaEventLabel: '',  
  gaEventNonInteraction: true
});

// customer selects extra meal (clicks on meal with 'Include this extra meal for $10.00' offer)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Seamless One-Off',
  gaEventAction: 'Add Extra Meal Click',
  gaEventLabel: [recipe name|recipe id], // recipe name and recipe id of the extra recipe chosen  
  gaEventNonInteraction: false
});

// customer de-selects extra meal (clicks on meal with 'Include this extra meal for $10.00' offer after having selected it)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Seamless One-Off',
  gaEventAction: 'Add Extra Meal De-Select',
  gaEventLabel: [recipe name|recipe id], // recipe name and recipe id of the extra recipe chosen  
  gaEventNonInteraction: false
});

// customer de-selects extra meal (clicks on meal with 'Include this extra meal for $10.00' offer after having selected it)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Seamless One-Off',
  gaEventAction: 'Add Extra Meal De-Select',
  gaEventLabel: [recipe name|recipe id], // recipe name and recipe id of the extra recipe chosen  
  gaEventNonInteraction: false
});

// customer clicks on confirmation popup
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Seamless One-Off',
  gaEventAction: 'Confirmation Popup',
  gaEventLabel: [button clicked],  // either 'Not Now' or 'Include Extra Meal'
  gaEventNonInteraction: false
});

// customer clicks 'Save' to save their meal choices
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Seamless One-Off',
  gaEventAction: 'Meal Choice Save',
  gaEventLabel: [recipe id|recipe id|recipe id|recipe id], // recipe id's for all recipes selected separated by '|'
  gaEventNonInteraction: false
});

// APP
// customer lands on My Deliveries and is exposed to seamless one-off experiment
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Seamless One-Off',
  gaEventAction: 'Impression',
  gaEventLabel: '',  
  gaEventNonInteraction: true,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName: 'MealSwap'
});

// customer is in edit mode and 'add extra meal' UI is displayed ('Include this extra meal for $10.00')
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Seamless One-Off',
  gaEventAction: 'Add Extra Meal Displayed',
  gaEventLabel: '',  
  gaEventNonInteraction: true,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName: 'MealSwap'
});

// customer selects extra meal (clicks on meal with 'Include this extra meal for $10.00' offer)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Seamless One-Off',
  gaEventAction: 'Add Extra Meal Click',
  gaEventLabel: [recipe name|recipe id], // recipe name and recipe id of the extra recipe chosen  
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName: 'MealSwap'
});

// customer de-selects extra meal (clicks on meal with 'Include this extra meal for $10.00' offer after having selected it)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Seamless One-Off',
  gaEventAction: 'Add Extra Meal De-Select',
  gaEventLabel: [recipe name|recipe id], // recipe name and recipe id of the extra recipe chosen  
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName: 'MealSwap'
});

// customer de-selects extra meal (clicks on meal with 'Include this extra meal for $10.00' offer after having selected it)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Seamless One-Off',
  gaEventAction: 'Add Extra Meal De-Select',
  gaEventLabel: [recipe name|recipe id], // recipe name and recipe id of the extra recipe chosen  
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName: 'MealSwap'
});

// customer clicks on confirmation popup
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Seamless One-Off',
  gaEventAction: 'Confirmation Popup',
  gaEventLabel: [button clicked],  // either 'Not Now' or 'Include Extra Meal'
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName: 'MealSwap'
});

// customer clicks 'Save' to save their meal choices
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Seamless One-Off',
  gaEventAction: 'Meal Choice Save',
  gaEventLabel: [recipe id|recipe id|recipe id|recipe id], // recipe id's for all recipes selected separated by '|'
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName: 'MealSwap'
});