import React, { useState } from 'react';
import Comment from './Comment';

function CommentsContainer({comments}) {
    
    const[showComments, setShowComments] = useState(true);

    const commentsList = comments.map((comment) => (
        <Comment key={comment.id} {...comment}/>
    ))

    const handleCommentsClick = () => {
        setShowComments(!showComments)
    }

    return(
        <div>
            <br/>
            <button onClick={handleCommentsClick}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            <hr/>
            <h2>{commentsList.length} Comments</h2>
            {showComments ? commentsList : null}
        </div>
    )
}

export default CommentsContainer;