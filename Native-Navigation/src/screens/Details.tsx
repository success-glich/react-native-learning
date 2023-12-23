import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// * navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
const Details = ({route}: DetailProps) => {
  const {productId} = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details Screen: {productId}</Text>
      <Button
        title="go To Home"
        //   onPress={() => navigation.navigate('Home')}
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go back to first Screen"
        //   onPress={() => navigation.navigate('Home')}
        // onPress={() => navigation.pop(1)
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
