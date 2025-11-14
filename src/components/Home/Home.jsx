import React from "react";
import Master from "../Layouts/Master";

export default function Home() {
  return (
    <Master>
      <br /><br /><br />
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
        <section className="best-brands border-radius-3xl border border-gray-300 mt-4 pb-4">
          <h2 className="text-center my-4 section-title fs-4">
            <i className="fa fa-star"></i>
            محبوب ترین برندها
          </h2>
          <div className="swiper brandsSlider">
            <div className="swiper-wrapper">
              <div className="swiper-slide position-relative">
                <div className="brands-item d-flex justify-content-center align-items-center">
                  <a href="" title="" className="stretched-link">
                    <img src="assets/img/brand-1.png" alt="" title="" className="img-fluid p-3" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide position-relative">
                <div className="brands-item d-flex justify-content-center align-items-center">
                  <a href="" title="" className="stretched-link">
                    <img src="assets/img/brand-2.png" alt="" title="" className="img-fluid p-3" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide position-relative">
                <div className="brands-item d-flex justify-content-center align-items-center">
                  <a href="" title="" className="stretched-link">
                    <img src="assets/img/brand-3.png" alt="" title="" className="img-fluid p-3" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide position-relative">
                <div className="brands-item d-flex justify-content-center align-items-center">
                  <a href="" title="" className="stretched-link">
                    <img src="assets/img/brand-4.png" alt="" title="" className="img-fluid p-3" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide position-relative">
                <div className="brands-item d-flex justify-content-center align-items-center">
                  <a href="" title="" className="stretched-link">
                    <img src="assets/img/brand-8.png" alt="" title="" className="img-fluid p-3" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide position-relative">
                <div className="brands-item d-flex justify-content-center align-items-center">
                  <a href="" title="" className="stretched-link">
                    <img src="assets/img/brand-7.jpg" alt="" title="" className="img-fluid p-3" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide position-relative">
                <div className="brands-item d-flex justify-content-center align-items-center">
                  <a href="" title="" className="stretched-link">
                    <img src="assets/img/brand-8.png" alt="" title="" className="img-fluid p-3" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide position-relative">
                <div className="brands-item d-flex justify-content-center align-items-center">
                  <a href="" title="" className="stretched-link">
                    <img src="assets/img/brand-9.jpg" alt="" title="" className="img-fluid p-3" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide position-relative">
                <div className="brands-item d-flex justify-content-center align-items-center">
                  <a href="" title="" className="stretched-link">
                    <img src="assets/img/brand-10.png" alt="" title="" className="img-fluid p-3" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide position-relative">
                <div className="brands-item d-flex justify-content-center align-items-center">
                  <a href="" title="" className="stretched-link">
                    <img src="assets/img/brand-11.png" alt="" title="" className="img-fluid p-3" />
                  </a>
                </div>
              </div>
              <div className="swiper-slide position-relative">
                <div className="brands-item d-flex justify-content-center align-items-center">
                  <a href="" title="" className="stretched-link">
                    <img src="assets/img/brand-13.png" alt="" title="" className="img-fluid p-3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-button-next bg-light border-radius-circle"></div>
            <div className="swiper-button-prev bg-light border-radius-circle"></div>
          </div>
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