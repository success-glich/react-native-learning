import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

function Dice({imageUrl}: DiceProps): JSX.Element {
  return (
    <View>
      <Image source={imageUrl} style={[styles.diceImage]} />
    </View>
  );
}
export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const [secondDiceImage, setSecondDiceImage] =
    useState<ImageSourcePropType>(DiceOne);
  const changeDiceImages = (
    setterFunction: React.Dispatch<React.SetStateAction<ImageSourcePropType>>,
  ) => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setterFunction(DiceOne);
        break;
      case 2:
        setterFunction(DiceTwo);
        break;
      case 3:
        setterFunction(DiceThree);
        break;
      case 4:
        setterFunction(DiceFour);
        break;
      case 5:
        setterFunction(DiceFive);
        break;
      case 6:
        setterFunction(DiceSix);
        break;
      default:
        setterFunction(DiceOne);
        break;
    }
  };
  const rollDiceOnTap = () => {
    changeDiceImages(setDiceImage);
    changeDiceImages(setSecondDiceImage);

    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger('clockTick', options);
  };
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnTxt}>Roll the dice</Text>
      </Pressable>
      <Dice imageUrl={secondDiceImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff2f2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnTxt: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
