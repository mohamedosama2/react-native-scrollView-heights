/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Dimensions, ScrollView, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <ScrollView
        bounces={false}
        onScroll={e => {
          console.log('Content Size  ', e.nativeEvent.contentSize.height); //height of the content inside
          console.log('contentOffset', e.nativeEvent.contentOffset.y); //how much scrolling (top: y=0)
          console.log('Layout', e.nativeEvent.layoutMeasurement.height); //height of visual seeing of the scrollView
          console.log('Device Height', Dimensions.get('window').height); //device height
          // console.log('Device Height screen', Dimensions.get('screen').height);
        }}>
        <View style={{backgroundColor: 'red', height: 1000}}>
          <Text>Hel</Text>
        </View>
        <View style={{backgroundColor: 'green', height: 100}} />
      </ScrollView>
    </View>
  );
};

export default App;
