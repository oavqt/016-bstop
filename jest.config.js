module.exports = async () => {
  return {
    moduleNameMapper: {
      '\\.(s?[as]ss?)$/i': 'identity-obj-proxy'
    },
    modulePathIgnorePatterns: [
      '<rootDir>/node__modules',
      '<rootDir>/src/__tests__/__mocks__',
      '<rootDir>/src/__tests__/__transformers__'
    ],
    transform: {
      '\\.(png|svg|jpg|jpeg|gir)$':
        '<rootDir>/src/__tests__/__transformers__/assetTransformer.js',
      '\\.(vue|[jt]sx?)$': 'babel-jest'
    },
    verbose: true
  };
};
