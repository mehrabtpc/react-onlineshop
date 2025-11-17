export default function Slider(){
    return (
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
    );
}