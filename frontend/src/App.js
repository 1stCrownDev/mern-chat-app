import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dis/ReactToastify.css';
import Register from './pages/Register';
import Login from './pages/Login';
import ChatPage from './pages/ChatPage';
import './App.css';
import { AuthProvider } from './components/Context';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
            <Route  path='/' 
                    element={
                    <ProtectedRoute>
                      <ChatPage />
                    </ProtectedRoute> 
                  } 
            />
        </Routes>
        <ToastContainer position='top-center' />
      </AuthProvider>
    </>
  );
}

export default App;
