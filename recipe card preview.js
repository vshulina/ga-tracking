// customer clicks on recipe card for more info
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Recipe Preview',
  gaEventAction: 'Recipe Click - ' && [menu mode], // refers to 'View Mode' or 'Edit Mode'  
  gaEventLabel: HF Week|recipe id, 
  gaEventNonInteraction: false
});

// Recipe Preview is displayed
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Recipe Preview',
  gaEventAction: 'Recipe Detail Displayed', 
  gaEventLabel: HF Week|recipe id, 
  gaEventNonInteraction: true
});

// customer clicks on recipe detail popup (either to select the meal, or to view the full recipe)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Recipe Preview',
  gaEventAction: 'RDP Click - ' && [button clicked] && [menu mode], // [button clicked] refers to 'Select This Meal', 'Unselect This Meal' or 'See Full Recipe';  [menu mode] refers to 'View Mode' or 'Edit Mode'
  gaEventLabel: HF Week|recipe id, 
  gaEventNonInteraction: false
});