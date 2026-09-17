import React from 'react'
import Typed from 'typed.js'
import { Twemoji } from '../Twemoji'

export function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>I'm a Software Engineer focusing on Backend & Distributed Systems.</li>
        <li>I build high-throughput, resilient microservices.</li>
        <li>Primary tools: Java, Spring Boot, Go, and Kafka.</li>
        <li>Exploring AI agents, MCP tooling, and TypeScript.</li>
        <li>
          Based in <b className="font-medium">Izmir, Turkiye.</b>
        </li>
        <li>A builder, continuous learner, and freedom seeker.</li>
        <li>I love rock music and playing guitar.</li>
        <li>
          I love playing chess <Twemoji emoji="chess-pawn" />.
        </li>
        <li>
          I love playing video games <Twemoji emoji="video-game" />, Dota 2{' '}
          <Twemoji emoji="dota2" /> is my favorite.
        </li>
        <li>
          I'm Fulden's
          <Twemoji emoji="smiling-face-with-heart-eyes" /> husband.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
