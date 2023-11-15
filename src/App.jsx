import { useState } from "react";
import { REACT_APP_PIXABAY_API_KEY } from "./assets/API_KEY";
import { useEffect } from "react";
import ImageContainer from "./components/ImageContainer";
function App() {

  const [images, setImages] = useState('');
  const [input, setInput] = useState('');
  const [text, setText] = useState('flower');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}&q=${text}&image_type=photo&pretty=true`)
    .then((res)=>res.json())
    .then((json)=>{
      setImages(json.hits)
      setIsLoading(false);
    })
    .catch((err)=>console.log('error in fetching:', err));
    
    
  }, [text]);

  function handleSubmit(e){
    e.preventDefault();
    console.log('handle submit called')
    setText(input)
    setInput('')
  }


  console.log('hits after',images)
  return (isLoading)?
  (<h1 className="text-center font-bold text-3xl mt-11">Loading...</h1>) : 
  (


    <div className="">

      <h1 className="text-3xl text-center font-bold underline my-5">
       Image Gallery
      </h1>

      <form onSubmit={handleSubmit} className="flex justify-center mt-10">
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="search..."
        className="border border-gray-500 text-gray-500 rounded-md p-1 w-1/5"  />

        <button onClick={handleSubmit} className="border border-gray-500 text-white bg-gray-500 mx-4 px-4 font-bold rounded-sm">Click</button>
      </form>
        <ImageContainer images= {images}/>

    </div>
  )
}

export default App;