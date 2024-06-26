import React from 'react';

import { useLocation, Navigate } from 'react-router-dom';

const AuthContext = React.createContext(null);

const prevUser = JSON.parse(window.localStorage.user || 'null');

let _user;
export function getUser() {
  return _user;
}

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(prevUser);

  const signin = (user) => {
    _user = user;
    setUser(user);
    window.localStorage.user = JSON.stringify(user);
  };

  const changeType = (type) => {
    _user.type = type;
    setUser({..._user});
    window.localStorage.user = JSON.stringify(_user);
  }

  const value = { user, signin, changeType };
  _user = user;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();
  
    if (!auth.user) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }