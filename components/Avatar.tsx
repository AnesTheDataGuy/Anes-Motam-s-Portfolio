'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Avatar() {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center ring-2 ring-zinc-200 dark:ring-zinc-700 flex-shrink-0">
        <span className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400">AM</span>
      </div>
    )
  }

  return (
    <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-zinc-200 dark:ring-zinc-700 flex-shrink-0">
      <Image
        src="/profile.jpg"
        alt="Anes Motam"
        width={176}
        height={176}
        className="object-cover w-full h-full"
        onError={() => setError(true)}
        priority
      />
    </div>
  )
}
