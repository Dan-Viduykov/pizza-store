import { NextPage } from "next";
import { default as NotFoundScreen } from "@/components/screens/NotFound";
import Layout from "@/components/Layout";

const NotFound: NextPage = () => {
    return (
        <Layout>
            <NotFoundScreen />
        </Layout>
    )
}

export default NotFound