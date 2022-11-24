import { useState } from "react"

const Reply = (
    {content,
    createdAt,
    img,
    username,
    replyingTo,
    counter}
) => {

    const [newScore, setNewScore] = useState(counter)

    function incrementScore() {
        return setNewScore((prevScore) => prevScore + 1)
    }

    function decrementScore() {
        return setNewScore((prevScore) => prevScore - 1)
    }

    return (<>
        <div className="card-container reply-card-container">
            <div className="vote-container">
                <p className="vote" onClick={incrementScore}>+</p>
                <p className="score">{newScore}</p>
                <p className="vote" onClick={decrementScore}>-</p>
            </div>
            <div className="card-content">
                <div className="card-top-container ">
                    <div className="card-top-info">  
                        <img src={img} className="icon"></img>
                        <p className="username">{username}</p>
                        <p className="createdAt">{createdAt}</p>
                    </div>
                    <div className="reply-btn-container">
                        <img src="../../public/images/icon-reply.svg" className="reply-icon"></img>
                        <p className="reply-text">Reply</p>
                    </div>
                </div>
                <div className="card-text">
                    <p className="content"><span className="replyingTo">{`@${replyingTo}`}</span>{` ${content}`}</p>
                </div>
            </div>
          
        </div>
        </>
    )
}

export default Reply