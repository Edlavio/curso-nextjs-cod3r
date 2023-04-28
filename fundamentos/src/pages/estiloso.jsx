import styles from "../styles/Estiloso.module.css";
import Layout from "@/components/Layout";

export default function estiloso() {
  return (
    <Layout>
      <div className={styles.container}>
        <p>Estiloso Page</p>
      </div>
    </Layout>
  );
}
