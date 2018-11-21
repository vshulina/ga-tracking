// CURRENT WEEK FLOW

// customer views current week menu 
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Menu Cycle',
  gaEventAction: 'Current Week View', 
  gaEventLabel: [HF week], // [HF week] is the week of the menu the customer is currently on
  gaEventNonInteraction: true
});

// customer clicks on the recipe card
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Menu Cycle',
  gaEventAction: 'Recipe Card Click', 
  gaEventLabel: [HF week]|[recipe name]|[recipe id], // [HF week] is the week of the menu the customer is currently on; recipe name is the name of the recipe as it appears on the card; example value 'gaEventValue': '2018-W48|Chicken Sausage Orzotto|5bdc56dcae08b5732b045f22' 
  gaEventNonInteraction: false
});

// customer clicks on the 'Cook It' CTA
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Menu Cycle',
  gaEventAction: 'Cook It Click', 
  gaEventLabel: [HF week]|[recipe name]|[recipe id],
  gaEventNonInteraction: false
});

// customer clicks on the 'Nutrition' button
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Menu Cycle',
  gaEventAction: 'Nutrition Click', 
  gaEventLabel: [HF week]|[recipe name]|[recipe id],
  gaEventNonInteraction: false
});

// customer clicks on 'Cook It' or the X button on the recipe preview (after clicking the recipe card and triggering the preview)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Menu Cycle',
  gaEventAction: 'Recipe Preview Click - ' & [button clicked],  // where [button clicked] is either 'Cook It' or 'Dismiss'
  gaEventLabel: [HF week]|[recipe name]|[recipe id],
  gaEventNonInteraction: false
});

// customer views recipe detail page after clicking on 'Cook It'
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Menu Cycle',
  gaEventAction: 'Recipe Details - Cook It', 
  gaEventLabel: [HF week]|[recipe name]|[recipe id], // [HF week] is the week of the menu the customer is currently on
  gaEventNonInteraction: true
});

// customer clicks on 'Download' or the X button on the nutrition facts display (after clicking the 'Nutrition' button on the recipe card)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Menu Cycle',
  gaEventAction: 'Nutrition Facts - ' & [button clicked],  // where [button clicked] is either 'Download' or 'Dismiss'
  gaEventLabel: [HF week]|[recipe name]|[recipe id],
  gaEventNonInteraction: false
});

// customer clicks on 'See Undelivered Meals' after scrolling down to the bottom
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Menu Cycle',
  gaEventAction: 'See Undelivered Meals', 
  gaEventLabel: [HF week],
  gaEventNonInteraction: false
});

// PAST WEEK FLOW
// customer views a past week's menu 
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Menu Cycle',
  gaEventAction: 'Past Week View', 
  gaEventLabel: [HF week], // [HF week] is the week of the menu the customer is currently on
  gaEventNonInteraction: true
});

// customer clicks on the recipe card
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Menu Cycle',
  gaEventAction: 'Recipe Card Click', 
  gaEventLabel: [HF week]|[recipe name]|[recipe id], // [HF week] is the week of the menu the customer is currently on; recipe name is the name of the recipe as it appears on the card; example value 'gaEventValue': '2018-W48|Chicken Sausage Orzotto|5bdc56dcae08b5732b045f22' 
  gaEventNonInteraction: false
});

// customer clicks on the rating stars (either on my menu view, or on show recipe preview)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Menu Cycle',
  gaEventAction: 'Rating - ' & [page where click occurred] & ' - ' & [stars rated],  // [page where click occurred] refers to either 'Menu View' or 'Recipe Preview'; [stars rated] refers to the star rating the customer submitted, should be a value 1-4
  gaEventLabel: [HF week]|[recipe name]|[recipe id],  
  gaEventNonInteraction: false
});

// customer clicks 'Send Comment'
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Menu Cycle',
  gaEventAction: 'Comment - ' & [page where click occurred],  
  gaEventLabel: [HF week]|[recipe name]|[recipe id], 
  gaEventNonInteraction: false
});

// customer clicks on stars to undo or change a rating
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Menu Cycle',
  gaEventAction: 'Change Rating - ' & [old rating] & ' to ' & [new rating], // [old rating] and [new rating] should reflect the star amount the customer rated (values 1-4); if the customer unsubmitted a rating (by clicking on the same amount of stars), the value should be 0 
  gaEventLabel: [HF week]|[recipe name]|[recipe id], 
  gaEventNonInteraction: false
});

