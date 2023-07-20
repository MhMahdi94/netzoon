import React, { useEffect, useState } from 'react'
import Category from './Category'
import Ad from './Ad'
import axiosClient from '../axiosClient'
import Loading from './Loading'
import AppCarousel from './Carousel'

const AdsSection = ({ title, data }) => {
    const [loading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);    
    const ads = {
        "message": "success",
        "results": [
            {
                "_id": "645b998bf700c9d204217a0b",
                "advertisingTitle": "نيسان للبيع في إمارة عجمان",
                "advertisingStartDate": "2023-12-02T00:00:00.000Z",
                "advertisingEndDate": "2023-12-02T00:00:00.000Z",
                "advertisingDescription": "سيارة نيسان موديل 2023 متواجدة في إمارة عجمان للبيع",
                "advertisingImage": "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmlzc2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "advertisingCountryAlphaCode": "asd",
                "advertisingBrand": "نسيان",
                "advertisingViews": 22,
                "advertisingYear": "2023",
                "advertisingLocation": "دبي",
                "advertisingPrice": 50000,
                "advertisingImageList": [
                    "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmlzc2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1551817280-6d59c77ce1b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlzc2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1584920735791-be9a8eba8baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pc3NhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                ],
                "advertisingVedio": "LM0F4LHUWJE",
                "createdAt": "2023-05-10T13:18:03.805Z",
                "updatedAt": "2023-05-10T13:18:03.805Z",
                "advertisingType": "سيارات",
                "__v": 0,
                "owner": {
                    "_id": "64993b76c0ff0bb2c2fe36e8",
                    "username": "Samsnug",
                    "userType": "local_company"
                },
                "purchasable": true
            },
            {
                "_id": "645b9feef700c9d204217a14",
                "advertisingTitle": "أرض للبيع في دبي",
                "advertisingStartDate": "2023-12-02T00:00:00.000Z",
                "advertisingEndDate": "2023-12-02T00:00:00.000Z",
                "advertisingDescription": "أرض للبيع في دبي",
                "advertisingImage": "https://www.elitejo.com/sites/default/files/sa_23.jpg",
                "advertisingCountryAlphaCode": "ارض للبيع",
                "advertisingBrand": "ارض للبيع",
                "advertisingViews": 22,
                "advertisingYear": "2023",
                "advertisingLocation": "دبي",
                "advertisingPrice": 50000,
                "advertisingImageList": [
                    "https://www.elitejo.com/sites/default/files/sa_23.jpg"
                ],
                "advertisingVedio": "",
                "advertisingType": "عقارات",
                "createdAt": "2023-05-10T13:45:18.776Z",
                "updatedAt": "2023-05-10T13:45:18.776Z",
                "__v": 0,
                "owner": {
                    "_id": "64993b76c0ff0bb2c2fe36e8",
                    "username": "Samsnug",
                    "userType": "local_company"
                },
                "purchasable": true
            },
            {
                "_id": "645ba1fdf700c9d204217a19",
                "advertisingTitle": "نيسان للبيع في إمارة عجمان",
                "advertisingStartDate": "2023-12-02T00:00:00.000Z",
                "advertisingEndDate": "2023-12-02T00:00:00.000Z",
                "advertisingDescription": "تفاصيل الاعلان",
                "advertisingImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgAmv5h6pjNJG5Tg0EkpCywBfa700quXU6-sJMaIOwuQ&s",
                "advertisingCountryAlphaCode": "aa",
                "advertisingBrand": "نسيان",
                "advertisingViews": 25,
                "advertisingYear": "2023",
                "advertisingLocation": "دبي",
                "advertisingPrice": 50000,
                "advertisingImageList": [
                    "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmlzc2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                ],
                "advertisingVedio": "LM0F4LHUWJE",
                "advertisingType": "سيارات",
                "createdAt": "2023-05-10T13:54:05.425Z",
                "updatedAt": "2023-05-10T13:54:05.425Z",
                "__v": 0,
                "owner": {
                    "_id": "64993b76c0ff0bb2c2fe36e8",
                    "username": "Samsnug",
                    "userType": "local_company"
                },
                "purchasable": false
            },
            {
                "_id": "64a971ff9def2fd1745bfde1",
                "owner": {
                    "_id": "6488384836978969ad2d6fe9",
                    "username": "Adams Dairy",
                    "userType": "local_company"
                },
                "purchasable": true,
                "advertisingTitle": "asd",
                "advertisingStartDate": "2023-07-08",
                "advertisingEndDate": "2023-07-15",
                "advertisingDescription": "dsa",
                "advertisingImage": "https://net-zoon.onrender.com/images/1688826366182.jpg",
                "advertisingCountryAlphaCode": "asdd",
                "advertisingBrand": "sa",
                "advertisingYear": "2022",
                "advertisingLocation": "asd",
                "advertisingPrice": 22,
                "advertisingImageList": [],
                "advertisingType": "مناطق حرة",
                "createdAt": "2023-07-08T14:26:07.126Z",
                "updatedAt": "2023-07-08T14:26:07.126Z",
                "__v": 0
            },
            {
                "_id": "64aaa5111f85ebfdb2d336a3",
                "owner": {
                    "_id": "6488384836978969ad2d6fe9",
                    "username": "Adams Dairy",
                    "userType": "local_company"
                },
                "purchasable": false,
                "advertisingTitle": "الشارقة",
                "advertisingStartDate": "2023-07-09",
                "advertisingEndDate": "2023-07-17",
                "advertisingDescription": "سيارة دفيندر 2023  ",
                "advertisingImage": "https://net-zoon.onrender.com/images/1688904975862.jpg",
                "advertisingCountryAlphaCode": "2023",
                "advertisingBrand": "لاند روفر",
                "advertisingYear": "2023",
                "advertisingLocation": "الشارقة",
                "advertisingPrice": 250000,
                "advertisingImageList": [
                    "https://net-zoon.onrender.com/images/1688904976773.jpg",
                    "https://net-zoon.onrender.com/images/1688904977390.jpg",
                    "https://net-zoon.onrender.com/images/1688904977546.jpg",
                    "https://net-zoon.onrender.com/images/1688904977547.jpg",
                    "https://net-zoon.onrender.com/images/1688904977556.jpg"
                ],
                "advertisingType": "سيارات",
                "advertisingVedio": "https://net-zoon.onrender.com/images/1688904977654.mp4",
                "createdAt": "2023-07-09T12:16:17.890Z",
                "updatedAt": "2023-07-09T12:16:17.890Z",
                "__v": 0
            }
        ]
    }
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },

        {
            url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
    ];

    const getAds = () => {
        setLoading(true);
        axiosClient.get('/advertisements')
            .then((data) => { setLoading(false); console.log(data) })
            .catch((error) => { setLoading(false); console.log(error) });
    }
    useEffect(() => {
        getAds();
    }, []);

    //
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
      style={{ backgroundImage: `url(${ads.results[currentIndex].advertisingImage})` }}
      className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    >
        <div className="absolute px-4  bg-opacity-60 bottom-1 left-0 right-0 m-auto text-center bg-gray-300">
        <span className='text-2xl font-bold text-white'>
            {ads.results[currentIndex].advertisingTitle}
        </span>
        <br></br>
        <span className=" text-2xl font-bold text-white ">
            {ads.results[currentIndex].advertisingDescription}
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
                {/* {ads.results.map(result=>
                <Ad 
                    key={result._id}
                    result={result}
                />
            
            )} */}


            </div> : <Loading />}
        </div>
    )
}

export default AdsSection