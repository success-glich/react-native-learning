import {View, Text} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AppwriteContext} from '../appwrite/AppwriteContext';
import Loading from '../components/Loading';

// * Routes
import {AuthStack} from './AuthStack';
import {AppStack} from './AppStack';

export const Router = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {appwrite, isLoggedIn, setLoggedIn} = useContext(AppwriteContext);

  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then(response => {
        setIsLoading(false);
        if (response) {
          setLoggedIn(true);
        }
      })
      .catch(err => {
        setIsLoading(false);
        setLoggedIn(false);
        console.log(err);
      });
  }, [appwrite, setLoggedIn]);

  console.log('isLoggedIn', isLoggedIn);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
