export default function test({ test }) {
  return <div>{test}</div>;
}

export async function getServerSideProps(context) {
  return {
    props: {
      test: 'Hello World!',
    },
  };
}
