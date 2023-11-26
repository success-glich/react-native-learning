import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicatorBase,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {initPlayer, addTracks} from '../musicPlayerServices';

function App(): JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setUpPlayer() {
    let isSetup = await initPlayer();
    if (isSetup) {
      addTracks();
    }
    setIsPlayerReady(true);
  }
  useEffect(() => {
    console.log('hello world');
  }, []);
  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicatorBase />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text> Testing seems ok</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
