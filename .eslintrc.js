module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'plugins': [
    'svelte3',
  ],
  'overrides': [
    {
      'files': ['*.svelte'],
      'processor': 'svelte3/svelte3',
    },
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'ignorePatterns': [
    'public/*',
    'scripts/*',
    'rollup.config.js',
  ],
  'rules': {
  },
};
