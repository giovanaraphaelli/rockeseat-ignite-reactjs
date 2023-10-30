import { useForm } from 'react-hook-form';
import { SearchFormContainer } from './styles';
import { MagnifyingGlass } from 'phosphor-react';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { TransactionsContext } from '../../../../contexts/TransactionsContext';

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchTFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchTFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });
  async function handleSearchTransaction(data: SearchTFormInputs) {
    await fetchTransactions(data.query);
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  );
}
