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

// todo вынести бизнес логику в отдельные компоненты
// todo почитать или посмотреть про Image next и исправить все предупреждения с ними
// todo добавить picture для всех картинок
// todo узнать как и зачем примерняется callback и memo, и удалить все ненужные перерисовки ( где есть children можно даже не пытаться )
// todo сделать лоадер
// todo сделать стили для title всех
// todo реализовать таймер возврата
// todo типизировать все onClick
// todo переделать так, чтобы работало коректное разделение кода, как объяснял Ulbi_TV
// todo getServerSideProps
// todo страница 404