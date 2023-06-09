import Layout from "@/components/Layout"

export function getServerSideProps(context) {
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function estatico(props) {
  return (
    <Layout pageTitle='Estatico'>
      <h3>{props.numero}</h3>
    </Layout>
  )
}