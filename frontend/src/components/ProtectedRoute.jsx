import React, { useContext } from 'react';
import { AuthContext  } from './components/Context';
import { Navigate } from 'react-router-dom';



function ProtectedRoute({ children, ...props }) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return
    }
  return children;
}

export default ProtectedRoute;