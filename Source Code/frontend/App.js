import { StyleSheet, View } from 'react-native';
import Navigation from './navigation.js';
import { AppProvider } from './utils/context.js';


export default function App() {


  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
