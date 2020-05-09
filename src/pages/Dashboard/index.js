import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AuthContext from '../../contexts/auth';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const Dashboard = () => {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  };

  return(
    <View style={styles.container}>
      <Button title="Logout" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;