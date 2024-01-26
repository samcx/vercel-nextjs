export default async function Page() {
  return (
    <div>
      <div className="author">By {process.env.NEXT_PUBLIC_AUTHOR}</div>
    </div>
  )
}
