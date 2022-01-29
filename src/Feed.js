import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material"
import FlipMove from "react-flip-move"
import React, { useEffect, useState } from "react"
import "./Feed.css"
import { db } from "./firebase"
import InputOption from "./InputOption"
import Posts from "./Posts"
import firebase from "firebase"
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice"

const Feed = () => {
  const user = useSelector(selectUser)
  const [input, setInput] = useState("")
  const [posts, setPosts] = useState([])
  useEffect(() => {
    db?.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
  }, [])

  const sendPost = (e) => {
    e.preventDefault()
    db.collection("posts").add({
      name: user?.displayName,
      description: user?.email,
      message: input,
      photoUrl: user?.phoroUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("")
  }

  const inputOption = [
    { title: "Photo", Icon: Image, color: "#7085f9" },
    { title: "Subscription", Icon: Subscriptions, color: "#e7a33e" },
    { title: "Event", Icon: EventNote, color: "#c0cbcd" },
    { title: "Write Article", Icon: CalendarViewDay, color: "#7fc15e" },
  ]

  return (
    <>
      <div className="feed">
        <div className="feed_inputContainer">
          <div className="feed_input">
            <Create />
            <form>
              <input
                onChange={(e) => {
                  setInput(e.target.value)
                }}
                value={input}
                type="text"
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="feed_inputOptions">
            {inputOption?.map((i) => (
              <InputOption
                key={i.title}
                title={i.title}
                Icon={i.Icon}
                color={i.color}
              />
            ))}
          </div>
        </div>
        {/* Posts */}
        <FlipMove>
          {posts?.map(
            ({ id, data: { name, description, message, photoUrl } }) => (
              <Posts
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            )
          )}
        </FlipMove>
      </div>
    </>
  )
}

export default Feed
