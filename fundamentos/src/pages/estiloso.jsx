import styles from "../styles/Estiloso.module.css";
import Layout from "@/components/Layout";

export default function estiloso() {
  return (
    <Layout pageTitle='Estiloso'>
      <div className={styles.container}>
        <p>Estiloso Page</p>
      </div>
    </Layout>
  );
}
