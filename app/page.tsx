export default function Page() {
  return (
    <div>
      <div className="author">By {process.env.NEXT_PUBLIC_AUTHOR}</div>
      <div className="author">
        NEXT_PUBLIC_VERCEL_ENV = {process.env.NEXT_PUBLIC_VERCEL_ENV}
      </div>
    </div>
  )
}
