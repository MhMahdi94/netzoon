import React, { useState } from 'react'
import Category from './Category';
import Deal from './Deal';
import CardLoading from './CardLoading';

const DealSection = ({title}) => {
    const [loading, setLoading] = useState(false);
    const deals={
        "message": "success",
        "results": [
            {
                "_id": "645e3ceb2eef61629191a2c8",
                "name": "إيه إيه إس آي",
                "imgUrl": "https://images.unsplash.com/photo-1523833082115-1e8e294bd14e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1295&q=80",
                "companyName": "شركة طيران ايه اس",
                "prevPrice": 200000,
                "currentPrice": 150000,
                "startDate": "2022-12-01T20:00:00.000Z",
                "endDate": "2022-12-01T20:00:00.000Z",
                "location": "دبي",
                "category": "الطائرات المدنية والخاصة الجديدة و المستخدمة",
                "country": "AE"
            },
            {
                "_id": "645e3dc02eef61629191a2cb",
                "name": "سيارة BMW",
                "imgUrl": "https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=600",
                "companyName": "BMW",
                "prevPrice": 200000,
                "currentPrice": 150000,
                "startDate": "2023-06-21T20:00:00.000Z",
                "endDate": "2023-07-01T20:00:00.000Z",
                "location": "دبي",
                "category": "السيارات، الجديدة و المستخدمة",
                "country": "AE"
            },
            {
                "_id": "645e3eec2eef61629191a2cf",
                "name": "waz مول",
                "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzjY5HrT5GKXe0gYh4pw915qSs4QZHMoBw4FjheRg&s",
                "companyName": "شركة waz",
                "prevPrice": 200000,
                "currentPrice": 150000,
                "startDate": "2022-12-01T20:00:00.000Z",
                "endDate": "2022-12-01T20:00:00.000Z",
                "location": "دبي",
                "category": "محلات نشطة",
                "country": "AE"
            },
            {
                "_id": "645e3f222eef61629191a2d0",
                "name": "البوم",
                "imgUrl": "https://images.unsplash.com/photo-1497601573976-fb2f03ea161d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcCUyMGR1YmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
                "companyName": "البوم",
                "prevPrice": 200000,
                "currentPrice": 150000,
                "startDate": "2022-12-01T20:00:00.000Z",
                "endDate": "2022-12-01T20:00:00.000Z",
                "location": "دبي",
                "category": "القوارب والسفن المدنية والخاصة والمستخدمة",
                "country": "AE"
            },
            {
                "_id": "645e3f5c2eef61629191a2d1",
                "name": "برج C، الأبراج الإدارية",
                "imgUrl": "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600",
                "companyName": "DEMA",
                "prevPrice": 200000,
                "currentPrice": 150000,
                "startDate": "2022-12-01T20:00:00.000Z",
                "endDate": "2022-12-01T20:00:00.000Z",
                "location": "دبي",
                "category": "العقارات",
                "country": "AE"
            },
            {
                "_id": "645e3fa62eef61629191a2d2",
                "name": "معادن",
                "imgUrl": "https://modo3.com/thumbs/fit630x300/163560/1490864637/%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA_%D8%B9%D9%86_%D8%A3%D9%86%D9%88%D8%A7%D8%B9_%D9%85%D9%88%D8%A7%D8%AF_%D8%A7%D9%84%D8%A8%D9%86%D8%A7%D8%A1.jpg",
                "companyName": "HMC",
                "prevPrice": 200000,
                "currentPrice": 150000,
                "startDate": "2022-12-01T20:00:00.000Z",
                "endDate": "2022-12-01T20:00:00.000Z",
                "location": "دبي",
                "category": "مواد بناء",
                "country": "AE"
            },
            {
                "_id": "645e3fcd2eef61629191a2d3",
                "name": "سيارة مارسيدس",
                "imgUrl": "https://pr0.nicelocal.ae/jLT5DpF0593E2N1RCUi5zg/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2QjNK-ROGFyFcWSKqf0XlufLZ0pKmLqfNSnCQWPA2Dzcob_H_Lr-zdFV3UG_8UqBSA",
                "companyName": "مارسيدس",
                "prevPrice": 200000,
                "currentPrice": 150000,
                "startDate": "2022-12-01T20:00:00.000Z",
                "endDate": "2023-06-21T20:00:00.000Z",
                "location": "دبي",
                "category": "سكراب",
                "country": "AE"
            }
        ]
    };
  return (
    <div className="container mt-5  mx-auto ">
        <div className="flex items-center justify-between bg-gray-100 rounded px-2 py-2 rounded">
            <h4 class="text-2xl font-bold ">{title}</h4>
            <button type="button" class="text-main hover:text-white border border-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Show All
            </button>

        </div>
        {loading?
            <CardLoading/>:
            <div className="flex flex-wrap justify-center mb-4 px-4">
            {deals.results.map(result=>
                <Deal 
                    key={result._id}
                    result={result}
                />
            
            )}
            
            
        </div>}
    </div>
  )
}

export default DealSection