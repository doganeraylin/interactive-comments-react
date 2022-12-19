import { useState } from "react"
import React from 'react'
import ReactTimeAgo from 'react-time-ago'

const UserReply = (
    {content,
    img,
    username,
    counter,
    handleToggle,
   }
) => {

    const [newScore, setNewScore] = useState(counter)

    function incrementScore() {
        return setNewScore((prevScore) => prevScore + 1)
    }

    function decrementScore() {
        return setNewScore((prevScore) => prevScore - 1)
    }

    return (
    <>
        <div className="card-container">
            <div className="user-vote-container vote-container">
                <p className="vote" onClick={incrementScore}>+</p>
                <p className="score">{newScore}</p>
                <p className="vote" onClick={decrementScore}>-</p>
            </div>
            <div className="card-content">
                <div className="card-top-container user-card-top-container">
                    <div className="card-top-info">  
                        <img src={img} className="icon"></img>
                        <p className="username">{username}</p>
                        <p className="you-tag">you</p>
                        <p className="createdAt"><ReactTimeAgo date={new Date()} locale="en-US"/></p>
                    </div>
                    <div className="reply-btn-container delete-container">
                        <img src="/images/icon-delete.svg" className="delete-icon icon"></img>
                        <p className="delete-text" onClick={handleToggle}>Delete</p>
                        {/* <img src="/images/icon-edit.svg" className="edit-icon icon"></img>
                        <p className="reply-text">Edit</p> */}
                    </div>
                </div>
                <div className="card-text">
                    <p className="content">{content}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserReply