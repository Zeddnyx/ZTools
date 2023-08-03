'use client'
import { useRouter,usePathname } from 'next/navigation'
import { useEffect } from 'react';

export default function page() {
  const  id  = usePathname()
  const router = useRouter();

  useEffect(() => {
    id === "/dashboard" && router.push("/")
  })

  return (
    <div>
    </div>
  )
}
