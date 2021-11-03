import Link from 'next/link';

export default function Index(props) {
  return (
    <div>
      <div className='title'>{props.hygge}</div>
      <div className='author'>By {process.env.NEXT_PUBLIC_AUTHOR}</div>
      <Link href='/uuid'>Uuid</Link>
    </div>
  );
}

export async function getStaticProps() {
  return { props: { hygge: 'hygge' } };
}
