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
        <li>I am Software Engineer</li>
        <li>I am A learner, builder, and freedom seeker.</li>
        <li>
          I Live in <b className="font-medium">Izmir, Turkiye.</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">Visual Basic.</b>.
        </li>
        <li>I love web development.</li>
        <li>I work mostly with Node.js/Java.</li>
        <li>
          I'm Fulden's
          <Twemoji emoji="smiling-face-with-heart-eyes" /> husband.
        </li>
        <li>
          I'm a dog-person <Twemoji emoji="dog" />.
        </li>
        <li>I love rock music.</li>
        <li>
          I love playing chess <Twemoji emoji="chess-pawn" />.
        </li>
        <li>
          I love playing video game <Twemoji emoji="video-game" />, Dota2 is my favorite one.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
