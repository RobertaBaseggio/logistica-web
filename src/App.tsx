import React from 'react';
import SigIn from './pages/Signin';
import SigUp from './pages/SignUp';
import GlobalStyle from './styles/global';
const App: React.FC = () => {
  return  (
  <>
    <SigUp />
    <GlobalStyle />
  </>
  );
};

export default App;
