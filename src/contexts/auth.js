import React, { createContext, useState, useEffect, useContext } from 'react';
import { AsyncStorage } from 'react-native';
import * as auth from '../services/auth';
import api from '../services/api';

//TYPESCRIPT
// interface AuthContextData {
//   signed: boolean;
//   token: string;
//   user: object;
// }

// const AuthContext = createContext<AuthContextData>({} as AuthContextData});



const AuthContext = createContext({ signed: false, user: {} }); 

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@AuthRN:user');
      const storagedToken = await AsyncStorage.getItem('@AuthRN:token');

      // Para verificar o loading
      // await new Promise(resolve => setTimeout(resolve, 2000));

      if (storagedUser && storagedToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadStoragedData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();

    // console.log(user);
    setUser(response.user);

    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
    //Toda requisição subsequente terá o header Authorization com este conteudo
    
    await AsyncStorage.setItem('@AuthRN:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@AuthRN:token', response.token);
  }
  

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#666" />
  //     </View>
  //   )
  // }

  return ( 
    <AuthContext.Provider value={{ signed: !!user, signIn, user, loading, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
};