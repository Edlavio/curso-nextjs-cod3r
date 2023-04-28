import Layout from "@/components/Layout";
import Navegador from "@/components/Navegador";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const [users, setUsers] = useState({});

  const getUsers = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setUsers(data);
  };
  useEffect(() => {
    const usersURL = `http://localhost:3000/api/profile/`;

    getUsers(usersURL);
  }, []);

  return (
    <>
      <Layout>
        <section className={styles.container}>
          <h2>Todos usuários</h2>
          <article>
            {Object.values(users).map((user) => (
              <div className={styles.card} key={user.id}>
                <Link href={`/perfil/${user.username}`}>
                  <Image
                    width={300}
                    height={300}
                    src={user.image}
                    alt={`${user.name} Foto de perfil`}
                    priority="true"
                  />
                </Link>
                <Link href={`/perfil/${user.username}`} title={user.name}>
                  {user.name}
                </Link>
                <span
                  title={`nome de usuario: ${user.username}`}
                >
                  @{user.username}
                </span>
              </div>
            ))}
          </article>
        </section>

        <div className={styles.navegadores}>
          <Navegador titulo="Estiloso" url="/estiloso" />
          <Navegador titulo="Exemplo" url="/exemplo" cor="#00c241" />
          <Navegador
            titulo="Componente com Estado"
            url="/estado"
            cor="crimson"
          />
          <Navegador titulo='Estatico' url='/estatico' cor='red' />
        </div>
      </Layout>
    </>
  );
}
