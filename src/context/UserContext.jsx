import { createContext, useContext, useState, useEffect } from 'react';
import { getUser, setUser } from '../service/User';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUserState] = useState(getUser());

  const updateUser = (newUser) => {
    setUserState(newUser);
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
