const AddComment = ()  => {

    return (
        <div className="card-container">
            <img src="../../public/images/avatars/image-juliusomo.png" className="comment-user-icon"></img>
            <textarea 
                className="add-comment-textarea" 
                cols="50" 
                rows="4" 
                placeholder="Add a comment..."
            ></textarea>
            <p className="send-btn">SEND</p>
        </div>
    )
}
 
export default AddComment