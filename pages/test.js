export default function test({ test }) {
  return <div>{test}</div>;
}

export async function getServerSideProps(context) {
  console.log('req.headers.host =', context.req.headers.host)
  return {
    props: {
      test: "Hello World!",
    },
  };
}
