import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import ReturnHardcodedId from '../../lib/RustUuid';

export default function Uuid({ uuid }) {
  return (
    <div>
      <div className='uuid'>uuid: {uuid}</div>
      <div className='uuid'>uuid [hardcoded]: {ReturnHardcodedId()}</div>
      <Link href='/'>Home</Link>
    </div>
  );
}

export async function getStaticProps() {
  const uuid = uuidv4();

  return {
    props: {
      uuid,
    },
    revalidate: 10,
  };
}
