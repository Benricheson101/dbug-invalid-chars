import {invalidRegex, smartPunctuation} from './constants';

/**
 * @typedef {object} InvalidCharacters
 * @property {Array<number>} all - indexes of all invalid characters
 * @property {Object.<string>, Array<number>} chars - invalid characters and
 *   their location in the string
 */

/**
 * Locate all invalid characters in a string
 * @param {string} text - the text to check
 * @return {object}
 */
export function findInvalid(text) {
  const map = {all: [], chars: {}};

  let execd;
  while (execd = invalidRegex.exec(text)) {
    const char = execd[0];
    const index = execd.index;

    if (!map.chars[char]) {
      map.chars[char] = [];
    }

    map.chars[char].push(index);
    map.all.push(index);
  }

  return map;
}

/**
 * Copy text to the clipboard
 * @param {string} text - text to copy
 * @return {Promise<void>}
 */
export function copy(text) {
  return navigator.clipboard.writeText(text);
}

/**
 * Replace smart quotes with dumb quotes
 * @param {string} text - text containing invalid characters
 * @return {string}
 */
export function fixSmartPunctuation(text) {
  const chars = Object.keys(smartPunctuation)
      .map((c) => {
        const unicode = ('0000' + c.charCodeAt(0).toString(16)).slice(-4);

        return `\\u${unicode}`;
      })
      .join('');
  const regex = new RegExp(`[${chars}]`, 'g');

  return text.replace(regex, (c) => smartPunctuation[c]);
}

/**
 * Strip all invalid characters from a string
 * @param {string} text - text to strip characters from
 * @return {string} - string stripped of invalid characters
 */
export function stripInvalid(text) {
  const replaced = fixSmartPunctuation(text);

  return replaced.replace(invalidRegex, '');
}
