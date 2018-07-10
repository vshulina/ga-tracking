// https://hellofresh.atlassian.net/wiki/spaces/VAS/pages/442958249/Recipe+Survey+-+Experiment+web

// customer clicks on rating button on a recipe card
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Recipe Survey',
  gaEventAction: 'Rating Click',
  gaEventLabel: [HF Week|recipe id|recipe name],  // information pertaining to the specific card the customer clicked on to rate. Example value: '2018-W30|5ad0b165ae08b51b5c7c5842|Steakhouse-Style New York Strip'
  gaEventNonInteraction: false,
  }); 

// rating popup is displayed
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Recipe Survey',
  gaEventAction: 'Popup Impression',
  gaEventLabel: [HF Week|recipe id|recipe name],  // information pertaining to the specific card the customer clicked on to rate. Example value: '2018-W30|5ad0b165ae08b51b5c7c5842|Steakhouse-Style New York Strip'
  gaEventNonInteraction: false,
  });

// rating is submitted (customer rated a recipe)
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Recipe Survey',
  gaEventAction: 'Rating Submitted - ' & [# stars rated|'comment left' or 'no comment'],  // # stars refers to the star rating the customer gave to the recipe; comment submitted refers to whether the customer left a comment in the text box. Example value 'Rating Submitted - 3|comment left'
  gaEventLabel: [HF Week|recipe id|recipe name],  // information pertaining to the specific card the customer clicked on to rate. Example value: '2018-W30|5ad0b165ae08b51b5c7c5842|Steakhouse-Style New York Strip'
  gaEventNonInteraction: false,
  });

