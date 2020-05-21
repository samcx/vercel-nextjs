import fetch from "isomorphic-unfetch";

import { server } from "../lib/config";

export default function index(props) {
  return <div>{props.hygge}</div>;
}

index.getInitialProps = async () => {
  const res = await fetch(`${server}/api/hygge`);
  const json = await res.json();

  return { hygge: json.hygge };
};
