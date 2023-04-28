import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <Link href={props.url ?? '/'}>
        <h1>{props.titulo ?? "Home"}</h1>
      </Link>
      <nav>
        <Link href="/estiloso">Estiloso</Link>
        <Link href='/estado'>Estado</Link>
        <Link href={props.page ?? "/exemplo"}>
          {props.current ?? "Exemplo"}
        </Link>
      </nav>
    </header>
  );
}
