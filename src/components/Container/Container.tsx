import { FC, ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({children}) => {
    return (
        <main className={styles.container}>
            {children}
        </main>
    )
}

export default Container