import styles from "../styles/Layout.module.css";
import Header from "./Header";

export default function Layout(props) {
  return (
    <>
      <Header titulo={props.titulo} url={props.url} />
      <section className={styles.layout}>
        <section className={styles.main}>{props.children}</section>
      </section>
    </>
  );
}
