import type { GetServerSideProps, NextPage } from 'next'
import Layout from '@/components/Layout'
import Home from '@/components/screens/Home'
import { wrapper } from '@/store/store'

const Index: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ctx => {
  return { props: {} }
})

export default Index
