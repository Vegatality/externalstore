module.exports = {
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 80,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  bracketSpacing: true,

  // By default this plugin only sorts classes in the class attribute as well as any framework-specific equivalents like class, className, :class, [ngClass], etc.
  // You can sort additional attributes using the tailwindAttributes option, which takes an array of attribute names:
  tailwindAttributes: ['Styles'],
  // prettier.config.js in clsx cva
  // prettier.config.js  in template literals
  tailwindFunctions: ['clsx', 'tw'],

  // prettier-plugin-tailwindcss must be set on the last in plugins Array.
  // One limitation with this approach is that prettier-plugin-tailwindcss must be loaded last, meaning Prettier auto-loading needs to be disabled. You can do this by setting the pluginSearchDirs option to false and then listing each of your Prettier plugins in the plugins array:
  plugins: ['prettier-plugin-tailwindcss'],
  // pluginSearchDirs: false, // Prettier v2.x only
};