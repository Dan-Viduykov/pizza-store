import type { GetServerSideProps, NextPage } from 'next'
import { getPizzaById } from '@/services/pizza.api'
import { makeStore } from '@/store/store'
import Layout from '@/components/Layout'
import Pizza from '@/components/screens/Pizza'

const PizzaPage: NextPage = () => {
  return (
    <Layout>
      <Pizza />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const store = makeStore();

	await store.dispatch(getPizzaById.initiate(query.id as string));

	return { props: { initialReduxState: store.getState() } };
};

export default PizzaPage
