import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from '../../service/User';

const ProtectedRoute = ({ element, requiredRole, ...rest }) => {
  const user = getUser();
  if (user.rolId === requiredRole || user.rolId === 1) {
    return element;
  } else {
    if (user.rolId === 2 && [requiredRole].flat().includes(user.rolId)) {
      return element;
    }
    return <Navigate to="/home" />;
  }
};

export default ProtectedRoute;
