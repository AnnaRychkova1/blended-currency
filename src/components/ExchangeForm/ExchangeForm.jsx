import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { exchangeCurrency } from 'service/exchangeAPI';

export const ExchangeForm = () => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const [amount, from, , to] = evt.target.elements.currency.value.split(' ');
    console.log({ to, from, amount });
    exchangeCurrency({ to, from, amount });
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        title="Request format 15 USD in UAH"
        className={styles.input}
        placeholder="15 USD in UAH"
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        name="currency"
        required
      />
    </form>
  );
};
