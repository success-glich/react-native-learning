import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';

interface ChangeBgColorParams {
  setterFunction: Dispatch<SetStateAction<string>>;
  delayTime?: number;
}
const App = () => {
  const [firstBgColor, setFirstBgColor] = useState('#ffffff');
  const [secondBgColor, setSecondBgColor] = useState('#fff');
  const [thirdBgColor, setThirdBgColor] = useState('#fff');
  const [fourthBgColor, setFourthBgColor] = useState('#fff');
  const [fifthBgColor, setFifthBgColor] = useState('#fff');
  const [sixthBgColor, setSixthBgColor] = useState('#fff');

  const generateRandomColor = () => {
    const colorSet = '123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += colorSet[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const changeBgColor = ({
    setterFunction,
    delayTime = 0,
  }: ChangeBgColorParams) => {
    setTimeout(() => {
      setterFunction(generateRandomColor());
    }, delayTime);
  };
  const handlePress = () => {
    changeBgColor({setterFunction: setFirstBgColor, delayTime: 800});
    changeBgColor({setterFunction: setSecondBgColor, delayTime: 1000});
    changeBgColor({setterFunction: setThirdBgColor, delayTime: 1200});
    changeBgColor({setterFunction: setFourthBgColor, delayTime: 1300});
    changeBgColor({setterFunction: setFifthBgColor, delayTime: 1400});
    changeBgColor({setterFunction: setSixthBgColor, delayTime: 1500});
  };
  return (
    <View style={styles.container}>
      <View style={[styles.box]}>
        <View style={[styles.bg, {backgroundColor: firstBgColor}]}></View>
        <View style={[styles.bg, {backgroundColor: secondBgColor}]}></View>
        <View style={[styles.bg, {backgroundColor: thirdBgColor}]}></View>
      </View>
      <TouchableOpacity onPress={handlePress} style={styles.btn}>
        <Text style={styles.btnTxt}> Press Me</Text>
      </TouchableOpacity>

      <View style={[styles.box]}>
        <View style={[styles.bg, {backgroundColor: fourthBgColor}]}></View>
        <View style={[styles.bg, {backgroundColor: fifthBgColor}]}></View>
        <View style={[styles.bg, {backgroundColor: sixthBgColor}]}></View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    flexDirection: 'row',
    gap: 10,
  },
  bg: {
    width: 100,
    height: 100,
  },
  firstBg: {
    backgroundColor: 'red',
  },
  secondBg: {
    backgroundColor: 'blue',
    borderRadius: 100 / 2,
  },
  thirdBg: {
    backgroundColor: 'purple',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  btn: {
    backgroundColor: 'crimson',
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: 200,
    borderRadius: 20,
    textAlign: 'center',
    elevation: 3,
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },
});
