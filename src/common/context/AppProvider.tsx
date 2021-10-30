import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppProvider: FC = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
