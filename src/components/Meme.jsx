import '../styles/Meme.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Meme() {
   const [allMemes , setAllMemes] = useState([])
   useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data))
   },[])
   console.log(allMemes.data)
  const [meme , setImage] = useState({
       image:"https://i.imgflip.com/1bgw.jpg",
       textTop:"",
       textBottom:""
  })
  function getMemeImage(){
     const memeArray = allMemes.data.memes
     const randomNum = Math.floor(Math.random() * memeArray.length)
     
     setImage(prevContant =>{
       return{
         ...prevContant,
         image:memeArray[randomNum].url
       }
     })
  }
 
  function handelChangeText(event){
   setImage(prevContant =>{
      return{
        ...prevContant,
        [event.target.name]:event.target.value,
      }
    })
  }
  return (
    <main>
       <div className='form'>
          <input onChange={handelChangeText}
                type="text" 
                placeholder='Top text'
                name='textTop'
                />
          <input onChange={handelChangeText}
                type="text" 
                placeholder='Bottom text'
                name='textBottom'
                />
          <button onClick={getMemeImage}>Gey a new meme image 🖼️</button>
       </div>
       <div className="meme">
       <h2 className='text--top'>{meme.textTop}</h2>
       <h2 className='text--bottom'>{meme.textBottom}</h2>
       <img src= {meme.image} className='memeImage' />
       </div>
    </main>
  )
}


