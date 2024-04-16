export default function TestTemplate({
  children,
}: { children: React.ReactNode }) {
  return (
    <div>
      <div>Inner Template!</div>
      <div>{children}</div>
    </div>
  )
}
