import Link from "next/link"
export default async function NavItems() {
  // Simulate a data fetch
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (
    <div>
      <Link href="/test2">Go to Page 2</Link>
      <Link href="/test2/test3">Go to Page 3</Link>
      <Link href="/test2/test4">Go to Page 4</Link>
    </div>
  )
}
