import type { GetServerSideProps, NextPage } from 'next'
import { default as OrderScreen } from '@/components/screens/Order'
import Layout from '@/components/Layout'
import { wrapper } from '@/store/store'

const Order: NextPage = () => {
  return (
    <Layout>
      <OrderScreen />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ctx => {
  return { props: {} }
})

export default Order
