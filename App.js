import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';

import Routes from './src/routes';

export default function App() {
  // const [signed, setSigned] = useState(false);

  // function signIn() {
  //   // const response = await signIn();

  //   // console.log(response);

  //   setSigned(true);

  //   // Por ser ume estado assim que o signed mudar, ele iria renderizar
  //   // Todo o componente novamente, tendo nossa informação mais atual de signed
  // }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
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
