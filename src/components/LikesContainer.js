import React from 'react';

function LikesContainer({upvotes, setUpvotes, downvotes, setDownvotes}) {

    const handleButtonClick = (event) => {
        event.target.name === "+" ? setUpvotes(upvotes + 1) : setDownvotes(downvotes + 1)
    }

    return(
        <div>
            <button name="+" onClick={handleButtonClick}>{upvotes}👍</button>
            <button name="-" onClick={handleButtonClick}>{downvotes}👎</button>
        </div>
    )
}

export default LikesContainer;