import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBaseCurrency } from 'reduxState/selectors';

import { fetchExchange } from 'reduxState/currency/currencyOperations';

export const ExchangeForm = () => {
  const dispatch = useDispatch();
  const baseCurrency = useSelector(selectBaseCurrency);

  const handleSubmit = evt => {
    evt.preventDefault();
    const [amount, from, , to] = evt.target.elements.currency.value.split(' ');
    dispatch(fetchExchange({ to, from, amount }));
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        title={`Request format: 15 USD in ${baseCurrency}`}
        className={styles.input}
        placeholder={`15 USD in ${baseCurrency}`}
        pattern="^\d+(\.\d{1,2})?\s[A-Za-z]{3}\sin\s[A-Za-z]{3}$"
        name="currency"
        required
      />
    </form>
  );
};
