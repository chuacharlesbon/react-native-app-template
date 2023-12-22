import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TestComponent from './pages/test';
import { TextSm } from './core/text/textSmall';
import { globalTextStyles } from './globalStyles/text';
import * as Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

export default function App() {

  Geolocation.getCurrentPosition(
    (position) => {
      console.log(position.coords.latitude); // Latitude
      console.log(position.coords.longitude); // Longitude
      axios.post(
        'https://cmt-server-2.vercel.app/api/s1/log-geolocation',
        {
          body: {
            deviceId: 'test-react-native',
            currentLocation: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                location_name: "test location"
            }
          }
        }
      ).then((response) => console.log(response));
    },
    (error) => {
      console.error(error);
    },
    {
      enableHighAccuracy: true, // Optional, for more accurate location
      timeout: 5000, // Optional, timeout in milliseconds
      maximumAge: 10000, // Optional, use cached location if available
    }
  );

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
