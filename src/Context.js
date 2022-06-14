import React, { createContext, useState } from "react";

export const Context = createContext({
  menu: "",
  clickMenu: () => {},
  loading: "",
  setLoading: () => {},
});

export const Provider = (props) => {
  const [menu, setMenu] = useState("about");
  const [loading, setLoading] = useState(false);
  const clickMenu = (n) => {
    setMenu(n);
  };
  const value = {
    menu,
    clickMenu,
    loading,
    setLoading,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
