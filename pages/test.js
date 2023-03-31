export default function Test() {
  return <div>test</div>
}

export function getStaticProps(context) {
  return { props: {}, revalidate: 10 }
}
