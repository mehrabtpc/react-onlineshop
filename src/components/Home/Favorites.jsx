import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Favorites(){
      //it should come from DB

      const favoriteProducts = [
      {
        id: 1,
        products: [
          { id: 1, name: 'گوشی موبایل سامسونگ', image: 'assets/img/some-p-1.jpg', rank: 1 },
          { id: 2, name: 'گوشی موبایل هاوایی', image: 'assets/img/some-p-2.jpg', rank: 2 },
          { id: 3, name: 'گوشی موبایل نوکیا', image: 'assets/img/some-p-3.jpg', rank: 3 }
        ]
      },
      {
        id: 2,
        products: [
          { id: 4, name: 'لپ تاپ اپل', image: 'assets/img/some-p-4.jpg', rank: 1 },
          { id: 5, name: 'لپ تاپ ایسوس', image: 'assets/img/some-p-5.jpg', rank: 2 },
          { id: 6, name: 'لپ تاپ دل', image: 'assets/img/some-p-6.jpg', rank: 3 }
        ]
      },
  
      {
        id: 3,
        products: [
          { id: 4, name: 'لپ تاپ اپل', image: 'assets/img/some-p-4.jpg', rank: 1 },
          { id: 5, name: 'لپ تاپ ایسوس', image: 'assets/img/some-p-5.jpg', rank: 2 },
          { id: 6, name: 'لپ تاپ دل', image: 'assets/img/some-p-6.jpg', rank: 3 }
        ]
      },
      {
        id: 4,
        products: [
          { id: 4, name: 'لپ تاپ اپل', image: 'assets/img/some-p-4.jpg', rank: 1 },
          { id: 5, name: 'لپ تاپ ایسوس', image: 'assets/img/some-p-5.jpg', rank: 2 },
          { id: 6, name: 'لپ تاپ دل', image: 'assets/img/some-p-6.jpg', rank: 3 }
        ]
      }
  
    ];

    return (
            <section className="best-sales-section mt-5 position-relative rounded-4 overflow-hidden">
      <h2 className="text-center py-3 fw-semibold fs-4">
        <i className="fa fa-bolt me-2 fs-6"></i>
        محبوب‌ترین محصولات
      </h2>

      <div className="px-2 py-4">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.custom-swiper-next',
            prevEl: '.custom-swiper-prev',
          }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
          }}
        >
          {favoriteProducts.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="product-slide-item">
                {slide.products.map((product) => (
                  <a
                    key={product.id}
                    href="#"
                    className="d-flex align-items-center justify-content-between product-link"
                  >
                    <div className="product-image">
                      <img src={product.image} alt={product.name} className="img-fluid" />
                    </div>
                    <div className="rank-number">{product.rank}</div>
                    <div className="product-info">
                      <p>{product.name}</p>
                    </div>
                  </a>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-next custom-swiper-btn custom-swiper-next"></div>
        <div className="swiper-button-prev custom-swiper-btn custom-swiper-prev"></div>
      </div>

      <a href="#" className="see-all text-center d-block mt-3">مشاهده‌ی تمام محصولات</a>
    </section>
    );
}