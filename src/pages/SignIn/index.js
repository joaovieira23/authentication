import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { signIn } from '../../services/auth';
import AuthContext from '../../contexts/auth';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SignIn = () => {
  const { signed } = useContext(AuthContext);

  console.log(signed);

  async function handleSignIn() {
    const response = await signIn();

    // console.log(response);
  }

  return(
    <View style={styles.container}>
      <Button title="Faça login" onPress={handleSignIn} />
    </View>
  )
}

export default SignIn;