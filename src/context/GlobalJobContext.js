import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalJobContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [search, setSearch] = useState("");
  const [token, setToken] = useState("");

  let navigate = useNavigate();

  return (
    <GlobalJobContext.Provider
      value={{
        data,
        setData,
        fetchStatus,
        setFetchStatus,
        search,
        setSearch,
        navigate,
        token,
        setToken,
      }}
    >
      {props.children}
    </GlobalJobContext.Provider>
  );
};

export default GlobalProvider;
