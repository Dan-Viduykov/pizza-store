import type { GetServerSideProps, NextPage } from 'next'
import Layout from '@/components/Layout'
import Pizza from '@/components/screens/Pizza'
import { wrapper } from '@/store/store'

const Index: NextPage = () => {
  return (
    <Layout>
      <Pizza />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ctx => {
  return { props: {} }
})

export default Index
