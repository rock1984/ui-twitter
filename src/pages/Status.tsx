import { FormEvent, useState, KeyboardEvent } from "react"
import { Tweet } from '../components/Tweet'

import { Header } from '../components/Header'
import { Separator } from '../components/Separator'

import { PaperPlaneRight } from 'phosphor-react'

import './Status.css'

export function Status() {
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
        'Concordo...',
        'Faz sentido!',
        'Nem fudendo'
    ])
    function createNewAnswer(event: FormEvent) {
        event.preventDefault();
        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
    }
    function handleHotkeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            setAnswers([newAnswer, ...answers])
            setNewAnswer('')
        }
    }

    return (
        <main className="status">
          <Header title="Tweet" />

          <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quidem nisi quisquam reiciendis sapiente, rerum in! Nesciunt architecto voluptate at minima. Minima fuga earum magni. At possimus deserunt qui quasi!" />
          
          <Separator />

          <form onSubmit={createNewAnswer} className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/rock1984.png" alt="Roberto Rocha Rodrigues" />
              <textarea id="tweet" placeholder="Tweet your answer" value={newAnswer} onChange={(event) => {
                setNewAnswer(event.target.value)
              }}
              onKeyDown={handleHotkeySubmit} />
            </label>

            <button type="submit">
                <PaperPlaneRight />
                <span>Answer</span>
            </button>
          </form>

          {
            answers.map(answer => {
              return <Tweet key={answer} content={answer} />
            })
          }
        </main>
    )
}