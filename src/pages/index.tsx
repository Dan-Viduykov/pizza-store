import type { GetStaticProps, NextPage } from 'next'
import { getAllPizzas } from '@/services/pizza.api'
import { makeStore } from '@/store/store'
import Layout from '@/components/Layout'
import Home from '@/components/screens/Home'

const Index: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
	const store = makeStore();
	const state = store.getState();

	const { filter, sorting } = state.filterReducer;
	const { currentPage, itemsLimitOnPage } = state.paginationReducer;
	const { query } = state.searchReducer;

  if (query.length !== 0) {
    await store.dispatch(getAllPizzas.initiate({
      filterBy: filter,
      sortBy: sorting,
      offset: (currentPage - 1) * itemsLimitOnPage,
      search: query
    }));
  } else {
    await store.dispatch(getAllPizzas.initiate({ search: query }));
  }

	return { props: { initialReduxState: store.getState() } };
};
export default Index