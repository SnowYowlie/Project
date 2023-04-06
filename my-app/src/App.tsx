
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import { useState, useEffect } from 'react';

function App() {
  const [token, setToken] = useState<string | null>();
  useEffect(() => {
    if(window.location.hash.includes('access_token')) {
      const hash: string = window.location.hash.split("&")[0].split("=")[1];
      localStorage.setItem('authToken', hash);
      setToken(hash);
    } else if(localStorage.getItem('authToken')) {
      setToken(localStorage.getItem('authToken'));
    }
  }, [])
  return (
    <div className="App">
      {
        token ? <MainPage/> : <LoginPage/>
      }
    </div>
  );
}

export default App;
