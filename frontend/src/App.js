import React from 'react';
import { AuthProvider } from './AuthContext';
import NavBar from './NavBar';
import AppRouter from './AppRouter';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <AppRouter />
      </div>
    </AuthProvider>
  );
}

export default App;
