const langSwitcher = (lang: string, en: string, bn?: string) => {
  if (lang?.toLowerCase() === "en") {
    return en;
  } else if (lang?.toLowerCase() === "bn") {
    return bn;
  } else {
    return en;
  }
};

export default langSwitcher;
