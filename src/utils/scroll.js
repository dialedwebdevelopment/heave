export const scrollToSection = (sectionId, behavior = 'smooth') => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior });
  }
};

export const scrollToTop = (behavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    behavior
  });
};