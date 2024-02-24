import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

// * react native elements
import {FAB} from '@rneui/themed';
// * Snackbar
import Snackbar from 'react-native-snackbar';
//* context Api
import {AppwriteContext} from '../appwrite/AppwriteContext';

type User = {
  name: string;
  email: string;
};

const Home = () => {
  const [userData, setUserData] = useState<User>();
  const {appwrite, setLoggedIn} = useContext(AppwriteContext);

  const handleLogout = () => {
    appwrite.logout().then(() => {
      setLoggedIn(false);
      Snackbar.show({
        text: 'Logged out successfully',
        duration: Snackbar.LENGTH_SHORT,
      });
    });
  };
  useEffect(() => {
    appwrite.getCurrentUser().then(response => {
      if (response) {
        const user: User = {
          name: response.name,
          email: response.email,
        };
        setUserData(user);
      }
    });
  }, [appwrite]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        {/* <Text style={styles.message}>Welcome {userData.name}!</Text> */}
        <Image
          source={{
            uri: 'https://appwrite.io/images-ee/blog/og-private-beta.png',
            width: 400,
            height: 300,
            cache: 'default',
          }}
          resizeMode="contain"
        />
        <Text style={styles.message}>
          Build Fast. Scale Big. All in One place
        </Text>

        {userData && (
          <View style={styles.userContainer}>
            <Text style={styles.userDetails}>name: {userData.name}</Text>
            <Text style={styles.userDetails}>Email: {userData.email}</Text>
          </View>
        )}
      </View>
      <FAB
        icon={{name: 'logout', color: '#fff'}}
        color="#0B0D32"
        onPress={handleLogout}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D32',
  },
  welcomeContainer: {
    padding: 12,

    flex: 1,
    alignItems: 'center',
  },
  message: {
    fontSize: 26,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  userContainer: {
    marginTop: 24,
  },
  userDetails: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default Home;
