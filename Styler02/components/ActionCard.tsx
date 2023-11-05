import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebSite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in javascript 21 -ES12
          </Text>
        </View>

        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2017/03/30/17/41/javascript-2189147_1280.png',
          }}
          style={styles.cardImage}
        />

        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={{textAlign: 'justify'}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            hic nisi maxime dolore provident, eligendi iste? Fugit pariatur quia
            laborum? Officia fuga numquam in. Itaque adipisci aliquam unde
            cumque quasi?
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebSite('https://www.javascripttutorial.net/')}
            style={styles.footerText}>
            <Text style={styles.btnText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebSite(
                'https://www.facebook.com/profile.php?id=100008492380188et/',
              )
            }
            style={styles.footerText}>
            <Text style={styles.btnText}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 16,
    color: '#192A56',
    fontFamily: 'cursive',
  },

  card: {
    width: 350,
    height: 360,
    // borderRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#FFA07A',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  headingContainer: {
    height: 50,
    justifyContent: 'center',
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },

  bodyContainer: {
    marginTop: 4,
    fontSize: 10,
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  footerText: {
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: '#192A56',
  },
  btnText: {
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 8,
    fontWeight: 'bold',
  },
});
