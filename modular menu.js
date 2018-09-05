
// customer clicks on 'Select Meals' on my deliveries
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Modular Menu',
  gaEventAction: 'Start Meal Choice',
  gaEventLabel: [HF Week],  // hellofresh week of menu where customer is selecting meals. ex: '2018-W40'
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Subscription'
});

// customer selects a recipe
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Modular Menu',
  gaEventAction: 'Select Recipe',
  gaEventLabel: [HF Week|recipe name|recipe ID],  // hellofresh week of menu where customer is selecting meals; recipe name refers to recipe customer selected; recipe ID refers to the ID of the recipe selected. ex: '2018-W40|Chicken Orzo Dinner|5b5ef344c4cf974002721fa2'
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Subscription'
});

// customer selects a swap option
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Modular Menu',
  gaEventAction: 'Modular Option - ' + [modular option] + ' - ' + [swap type],  // modular option refers to type of swap; swap type refers to specific swap customer made. ex1: 'Modular Option - Swap Protein - Ribeye Steak', ex2: 'Modular Option - Upgrade Protein - Organic Chicken Breast', ex3: 'Modular Option - Add Protein - Pork Chops', ex4: 'Modular Option - Extra Portion 2' <- 2 refers to 2 more servings. should be '4' when customer selects 4 more servings
  gaEventLabel: [HF Week|recipe name|recipe ID],  // hellofresh week of menu where customer is selecting meals; recipe name refers to recipe customer selected; recipe ID refers to the ID of the recipe selected. ex: '2018-W40|Chicken Orzo Dinner|5b5ef344c4cf974002721fa2'
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Subscription'
});

// customer confirms swap selection (clicks 'Got It' on confirmation popup)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Modular Menu',
  gaEventAction: 'Modular Option Confirmation' + [modular option] + ' - ' + [swap type],  // modular option refers to type of swap; swap type refers to specific swap customer made. ex1: 'Modular Option Confirmation - Swap Protein - Ribeye Steak', ex2: 'Modular Option Confirmation - Upgrade Protein - Organic Chicken Breast', ex3: 'Modular Option Confirmation - Add Protein - Pork Chops', ex4: 'Modular Option Confirmation - Extra Portion'
  gaEventLabel: [HF Week|recipe name|recipe ID],  // hellofresh week of menu where customer is selecting meals; recipe name refers to recipe customer selected; recipe ID refers to the ID of the recipe selected. ex: '2018-W40|Chicken Orzo Dinner|5b5ef344c4cf974002721fa2'
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Subscription'
});


// customer is displayed sorry screen
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Modular Menu',
  gaEventAction: 'Sorry Screen'
  gaEventLabel: [HF Week], 
  gaEventNonInteraction: true,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Subscription'
});

// customer clicks on 'Go Back to Meal Selection' button on sorry screen
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Modular Menu',
  gaEventAction: 'Sorry Screen - Back to Meal Choice'
  gaEventLabel: [HF Week], 
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Subscription'
});

// customer finishes selecting meals by clicking 'Save' on my deliveries screen
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Modular Menu',
  gaEventAction: 'Meal Choice Saved'
  gaEventLabel: [HF Week|recipe1|recipe2|recipe3|recipe4], // recipe1-4 refer to recipe ID's of the recipes the customer chose in their meal choice
  gaEventNonInteraction: false,
  subscriptionID: subscriptionID,
  hfWeek: hfweek,
  shopCountryCode:'us',
  customerID: customerID,
  screenName:'Subscription'
});