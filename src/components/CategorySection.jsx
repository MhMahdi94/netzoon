import React, { useEffect, useState } from 'react'
import axiosClient from '../axiosClient';
import Category from './Category';

const CategorySection = ({title,data}) => {
    const [loading, setLoading] = useState(false);
    const [payload,setPayload]=useState({'department':'الكترونيات'});
    
   
  return (
    <div className="container mt-5  mx-auto  ">
        <div className="flex items-center justify-between px-2 py-2 bg-gray-100 rounded">
            <h4 class="text-2xl font-bold ">{title}</h4>
            <button type="button" class="text-main hover:text-white border border-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Show All
            </button>

        </div>
        <div className="flex flex-wrap justify-center mb-4 px-4">
            {data.results.map(result=>
                <Category 
                    key={result._id}
                    result={result}
                />
            
            )}
            
            
        </div>
    </div>
  )
}

export default CategorySection