export default function test({ test }) {
  return <div>{test}</div>;
}

export async function getServerSideProps(context) {
  console.log('[test] resolvedUrl =', context.req.resolvedUrl);
  return {
    props: {
      test: 'Hello World!',
    },
  };
}
