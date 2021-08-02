export default function test({ test }) {
  return <div>{test}</div>;
}

export async function getServerSideProps(context) {
  console.log('context.req.headers =', context.req.headers);
  return {
    props: {
      test: 'Hello World!',
    },
  };
}
