export default function handler(req, res) {
  const username = req.query.username;

    res.status(200).send({ 
        1: {
          id: 1,
          username: `winry`,
          name: `Winry Rockbell`,
          email: `winry@example.com`,
          image: 'https://i.imgur.com/vLZeRl1_d.webp?maxwidth=300&fidelity=grand',
          tag: ['Anime', 'Jogod', 'Robotica', 'Aprender']
        },
        2: {
          id: 2,
          username: `lorem`,
          name: `Space Ipsum`,
          email: `spacem@example.com`,
          image: 'https://i.imgur.com/FX7vZx6_d.webp?maxwidth=300&fidelity=grand',
          tag: ['Lorem', 'Ipsum', 'Dolor', 'Ramdom']
        },
        3: {
          id: 3,
          username: `suzana`,
          name: `Suzana Fernandes`,
          email: `suzana1@example.com`,
          image: 'https://i.imgur.com/gYVBpHV.jpeg',
          tag: ['Internet', 'Nerd', 'Anime', 'Música']
        },
        4: {
          id: 4,
          username: `fira`,
          name: `Fira Enzo`,
          email: `fira@example.com`,
          image: 'https://i.imgur.com/acB06ML_d.webp?maxwidth=300&fidelity=grand',
          tag: ['Design', 'Oceano', 'Música', 'Festas']
        },
        5: {
          id: 5,
          username: `natsu`,
          name: `Natsu`,
          email: `natsu@example.com`,
          image: 'https://i.imgur.com/FcRSDBl_d.webp?maxwidth=300&fidelity=grand',
          tag: ['Comida', 'Viajar', 'Lutas']
        },
        6: {
          id: 6,
          username: `banzai`,
          name: `Tanjiro Kamado`,
          email: `tanjiro@example.com`,
          image: 'https://i.imgur.com/p9xa4D8_d.webp?maxwidth=300&fidelity=grand',
          tag: ['Espadas', 'Treinar', 'Viajar', 'Comida']
        }
    })
};
