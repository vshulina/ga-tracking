​​​// customers hits 'Add It' button
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Easy-Add Card',
  gaEventAction: 'Add It Click',
  gaEventLabel: hfWeek|recipeId,  // hellofresh week for which add-on was chosen | add-on recipe id
  gaEventNonInteraction: false,
  subscriptionID:subscriptionID,
  hfWeek: hfWeek,    // week for which meals are being chosen
  shopCountryCode: shopCountryCode,  // two character country code
  customerID: customerID,
  screenName:'MealSwap'
});

// customers hits 'Cancel' or 'Add It' on confirmation popup
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Easy-Add Card',
  gaEventAction: 'Confirmation - ' + button name,  // button name is either 'Cancel' or 'Add It'
  gaEventLabel: hfWeek|recipeId,  // hellofresh week for which add-on was chosen | add-on recipe id
  gaEventNonInteraction: false,
  subscriptionID:subscriptionID,
  hfWeek: hfWeek,    // week for which meals are being chosen
  shopCountryCode: shopCountryCode,  // two character country code
  customerID: customerID,
  screenName:'MealSwap'
});