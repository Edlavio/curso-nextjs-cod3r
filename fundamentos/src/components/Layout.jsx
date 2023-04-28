import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "./Header";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.pageTitle ?? 'Home'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header titulo={props.titulo} url={props.url} />
      <section className={styles.layout}>
        <section className={styles.main}>{props.children}</section>
      </section>
    </>
  );
}
