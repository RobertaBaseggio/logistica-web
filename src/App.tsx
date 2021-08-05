import React from 'react';
import SigIn from './pages/Signin';
import SigUp from './pages/SignUp';
import  AuthProvider  from './hooks';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return  (
  <>
  <AuthProvider>
    <SigIn />
  </AuthProvider>
  <GlobalStyle />
  </>
  );
};

export default App;
