import React from 'react'
import { View, SafeAreaView } from 'react-native';
import MainNav from './src/Navigations/RootNavigation';
// import MainNav from './src/Navigations/StackNavigation';
const App = () => {

  return (
    <View style={{ backgroundColor: "#F1F1F1", flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <MainNav />
      </SafeAreaView>
    </View>
  );
}

export default App;