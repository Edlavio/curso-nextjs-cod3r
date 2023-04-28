export default function handler(req, res) {
  if (req.method === 'GET') {
    handleGet(req, res)
  } else {
    res.status(405).send()
  }
}

function handleGet(req, res){
  res.status(200).send({
      1: {
        id: 1,
        username: `winry`,
        name: `Winry Rockbell`,
        image: 'https://i.imgur.com/vLZeRl1_d.webp?maxwidth=300&fidelity=grand'
      },
      2: {
        id: 2,
        username: `lorem`,
        name: `Space Ipsum`,
        image: 'https://i.imgur.com/FX7vZx6_d.webp?maxwidth=300&fidelity=grand'
      },
      3: {
        id: 3,
        username: `suzana`,
        name: `Suzana Fernandes`,
        image: 'https://i.imgur.com/gYVBpHV.jpeg'
      },
      4: {
        id: 4,
        username: `fira`,
        name: `Fira Enzo`,
        image: 'https://i.imgur.com/acB06ML_d.webp?maxwidth=300&fidelity=grand'
      },
      5: {
        id: 5,
        username: `natsu`,
        name: `Natsu`,
        image: 'https://i.imgur.com/FcRSDBl_d.webp?maxwidth=300&fidelity=grand'
      },
      6: {
        id: 6,
        username: `banzai`,
        name: `Tanjiro Kamado`,
        image: 'https://i.imgur.com/p9xa4D8_d.webp?maxwidth=300&fidelity=grand'
      }
  });
};