import React from 'react'
import CategorySection from '../components/CategorySection'
import DealSection from '../components/DealSection';
import AdsSection from '../components/AdsSection';
import NewsSection from '../components/NewsSection';
import Category from '../components/Category';
import AppCarousel from '../components/Carousel';

const Home = () => {
  const electronics={
        
    "message": "success",
    "results": [
        {
            "_id": "645f3a0ebbce3304aac0b890",
            "name": "جوالات",
            "department": "645f3a5bbbce3304aac0b892",
            "imageUrl": "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2019/02/foldables.webp?ssl=1&quality=80&w=f",
            "products": [
                "64536be8bd73ddb6a0826902",
                "647246ad8b553b2aac8d683d"
            ],
            "__v": 1
        },
        {
            "_id": "645f6fe37b76313bb21c7f71",
            "name": "تلفزيونات",
            "department": "645f3a5bbbce3304aac0b892",
            "imageUrl": "https://www.mylloyd.com/media/products/zoom21811.jpg",
            "products": [
                "645f704c7b76313bb21c7f73"
            ]
        },
        {
            "_id": "645f70c87b76313bb21c7f74",
            "name": "سماعات",
            "department": "645f3a5bbbce3304aac0b892",
            "imageUrl": "https://www.shutterstock.com/image-photo/wireless-overear-headphones-black-leather-260nw-1199089237.jpg",
            "products": [
                "645f70f97b76313bb21c7f75"
            ]
        },
        {
            "_id": "6496d56c9e6d49128b3b0b0d",
            "name": "الأجهزة الصوتية والموسيقية",
            "department": "645f3a5bbbce3304aac0b892",
            "imageUrl": "https://img.joomcdn.net/befd37a449b465acf63252967cd111f6c6f69bce_original.jpeg",
            "products": []
        },
        {
            "_id": "6496d6719e6d49128b3b0b0e",
            "name": "الكاميرات وأجهزة التصوير",
            "department": "645f3a5bbbce3304aac0b892",
            "imageUrl": "https://png.pngtree.com/thumb_back/fw800/background/20220314/pngtree-slr-camera-on-white-background-image_1051451.jpg",
            "products": []
        },
        {
            "_id": "6496d6d19e6d49128b3b0b10",
            "name": "أجهزة الألعاب والترفيه",
            "department": "645f3a5bbbce3304aac0b892",
            "imageUrl": "https://www.crushpixel.com/static16/preview2/stock-photo-seth-game-consoles-with-joysticks-for-doubles-with-virtual-reality-glasses-3d-render-on-white-background-no-shadow-2418569.jpg",
            "products": []
        }
    ]

  };
  const offices={
    "message": "success",
    "results": [
        {
            "_id": "645f8e2b7b76313bb21c7f77",
            "name": "حواسيب",
            "department": "645f8e057b76313bb21c7f76",
            "imageUrl": "https://media.istockphoto.com/id/1140541722/photo/modern-laptop-on-white-background.jpg?s=170667a&w=0&k=20&c=T00CzYcAaqwrlZHuF1UgioIorHni-wy-AJ22rhOYt4I=",
            "products": [
                "645f8f927b76313bb21c7f7b"
            ]
        },
        {
            "_id": "645f8eb57b76313bb21c7f79",
            "name": "طاولات",
            "department": "645f8e057b76313bb21c7f76",
            "imageUrl": "https://media.istockphoto.com/id/941224542/vector/real-wood-table-on-a-white-background.jpg?s=170667a&w=0&k=20&c=bR59-yb-Xc-BM2zPNv-SJDuy6KSpWxoNgUGAthxTxmY=",
            "products": [
                "645f903f7b76313bb21c7f7c"
            ]
        },
        {
            "_id": "645f8eef7b76313bb21c7f7a",
            "name": "كراسي",
            "department": "645f8e057b76313bb21c7f76",
            "imageUrl": "https://m.media-amazon.com/images/I/51yifZpYZUL._AC_SY450_.jpg",
            "products": [
                "645f90947b76313bb21c7f7d"
            ]
        },
        {
            "_id": "6496d9139e6d49128b3b0b16",
            "name": "أجهزة الإضاءة الكهربائية",
            "department": "645f8e057b76313bb21c7f76",
            "imageUrl": "https://e7.pngegg.com/pngimages/319/693/png-clipart-furniture-english-%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0-1-%D0%BA%D0%BB%D0%B0%D1%81%D1%81-word-home-appliance-word-light-fixture-english.png",
            "products": []
        },
        {
            "_id": "6496d88b9e6d49128b3b0b15",
            "name": "أجهزة العناية الشخصية",
            "department": "645f8e057b76313bb21c7f76",
            "imageUrl": "https://cdn.salla.sa/RxVPv/IHRB6Or7QhqRdpAcSXlnr3HCoMIi2ffvEonckjTt.jpg",
            "products": []
        },
        {
            "_id": "6496d80b9e6d49128b3b0b14",
            "name": "أجهزة التدفئة والتبريد",
            "department": "645f8e057b76313bb21c7f76",
            "imageUrl": "https://m.media-amazon.com/images/I/612NoFR+faL._AC_UF1000,1000_QL80_.jpg",
            "products": []
        },
        {
            "_id": "6496d7d89e6d49128b3b0b13",
            "name": "أجهزة المطبخ",
            "department": "645f8e057b76313bb21c7f76",
            "imageUrl": "https://www.crushpixel.com/big-static16/preview4/set-household-kitchen-appliances-isolated-2418553.jpg",
            "products": []
        },
        {
            "_id": "6496d77b9e6d49128b3b0b12",
            "name": "الأجهزة المنزلية الذكية",
            "department": "645f8e057b76313bb21c7f76",
            "imageUrl": "https://static.labeb.com/test/images/articles/659/pf3uiuflaor-w1920.jpg",
            "products": []
        }
    ]
  }

  const menFashion={
    "message": "success",
    "results": [
        {
            "_id": "645f96827b76313bb21c7f7f",
            "name": "ملابس رياضية",
            "department": "645f96237b76313bb21c7f7e",
            "imageUrl": "https://img.freepik.com/premium-photo/sport-fashion-style-trend-man-tshirt-shorts-isolated-white-background-bearded-man-blue-casual-clothes-macho-active-wear-workout-training-fitness-gym-activity_474717-50973.jpg?w=360",
            "products": [
                "645f976e7b76313bb21c7f82"
            ]
        },
        {
            "_id": "645f96c27b76313bb21c7f80",
            "name": "تيشيرتات",
            "department": "645f96237b76313bb21c7f7e",
            "imageUrl": "https://m.media-amazon.com/images/I/710oR+PvLUL._UL1212_.jpg",
            "products": [
                "645f97ae7b76313bb21c7f83"
            ]
        },
        {
            "_id": "645f97067b76313bb21c7f81",
            "name": "بنطلونات",
            "department": "645f96237b76313bb21c7f7e",
            "imageUrl": "https://previews.123rf.com/images/nanastudio/nanastudio1903/nanastudio190300704/119056220-a-stack-of-clothes-jeans-pants-on-a-white-background-isolation.jpg",
            "products": [
                "645f97d97b76313bb21c7f84"
            ]
        },
        {
            "_id": "6496b37d977c18fe73645f5a",
            "name": "أحذية",
            "department": "645f96237b76313bb21c7f7e",
            "imageUrl": "https://m.media-amazon.com/images/I/81Z3fcBZjdL._SY535_.jpg",
            "products": []
        },
        {
            "_id": "6496b445977c18fe73645f5b",
            "name": "شنط واكسسوارات",
            "department": "645f96237b76313bb21c7f7e",
            "imageUrl": "https://cdn.salla.sa/QyNPz/C2aLACMEkXsUkDIykRo6u9vSnv12R4S2k4S0Cgf5.jpg",
            "products": []
        },
        {
            "_id": "6496b4de977c18fe73645f5c",
            "name": "شورتات",
            "department": "645f96237b76313bb21c7f7e",
            "imageUrl": "https://pa.namshicdn.com/product/A8/329351W/1-mobile-web-catalog.jpg",
            "products": []
        },
        {
            "_id": "6496b58a977c18fe73645f5d",
            "name": "قمصان",
            "department": "645f96237b76313bb21c7f7e",
            "imageUrl": "https://poster1.net/wp-content/uploads/2018/05/2156-1.jpg",
            "products": []
        },
        {
            "_id": "6496b5fa977c18fe73645f5e",
            "name": "ملابس داخلية وجوارب",
            "department": "645f96237b76313bb21c7f7e",
            "imageUrl": "https://m.media-amazon.com/images/I/814HmJK72gL._AC_SX569_.jpg",
            "products": []
        },
        {
            "_id": "6496b645977c18fe73645f5f",
            "name": "جاكيتات ومعاطف",
            "department": "645f96237b76313bb21c7f7e",
            "imageUrl": "https://m.media-amazon.com/images/I/51fW6uungxL._AC_.jpg",
            "products": []
        },
        {
            "_id": "6496b69c977c18fe73645f60",
            "name": "ملابس السباحة والبحر",
            "department": "645f96237b76313bb21c7f7e",
            "imageUrl": "https://m.media-amazon.com/images/I/51kzmz6cyjL._AC_UF1000,1000_QL80_.jpg",
            "products": []
        }
    ]
  }
  
  const womenFashions={
    "message": "success",
    "results": [
        {
            "_id": "645f9e617b76313bb21c7f89",
            "name": "بلايز",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://previews.123rf.com/images/windu/windu1203/windu120300008/12918952-women-t-shirt-isolated-on-white-background.jpg",
            "products": [
                "645f9efd7b76313bb21c7f8b"
            ]
        },
        {
            "_id": "645f9e137b76313bb21c7f88",
            "name": "فساتين",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://thumbs.dreamstime.com/z/black-polka-dot-retro-dress-white-background-35673897.jpg",
            "products": [
                "645f9ebc7b76313bb21c7f8a"
            ]
        },
        {
            "_id": "6496bcbf977c18fe73645f6f",
            "name": "أحذية",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://www.shutterstock.com/image-photo/female-shoes-on-white-background-260nw-687853159.jpg",
            "products": []
        },
        {
            "_id": "6496b733977c18fe73645f61",
            "name": "شنط",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://media.istockphoto.com/id/1302787124/photo/beige-leather-women-handbag-isolated-on-white-background.jpg?s=170667a&w=0&k=20&c=gniHKRKH4uphRq8z4llHdfnERVxIG2L8kAPIK_MgZAo=",
            "products": []
        },
        {
            "_id": "6496b790977c18fe73645f62",
            "name": "اكسسوارات",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://a7b.cc/wp-content/uploads/2021/04/6686.jpg",
            "products": []
        },
        {
            "_id": "6496b811977c18fe73645f63",
            "name": "بناطيل",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://t3.ftcdn.net/jpg/03/53/00/20/360_F_353002060_e4hrHMAxEQxwlEn6wsUq9SVL8y4fg1oB.jpg",
            "products": []
        },
        {
            "_id": "6496b863977c18fe73645f64",
            "name": "ملابس البحر",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://litb-cgis.rightinthebox.com/images/640x640/202209/bps/product/inc/oopaak1664173177473.jpg",
            "products": []
        },
        {
            "_id": "6496b8bc977c18fe73645f65",
            "name": "ملابس نوم",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://en.pimg.jp/097/085/518/1/97085518.jpg",
            "products": []
        },
        {
            "_id": "6496b93a977c18fe73645f66",
            "name": "تنانير",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://ahlmasr.net/wp-content/uploads/2022/01/b81d906d-6df6-4cf8-bf6a-566cb58f8cf1.webp",
            "products": []
        },
        {
            "_id": "6496b98d977c18fe73645f67",
            "name": "جاكيتات ومعاطف",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://m.media-amazon.com/images/I/514p6dWMqJL._AC_UF1000,1000_QL80_.jpg",
            "products": []
        },
        {
            "_id": "6496ba00977c18fe73645f68",
            "name": "شورتات",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://media-tommy.6thstreet.com/media/catalog/product/cache/dea14d70f0c9beff074352c4088a089a/w/w/ww0ww37772ybl_mo-f1.jpg",
            "products": []
        },
        {
            "_id": "6496ba4f977c18fe73645f69",
            "name": "جينزات",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://www.americaneagle.ae/assets/styles/AmericanEagle/0436_3754_408/image-thumb__811657__product_zoom_large_800x800/0436_3754_408_os.jpg",
            "products": []
        },
        {
            "_id": "6496ba91977c18fe73645f6a",
            "name": "جوارب",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/622173/1.jpg?9672",
            "products": []
        },
        {
            "_id": "6496bae6977c18fe73645f6b",
            "name": "ملابس رياضية",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://i.pinimg.com/originals/e8/0f/9f/e80f9f7130273a411581d3748416dd40.jpg",
            "products": []
        },
        {
            "_id": "6496bbb1977c18fe73645f6c",
            "name": "قمصان",
            "department": "645f9dd27b76313bb21c7f87",
            "imageUrl": "https://m.media-amazon.com/images/I/61z4hJgdq8S._AC_SY445_.jpg",
            "products": []
        }
    ]
  };
  
  const food={
    "message": "success",
    "results": [
        {
            "_id": "645fa2ff7b76313bb21c7f91",
            "name": "مجمدات",
            "department": "645fa2637b76313bb21c7f8c",
            "imageUrl": "https://st4.depositphotos.com/8148510/38123/i/1600/depositphotos_381230368-stock-photo-frozen-vegetables-isolated-white.jpg",
            "products": [
                "645fa4007b76313bb21c7f94",
                "647f0e4569edeff1b9520512",
                "647f0e7e69edeff1b952052f",
                "647f0e9f69edeff1b9520534",
                "647f0edd69edeff1b9520539",
                "647f0f2f69edeff1b952053e",
                "647f141e69edeff1b95205a0",
                "647f158469edeff1b95205a7",
                "647f163169edeff1b95205ad",
                "647f16b769edeff1b95205b3",
                "647f191769edeff1b95205c7",
                "647f195d69edeff1b95205cc",
                "647f19cf69edeff1b95205d5"
            ],
            "__v": 12
        },
        {
            "_id": "645fa2d57b76313bb21c7f90",
            "name": "لحوم",
            "department": "645fa2637b76313bb21c7f8c",
            "imageUrl": "https://img5.goodfon.com/wallpaper/nbig/3/4b/miaso-spetsii-chesnok-perets-iaitsa-griby-pomidory-salat-bel.jpg",
            "products": [
                "645fa3bd7b76313bb21c7f93"
            ]
        },
        {
            "_id": "645fa2a27b76313bb21c7f8f",
            "name": "مشروبات",
            "department": "645fa2637b76313bb21c7f8c",
            "imageUrl": "https://previews.123rf.com/images/olyaw/olyaw1308/olyaw130800162/21718175-various-refreshing-drinks-isolated-on-white-background.jpg",
            "products": [
                "645fa36e7b76313bb21c7f92"
            ]
        },
        {
            "_id": "6496cff89e6d49128b3b0afe",
            "name": "الوجبات السريعة",
            "department": "645fa2637b76313bb21c7f8c",
            "imageUrl": "https://png.pngtree.com/png-vector/20220518/ourlarge/pngtree-illustration-of-the-fast-food-meals-on-the-white-background-with-png-image_4636773.png",
            "products": []
        },
        {
            "_id": "6496d0959e6d49128b3b0aff",
            "name": "المأكولات البحرية",
            "department": "645fa2637b76313bb21c7f8c",
            "imageUrl": "https://www.shutterstock.com/image-photo/fresh-fish-other-seafood-isolated-260nw-254325406.jpg",
            "products": []
        },
        {
            "_id": "6496d0cb9e6d49128b3b0b00",
            "name": "اللحوم والدواجن",
            "department": "645fa2637b76313bb21c7f8c",
            "imageUrl": "https://e7.pngegg.com/pngimages/994/971/png-clipart-raw-meat-illustration-sausage-chicken-meat-poultry-beef-chicken-food-baking.png",
            "products": []
        },
        {
            "_id": "6496d1049e6d49128b3b0b01",
            "name": "السلطات",
            "department": "645fa2637b76313bb21c7f8c",
            "imageUrl": "https://png.pngtree.com/background/20230602/original/pngtree-variety-of-healthy-salads-in-lunch-boxes-with-ingredients-white-wooden-picture-image_2854205.jpg",
            "products": []
        },
        {
            "_id": "6496d1589e6d49128b3b0b02",
            "name": "الحلويات والمخبوزات",
            "department": "645fa2637b76313bb21c7f8c",
            "imageUrl": "https://elikaaonline.com/wp-content/uploads/2022/04/%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0-%D0%BF%D0%BE-%D0%BA%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D0%B8.jpg",
            "products": []
        },
        {
            "_id": "6496d1939e6d49128b3b0b03",
            "name": "سلطات الفواكه",
            "department": "645fa2637b76313bb21c7f8c",
            "imageUrl": "https://c8.alamy.com/comp/2NFKT07/bowl-of-fruit-salad-isolated-on-white-background-top-view-2NFKT07.jpg",
            "products": []
        },
        {
            "_id": "6496d1df9e6d49128b3b0b04",
            "name": "الوجبات النباتية",
            "department": "645fa2637b76313bb21c7f8c",
            "imageUrl": "https://c8.alamy.com/comp/2N65EP8/food-pyramid-on-white-background-top-view-healthy-balanced-diet-2N65EP8.jpg",
            "products": []
        }
    ]
  };

  const perfumes={
    "message": "success",
    "results": [
        {
            "_id": "6460a7538631303fcbd121f4",
            "name": "عطور",
            "department": "6460a6f98631303fcbd121f3",
            "imageUrl": "https://c8.alamy.com/comp/KH07DT/variety-of-perfume-bottles-over-white-background-with-clipping-path-KH07DT.jpg",
            "products": [
                "6460a8158631303fcbd121f5",
                "6464c8ddec66a3eefdd03afe",
                "646e1d830d9478e8db120e91",
                "647063815a121ee7b68a6d80",
                "647ba754f2bc40c920a5b8ce",
                "649219f4dcc4c4ac0e249640",
                "649b5c722605abc7c1c5a0c2"
            ],
            "__v": 6
        },
        {
            "_id": "6496d2879e6d49128b3b0b05",
            "name": "عطور رجالية",
            "department": "6460a6f98631303fcbd121f3",
            "imageUrl": "https://pixel-shot.com/get_image/i-3097168-0.JPG",
            "products": []
        },
        {
            "_id": "6496d31a9e6d49128b3b0b06",
            "name": "عطور نسائية",
            "department": "6460a6f98631303fcbd121f3",
            "imageUrl": "https://st.depositphotos.com/1005833/3115/i/950/depositphotos_31154745-stock-photo-young-woman-applying-perfume-on.jpg",
            "products": []
        }
    ]
  }
  const watches={
    "message": "success",
    "results": [
        {
            "_id": "6460a9f08631303fcbd121f8",
            "name": "رقمية",
            "department": "6460a9938631303fcbd121f6",
            "imageUrl": "https://media.gq.com/photos/628fb606ef6cfbae4e494244/master/w_2000,h_1333,c_limit/watch-7.jpg",
            "products": [
                "64633525d637b6f1a85ef88c",
                "64b11533e1f94c09dd94f52c"
            ],
            "__v": 77
        },
        {
            "_id": "6460aa1c8631303fcbd121f9",
            "name": "سوار معدني",
            "department": "6460a9938631303fcbd121f6",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZK0ngTmb14y5Z228lsCW7bovEX13rt0Q-x8wxLGMnqNeh2zhKS8lTkp_1eTpm38iuPk&usqp=CAU",
            "products": [
                "64633568d637b6f1a85ef88d"
            ],
            "__v": 9
        },
        {
            "_id": "6496d3899e6d49128b3b0b07",
            "name": "الساعات الرياضية",
            "department": "6460a9938631303fcbd121f6",
            "imageUrl": "https://listto.net/wp-content/uploads/2019/12/fitbit_versa-275x300.jpg",
            "products": []
        },
        {
            "_id": "6496d3eb9e6d49128b3b0b08",
            "name": "الساعات الأنيقة",
            "department": "6460a9938631303fcbd121f6",
            "imageUrl": "https://www.crushpixel.com/big-static16/preview4/elegant-watch-wallet-2296555.jpg",
            "products": []
        },
        {
            "_id": "6496d46d9e6d49128b3b0b0a",
            "name": "الساعات الذكية",
            "department": "6460a9938631303fcbd121f6",
            "imageUrl": "https://supercairo.com/wp-content/uploads/2016/05/%D8%B5%D9%88%D8%B1-%D8%B3%D8%A7%D8%B9%D8%A7%D8%AA-%D8%B0%D9%83%D9%8A%D8%A9-%D9%84%D9%84%D9%87%D9%88%D8%A7%D8%AA%D9%81-%D9%85%D9%88%D8%AF%D9%8A%D9%84%D8%A7%D8%AA-%D8%A7%D8%A8%D9%84-%D9%88%D8%A7%D9%86%D8%AF%D8%B1%D9%88%D9%8A%D8%AF-10.jpg",
            "products": []
        },
        {
            "_id": "6496d4d69e6d49128b3b0b0c",
            "name": "ساعات الحائط",
            "department": "6460a9938631303fcbd121f6",
            "imageUrl": "https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-wall-clock-image_803177.jpg",
            "products": []
        }
    ]
  }

  const animals={
    "message": "success",
    "results": [
        {
            "_id": "6496e52a9e6d49128b3b0b1b",
            "name": "الطيور",
            "department": "6496e4ca9e6d49128b3b0b18",
            "imageUrl": "https://png.pngtree.com/png-clipart/20230429/ourlarge/pngtree-blue-bird-stand-on-branch-white-background-png-image_6746744.png",
            "products": []
        },
        {
            "_id": "6496e6339e6d49128b3b0b1c",
            "name": "قطط",
            "department": "6496e4ca9e6d49128b3b0b18",
            "imageUrl": "https://img.freepik.com/premium-photo/funny-large-longhair-white-cute-kitten-with-beautiful-blue-eyes_253512-126.jpg",
            "products": []
        },
        {
            "_id": "6496e67f9e6d49128b3b0b1d",
            "name": "كلاب",
            "department": "6496e4ca9e6d49128b3b0b18",
            "imageUrl": "https://media.istockphoto.com/id/1402896772/photo/red-pomeranian-dog-panting-and-sitting-in-front-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=uotZPWFOdOyCbgGYF4WKmaCVGLerZm0OgbvL2Tzo-7c=",
            "products": []
        },
        {
            "_id": "6496e6d49e6d49128b3b0b1e",
            "name": "أرانب",
            "department": "6496e4ca9e6d49128b3b0b18",
            "imageUrl": "https://www.crushpixel.com/big-static15/preview4/baby-bunny-on-white-background-2146026.jpg",
            "products": []
        },
        {
            "_id": "6496e70a9e6d49128b3b0b1f",
            "name": "أسماك",
            "department": "6496e4ca9e6d49128b3b0b18",
            "imageUrl": "https://t4.ftcdn.net/jpg/02/47/87/09/360_F_247870994_H8ECAEk6zd4rBtetmiW5VOPxRdMW7spF.jpg",
            "products": []
        }
    ]
  }

  const music={
    "message": "success",
    "results": [
        {
            "_id": "6496e86e9e6d49128b3b0b21",
            "name": "الوترية",
            "department": "6496e83b9e6d49128b3b0b20",
            "imageUrl": "https://png.pngtree.com/png-clipart/20190603/original/pngtree-vector-cello-png-image_108148.jpg",
            "products": []
        },
        {
            "_id": "6496ea989e6d49128b3b0b22",
            "name": "النفخية",
            "department": "6496e83b9e6d49128b3b0b20",
            "imageUrl": "https://img.freepik.com/premium-vector/clarinet-musical-instrument-isolated-white-background-vector_273525-757.jpg?w=2000",
            "products": []
        },
        {
            "_id": "6496eae49e6d49128b3b0b23",
            "name": "الإيقاعية",
            "department": "6496e83b9e6d49128b3b0b20",
            "imageUrl": "https://cdn.wallpapersafari.com/37/69/CJSo2u.jpg",
            "products": []
        },
        {
            "_id": "6496eb429e6d49128b3b0b24",
            "name": "الكهربائية",
            "department": "6496e83b9e6d49128b3b0b20",
            "imageUrl": "https://e7.pngegg.com/pngimages/911/289/png-clipart-korg-kronos-korg-trinity-korg-m1-music-workstation-musical-instruments-piano-digital-piano-thumbnail.png",
            "products": []
        }
    ]
  }
  
  const sport={
    "message": "success",
    "results": [
        {
            "_id": "6496ec5e9e6d49128b3b0b27",
            "name": "أجهزة القوة",
            "department": "6496ebd99e6d49128b3b0b26",
            "imageUrl": "https://m.media-amazon.com/images/I/51Zk6aE2uzL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFOUR%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA199%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
            "products": []
        },
        {
            "_id": "6496ecc99e6d49128b3b0b28",
            "name": "الأجهزة الهوائية",
            "department": "6496ebd99e6d49128b3b0b26",
            "imageUrl": "https://media.zid.store/thumbs/2d44c263-88a6-47d8-8587-4dd4c649a6ce/b83ded2e-642f-4a8a-928d-33a9435dcdfa-thumbnail-770x770-70.jpg",
            "products": []
        },
        {
            "_id": "6496edf99e6d49128b3b0b29",
            "name": "معدات الاحماء والتمدد",
            "department": "6496ebd99e6d49128b3b0b26",
            "imageUrl": "https://www.sayidaty.net/sites/default/files/styles/900_scale/public/2022-08/147444.jpeg",
            "products": []
        }
    ]
  }

  const agriculture={
    "message": "success",
    "results": [
        {
            "_id": "6496ee9b9e6d49128b3b0b2b",
            "name": "البذور والشتلات",
            "department": "6496ee5a9e6d49128b3b0b2a",
            "imageUrl": "https://media.barakatfresh.ae/media/catalog/product/cache/991eeaa3837399618b43d1cd04e346f4/b/a/basil-in-pot-1piece.jpg",
            "products": []
        },
        {
            "_id": "6496ef029e6d49128b3b0b2c",
            "name": "المبيدات والأسمدة",
            "department": "6496ee5a9e6d49128b3b0b2a",
            "imageUrl": "https://png.pngtree.com/png-clipart/20220619/original/pngtree-black-and-white-illustration-of-pest-control-exterminator-spraying-side-view-png-image_8107111.png",
            "products": []
        }
    ]
  }

  const mockData=[
    {
      "author": "Jayme Petracci",
      "title": "This is awesome!",
      "content": "Lorem ipsum ...",
      "imgSrc": "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      "author": "Liuka Kivell",
      "title": "The best tutorial!",
      "content": "Lorem ipsum ...",
      "imgSrc": "https://randomuser.me/api/portraits/men/48.jpg"
    },
    {
      "author": "Chrysler Grinikhinov",
      "title": "Revenue increased by 50%",
      "content": "Lorem ipsum ...",
      "imgSrc": "https://randomuser.me/api/portraits/men/49.jpg"
    },
    {
      "author": "Kessiah Cornbell",
      "title": "Lorem ipsum",
      "content": "Lorem ipsum ...",
      "imgSrc": "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
      "author": "Wash Pont",
      "title": "The best overall service",
      "content": "Lorem ipsum ...",
      "imgSrc": "https://randomuser.me/api/portraits/men/51.jpg"
    }
  ];
  return (
    <div className='flex flex-col justify center w-full'>
      {/* <AppCarousel/> */}
      {/* categories */}
      <CategorySection title='Electronics Devices' data={electronics}/>
      <CategorySection title='Office Devices' data={offices}/>
      <CategorySection title='Men Fashion ' data={menFashion}/>
      <CategorySection title='Women Fashion ' data={womenFashions}/>
      <CategorySection title='Food' data={food}/>
      <CategorySection title='Perfumes' data={perfumes}/>
      <CategorySection title='Watches' data={watches}/>
      <CategorySection title='Animals' data={animals}/>
      <CategorySection title='Instrumentals' data={music}/>
      <CategorySection title='Sports' data={sport}/>
      <CategorySection title='Agriculture' data={agriculture}/>
      {/* deals */}
      <DealSection title='Deals'/>

      {/* Ads */}
      
      <AdsSection title='Advertisments'/>

      {/* News */}
      <NewsSection title='News'/>

      
    </div>
  )
}

export default Home