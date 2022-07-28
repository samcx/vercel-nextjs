import type { GetServerSideProps, NextPage } from 'next/types';

type TestProps = {
  hygge: string;
};

const Test: NextPage<TestProps> = ({ hygge }) => {
  return (
    <div>
      <div>Feeeeeling {hygge}</div>
    </div>
  );
};

export default Test;

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { hygge: 'hygge' } };
};
