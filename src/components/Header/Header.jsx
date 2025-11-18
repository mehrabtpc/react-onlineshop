import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی لودر
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader mt-5">
        <div className="custom-navbar">
          {/* Mobile Navbar In Loader */}
          <div className="top-navbar">
            <div className="top-mobile-navbar py-1 border-bottom-gray-150">
              <div className="container d-flex justify-content-between align-items-center">
                <div className="top-mobile-navbar-right d-flex justify-content-between align-items-center">
                  <svg className="blur-up" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect x="0" y="0" width="24" height="24"/>
                      <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5"/>
                      <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                        fill="#000000" opacity="0.3"/>
                    </g>
                  </svg>
                </div>

                <div className="top-mobile-navbar-middle d-flex justify-content-between align-items-center">
                  <a href="javascript:void(0)" className="navbar-brand">
                    <img src="assets/img/ads-banner.jpg" alt="لوگوی شاپیک" className="blur-up"/>
                  </a>
                </div>

                <div className="top-mobile-navbar-left">
                  <svg className="blur-up" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect x="0" y="0" width="24" height="24"/>
                      <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                      <path d="M12,16 C12.5522847,16 13,16.4477153 13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 C11,16.4477153 11.4477153,16 12,16 Z M10.591,14.868 L10.591,13.209 L11.851,13.209 C13.447,13.209 14.602,11.991 14.602,10.395 C14.602,8.799 13.447,7.581 11.851,7.581 C10.234,7.581 9.121,8.799 9.121,10.395 L7.336,10.395 C7.336,7.875 9.31,5.922 11.851,5.922 C14.392,5.922 16.387,7.875 16.387,10.395 C16.387,12.915 14.392,14.868 11.851,14.868 L10.591,14.868 Z"
                        fill="#000000"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="main-navbar pt-1">
            <div className="main-mobile-navbar py-2">
              <div className="container d-flex justify-content-between align-items-center">
                <div className="main-mobile-navbar-right">
                  <form action="javascript:void(0)" className="position-relative">
                    <input className="form-control border-0 fs-6 fw-normal bg-gray-150 border-radius-3xl py-2"
                           type="search" placeholder="جستجو"/>
                    <button className="btn position-absolute" type="submit">
                      <i className="fab fa-sistrix gray-500 fw-md fs-5 blur-up"></i>
                    </button>
                  </form>
                </div>

                <div className="main-mobile-navbar-left">
                  <a href="javascript:void(0)" className="btn text-dark-blue border-radius-3xl">
                    <svg className="rotate-3d me-1 blur-up" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect x="0" y="0" width="24" height="24"/>
                        <path d="M14.0069431,7.00607258 C13.4546584,7.00607258 13.0069431,6.55855153 13.0069431,6.00650634 C13.0069431,5.45446114 13.4546584,5.00694009 14.0069431,5.00694009 L15.0069431,5.00694009 C17.2160821,5.00694009 19.0069431,6.7970243 19.0069431,9.00520507 L19.0069431,15.001735 C19.0069431,17.2099158 17.2160821,19 15.0069431,19 L3.00694311,19 C0.797804106,19 -0.993056895,17.2099158 -0.993056895,15.001735 L-0.993056895,8.99826498 C-0.993056895,6.7900842 0.797804106,5 3.00694311,5 L4.00694793,5 C4.55923268,5 5.00694793,5.44752105 5.00694793,5.99956624 C5.00694793,6.55161144 4.55923268,6.99913249 4.00694793,6.99913249 L3.00694311,6.99913249 C1.90237361,6.99913249 1.00694311,7.89417459 1.00694311,8.99826498 L1.00694311,15.001735 C1.00694311,16.1058254 1.90237361,17.0008675 3.00694311,17.0008675 L15.0069431,17.0008675 C16.1115126,17.0008675 17.0069431,16.1058254 17.0069431,15.001735 L17.0069431,9.00520507 C17.0069431,7.90111468 16.1115126,7.00607258 15.0069431,7.00607258 L14.0069431,7.00607258 Z"
                          fill="#000000" fillRule="nonzero" opacity="0.3"
                          transform="translate(9.006943, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-9.006943, -12.000000) "/>
                        <rect fill="#000000" opacity="0.3"
                          transform="translate(14.000000, 12.000000) rotate(-270.000000) translate(-14.000000, -12.000000) "
                          x="13" y="6" width="2" height="12" rx="1"/>
                        <path d="M21.7928932,9.79289322 C22.1834175,9.40236893 22.8165825,9.40236893 23.2071068,9.79289322 C23.5976311,10.1834175 23.5976311,10.8165825 23.2071068,11.2071068 L20.2071068,14.2071068 C19.8165825,14.5976311 19.1834175,14.5976311 18.7928932,14.2071068 L15.7928932,11.2071068 C15.4023689,10.8165825 15.4023689,10.1834175 15.7928932,9.79289322 C16.1834175,9.40236893 16.8165825,9.40236893 17.2071068,9.79289322 L19.5,12.0857864 L21.7928932,9.79289322 Z"
                          fill="#000000" fillRule="nonzero"
                          transform="translate(19.500000, 12.000000) rotate(-90.000000) translate(-19.500000, -12.000000) "/>
                      </g>
                    </svg>
                    ورود
                  </a>

                  <a href="javascript:void(0)"
                     className="btn text-dark-blue shopping-cart-btn p-2 border-radius-3xl position-relative">
                    <svg className="blur-up" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect x="0" y="0" width="24" height="24"/>
                        <path d="M18.1446364,11.84388 L17.4471627,16.0287218 C17.4463569,16.0335568 17.4455155,16.0383857 17.4446387,16.0432083 C17.345843,16.5865846 16.8252597,16.9469884 16.2818833,16.8481927 L4.91303792,14.7811299 C4.53842737,14.7130189 4.23500006,14.4380834 4.13039941,14.0719812 L2.30560137,7.68518803 C2.28007524,7.59584656 2.26712532,7.50338343 2.26712532,7.4104669 C2.26712532,6.85818215 2.71484057,6.4104669 3.26712532,6.4104669 L16.9929851,6.4104669 L17.606173,3.78251876 C17.7307772,3.24850086 18.2068633,2.87071314 18.7552257,2.87071314 L20.8200821,2.87071314 C21.4717328,2.87071314 22,3.39898039 22,4.05063106 C22,4.70228173 21.4717328,5.23054898 20.8200821,5.23054898 L19.6915238,5.23054898 L18.1446364,11.84388 Z"
                          fill="#000000" opacity="0.3"/>
                        <path d="M6.5,21 C5.67157288,21 5,20.3284271 5,19.5 C5,18.6715729 5.67157288,18 6.5,18 C7.32842712,18 8,18.6715729 8,19.5 C8,20.3284271 7.32842712,21 6.5,21 Z M15.5,21 C14.6715729,21 14,20.3284271 14,19.5 C14,18.6715729 14.6715729,18 15.5,18 C16.3284271,18 17,18.6715729 17,19.5 C17,20.3284271 16.3284271,21 15.5,21 Z"
                          fill="#000000"/>
                      </g>
                    </svg>
                    <span className="badge bg-danger position-absolute shop-cart-badge border border-white border-2 border-radius-3xl">4</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Banners Loader */}
          <div className="banners-loader mt-5">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                  <div className="contain-banners p-5">
                    <div>
                      <h4></h4>
                      <h3></h3>
                      <h6></h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                  <div className="contain-banners p-5">
                    <div>
                      <h4></h4>
                      <h3></h3>
                      <h6></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="custom-navbar" id="customNavbar">
      {/* Ads Banner */}
      <a href="" className="ads-banner" title="">
        <img src="assets/img/ads-banner.jpg" alt="" className="img-fluid object-cover"/>
      </a>

      {/* Top Navbar */}
      <div className="top-navbar navbar-expand-lg navbar-light py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="top-nav-right d-flex justify-content-between align-items-center">
            <a href="index.html" className="navbar-brand" title="">
              <img src="assets/img/logo-md.png" alt="لوگوی شاپیک"/>
            </a>

            <div className="main-search position-relative">
              <form action="search.html" className="position-relative">
                <input className="form-control border-0 border-radius-3xl bg-gray-150 fs-7"
                       type="search" placeholder="جستجو" id="mainSearchInput" autoComplete="off"/>
                <button className="btn position-absolute" type="submit">
                  <i className="fab fa-sistrix fw-md fs-5 gray-500"></i>
                </button>
              </form>
              
              <div className="search-results custom-box-shadow-s-2">
                <span className="py-2 px-3 d-block fs-7">نتایج جست و جو :</span>
                
                <div className="search-result-item position-relative border-bottom p-3">
                  <i className="fab fa-sistrix fw-md fs-5 gray-500 d-inline-block"></i>
                  <div className="d-inline-block ms-2">
                    <span className="d-inline-block fw-bold ms-1">سلفون </span>
                    <span className="d-block">در دسته <strong>زیبایی و سلامت</strong></span>
                  </div>
                  <a href="search.html" className="stretched-link"></a>
                </div>
              </div>
            </div>
          </div>

          <div className="top-nav-left d-flex justify-content-between align-items-center">
            <Link to='login' className="btn me-3 login-btn border-gray-300 border-radius-3xl fs-7" title="">
                <svg className="rotate-3d me-2" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <rect x="0" y="0" width="24" height="24"/>
                    <path d="M14.0069431,7.00607258 C13.4546584,7.00607258 13.0069431,6.55855153 13.0069431,6.00650634 C13.0069431,5.45446114 13.4546584,5.00694009 14.0069431,5.00694009 L15.0069431,5.00694009 C17.2160821,5.00694009 19.0069431,6.7970243 19.0069431,9.00520507 L19.0069431,15.001735 C19.0069431,17.2099158 17.2160821,19 15.0069431,19 L3.00694311,19 C0.797804106,19 -0.993056895,17.2099158 -0.993056895,15.001735 L-0.993056895,8.99826498 C-0.993056895,6.7900842 0.797804106,5 3.00694311,5 L4.00694793,5 C4.55923268,5 5.00694793,5.44752105 5.00694793,5.99956624 C5.00694793,6.55161144 4.55923268,6.99913249 4.00694793,6.99913249 L3.00694311,6.99913249 C1.90237361,6.99913249 1.00694311,7.89417459 1.00694311,8.99826498 L1.00694311,15.001735 C1.00694311,16.1058254 1.90237361,17.0008675 3.00694311,17.0008675 L15.0069431,17.0008675 C16.1115126,17.0008675 17.0069431,16.1058254 17.0069431,15.001735 L17.0069431,9.00520507 C17.0069431,7.90111468 16.1115126,7.00607258 15.0069431,7.00607258 L14.0069431,7.00607258 Z"
                      fill="#000000" fillRule="nonzero" opacity="0.3"
                      transform="translate(9.006943, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-9.006943, -12.000000) "/>
                    <rect fill="#000000" opacity="0.3"
                      transform="translate(14.000000, 12.000000) rotate(-270.000000) translate(-14.000000, -12.000000) "
                      x="13" y="6" width="2" height="12" rx="1"/>
                    <path d="M21.7928932,9.79289322 C22.1834175,9.40236893 22.8165825,9.40236893 23.2071068,9.79289322 C23.5976311,10.1834175 23.5976311,10.8165825 23.2071068,11.2071068 L20.2071068,14.2071068 C19.8165825,14.5976311 19.1834175,14.5976311 18.7928932,14.2071068 L15.7928932,11.2071068 C15.4023689,10.8165825 15.4023689,10.1834175 15.7928932,9.79289322 C16.1834175,9.40236893 16.8165825,9.40236893 17.2071068,9.79289322 L19.5,12.0857864 L21.7928932,9.79289322 Z"
                      fill="#000000" fillRule="nonzero"
                      transform="translate(19.500000, 12.000000) rotate(-90.000000) translate(-19.500000, -12.000000) "/>
                  </g>
                </svg>
                ورود | ثبت نام
            </Link >
            <span className="horizontal-line"></span>

            <div className="shopping-cart-wrapper position-relative ms-2">
              <a href="empty-cart.html" className="btn shopping-cart-btn position-relative border-radius-3xl" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <rect x="0" y="0" width="24" height="24"/>
                    <path d="M18.1446364,11.84388 L17.4471627,16.0287218 C17.4463569,16.0335568 17.4455155,16.0383857 17.4446387,16.0432083 C17.345843,16.5865846 16.8252597,16.9469884 16.2818833,16.8481927 L4.91303792,14.7811299 C4.53842737,14.7130189 4.23500006,14.4380834 4.13039941,14.0719812 L2.30560137,7.68518803 C2.28007524,7.59584656 2.26712532,7.50338343 2.26712532,7.4104669 C2.26712532,6.85818215 2.71484057,6.4104669 3.26712532,6.4104669 L16.9929851,6.4104669 L17.606173,3.78251876 C17.7307772,3.24850086 18.2068633,2.87071314 18.7552257,2.87071314 L20.8200821,2.87071314 C21.4717328,2.87071314 22,3.39898039 22,4.05063106 C22,4.70228173 21.4717328,5.23054898 20.8200821,5.23054898 L19.6915238,5.23054898 L18.1446364,11.84388 Z"
                      fill="#000000" opacity="0.3"/>
                    <path d="M6.5,21 C5.67157288,21 5,20.3284271 5,19.5 C5,18.6715729 5.67157288,18 6.5,18 C7.32842712,18 8,18.6715729 8,19.5 C8,20.3284271 7.32842712,21 6.5,21 Z M15.5,21 C14.6715729,21 14,20.3284271 14,19.5 C14,18.6715729 14.6715729,18 15.5,18 C16.3284271,18 17,18.6715729 17,19.5 C17,20.3284271 16.3284271,21 15.5,21 Z"
                      fill="#000000"/>
                  </g>
                </svg>
                <span className="badge position-absolute shop-cart-badge border border-white">4</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar navbar navbar-expand-lg navbar-light custom-box-shadow-s-1-bottom py-1 w-100" id="mainNavbar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="navbar-right">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-between align-items-center position-relative">
              <li className="nav-item d-flex justify-content-between align-items-center position-relative">
                <a className="mx-2 py-2" href="categories.html" title="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em">
                    <path fill="currentColor" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m10 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m7 0a4 4 0 1 1-3.995 4.2L13 17l.005-.2A4 4 0 0 1 17 13"/>
                  </svg>
                  دسته بندی ها
                </a>
                <span className="horizontal-line mx-1 me-2"></span>
              </li>

              <li className="nav-item d-flex justify-content-between align-items-center me-2 position-relative">
                <a className="mx-2 py-2" href="category.html" title="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="1.4em" height="1.4em">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M.502 9.496L9.503.495l4.002 4.002l-9.001 9.001zM7.5 2.5L9 4M5 5l1.5 1.5m-4 1L4 9"/>
                  </svg>
                  لوازم تحریر
                </a>
              </li>

              <li className="nav-item d-flex justify-content-between align-items-center me-2 position-relative">
                <a className="mx-2 py-2" href="category.html" title="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect x="0" y="0" width="24" height="24"/>
                      <path d="M18.4246212,12.6464466 L21.2530483,9.81801948 C21.4483105,9.62275734 21.764893,9.62275734 21.9601551,9.81801948 L22.6672619,10.5251263 C22.862524,10.7203884 22.862524,11.0369709 22.6672619,11.232233 L19.8388348,14.0606602 C19.6435726,14.2559223 19.3269901,14.2559223 19.131728,14.0606602 L18.4246212,13.3535534 C18.2293591,13.1582912 18.2293591,12.8417088 18.4246212,12.6464466 Z M3.22182541,17.9497475 L13.1213203,8.05025253 C13.5118446,7.65972824 14.1450096,7.65972824 14.5355339,8.05025253 L15.9497475,9.46446609 C16.3402718,9.85499039 16.3402718,10.4881554 15.9497475,10.8786797 L6.05025253,20.7781746 C5.65972824,21.1686989 5.02656326,21.1686989 4.63603897,20.7781746 L3.22182541,19.363961 C2.83130112,18.9734367 2.83130112,18.3402718 3.22182541,17.9497475 Z"
                        fill="#000000" opacity="0.3"/>
                      <path d="M12.3890873,1.28248558 L12.3890873,1.28248558 C15.150511,1.28248558 17.3890873,3.52106183 17.3890873,6.28248558 L17.3890873,10.7824856 C17.3890873,11.058628 17.1652297,11.2824856 16.8890873,11.2824856 L12.8890873,11.2824856 C12.6129449,11.2824856 12.3890873,11.058628 12.3890873,10.7824856 L12.3890873,1.28248558 Z"
                        fill="#000000" transform="translate(14.889087, 6.282486) rotate(-45.000000) translate(-14.889087, -6.282486) "/>
                    </g>
                  </svg>
                  ابزار و تجهیزات
                </a>
              </li>

              <li className="nav-item d-flex justify-content-between align-items-center me-2">
                <a className="mx-2 py-2" href="category.html" title="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.4em" height="1.4em">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M7 21h10"></path>
                      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                    </g>
                  </svg>
                  لوازم دیچیتال
                </a>
              </li>

              <li className="nav-item d-flex justify-content-between align-items-center me-2">
                <a className="mx-2 py-2" href="best-seller.html" title="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect x="0" y="0" width="24" height="24"/>
                      <path d="M14,7 C13.6666667,10.3333333 12.6666667,12.1167764 11,12.3503292 C11,12.3503292 12.5,6.5 10.5,3.5 C10.5,3.5 10.287918,6.71444735 8.14498739,10.5717225 C7.14049032,12.3798172 6,13.5986793 6,16 C6,19.428689 9.51143904,21.2006583 12.0057195,21.2006583 C14.5,21.2006583 18,20.0006172 18,15.8004732 C18,14.0733981 16.6666667,11.1399071 14,7 Z" fill="#000000"/>
                    </g>
                  </svg>
                  پر فروش ترین ها
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-left">
            <a href="select-map.html" className="select-map-link position-relative" title="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <rect x="0" y="0" width="24" height="24"/>
                  <path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z"
                    fill="#000000" fillRule="nonzero"/>
                </g>
              </svg>
              لطفا شهر خود را انتخاب کنید
            </a>
          </div>
        </div>

        <div className="main-mobile-navbar pb-1">
  {/* Container:start */}
  <div className="container d-flex justify-content-between align-items-center">
    {/* Main Mobile Navbar Right:start */}
    <div className="main-mobile-navbar-right">
      {/* Search Form:start */}
      <form action="search.html" className="position-relative">
        <input
          className="form-control border-0 fs-6 fw-normal bg-gray-150 border-radius-3xl py-2"
          type="search"
          placeholder="جستجو"
        />
        <button className="btn position-absolute" type="submit">
          <i className="fab fa-sistrix text-light-gray fw-md fs-5"></i>
        </button>
      </form>
      {/* Search Form:end */}
    </div>
    {/* Main Mobile Navbar Right:end */}

    {/* Main Mobile Navbar Left:start */}
    <div className="main-mobile-navbar-left">
      {/* Login and Register:start */}
      <a href="login.html" className="btn text-dark-blue border-radius-3xl" title="">
        {/*begin::Svg Icon */}
        <svg
          className="rotate-3d me-1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect x="0" y="0" width="24" height="24" />
            <path
              d="M14.0069431,7.00607258 C13.4546584,7.00607258 13.0069431,6.55855153 13.0069431,6.00650634 C13.0069431,5.45446114 13.4546584,5.00694009 14.0069431,5.00694009 L15.0069431,5.00694009 C17.2160821,5.00694009 19.0069431,6.7970243 19.0069431,9.00520507 L19.0069431,15.001735 C19.0069431,17.2099158 17.2160821,19 15.0069431,19 L3.00694311,19 C0.797804106,19 -0.993056895,17.2099158 -0.993056895,15.001735 L-0.993056895,8.99826498 C-0.993056895,6.7900842 0.797804106,5 3.00694311,5 L4.00694793,5 C4.55923268,5 5.00694793,5.44752105 5.00694793,5.99956624 C5.00694793,6.55161144 4.55923268,6.99913249 4.00694793,6.99913249 L3.00694311,6.99913249 C1.90237361,6.99913249 1.00694311,7.89417459 1.00694311,8.99826498 L1.00694311,15.001735 C1.00694311,16.1058254 1.90237361,17.0008675 3.00694311,17.0008675 L15.0069431,17.0008675 C16.1115126,17.0008675 17.0069431,16.1058254 17.0069431,15.001735 L17.0069431,9.00520507 C17.0069431,7.90111468 16.1115126,7.00607258 15.0069431,7.00607258 L14.0069431,7.00607258 Z"
              fill="#000000"
              fillRule="nonzero"
              opacity="0.3"
              transform="translate(9.006943, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-9.006943, -12.000000) "
            />
            <rect
              fill="#000000"
              opacity="0.3"
              transform="translate(14.000000, 12.000000) rotate(-270.000000) translate(-14.000000, -12.000000) "
              x="13"
              y="6"
              width="2"
              height="12"
              rx="1"
            />
            <path
              d="M21.7928932,9.79289322 C22.1834175,9.40236893 22.8165825,9.40236893 23.2071068,9.79289322 C23.5976311,10.1834175 23.5976311,10.8165825 23.2071068,11.2071068 L20.2071068,14.2071068 C19.8165825,14.5976311 19.1834175,14.5976311 18.7928932,14.2071068 L15.7928932,11.2071068 C15.4023689,10.8165825 15.4023689,10.1834175 15.7928932,9.79289322 C16.1834175,9.40236893 16.8165825,9.40236893 17.2071068,9.79289322 L19.5,12.0857864 L21.7928932,9.79289322 Z"
              fill="#000000"
              fillRule="nonzero"
              transform="translate(19.500000, 12.000000) rotate(-90.000000) translate(-19.500000, -12.000000) "
            />
          </g>
        </svg>
        {/*end::Svg Icon*/}
        ورود
      </a>
      {/* Login and Register:end */}

      {/* Shopping Cart Button:start */}
      <a
        href="empty-cart.html"
        className="btn shopping-cart-btn p-2 border-radius-3xl position-relative"
        title=""
      >
        {/*begin::Svg Icon*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect x="0" y="0" width="24" height="24" />
            <path
              d="M18.1446364,11.84388 L17.4471627,16.0287218 C17.4463569,16.0335568 17.4455155,16.0383857 17.4446387,16.0432083 C17.345843,16.5865846 16.8252597,16.9469884 16.2818833,16.8481927 L4.91303792,14.7811299 C4.53842737,14.7130189 4.23500006,14.4380834 4.13039941,14.0719812 L2.30560137,7.68518803 C2.28007524,7.59584656 2.26712532,7.50338343 2.26712532,7.4104669 C2.26712532,6.85818215 2.71484057,6.4104669 3.26712532,6.4104669 L16.9929851,6.4104669 L17.606173,3.78251876 C17.7307772,3.24850086 18.2068633,2.87071314 18.7552257,2.87071314 L20.8200821,2.87071314 C21.4717328,2.87071314 22,3.39898039 22,4.05063106 C22,4.70228173 21.4717328,5.23054898 20.8200821,5.23054898 L19.6915238,5.23054898 L18.1446364,11.84388 Z"
              fill="#000000"
              opacity="0.3"
            />
            <path
              d="M6.5,21 C5.67157288,21 5,20.3284271 5,19.5 C5,18.6715729 5.67157288,18 6.5,18 C7.32842712,18 8,18.6715729 8,19.5 C8,20.3284271 7.32842712,21 6.5,21 Z M15.5,21 C14.6715729,21 14,20.3284271 14,19.5 C14,18.6715729 14.6715729,18 15.5,18 C16.3284271,18 17,18.6715729 17,19.5 C17,20.3284271 16.3284271,21 15.5,21 Z"
              fill="#000000"
            />
          </g>
        </svg>
        {/*end::Svg Icon*/}
        <span className="badge bg-danger position-absolute shop-cart-badge border border-white border-2 border-radius-3xl">
          4
        </span>
      </a>
      {/* Shopping Cart Button:end */}
    </div>
    {/* Main Mobile Navbar Left:end */}
  </div>
  {/* Container:end */}
</div>
      </nav>
    </div>
  );
}