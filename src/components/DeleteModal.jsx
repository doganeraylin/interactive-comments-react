
const DeleteModal = (props
) => {

    return (
        <div className="modal-container">
            <h1 className="modal-title">Delete comment</h1>
            <p className="modal-text">Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
            <div className="modal-buttons-container">
                <p className="modal-cancel-btn modal-btns" onClick={props.cancelDelete}>NO, CANCEL</p>
                <p className="modal-delete-btn modal-btns" onClick={props.deleteComment}>YES, DELETE</p>
            </div>
        </div>
    )
}

export default DeleteModal