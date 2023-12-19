import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TestComponent from './pages/test';
import { TextSm } from './core/text/textSmall';
import { globalTextStyles } from './globalStyles/text';

export default function App() {
  return (
    <View style={styles.container}>
      <TextSm>Open up App.js to start working on your app! Test</TextSm>
      <Text style={globalTextStyles.textStylesSmall}>Test styles</Text>
      <Text style={globalTextStyles.textStylesRegular}>Test styles</Text>
      <Text style={globalTextStyles.textStylesMedium}>Test styles</Text>
      <Text style={globalTextStyles.textStylesLarge}>Test styles</Text>
      <TestComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
