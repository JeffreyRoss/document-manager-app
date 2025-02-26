import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import UserProfile from './pages/UserProfile';
import Login from './components/Login';
import DocumentList from './components/DocumentList';
import DocumentEntry from './components/DocumentEntry';
import DocumentPanel from './components/DocumentPanel';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

function App() {
  const isAuthenticated = true; // Mock auth

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/profile"
                element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />}
            />
            <Route
                path="/documents"
                element={isAuthenticated ? <DocumentList /> : <Navigate to="/login" />}
            />
            <Route
                path="/document/:id"
                element={isAuthenticated ? <DocumentEntry /> : <Navigate to="/login" />}
            />
            <Route
                path="/panel/:id"
                element={isAuthenticated ? <DocumentPanel /> : <Navigate to="/login" />}
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </ThemeProvider>
  );
}

export default App;