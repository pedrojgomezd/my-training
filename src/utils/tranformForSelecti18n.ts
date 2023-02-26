export const tranformOpticonWithi18b = (options, locale: string = "es") => {
  return options.map((option) => ({
    value: option.value,
    label: `${option.label.emoji} ${option.label[locale]}`,
  }));
};
