import { createContext, useEffect, useState, ReactNode } from "react";

interface IGlobalContext {
  token: string | null;
  user: UsersInterface | null;
  setToken: (token: string | null) => void;
  setUser: (user: UsersInterface | null) => void;
}

let GlobalContext = createContext({} as IGlobalContext);

interface GlobalContextProviderProps {
  children: ReactNode;
  setAuth: (user: UsersInterface | null) => void;
}

const GlobalContextProvider = (props: GlobalContextProviderProps) => {
  const [newUser, setNewUser] = useState<UsersInterface | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const setUser = (usuario: UsersInterface | null) => {
    setNewUser(usuario);
  };

  useEffect(() => {
    props.setAuth(newUser);
  }, [newUser]);

  return (
    <GlobalContext.Provider
      value={{
        user: newUser,
        setUser,
        token,
        setToken,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };
