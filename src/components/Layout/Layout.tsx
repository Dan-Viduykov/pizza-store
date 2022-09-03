import { FC, ReactNode } from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import styles from "./Layout.module.scss";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header />
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default Layout