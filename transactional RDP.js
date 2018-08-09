// slider
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Transactional DRP',
  gaEventAction: 'Slider Click - ' && [slider page],  // slider page refers to the page of the slide. The first time a customer clicks on the slider, the page should be 2; next time they click on it, it should be 3, and so on. Once a customer reaches the final page, it should be 'end'
  gaEventLabel: HF Week|recipe id, 
  gaEventNonInteraction: false
});

// customer clicks on recipe card for more info
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Transactional DRP',
  gaEventAction: 'Recipe Click - ' && [menu mode], // refers to 'View Mode' or 'Edit Mode'  
  gaEventLabel: HF Week|recipe id, 
  gaEventNonInteraction: false
});

// transactional RDP is displayed
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Transactional DRP',
  gaEventAction: 'Recipe Detail Displayed', 
  gaEventLabel: HF Week|recipe id, 
  gaEventNonInteraction: true
});

// for V2 (no CTA) this tag will only have 'See Full Recipe' as event action
// customer clicks on recipe detail popup (either to select the meal, or to view the full recipe)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Transactional DRP',
  gaEventAction: 'RDP Click - ' && [button clicked], // button clicked refers to 'Select This Meal' or 'See Full Recipe'
  gaEventLabel: HF Week|recipe id, 
  gaEventNonInteraction: false
});