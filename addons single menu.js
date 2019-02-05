// customer clicks on banner CTA
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Screen Addons', 
  gaEventAction: 'Banner Click',
  gaEventLabel: hfWeek,   // hf week of week customer is looking at
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'nl',
  customerID: customerID,
  screenName:'Subscription'
});

// customer clicks on banner X button to dismiss it
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Screen Addons', 
  gaEventAction: 'Banner Dismiss',
  gaEventLabel: hfWeek,   // hf week of week customer is looking at
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'nl',
  customerID: customerID,
  screenName:'Subscription'
});

// customer clicks on a recipe plus button to select it
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Screen Addons', 
  gaEventAction: 'Addon Added',
  gaEventLabel: addon name|addon sku,   // ex: 'Tiramisu|NL-ADB-A0B4-2-0'
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'nl',
  customerID: customerID,
  screenName:'Subscription'
});

// customer clicks on a recipe plus button to select it
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Screen Addons', 
  gaEventAction: 'Addon Added',
  gaEventLabel: addon name|addon sku,   // ex: 'Tiramisu|NL-ADB-A0B4-2-0'
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'nl',
  customerID: customerID,
  screenName:'Subscription'
});

// customer clicks on a recipe minus button to de-select it
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Screen Addons', 
  gaEventAction: 'Addon Removed',
  gaEventLabel: addon name|addon sku,   // ex: 'Tiramisu|NL-ADB-A0B4-2-0'
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'nl',
  customerID: customerID,
  screenName:'Subscription'
});

// customer clicks 'Looks Good' on addon confirmation screen
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Screen Addons', 
  gaEventAction: 'Addons Confirmed',
  gaEventLabel: addon name|addon sku,   // ex: 'Tiramisu|NL-ADB-A0B4-2-0'
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'nl',
  customerID: customerID,
  screenName:'Subscription'
});

// customer clicks 'Cancel' on addon confirmation screen
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Single Screen Addons', 
  gaEventAction: 'Addons Cancelled',
  gaEventLabel: addon name|addon sku,   // ex: 'Tiramisu|NL-ADB-A0B4-2-0'
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'nl',
  customerID: customerID,
  screenName:'Subscription'
});

