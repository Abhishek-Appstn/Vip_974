module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['module:react-native-dotenv', {
      allowlist: ['SUPABASE_URL', 'SUPABASE_ANON_KEY'], 
    }],
  ],
};
