import { useState, createContext, useEffect } from 'react';

export const Context = createContext();

function ContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setUser(userData);
    }
  }, []);

  return <Context.Provider value={user}>{children}</Context.Provider>;
}

export default ContextProvider;
