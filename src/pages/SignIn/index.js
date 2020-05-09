import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../contexts/auth';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SignIn = () => {
  const {signed, signIn} = useAuth();

  console.log(signed);

  function handleSignIn() {
    signIn();
  };

  return(
    <View style={styles.container}>
      <Button title="Faça login" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;