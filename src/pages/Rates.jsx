import { Wave } from 'react-animated-text';

import { Container, Heading, Loader, RatesList, Section } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectBaseCurrency,
  selectIsError,
  selectIsLoading,
} from 'reduxState/selectors';
import { fetchLatestRates } from 'reduxState/currency/currencyOperations';
import { selectFilteredRates } from 'reduxState/selectors';

const Rates = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const rates = useSelector(selectFilteredRates);
  const baseCurrency = useSelector(selectBaseCurrency);

  useEffect(() => {
    dispatch(fetchLatestRates(baseCurrency));
  }, [baseCurrency, dispatch]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${'UAH'} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        {rates.length > 0 && <RatesList rates={rates} />}

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default Rates;
