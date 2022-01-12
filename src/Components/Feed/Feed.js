import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "../Post/Post";
import { db } from "../../utils/firebase";
// import * as firebase from 'firebase/app';

function Feed() {
  const [post, setPost] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
        name: 'Victor Umeh',
        description: 'This is a test',
        message: input,
        photoUrl: '',
        // timeStamp: firebase.firestore.fieldValue.serverTimestamp()
    })

    setInput('');
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
          <InputOption
            title="Write Article"
            Icon={CalendarViewDayIcon}
            color="#7FC15E"
          />
        </div>
      </div>

      {post.map(({ id, data: { name, description, message, photoUrl, } }) => (
        <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
        />
      ))}
      <Post
        name="Victor Umeh"
        description="This is a test"
        message="Wow, this works!"
        photoUrl=""
      />
    </div>
  );
}

export default Feed;
