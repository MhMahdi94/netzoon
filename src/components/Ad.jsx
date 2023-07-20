import React from 'react'

const Ad = ({result}) => {
  return (
    
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mr-4 mt-4">
    <a href="#">
        <img class="p-8 rounded-t-lg object-fill w-full h-full" src={result.advertisingImage} alt="product image" />
    </a>
   
</div>

  )
}

export default Ad