import React, { createContext } from 'react';
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
  async function signIn() {
    const response = await auth.signIn();

    console.log(response);
  }
  
  return ( 
    <AuthContext.Provider value={{ signed: false, signIn, user: {}}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;