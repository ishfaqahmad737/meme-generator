import memeFace from '../images/meme.png'

export default function Navbar(){
    
return (<header className='navbar'>
  <img src={memeFace} id='memeFace'/> 
  <h2 id='navbar-header'>Meme Generator</h2> 
</header>)
}