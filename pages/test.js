import Image from 'next/image';

export default function test({ hygge }) {
  return <div>Feeeeeling {hygge}</div>;
}

export async function getServerSideProps() {
  return { props: { hygge: 'hygge' } };
}
