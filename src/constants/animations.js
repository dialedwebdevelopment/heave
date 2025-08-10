export const ANIMATION_DELAYS = {
  LOADING_SCREEN: {
    FIRST_VISIT: 4.25,
    SUBSEQUENT: 0.25
  },
  TITLE_FIRST_VISIT: 4.25,
  BOX_TEXT_FIRST_VISIT: 4.75,
  NULL_FIRST_VISIT: 3,
  TITLE_SUBSEQUENT: 0.25,
  BOX_TEXT_SUBSEQUENT: 0.75,
  NULL_SUBSEQUENT: 0.1
};

export const ANIMATION_DURATIONS = {
  DEFAULT: 1,
  SLOW: 1.25,
  FADE: 0.5,
  STAGGER_MULTIPLIER: 0.25
};

export const ANIMATION_STAGGERS = {
  DEFAULT: 0.05,
  FAST: 0.01,
  SLOW: 0.065,
  BOXES: 0.25
};

export const ANIMATION_EASING = {
  DEFAULT: "power4",
  SMOOTH: "sine",
  EXPO: "expo.out"
};

export const SCROLL_TRIGGER_DEFAULTS = {
  START: "top 95%",
  START_BOTTOM: "top bottom",
  END: "bottom top",
  END_CENTER: "center center",
  SCRUB: true
};

export const MOUSE_PARALLAX = {
  SPEED: 0.05,
  MULTIPLIERS: {
    SLOW: -0.25,
    MEDIUM: 0.25,
    FAST: -0.5
  }
};