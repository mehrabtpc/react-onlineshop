import Master from "../Layouts/Master";
import Story from "./Story";
import React, { useEffect,useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Categories from "./Categories";
import DiscountBoxes from "./DiscountBoxes";
import AmazingProducts from "./AmazingProducts";
import Banners from "./Banners";
import Recomendations from "./Recomendations";
import Favorites from "./Favorites";
import RecentVisits from "./RecentVisits";
import Blog from "./Blog";
import Slider from "./Slider";

export default function Home() {
    
  const BestSales = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
      if (swiperRef.current) {
        const bestSalesSwiper = new Swiper('.bestSales', {
          modules: [Navigation],
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          slidesPerView: 1,
          spaceBetween: 20,
          breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
          },
          on: {
            init: function () {
              console.log('Swiper initialized');
            },
          },
        });

        // منتظر موندن برای لود کامل محتوا
        setTimeout(() => {
          bestSalesSwiper.update();
        }, 100);

        return () => {
          bestSalesSwiper.destroy();
        };
      }
    }, []);
  }
  
  return (
    <Master>
      <Story />
      <Slider />

      <main className="container mt-5">
        <Categories />
        <DiscountBoxes />
        <AmazingProducts />
        <Banners />
        <Recomendations />
        <Favorites />
        <RecentVisits />
        <Blog />
      </main>
  </Master>
  );
}
