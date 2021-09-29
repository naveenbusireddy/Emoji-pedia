import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😄": "smiling",
  "😂": "tears of joy",
  "😃": "big eyes",
  "😅": "sweat",
  "❤": "heart",
  "🎉": "party popper",
  "🐱‍👤": "ninja cat",
  "🤔": "thinking face",
  "🤗": "hugging face",
  "🐵": "monkey face",
  "🏋️‍♂️": "man lifting weights"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) { //processing
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database!";
    }
    setMeaning(meaning); //react call to show output
  }

  function emojiClickHandler(emoji) { //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //React call to show output
  }
  return (
    <div className="App">
      <h1>Inside out</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2> 
      {/* Actual output set by React using useState */}

      <h3>emojis we know</h3>
      
      { emojisWeKnow.map(function(emoji){
        return <span onClick={()=>emojiClickHandler(emoji)} style={{fontSize:"1.5rem", padding:"0.1rem", cursor:"pointer"}} key={emoji}> {emoji} </span>
        })
      }

    </div>

    
  );
}
