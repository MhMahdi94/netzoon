import React, { useState } from 'react'
import New from './New';

const NewsSection = ({title}) => {
    const [loading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? ads.results.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === ads.results.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

  const news={
    "message": "Success",
    "results": [
        {
            "_id": "6479952eb586d7e7cf046f55",
            "title": "مدارس تقدم برامج خاصة خلال أسبوع رمضان لتقوية مهارات الطلبة وإعادة تهيئتهم",
            "description": "فتحت مدارس الشارقة وعجمان، أمس، أبوابها لاستقبال الطلاب مع بدء دوام الفصل الثالث من العام الدراسي الجاري 2022/ 2023، حيث شهدت نسب إقبال متوسطة، لاسيما مع قرب إجازة عيد الفطر السعيد بنهاية الأسبوع الجاري",
            "imgUrl": "https://www.emaratalyoum.com/polopoly_fs/1.1739617.1681807932!/image/image.jpg",
            "creator": {
                "_id": "6489a1f97079468c0b6204cf",
                "username": "bbc_news",
                "profilePhoto": "https://net-zoon.onrender.com/images/1686741493921.jpg"
            },
            "likes": [
                "646b84a1b492e65ad960b474"
            ],
            "comments": [
                {
                    "_id": "64b027112914c9d945ab14b1",
                    "user": {
                        "_id": "6488384836978969ad2d6fe9",
                        "username": "Adams Dairy"
                    },
                    "news": "6479952eb586d7e7cf046f55",
                    "text": "👍",
                    "__v": 0
                }
            ],
            "updatedAt": "2023-07-13T16:32:17.638Z",
            "__v": 65,
            "createdAt": "2023-06-17T14:14:24.398Z"
        },
        {
            "_id": "64aea049ce35886dd34f0a3d",
            "title": "مدارس تقدم برامج خاصة خلال أسبوع رمضان لتقوية مهارات الطلبة وإعادة تهيئتهم",
            "description": "فتحت مدارس الشارقة وعجمان، أمس، أبوابها لاستقبال الطلاب مع بدء دوام الفصل الثالث من العام الدراسي الجاري 2022/ 2023، حيث شهدت نسب إقبال متوسطة، لاسيما مع قرب إجازة عيد الفطر السعيد بنهاية الأسبوع الجاري",
            "imgUrl": "https://www.emaratalyoum.com/polopoly_fs/1.1739617.1681807932!/image/image.jpg",
            "creator": {
                "_id": "6489a1f97079468c0b6204cf",
                "username": "bbc_news",
                "profilePhoto": "https://net-zoon.onrender.com/images/1686741493921.jpg"
            },
            "likes": [
                "646b84a1b492e65ad960b474"
            ],
            "comments": [],
            "updatedAt": "2023-06-17T14:14:24.398Z",
            "__v": 64,
            "createdAt": "2023-06-17T14:14:24.398Z"
        }
    ]
};
  return (
    <div className="container mt-5 mx-auto">
    <div className="flex items-center justify-between bg-gray-100 rounded px-2 py-2 rounded">
        <h4 class="text-2xl font-bold ">{title}</h4>
        <button type="button" class="text-main hover:text-white border border-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Show All
        </button>

    </div>

    {!loading ? <div className="flex flex-wrap  justify-center mb-4 px-4">

    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
<div
style={{ backgroundImage: `url(${news.results[currentIndex].imgUrl})` }}
className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
>
<div className="absolute px-4  bg-opacity-60 bottom-1 w-full text-left bg-gray-700">
<span className='text-2xl font-bold text-white'>
    {news.results[currentIndex].title}
</span>
<br></br>
<span className=" text-lg font text-white ">
    {news.results[currentIndex].description}
</span>
</div>


</div>
{/* Left Arrow */}
<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
{/* <BsChevronCompactLeft onClick={prevSlide} size={30} /> */}
<button onClick={prevSlide} type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50 ">
    <svg class="w-4 h-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
    </svg>
    <span class="sr-only">Previous</span>
</span>
</button>
</div>
{/* Right Arrow */}
<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
<button onClick={nextSlide} type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
    <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
    </svg>
    <span class="sr-only">Next</span>
</span>
</button>
</div>

</div>
        {/* {news.results.map(result=>
        <Ad 
            key={result._id}
            result={result}
        />
    
    )} */}


    </div> : <Loading />}
</div>
  )
}

export default NewsSection