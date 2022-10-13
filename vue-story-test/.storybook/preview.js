export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    comments: false,
    removeEmptyComments: false,
    prettier: {
      tabWidth: 4,
      useTabs: false,
      // htmlWhitespaceSensitivity: 'strict',
    },
  },
}
