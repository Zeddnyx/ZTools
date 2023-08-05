"use client"
import { useRef } from "react"
import { useAnimation } from "@/hooks/useAnimation"

type Props = {
    children: React.ReactElement
}
export default function Animation({children}: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const onScreen = useAnimation(ref)

    return (
        <div ref={ref}
        style={{
            opacity: onScreen ? 1 : 0,
            translate: onScreen ? 'none' : '0 2rem',
            transition : '700ms ease-in-out'
        }}>
            {children}
        </div>
    )
}

