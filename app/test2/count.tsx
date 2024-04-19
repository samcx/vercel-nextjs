'use client'

import { useState } from 'react'

export default function Count() {
  const [count, set] = useState(0)

  return (
    <div>
      <h2>Counter (Client Component)</h2>
      <div>count: {count}</div>
      <button onClick={() => set(count + 1)} type="button">
        Increment+
      </button>
    </div>
  )
}
