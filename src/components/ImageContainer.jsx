import React, { useState } from 'react';

const SingleImage = ({ image }) => {

    const [tags, setTags] = useState(image.tags.split(','));
    // setTags(image.tags.split(','))
    console.log('image: ', image);
    return (

        <div className='border border-gray-500 min-w-[250px] w-1/5 m-5 rounded-md '>

            <div>
                <img src={image.webformatURL}  alt="image loading..." className='rounded-t-md w-full h-[200px]' />

            </div>

            <div className='p-2'>
                <h1 className='text-purple-700 font-bold m'>Photo by {image.user}</h1>
                <p> <strong>Views:</strong> {image.views}</p>
                <p><strong>Downloads:</strong> {image.downloads}</p>
                <p><strong>Likes:</strong> {image.likes}</p>
                <p>{tags.map((tag) => (
                    <p className='bg-gray-400 inline px-[3px] mr-2 rounded-sm'>{tag}</p>
                ))}</p>
            </div>
        </div>

    )

}

function ImageContainer({ images }) {
    console.log(images);
    return (images.length==0) ?
    (<h1 className="text-center font-bold text-3xl mt-11">Sorry, No record found!</h1>) : 
    (

        <div className='w-full m-auto flex flex-wrap justify-center '>


            {images.map((image) => (
                <SingleImage image={image} key={image.id} />
            ))}

        </div>
    )
}

export default ImageContainer;
