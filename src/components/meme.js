import memesData from "../memesData"
import React from 'react';
export default function Meme(){
   
    let [allMemeImages, setAllMemeImages] = React.useState(memesData);
    let [memeImage, setMemeImage] = React.useState({
        topText:'',
        bottomText:'',
        randomImages:"http://i.imgflip.com/1bij.jpg"
    });
    React.useEffect(()=>{fetch('https://api.imgflip.com/get_memes')
    .then(res=> res.json())
    .then(data=>setAllMemeImages(data))},[]);

    console.log('Component Rendered')
                
    var getMemeImages =()=>{
        
        let random= Math.floor(allMemeImages.data.memes.length*Math.random());
        return setMemeImage((prevState)=>{
            return{
                ...prevState,
                randomImages: memesData.data.memes[random].url
            }
        });
        
    }

    function handleChange(event){
        const {type,name,value} = event.target;
        setMemeImage(prevState=>{
            return {
                ...prevState,
                [name]:value
            }
        })
    }
    return(<div>
            <div id='form'>
                <div id='form-input-list'>
                    <input name='topText' type='text'onChange={handleChange} value={memeImage.topText} placeholder='Top text'/>
                    <input name='bottomText' type='text' onChange={handleChange} value={memeImage.bottomText} placeholder='bottom text'/>
                </div>
                <button onClick={getMemeImages}>Get a new meme image  🖼</button>
            </div>
            
            <div className="meme">
                <img src={memeImage.randomImages} className="meme--image" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>

    </div>)
}