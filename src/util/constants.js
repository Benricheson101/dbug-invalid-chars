export const invalidRegex = /[^\-a-zA-Z0-9><_@).,+~"`'!:/#\[\]*;^(){} |\h]/g;

export const smartPunctuation = {
  '\u201c': '"', // iOS left smart quote
  '\u201d': '"', // iOS right smart quote
  '\u2018': '\'', // iOS left smart single quote
  '\u2019': '\'', // iOS right smart single quote
};
