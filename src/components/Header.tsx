import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1 className={styles.name}>Header</h1>
            </div>
        </header>
    );
}