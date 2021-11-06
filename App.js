import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Calculator from './src/screens/calculator/index';
import Todo from './src/screens/todo';

const App = () => {
  return(
    <View style={{flex: 1}}>
      {/* <Calculator /> */}
      <Todo />
    </View>
  )
} 

export default App;