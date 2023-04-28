import Link from "next/link";
import styles from '../styles/Navegador.module.css';

export default function Navegador(props) {
  return (
    <Link 
      className={styles.link} 
      href={props.url}
      style={{
        backgroundColor: props.cor ?? '#002ec5'
      }}
    >
      {props.titulo}
    </Link>
  )
}
