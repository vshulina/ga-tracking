// promo dialogue displayed
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Promo Dialog - RDP',
  gaEventAction: popup version,  // refers to different popup versions
  gaEventLabel: 'Display',
  gaEventNonInteraction: true
});

// promo dialogue dismissed
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Promo Dialog - RDP',
  gaEventAction: popup version,  // refers to different popup versions 
  gaEventLabel: 'Dismiss',
  gaEventNonInteraction: false
});

// promo dialogue clicked
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Promo Dialog - RDP',
  gaEventAction: popup version,  // refers to different popup versions
  gaEventLabel: 'Click',
  gaEventNonInteraction: false
});

// promo content displayed
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Promo Content - RDP',
  gaEventAction: content type,  // small, medium, or large
  gaEventLabel: 'Display',
  gaEventNonInteraction: true
});

// promo content clicked
dataLayer.push({
  event: 'gaEventTrigger',
  gaEventCategory: 'Promo Content - RDP',
  gaEventAction: content type,  // small, medium, or large
  gaEventLabel: 'Click',
  gaEventNonInteraction: false
});

