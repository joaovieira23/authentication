import React, { createContext, useState } from 'react';
import * as auth from '../services/auth';

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

  async function signIn() {
    const response = await auth.signIn();

    // console.log(user);
    setUser(response.user);
  }
  

  function signOut() {
    setUser(null);
  }

  return ( 
    <AuthContext.Provider value={{ signed: !!user, signIn, user, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;