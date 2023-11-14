import { useState } from "react";
import { REACT_APP_PIXABAY_API_KEY } from "./assets/API_KEY";
import { useEffect } from "react";
function App() {

  const [images, setImages] = useState('');
  const [text, setText] = useState('flower');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pixabay.com/api/videos/?key=${REACT_APP_PIXABAY_API_KEY}&q=${text}&image_type=photo&pretty=true`)
    .then((res)=>res.json())
    .then((json)=>{
      setImages(json.hits)
      setIsLoading(false);
    })
    .catch((err)=>console.log('error in fetching:', err));
    
    
  }, []);
  console.log('hits after',images)
  return isLoading? <h1>Loading</h1> : (


    <div>

      <h1 className="text-3xl font-bold underline">
        Hello world! working
      </h1>
      <p>{REACT_APP_PIXABAY_API_KEY}</p>

      <img src={`https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg`} alt="NOT FOUND" />
    </div>
  )
}

export default App;