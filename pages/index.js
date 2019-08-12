/**
 * ./pages/index.js
 *
 * This is the index page. Next.js + Now will automatically process
 * and render this page first upon loading https://samsisle.dev ☀️
 * on the browser.
 */

import fetch from 'isomorphic-unfetch';

import { server } from '../lib/config';

export default function index({ hygge }) {
  return (
    <>
      <div>{hygge}</div>
    </>
  );
}

index.getInitialProps = async () => {
  const res = await fetch(`${server}/api/hygge`);
  const json = await res.json();
  return { hygge: json.hygge };
};
