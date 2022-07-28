import type { GetStaticProps, NextPage } from 'next/types';

type IndexProps = {
  hygge: string;
};

const Index: NextPage<IndexProps> = (props) => {
  return (
    <div>
      <div className='title'>{props.hygge}</div>
      <div className='author'>By {process.env.NEXT_PUBLIC_AUTHOR}</div>
      <div className='author'>
        NEXT_PUBLIC_VERCEL_ENV = {process.env.NEXT_PUBLIC_VERCEL_ENV}
      </div>
    </div>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  return { props: { hygge: 'hygge' } };
};
