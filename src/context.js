import React, { createContext, useContext } from "react";


const AppContext = createContext();

const AppProvider = ({ children }) => {
  
  return (
    <AppContext.Provider value={"hello"} >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };


// import React, { useContext } from "react";

// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {
//   return (
//     <AppContext.Provider value={"yeah context file se data hai"}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// const useGlobalContxet = () => {
//   return useContext(AppContext);
// };
// export { AppProvider, AppContext, useGlobalContxet };
