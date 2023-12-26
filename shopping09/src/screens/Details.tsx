import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// * React navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
type DetailsProp = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route}: DetailsProp) => {
  const {product} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Image source={{uri: product.imageUrl}} style={styles.image} />

        <View>
          <Text style={styles.name}>{product.name} </Text>

          <View style={[styles.rowContainer, styles.ratingContainer]}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{product.rating}*</Text>
            </View>
            <Text style={styles.ratingCount}>
              ({product.ratingCount.toLocaleString()})
            </Text>
          </View>
          <View style={[styles.rowContainer, styles.priceContainer]}>
            <Text style={styles.originalPrice}>
              Rs {product.originalPrice.toLocaleString()}
            </Text>
            <Text style={styles.discountPrice}>
              Rs {product.discountPrice.toLocaleString()}
            </Text>
            <Text style={styles.offerPercentage}>
              Rs {product.offerPercentage.toLocaleString()}
            </Text>
          </View>
          {product.tags.map((tag, index) => (
            <View key={index}>
              <Text style={styles.tagBadge}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor: '#555555',
  },
  image: {
    width: 90,
    height: 150,
    resizeMode: 'contain',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  ratingContainer: {
    marginBottom: 8,
  },
  priceContainer: {
    marginBottom: 8,
  },

  name: {
    marginBottom: 4,
    fontSize: 15,
    fontWeight: '500',
  },
  rating: {
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: '#008c00',
    marginRight: 4,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  ratingCount: {
    color: '#878787',
  },
  originalPrice: {
    fontSize: 18,
    marginRight: 4,
    fontWeight: '600',
  },
  discountPrice: {
    fontSize: 18,
    marginRight: 4,
    fontWeight: '600',
    color: '#000000',
  },
  offerPercentage: {
    fontSize: 17,
    fontWeight: '600',
    color: '#4bb550',
  },
  tagBadge: {},
});

export default Details;
