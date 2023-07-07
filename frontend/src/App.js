import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import NavBar from './NavBar';
import AppRouter from './AppRouter';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavBar />
          <AppRouter />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
