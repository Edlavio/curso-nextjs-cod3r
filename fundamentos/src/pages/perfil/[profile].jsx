import Layout from "@/components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Perfil.module.css";
import Link from "next/link";

export default function Perfil() {
  const router = useRouter();
  const id = router.query.profile;

  const [user, setUser] = useState([]);

  const getUser = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setUser(data);
  };
  useEffect(() => {
    const userURL = `/api/profile/${id}`;

    getUser(userURL);
  }, [id]);

  const userList = Object.values(user).filter((user) => user.username === id);
  const title = userList.map((user) => user.name);

  return (
    <Layout titulo={title} url={id} pageTitle={`Perfil | ${title}`}>
      {userList.map((user) => (
        <div className={styles.user} key={user.id}>
          <Image
            width={300}
            height={300}
            src={user.image}
            alt={`${user.name} Foto de perfil`}
            priority="true"
          />
          <span className={styles.name} title={user.name}>
            {user.name}
          </span>
          <span
            className={styles.username}
            title={`nome de usuario: ${user.username}`}
          >
            @{user.username}
          </span>
          <div className={styles.info}>
            <div>
              {user.tag.map((tag) => (
                <span key={tag} title={`tag: ${tag}`}>{tag}</span>
              ))}
            </div>
            <p title={`email: ${user.email}`}>Email: {user.email}</p>
          </div>

          <Link className={styles.button} href="/">
            Voltar
          </Link>
        </div>
      ))}
    </Layout>
  );
}
