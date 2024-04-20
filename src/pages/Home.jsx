import {
  Container,
  ExchangeForm,
  ExchangeInfo,
  Heading,
  Loader,
  Section,
} from 'components';
import { useSelector } from 'react-redux';

import {
  selectExchangeInfo,
  selectIsError,
  selectIsLoading,
} from 'reduxState/currencySlice';

const Home = () => {
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const exchangeInfo = useSelector(selectExchangeInfo);

  return (
    <Section>
      <Container>
        <ExchangeForm />

        {!isError && !exchangeInfo && (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}

        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}

        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default Home;
