import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import {default as OrderScreen} from '@/components/screens/Order'

const Order: NextPage = () => {
  return (
    <Layout>
      <OrderScreen />
    </Layout>
  )
}

export default Order
