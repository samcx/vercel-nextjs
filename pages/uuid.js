import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import GenerateRustFancyID from '../lib/RustUuid';

export default function Uuid({ uuid, uuidv2 }) {
  return (
    <div>
      <div className='uuid'>uuid: {uuid}</div>
      <div className='uuid'>uuid (Rust): {uuidv2}</div>
      <Link href='/'>Home</Link>
    </div>
  );
}

export async function getStaticProps() {
  const uuid = uuidv4();
  const uuidv2 = GenerateRustFancyID();

  return {
    props: {
      uuid,
      uuidv2,
    },
    revalidate: 10,
  };
}
