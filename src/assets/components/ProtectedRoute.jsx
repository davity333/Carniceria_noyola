import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
const ProtectedRoute = ({ element, requiredRole, ...rest }) => {
  const { user } = useUser();

  if (user.rolId === requiredRole || user.rolId === 1) {
    return element;
  } else {
    return <Navigate to="/home" />;
  }
};

export default ProtectedRoute;
