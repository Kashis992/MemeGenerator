
import React from "react";
/*import memedata from "../memedata.js";*/

export default function Meme() {

  const[meme ,setMeme]= React.useState({
    topText:"",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
})

const[allMeme, setallMeme]=React.useState()

React.useEffect(() =>{
  fetch("https://api.imgflip.com/get_memes")
  .then(res => res.json())
  .then(data =>setallMeme(data.data.memes))
}, [])
  function getMeme() {
   
    const randomnum = Math.floor(Math.random() * allMeme.length);
    const url=allMeme[randomnum].url
    setMeme(prev =>({
        ...prev,
        randomImage:url
    }))
  }

  function handleChange(event){
    const {name,value}=event.target
    setMeme(prev => ({
      ...prev,
      [name]:value
    }))

  }
  return (
    <main>
      <div className="form">
        <input 
        type="text" 
        placeholder="Top text" 
        className="form-input"
        name= "topText"
        value={meme.topText}
        onChange={handleChange}

         />
        <input 
        type="text" 
        placeholder="Bottom text" 
        className="form-input" 
        name= "bottomText"
        value={meme.bottomText}
        onChange={handleChange}
        />
        <button onClick={getMeme} className="form-button">
          Get a new image meme
        </button>
      </div>
      <div className="meme">
      <center> <img src={meme.randomImage} className="meme-image" /></center>
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>

        
      </div>
     
    </main>
  );
}
