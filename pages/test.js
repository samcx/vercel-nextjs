export default function Test() {
  return <div>bruh</div>
}

export function getStaticProps(context) {
  return { props: {}, revalidate: 10 }
}
