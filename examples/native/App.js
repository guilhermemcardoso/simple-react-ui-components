/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text
} from 'react-native';

import {Button} from 'simple-react-ui';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <Button><Text>Button</Text></Button>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
