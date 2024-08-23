import { Text, View , StyleSheet } from "react-native";
import * as Font from 'expo-font';
import { fetchFonts } from '@/hooks/useFonts';
import React, { useEffect, useState } from 'react';
import  { ThemedText } from '@/components/ThemedText';


export default function Index() {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={{ 
      backgroundColor: 'black',
    }}>
      <Text 
      style={styles.title}>Skyrim Character Sheet</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Balgruf-Italic',
    color: 'white',
    fontSize: 42,
    textAlign: 'center',
    marginTop: 24,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    fontFamily: 'Balgruf',
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  sideContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sideText: {
    fontFamily: 'Balgruf',
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  sideValue: {
    fontFamily: 'Balgruf',
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },


});


