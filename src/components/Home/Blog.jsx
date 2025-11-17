export default function Blog(){
    return (

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
    );
}