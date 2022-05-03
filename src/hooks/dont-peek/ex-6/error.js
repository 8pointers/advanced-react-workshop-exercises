import { createContext, useContext, useState } from 'react';

const errorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);
  const dispatch = (error) => setErrors([...errors, { error, id: errors.length }]);
  const acknowledge = (id) => setErrors(errors.filter((error) => error.id !== id));
  return (
    <errorContext.Provider value={{ errors, dispatch, acknowledge }}>
      {children}
    </errorContext.Provider>
  );
};

const useError = () => useContext(errorContext);

export { ErrorProvider, useError };
