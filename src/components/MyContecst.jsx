import { createContext, useContext, useState } from 'react';

const MyContecst = createContext();

export const useGlobalContecst = () => useContext(MyContecst);

export const MyProvider = ({ children }) => {
  const [pickedMovie, setPickedMovie] = useState(null);
  return (
    <MyContecst.Provider value={{ pickedMovie, setPickedMovie }}>
      {children}
    </MyContecst.Provider>
  );
};
