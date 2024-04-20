import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Rates from './pages/Rates';
import { Header } from './components';
import { fetchBaseCurrency } from 'reduxState/currency/currencyOperations';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from 'reduxState/currency/currencySlice';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const success = pos => {
      dispatch(fetchBaseCurrency(pos.coords));
    };

    const error = () => {
      dispatch(setBaseCurrency('USD'));
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/rates" element={<Rates />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
