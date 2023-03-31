export default function Test() {
  return <div>test</div>
}

export async function getStaticProps(context) {
  return { props: {}, revalidate: 10 }
}
