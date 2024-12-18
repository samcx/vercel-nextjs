import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <Image
        src="/sam-bw-noir-sq.jpg"
        alt="Me"
        width={500}
        height={500}
        priority
        fetchPriority="high"
      />
    </div>
  )
}
