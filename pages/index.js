export default function index(props) {
  return (
    <>
      <div className='title'>{props.hygge}</div>
      <div className='author'>By {process.env.NEXT_PUBLIC_AUTHOR}</div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/hygge`);
  const json = await res.json();

  return { props: { hygge: json.hygge } };
}
