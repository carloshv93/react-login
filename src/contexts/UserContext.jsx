import { Children, createContext, useState } from "react";

const Context = createContext();
export const UserContextProvider = ({ children }) => {
  const [jwt, setJWT] = useState([]);
  return (
    <Context.Provider value={{ jwt, setJWT }}>{children}</Context.Provider>
  );
};
export default Context;
