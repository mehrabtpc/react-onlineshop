import Master from "../Layouts/Master";
import Story from "./Story";
import React, { useEffect,useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
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
      <br /><br /><br />
      <Story />

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content story-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>

              <div className="story-videos-box mt-3">
                <div className="row profile-box p-2 d-flex justify-content-between font-vazir">
                  <div className="col-auto">
                    <img src="assets/img/profile2.png" alt="" />
                    <span className="px-2 text-white font-sans fw-bold">Saeid Tohidi</span>
                  </div>
                  <div className="col-auto">
                    <div className="btn btn-primary">دنبال کنید</div>
                  </div>
                </div>
                <div className="row feedback-box p-2 d-flex flex-column text-white font-sans mt-5">
                  <div className="col-auto text-white text-center">
                    <i className="fa-regular fa-heart"></i>
                    <div className="px-2">18</div>
                  </div>
                  <div className="col-auto mt-3 text-center">
                    <div className="story-comment">
                      <i className="fa-regular fa-comment"></i>
                    </div>
                    <div className="px-2">14</div>
                  </div>
                </div>
                <div className="story-video-title text-white fw-bold font-sans">
                  <span>عنوان معرفی محصول</span>
                </div>
                <video id="story-slider" controls loop="loop">
                  <source src="assets/img/1111.mp4" type="video/mp4" />
                </video>
                <ul className="story-navigation d-flex flex-md-column">
                  <li className="story-videos">
                    <img className="story-thumb" src="assets/img/thumb1.jpg" alt="preview1" data-video="images/1111.mp4" />
                  </li>
                  <li className="story-videos">
                    <img className="story-thumb" src="assets/img/thumb2.jpg" alt="preview2" data-video="images/2222.mp4" />
                  </li>
                  <li className="story-videos">
                    <img className="story-thumb" src="assets/img/thumb3.jpg" alt="preview3" data-video="images/3333.mp4" />
                  </li>
                  <li className="story-videos">
                    <img className="story-thumb" src="assets/img/thumb4.jpg" alt="preview4" data-video="images/4444.mp4" />
                  </li>
                </ul>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>

              <div className="swiper story-other-prd mt-3">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="#">
                      <div className="other-prd bg-white d-flex align-items-center">
                        <div className="p-2 px-0"></div>
                        <div className="bs-img">
                          <img src="assets/img/bs-mobile.jpg" alt="" />
                        </div>
                        <div className="bs-detail p-2 text-color">
                          <span>
                            گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - ویتنام
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <div className="other-prd bg-white d-flex align-items-center">
                        <div className="p-2 px-0"></div>
                        <div className="bs-img">
                          <img src="assets/img/bs-mobile.jpg" alt="" />
                        </div>
                        <div className="bs-detail p-2 text-color">
                          <span>
                            گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - ویتنام
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <div className="other-prd bg-white d-flex align-items-center">
                        <div className="p-2 px-0"></div>
                        <div className="bs-img">
                          <img src="assets/img/bs-mobile.jpg" alt="" />
                        </div>
                        <div className="bs-detail p-2 text-color">
                          <span>
                            گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - ویتنام
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header::start */}
      <div className="w-100 px-3">
        <div className="swiper heroSlider rounded-3 position-relative">
          <div className="swiper-wrapper">
            <a href="#" className="swiper-slide">
              <img src="assets/img/header-slider-1.jpg" alt="" className="hero-slide-img w-100" />
            </a>
            <a href="#" className="swiper-slide">
              <img src="assets/img/header-slider-2.jpg" alt="" className="hero-slide-img w-100" />
            </a>
            <a href="#" className="swiper-slide">
              <img src="assets/img/header-slider-3.jpg" alt="" className="hero-slide-img w-100" />
            </a>
          </div>

          {/* SVGهای تزئینی */}
          <svg
            className="position-absolute hero-left-svg d-none d-md-block"
            width="70"
            height="255"
            viewBox="0 0 76 285"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_6_41)">
              <path d="M70 275V10C70 86 14 91.0878 14 142.752C14 194.416 70 201 70 275Z" fill="white"></path>
            </g>
            <defs>
              <filter
                id="filter0_d_6_41"
                x="0"
                y="0"
                width="76"
                height="285"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dx="-4"></feOffset>
                <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_41"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_41" result="shape"></feBlend>
              </filter>
            </defs>
          </svg>

          <svg
            className="position-absolute hero-right-svg d-none d-md-block"
            width="70"
            height="255"
            viewBox="0 0 76 285"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_6_41)">
              <path d="M70 275V10C70 86 14 91.0878 14 142.752C14 194.416 70 201 70 275Z" fill="white"></path>
            </g>
            <defs>
              <filter
                id="filter0_d_6_41"
                x="0"
                y="0"
                width="76"
                height="285"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dx="-4"></feOffset>
                <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_41"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_41" result="shape"></feBlend>
              </filter>
            </defs>
          </svg>

          <svg
            className="position-absolute hero-bottom-svg d-none d-md-block"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 480 110"
            width="480"
            height="110"
            style={{ filter: "drop-shadow(0 -7px 25px rgba(0,0,0,0.3))" }}
          >
            <defs>
              <path
                d="M-607 -202L1073 -202L1073 0C679.8 0 461.36 0 417.67 0C368 0 358 50 327.34 50C310.37 50 174.64 50 157.67 50C128 50 118 0 67 0C22.07 0 -202.6 0 -607 0L-607 -202Z"
                id="dixoAXFOW"
              ></path>
            </defs>
            <use xlinkHref="#dixoAXFOW" opacity="1" fill="#ffffff" fillOpacity="1"></use>
          </svg>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      {/* Header::end */}

        <div className="banner container d-md-block d-none my-5">
          <div className="row">
            <div className="col-12">
              <a href="" title="" className="banner-item">
                <div className="">
                  {" "}
                  {/* wrapper خارجی */}
                  <div className="">
                    {" "}
                    {/* inner که transform روی آن می‌رود */}
                    <img src="assets/img/md-banner.jpg" alt="" className="w-100 border-radius-3xl" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      <main className="container mt-5">
        <section className="categories mt-5">
          <h2 className="text-center fs-4">دسته بندی ها</h2>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 offset-sm-0 offset-md-0 offset-lg-2 offset-xl-2 mb-3">
              <div className="row">
                <div className="col-4 col-lg-2 col-xl-2 mb-4">
                  <a href="" title="">
                    <img src="../assets/img/category-1.jpg" alt="" className="img-fluid img-opacity" />
                    <strong className="text-center d-block fs-7">خانه و آشپرخانه</strong>
                  </a>
                </div>

                <div className="col-4 col-lg-2 col-xl-2 mb-4">
                  <a href="" title="">
                    <img src="assets/img/category-2.jpg" alt="" className="img-fluid img-opacity" />
                    <strong className="text-center d-block fs-7">اسباب بازی</strong>
                  </a>
                </div>

                <div className="col-4 col-lg-2 col-xl-2 mb-4">
                  <a href="" title="">
                    <img src="assets/img/category-3.jpg" alt="" className="img-fluid img-opacity" />
                    <strong className="text-center d-block fs-7">شخصی</strong>
                  </a>
                </div>

                <div className="col-4 col-lg-2 col-xl-2 mb-4">
                  <a href="" title="">
                    <img src="assets/img/category-4.jpg" alt="" className="img-fluid img-opacity" />
                    <strong className="text-center d-block fs-7">ورزش</strong>
                  </a>
                </div>

                <div className="col-4 col-lg-2 col-xl-2 mb-4">
                  <a href="" title="">
                    <img src="assets/img/category-5.jpg" alt="" className="img-fluid img-opacity" />
                    <strong className="text-center d-block fs-7">ورزش</strong>
                  </a>
                </div>

                <div className="clearfix"></div>

                <div className="col-4 col-lg-2 col-xl-2 mb-4">
                  <a href="" title="">
                    <img src="assets/img/category-6.jpg" alt="" className="img-fluid img-opacity" />
                    <strong className="text-center d-block fs-7">خانه و آشپرخانه</strong>
                  </a>
                </div>

                <div className="col-4 col-lg-2 col-xl-2 mb-4">
                  <a href="" title="">
                    <img src="assets/img/category-7.jpg" alt="" className="img-fluid img-opacity" />
                    <strong className="text-center d-block fs-7">اسباب بازی</strong>
                  </a>
                </div>

                <div className="col-4 col-lg-2 col-xl-2 mb-4">
                  <a href="" title="">
                    <img src="assets/img/category-8.jpg" alt="" className="img-fluid img-opacity" />
                    <strong className="text-center d-block fs-7">شخصی</strong>
                  </a>
                </div>

                <div className="col-4 col-lg-2 col-xl-2 mb-4">
                  <a href="" title="">
                    <img src="assets/img/category-9.jpg" alt="" className="img-fluid img-opacity" />
                    <strong className="text-center d-block fs-7">ورزش</strong>
                  </a>
                </div>

                <div className="col-4 col-lg-2 col-xl-2 mb-4">
                  <a href="" title="">
                    <img src="assets/img/category-10.jpg" alt="" className="img-fluid img-opacity" />
                    <strong className="text-center d-block fs-7">ورزش</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="banners mt-4">
          <div className="row">
            <div className="col-6 col-lg-3 col-xl-3 mb-3">
              <a href="" title="">
                <img src="assets/img/small-banner-1.jpg" alt="" className="img-fluid border-radius-3xl img-opacity" />
              </a>
            </div>
            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
              <a href="" title="">
                <img src="assets/img/small-banner-3.jpg" alt="" className="img-fluid border-radius-3xl img-opacity" />
              </a>
            </div>
            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
              <a href="" title="">
                <img src="assets/img/small-banner-4.jpg" alt="" className="img-fluid border-radius-3xl img-opacity" />
              </a>
            </div>
            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
              <a href="" title="">
                <img src="assets/img/small-banner-5.jpg" alt="" className="img-fluid border-radius-3xl img-opacity" />
              </a>
            </div>
          </div>
        </div>

        <div className="best-suggestions border-radius-2xl py-1">
          <div className="swiper bestSuggestionsSlider">
            <div className="swiper-wrapper p-2">
              <div className="swiper-slide text-center d-flex flex-column justify-content-between align-items-center">
                <img src="assets/img/Amazings.png" alt="" className="amazing-img" />
                <img src="../assets/img/32.jpg" alt="" className="box-img d-block" />
                <a href="#" className="text-white d-block mt-3" title="">مشاهده همه <i className="fa fa-angle-left align-baseline ms-1"></i></a>
              </div>
              <div className="swiper-slide border-radius-1-tr-br">
                <img src="assets/img/coat-1.jpg" className="img-fluid" alt="" />
                <div className="product-details d-flex justify-content-between align-items-center mt-4">
                  <span className="discount-amount text-white px-2 border-radius-3xl fs-6 fw-bold d">25 %</span>
                  <span className="discounted_price fw-bold fs-5">269000 <span>تومان</span></span>
                </div>
                <del className="d-block real_price float-end gray-500 pe-4">290,000</del>
                <div className="position-relative">
                  <ul className="example">
                    <li><span className="days">00</span><p className="days_text">Days</p></li>
                    <li className="seperator">:</li>
                    <li><span className="hours">00</span><p className="hours_text">Hours</p></li>
                    <li className="seperator">:</li>
                    <li><span className="minutes">00</span><p className="minutes_text">Minutes</p></li>
                    <li className="seperator">:</li>
                    <li><span className="seconds">00</span><p className="seconds_text">Seconds</p></li>
                  </ul>
                </div>
                <a href="#" className="stretched-link" title=""></a>
              </div>
              <div className="swiper-slide">
                <img src="assets/img/coat-2.jpg" className="img-fluid" alt="" />
                <div className="product-details d-flex justify-content-between align-items-center mt-4">
                  <span className="discount-amount text-white px-2 border-radius-3xl fs-6 fw-bold">25 %</span>
                  <span className="discounted_price fw-bold fs-5">269000 <span>تومان</span></span>
                </div>
                <del className="d-block real_price float-end gray-500 pe-4">290,000</del>
                <div className="position-relative">
                  <ul className="example">
                    <li><span className="days">00</span><p className="days_text">Days</p></li>
                    <li className="seperator">:</li>
                    <li><span className="hours">00</span><p className="hours_text">Hours</p></li>
                    <li className="seperator">:</li>
                    <li><span className="minutes">00</span><p className="minutes_text">Minutes</p></li>
                    <li className="seperator">:</li>
                    <li><span className="seconds">00</span><p className="seconds_text">Seconds</p></li>
                  </ul>
                </div>
                <a href="#" className="stretched-link" title=""></a>
              </div>
              <div className="swiper-slide">
                <img src="assets/img/coat-3.jpg" className="img-fluid" alt="" />
                <div className="product-details d-flex justify-content-between align-items-center mt-4">
                  <span className="discount-amount text-white px-2 border-radius-3xl fs-6 fw-bold">25 %</span>
                  <span className="discounted_price fw-bold fs-5">269000 <span>تومان</span></span>
                </div>
                <del className="d-block real_price float-end gray-500 pe-4">290,000</del>
                <div className="position-relative">
                  <ul className="example">
                    <li><span className="days">00</span><p className="days_text">Days</p></li>
                    <li className="seperator">:</li>
                    <li><span className="hours">00</span><p className="hours_text">Hours</p></li>
                    <li className="seperator">:</li>
                    <li><span className="minutes">00</span><p className="minutes_text">Minutes</p></li>
                    <li className="seperator">:</li>
                    <li><span className="seconds">00</span><p className="seconds_text">Seconds</p></li>
                  </ul>
                </div>
                <a href="#" className="stretched-link" title=""></a>
              </div>
              <div className="swiper-slide">
                <img src="assets/img/coat-4.jpg" className="img-fluid" alt="" />
                <div className="product-details d-flex justify-content-between align-items-center mt-4">
                  <span className="discount-amount text-white px-2 border-radius-3xl fs-6 fw-bold">25 %</span>
                  <span className="discounted_price fw-bold fs-5">269000 <span>تومان</span></span>
                </div>
                <del className="d-block real_price float-end gray-500 pe-4">290,000</del>
                <div className="position-relative">
                  <ul className="example">
                    <li><span className="days">00</span><p className="days_text">Days</p></li>
                    <li className="seperator">:</li>
                    <li><span className="hours">00</span><p className="hours_text">Hours</p></li>
                    <li className="seperator">:</li>
                    <li><span className="minutes">00</span><p className="minutes_text">Minutes</p></li>
                    <li className="seperator">:</li>
                    <li><span className="seconds">00</span><p className="seconds_text">Seconds</p></li>
                  </ul>
                </div>
                <a href="#" className="stretched-link" title=""></a>
              </div>
              <div className="swiper-slide">
                <img src="assets/img/coat-5.jpg" className="img-fluid" alt="" />
                <div className="product-details d-flex justify-content-between align-items-center mt-4">
                  <span className="discount-amount text-white px-2 border-radius-3xl fs-6 fw-bold">25 %</span>
                  <span className="discounted_price fw-bold fs-5">269000 <span>تومان</span></span>
                </div>
                <del className="d-block real_price float-end gray-500 pe-4">290,000</del>
                <div className="position-relative">
                  <ul className="example">
                    <li><span className="days">00</span><p className="days_text">Days</p></li>
                    <li className="seperator">:</li>
                    <li><span className="hours">00</span><p className="hours_text">Hours</p></li>
                    <li className="seperator">:</li>
                    <li><span className="minutes">00</span><p className="minutes_text">Minutes</p></li>
                    <li className="seperator">:</li>
                    <li><span className="seconds">00</span><p className="seconds_text">Seconds</p></li>
                  </ul>
                </div>
                <a href="#" className="stretched-link" title=""></a>
              </div>
              <div className="swiper-slide">
                <img src="assets/img/coat-6.jpg" className="img-fluid" alt="" />
                <div className="product-details d-flex justify-content-between align-items-center mt-4">
                  <span className="discount-amount text-white px-2 border-radius-3xl fs-6 fw-bold">25 %</span>
                  <span className="discounted_price fw-bold fs-5">269000 <span>تومان</span></span>
                </div>
                <del className="d-block real_price float-end gray-500 pe-4">290,000</del>
                <div className="position-relative">
                  <ul className="example">
                    <li><span className="days">00</span><p className="days_text">Days</p></li>
                    <li className="seperator">:</li>
                    <li><span className="hours">00</span><p className="hours_text">Hours</p></li>
                    <li className="seperator">:</li>
                    <li><span className="minutes">00</span><p className="minutes_text">Minutes</p></li>
                    <li className="seperator">:</li>
                    <li><span className="seconds">00</span><p className="seconds_text">Seconds</p></li>
                  </ul>
                </div>
                <a href="#" className="stretched-link" title=""></a>
              </div>
              <div className="swiper-slide">
                <img src="assets/img/coat-7.jpg" className="img-fluid" alt="" />
                <div className="product-details d-flex justify-content-between align-items-center mt-4">
                  <span className="discount-amount text-white px-2 border-radius-3xl fs-6 fw-bold">25 %</span>
                  <span className="discounted_price fw-bold fs-5">269000 <span>تومان</span></span>
                </div>
                <del className="d-block real_price float-end gray-500 pe-4">290,000</del>
                <div className="position-relative">
                  <ul className="example">
                    <li><span className="days">00</span><p className="days_text">Days</p></li>
                    <li className="seperator">:</li>
                    <li><span className="hours">00</span><p className="hours_text">Hours</p></li>
                    <li className="seperator">:</li>
                    <li><span className="minutes">00</span><p className="minutes_text">Minutes</p></li>
                    <li className="seperator">:</li>
                    <li><span className="seconds">00</span><p className="seconds_text">Seconds</p></li>
                  </ul>
                </div>
                <a href="#" className="stretched-link" title=""></a>
              </div>
              <div className="swiper-slide">
                <img src="assets/img/coat-8.jpg" className="img-fluid" alt="" />
                <div className="product-details d-flex justify-content-between align-items-center mt-4">
                  <span className="discount-amount text-white px-2 border-radius-3xl fs-6 fw-bold">25 %</span>
                  <span className="discounted_price fw-bold fs-5">269000 <span>تومان</span></span>
                </div>
                <del className="d-block real_price float-end gray-500 pe-4">290,000</del>
                <div className="position-relative">
                  <ul className="example">
                    <li><span className="days">00</span><p className="days_text">Days</p></li>
                    <li className="seperator">:</li>
                    <li><span className="hours">00</span><p className="hours_text">Hours</p></li>
                    <li className="seperator">:</li>
                    <li><span className="minutes">00</span><p className="minutes_text">Minutes</p></li>
                    <li className="seperator">:</li>
                    <li><span className="seconds">00</span><p className="seconds_text">Seconds</p></li>
                  </ul>
                </div>
                <a href="#" className="stretched-link" title=""></a>
              </div>
              <div className="swiper-slide">
                <img src="assets/img/coat-9.jpg" className="img-fluid" alt="" />
                <div className="product-details d-flex justify-content-between align-items-center mt-4">
                  <span className="discount-amount text-white px-2 border-radius-3xl fs-6 fw-bold">25 %</span>
                  <span className="discounted_price fw-bold fs-5">269000 <span>تومان</span></span>
                </div>
                <del className="d-block real_price float-end gray-500 pe-4">290,000</del>
                <div className="position-relative">
                  <ul className="example">
                    <li><span className="days">00</span><p className="days_text">Days</p></li>
                    <li className="seperator">:</li>
                    <li><span className="hours">00</span><p className="hours_text">Hours</p></li>
                    <li className="seperator">:</li>
                    <li><span className="minutes">00</span><p className="minutes_text">Minutes</p></li>
                    <li className="seperator">:</li>
                    <li><span className="seconds">00</span><p className="seconds_text">Seconds</p></li>
                  </ul>
                </div>
                <a href="#" className="stretched-link" title=""></a>
              </div>
              <div className="swiper-slide border-radius-1-tl-bl text-center">
                <i className="fa fa-angle-left border-gray-300 text-info"></i>
                <a href="#" className="stretched-link d-block text-black-50" title="">مشاهده همه</a>
              </div>
            </div>
            <div className="swiper-button-next bg-light border-radius-circle border-gray-400"></div>
            <div className="swiper-button-prev bg-light border-radius-circle border-gray-400"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>

        <div className="banners my-5">
          <div className="row">
            <div className="col-md-6 col-12">
              <a href="" title="" className="banner-item">
                <div className="banner-inner">
                  <img src="assets/img/banner-md-1.jpg" alt="" className="img-fluid" />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-12">
              <a href="" title="" className="banner-item">
                <div className="banner-inner">
                  <img src="assets/img/banner-md-2.jpg" alt="" className="img-fluid" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <section className="suggestions">
          <h2 className="text-center fs-4 mb-4">پیشنهاد شاپیک</h2>
          <div className="wrapper border overflow-hidden border-radius-3xl">
            <div className="row g-0">
              <div className="suggest-item col-6 col-md-4 col-lg-2 col-xl-2">
                <div className="item-inner text-center p-3">
                  <a href="#" className="stretched-link d-block">
                    <img src="assets/img/suggest-1.jpg" alt="گوشی" className="img-fluid p-1" />
                    <h4 className="title mt-3 fs-7">گوشی</h4>
                  </a>
                </div>
              </div>

              <div className="suggest-item col-6 col-md-4 col-lg-2 col-xl-2">
                <div className="item-inner text-center p-3">
                  <a href="#" className="stretched-link d-block">
                    <img src="assets/img/suggest-2.jpg" alt="ساعت هوشمند" className="img-fluid p-1" />
                    <h4 className="title mt-3 fs-7">ساعت هوشمند</h4>
                  </a>
                </div>
              </div>

              <div className="suggest-item col-6 col-md-4 col-lg-2 col-xl-2">
                <div className="item-inner text-center p-3">
                  <a href="#" className="stretched-link d-block">
                    <img src="assets/img/suggest-3.jpg" alt="هدفون" className="img-fluid p-1" />
                    <h4 className="title mt-3 fs-7">هدفون</h4>
                  </a>
                </div>
              </div>

              <div className="suggest-item col-6 col-md-4 col-lg-2 col-xl-2">
                <div className="item-inner text-center p-3">
                  <a href="#" className="stretched-link d-block">
                    <img src="assets/img/suggest-4.jpg" alt="لپ تاپ" className="img-fluid p-1" />
                    <h4 className="title mt-3 fs-7">لپ تاپ</h4>
                  </a>
                </div>
              </div>

              <div className="suggest-item col-6 col-md-4 col-lg-2 col-xl-2">
                <div className="item-inner text-center p-3">
                  <a href="#" className="stretched-link d-block">
                    <img src="assets/img/suggest-5.jpg" alt="تلویزیون" className="img-fluid p-1" />
                    <h4 className="title mt-3 fs-7">تلویزیون</h4>
                  </a>
                </div>
              </div>

              <div className="suggest-item col-6 col-md-4 col-lg-2 col-xl-2">
                <div className="item-inner text-center p-3">
                  <a href="#" className="stretched-link d-block">
                    <img src="assets/img/suggest-6.jpg" alt="کنسول بازی" className="img-fluid p-1" />
                    <h4 className="title mt-3 fs-7">کنسول بازی</h4>
                  </a>
                </div>
              </div>
              
              {/* تکرار آیتم‌ها */}
              <div className="suggest-item col-6 col-md-4 col-lg-2 col-xl-2">
                <div className="item-inner text-center p-3">
                  <a href="#" className="stretched-link d-block">
                    <img src="assets/img/suggest-1.jpg" alt="گوشی" className="img-fluid p-1" />
                    <h4 className="title mt-3 fs-7">گوشی</h4>
                  </a>
                </div>
              </div>

              <div className="suggest-item col-6 col-md-4 col-lg-2 col-xl-2">
                <div className="item-inner text-center p-3">
                  <a href="#" className="stretched-link d-block">
                    <img src="assets/img/suggest-2.jpg" alt="ساعت هوشمند" className="img-fluid p-1" />
                    <h4 className="title mt-3 fs-7">ساعت هوشمند</h4>
                  </a>
                </div>
              </div>

              <div className="suggest-item col-6 col-md-4 col-lg-2 col-xl-2">
                <div className="item-inner text-center p-3">
                  <a href="#" className="stretched-link d-block">
                    <img src="assets/img/suggest-3.jpg" alt="هدفون" className="img-fluid p-1" />
                    <h4 className="title mt-3 fs-7">هدفون</h4>
                  </a>
                </div>
              </div>

              <div className="suggest-item col-6 col-md-4 col-lg-2 col-xl-2">
                <div className="item-inner text-center p-3">
                  <a href="#" className="stretched-link d-block">
                    <img src="assets/img/suggest-4.jpg" alt="لپ تاپ" className="img-fluid p-1" />
                    <h4 className="title mt-3 fs-7">لپ تاپ</h4>
                  </a>
                </div>
              </div>

              <div className="suggest-item col-6 col-md-4 col-lg-2 col-xl-2">
                <div className="item-inner text-center p-3">
                  <a href="#" className="stretched-link d-block">
                    <img src="assets/img/suggest-5.jpg" alt="تلویزیون" className="img-fluid p-1" />
                    <h4 className="title mt-3 fs-7">تلویزیون</h4>
                  </a>
                </div>
              </div>

              <div className="suggest-item col-6 col-md-4 col-lg-2 col-xl-2">
                <div className="item-inner text-center p-3">
                  <a href="#" className="stretched-link d-block">
                    <img src="assets/img/suggest-6.jpg" alt="کنسول بازی" className="img-fluid p-1" />
                    <h4 className="title mt-3 fs-7">کنسول بازی</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        <section className="some-products border-radius-3xl border border-gray-300 mt-4 overflow-hidden">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="some-products-box p-4">
                <div className="some-products-title">
                  <h4 className="fs-6 fw-bold">گوشی موبایل</h4>
                  <span className="gray-600 fs-7">بر اساس بازدید های شما</span>
                </div>
                <div className="some-products-images mt-3">
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-1.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-2.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-3.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-4.jpg" alt="" title="" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="some-products-box p-4">
                <div className="some-products-title">
                  <h4 className="fs-6 fw-bold">گوشی موبایل</h4>
                  <span className="gray-600 fs-7">بر اساس بازدید های شما</span>
                </div>
                <div className="some-products-images mt-3">
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-5.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-6.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-7.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-8.jpg" alt="" title="" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="some-products-box p-4">
                <div className="some-products-title">
                  <h4 className="fs-6 fw-bold">گوشی موبایل</h4>
                  <span className="gray-600 fs-7">بر اساس بازدید های شما</span>
                </div>
                <div className="some-products-images mt-3">
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-9.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-10.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-11.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-12.jpg" alt="" title="" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="some-products-box p-4">
                <div className="some-products-title">
                  <h4 className="fs-6 fw-bold">گوشی موبایل</h4>
                  <span className="gray-600 fs-7">بر اساس بازدید های شما</span>
                </div>
                <div className="some-products-images mt-3">
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-13.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-14.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-15.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-16.jpg" alt="" title="" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="best-sales-section mt-5 position-relative rounded-4 overflow-hidden">
          <h2 className="text-center py-3 fw-semibold fs-4">
            <i className="fa fa-bolt me-2 fs-6"></i>
            محبوب‌ترین محصولات
          </h2>

          <div className="swiper bestSales px-2 py-4">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="product-slide-item">
                  <a href="#" className="d-flex align-items-center justify-content-between product-link">
                    <div className="product-image">
                      <img src="assets/img/some-p-1.jpg" alt="Samsung" className="img-fluid" />
                    </div>
                    <div className="rank-number">1</div>
                    <div className="product-info">
                      <p>گوشی موبایل سامسونگ</p>
                    </div>
                  </a>

                  <a href="#" className="d-flex align-items-center justify-content-between product-link">
                    <div className="product-image">
                      <img src="assets/img/some-p-2.jpg" alt="Huawei" className="img-fluid" />
                    </div>
                    <div className="rank-number">2</div>
                    <div className="product-info">
                      <p>گوشی موبایل هاوایی</p>
                    </div>
                  </a>

                  <a href="#" className="d-flex align-items-center justify-content-between product-link">
                    <div className="product-image">
                      <img src="assets/img/some-p-3.jpg" alt="Nokia" className="img-fluid" />
                    </div>
                    <div className="rank-number">3</div>
                    <div className="product-info">
                      <p>گوشی موبایل نوکیا</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-slide-item">
                  <a href="#" className="d-flex align-items-center justify-content-between product-link">
                    <div className="product-image">
                      <img src="assets/img/some-p-1.jpg" alt="Samsung" className="img-fluid" />
                    </div>
                    <div className="rank-number">1</div>
                    <div className="product-info">
                      <p>گوشی موبایل سامسونگ</p>
                    </div>
                  </a>

                  <a href="#" className="d-flex align-items-center justify-content-between product-link">
                    <div className="product-image">
                      <img src="assets/img/some-p-2.jpg" alt="Huawei" className="img-fluid" />
                    </div>
                    <div className="rank-number">2</div>
                    <div className="product-info">
                      <p>گوشی موبایل هاوایی</p>
                    </div>
                  </a>

                  <a href="#" className="d-flex align-items-center justify-content-between product-link">
                    <div className="product-image">
                      <img src="assets/img/some-p-3.jpg" alt="Nokia" className="img-fluid" />
                    </div>
                    <div className="rank-number">3</div>
                    <div className="product-info">
                      <p>گوشی موبایل نوکیا</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-slide-item">
                  <a href="#" className="d-flex align-items-center justify-content-between product-link">
                    <div className="product-image">
                      <img src="assets/img/some-p-1.jpg" alt="Samsung" className="img-fluid" />
                    </div>
                    <div className="rank-number">1</div>
                    <div className="product-info">
                      <p>گوشی موبایل سامسونگ</p>
                    </div>
                  </a>

                  <a href="#" className="d-flex align-items-center justify-content-between product-link">
                    <div className="product-image">
                      <img src="assets/img/some-p-2.jpg" alt="Huawei" className="img-fluid" />
                    </div>
                    <div className="rank-number">2</div>
                    <div className="product-info">
                      <p>گوشی موبایل هاوایی</p>
                    </div>
                  </a>

                  <a href="#" className="d-flex align-items-center justify-content-between product-link">
                    <div className="product-image">
                      <img src="assets/img/some-p-3.jpg" alt="Nokia" className="img-fluid" />
                    </div>
                    <div className="rank-number">3</div>
                    <div className="product-info">
                      <p>گوشی موبایل نوکیا</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-slide-item">
                  <a href="#" className="d-flex align-items-center justify-content-between product-link">
                    <div className="product-image">
                      <img src="assets/img/some-p-1.jpg" alt="Samsung" className="img-fluid" />
                    </div>
                    <div className="rank-number">1</div>
                    <div className="product-info">
                      <p>گوشی موبایل سامسونگ</p>
                    </div>
                  </a>

                  <a href="#" className="d-flex align-items-center justify-content-between product-link">
                    <div className="product-image">
                      <img src="assets/img/some-p-2.jpg" alt="Huawei" className="img-fluid" />
                    </div>
                    <div className="rank-number">2</div>
                    <div className="product-info">
                      <p>گوشی موبایل هاوایی</p>
                    </div>
                  </a>

                  <a href="#" className="d-flex align-items-center justify-content-between product-link">
                    <div className="product-image">
                      <img src="assets/img/some-p-3.jpg" alt="Nokia" className="img-fluid" />
                    </div>
                    <div className="rank-number">3</div>
                    <div className="product-info">
                      <p>گوشی موبایل نوکیا</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="swiper-button-next custom-swiper-btn"></div>
            <div className="swiper-button-prev custom-swiper-btn"></div>
          </div>

          <a href="#" className="see-all text-center d-block mt-3">مشاهده‌ی تمام محصولات</a>
        </section>
        <section className="some-products border-radius-3xl border border-gray-300 mt-4 overflow-hidden">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="some-products-box p-4">
                <div className="some-products-title">
                  <h4 className="fs-6 fw-bold">گوشی موبایل</h4>
                  <span className="gray-600 fs-7">بر اساس بازدید های شما</span>
                </div>
                <div className="some-products-images mt-3">
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-1.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-2.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-3.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-4.jpg" alt="" title="" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="some-products-box p-4">
                <div className="some-products-title">
                  <h4 className="fs-6 fw-bold">گوشی موبایل</h4>
                  <span className="gray-600 fs-7">بر اساس بازدید های شما</span>
                </div>
                <div className="some-products-images mt-3">
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-5.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-6.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-7.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-8.jpg" alt="" title="" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="some-products-box p-4">
                <div className="some-products-title">
                  <h4 className="fs-6 fw-bold">گوشی موبایل</h4>
                  <span className="gray-600 fs-7">بر اساس بازدید های شما</span>
                </div>
                <div className="some-products-images mt-3">
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-9.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-10.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-11.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-12.jpg" alt="" title="" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="some-products-box p-4">
                <div className="some-products-title">
                  <h4 className="fs-6 fw-bold">گوشی موبایل</h4>
                  <span className="gray-600 fs-7">بر اساس بازدید های شما</span>
                </div>
                <div className="some-products-images mt-3">
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-13.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-14.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-15.jpg" alt="" title="" className="img-fluid" />
                  </a>
                  <a href="" title="" className="d-flex justify-content-center align-items-center p-3">
                    <img src="assets/img/some-p-16.jpg" alt="" title="" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="readable-articles mt-5" dir="rtl">
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between header mb-4 px-2 px-md-4">
              <div className="section-title">خواندنی‌ها</div>
              <a className="more-link" href="blog.html">
                مطالب بیشتر
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1.4em"
                  height="1.4em"
                >
                  <path
                    fill="currentColor"
                    d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"
                  />
                </svg>
              </a>
            </div>

            <div className="row g-4 p-0 px-md-4">
              <div className="col-12 col-sm-6 col-lg-3">
                <a href="single-blog.html" className="article-card d-block text-decoration-none text-dark">
                  <div className="card-inner p-2 h-100">
                    <div className="image-wrap">
                      <img src="assets/img/blog-1.jpg" alt="چادر مسافرتی" loading="lazy" />
                    </div>
                    <div className="card-footer">
                      <p className="card-text">چادر مسافرتی؛ ضد آب یا پارچه‌ای؟</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <a href="single-blog.html" className="article-card d-block text-decoration-none text-dark">
                  <div className="card-inner h-100">
                    <div className="image-wrap">
                      <img src="assets/img/blog-1.jpg" alt="ماشین آفرود" loading="lazy" />
                    </div>
                    <div className="card-footer">
                      <p className="card-text">۵ نکته مهم پیش از سفر آفرود در زمستان</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <a href="single-blog.html" className="article-card d-block text-decoration-none text-dark">
                  <div className="card-inner h-100">
                    <div className="image-wrap">
                      <img src="assets/img/blog-1.jpg" alt="کوله پشتی کوهنوردی" loading="lazy" />
                    </div>
                    <div className="card-footer">
                      <p className="card-text">وسایل ضروری برای یک کوهنوردی ایمن</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <a href="single-blog.html" className="article-card d-block text-decoration-none text-dark">
                  <div className="card-inner h-100">
                    <div className="image-wrap">
                      <img src="assets/img/blog-1.jpg" alt="لوازم آشپزی کمپینگ" loading="lazy" />
                    </div>
                    <div className="card-footer">
                      <p className="card-text">لوازم آشپزی مناسب سفر و کمپینگ</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
</Master>
  );
}
