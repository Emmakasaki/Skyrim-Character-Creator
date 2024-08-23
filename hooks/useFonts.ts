import * as Font from 'expo-font';

export const fetchFonts = async () => {
  await Font.loadAsync({
    'Balgruf': require('../assets/fonts/Balgruf-JRye7.ttf'),
    'Balgruf-Italic': require('../assets/fonts/BalgrufItalic-GOyem.ttf'),
  });
}