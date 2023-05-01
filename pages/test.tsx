import { GetStaticProps } from 'next'

type testProps = {
  date: String
}

export default function Test({ date }: testProps) {
  return (
    <div>
      Last updated: {date}
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const date = new Date().toString();

  return {
    props: {
      date
    }
  }
}
