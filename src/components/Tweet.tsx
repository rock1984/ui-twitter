import './Tweet.css'
import { Link } from 'react-router-dom'

import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react'

interface TweetProps {
    content: string
}

export function Tweet(props: TweetProps) {
    return (
        <Link to="/status" className="tweet">
            <img src="https://github.com/rock1984.png" alt="Roberto Rocha Rodrigues" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Roberto Rocha Rodrigues</strong>
                    <span>@rock1984</span>
                </div>

                <p>{props.content}</p>

                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle />
                        20
                    </button>
                    
                    <button type="button">
                        <ArrowsClockwise />
                        20
                    </button>
                    
                    <button type="button">
                        <Heart />
                        20
                    </button>
                </div>
            </div>
        </Link>
    )
}