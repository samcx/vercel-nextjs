export default function test({ test }) {
  return <div>{test}</div>;
}

export async function getServerSideProps() {
  console.log('testing Hello World!');
  return {
    props: {
      test: "Hello World!",
    },
  };
}
