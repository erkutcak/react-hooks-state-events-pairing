import React, {useState} from 'react';
import video from "../data/video.js";
import CommentsContainer from './CommentsContainer.js';
import LikesContainer from './LikesContainer.js';
import VideoContainer from './VideoContainer.js';

function App() {
  // console.log("Here's your data:", video);

  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)

  return (
    <div className="App">
      <VideoContainer 
        embedUrl={video.embedUrl} 
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        />
      <LikesContainer 
        upvotes={upvotes} 
        setUpvotes={setUpvotes}
        downvotes={downvotes}
        setDownvotes={setDownvotes}
        />
      <CommentsContainer comments={video.comments}/>
    </div>
  );
}

export default App;
