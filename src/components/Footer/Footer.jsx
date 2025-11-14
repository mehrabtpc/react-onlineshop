import React from "react";

export default function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="footer-top mt-4 mb-5">
          {/* Footer Top Detail */}
          <div className="footer-top-detial d-flex justify-content-between align-items-center">
            <div>
              <a href="" title="">
                <img src="assets/img/logo-md.png" alt="" />
              </a>
              <p className="mt-2 fs-7">تلفن پشتیبانی : 05144445697</p>
            </div>
            <a href="#top" className="back-to-top border-radius-3xl px-3 py-2 gray-600 fs-7">
              شاپیک به بالا
              <i className="fa fa-angle-up ps-2"></i>
            </a>
          </div>

          {/* Footer Top Attr */}
          <div className="footer-top-attr d-flex justify-content-between align-items-center my-5">
            {[
              { img: "assets/img/express-delivery.svg", text: "امکان تحویل اکسپرس" },
              { img: "assets/img/cash-on-delivery.svg", text: "امکان پرداخت در محل" },
              { img: "assets/img/support.svg", text: "7 روز هفته، 24 ساعته" },
              { img: "assets/img/days-return.svg", text: "هفت روز ضمانت بازگشت کالا" },
              { img: "assets/img/original-products.svg", text: "ضمانت اصالت کالا" },
            ].map((item, idx) => (
              <div key={idx} className="top-right-item text-center">
                <img src={item.img} alt="" title="" />
                <p className="mt-2 fs-8">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Main */}
        <div className="footer-main my-5">
          <div className="row">
            {[
              {
                title: "راهنمای خرید از شاپیک",
                links: ["نحوه ثبت سفارش", "رویه ارسال سفارش", "شیوه های پرداخت"],
              },
              {
                title: "خدمات مشتریان",
                links: [
                  "پاسخ به پرسش های متدوال",
                  "رویه های بازگشت کالا",
                  "شرایط استفاده",
                  "حریم خصوصی",
                  "گزارش باگ",
                ],
              },
              {
                title: "راهنمای خرید از شاپیک",
                links: ["نحوه ثبت سفارش", "رویه ارسال سفارش", "شیوه های پرداخت"],
              },
            ].map((section, idx) => (
              <div key={idx} className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                <p className="fw-bold fs-6">{section.title}</p>
                <ul className="ui">
                  {section.links.map((link, i) => (
                    <li key={i} className="my-2">
                      <a href="">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social / Newsletter */}
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
              <p className="fw-bold fs-6">همراه ما باشید!</p>
              <ul className="social-list d-flex justify-content-around align-items-center mt-3">
                {["instagram", "twitter", "linkedin", "telegram"].map((social, idx) => (
                  <li key={idx} className={`my-2 ${social}`}>
                    <a href="">
                      <i className={`fab fa-${social} fa-2x gray-500`}></i>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="fw-bold fs-6 mt-4">با ثبت ایمیل، از جدیدترین اخبار با خبر شوید</p>
              <div className="subscribe-in-newsletter mt-3">
                <form className="d-flex align-items-center justify-content-around">
                  <input
                    type="text"
                    placeholder="ایمیل شما"
                    className="form-control px-3 py-2 border-radius-3xl"
                  />
                  <button type="submit" className="btn text-white fw-bold ms-2 px-3 py-2 border-radius-3xl">
                    ثبت
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="footer-info py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 mb-3">
              <h1 className="fw-bold fs-5">
                فروشگاه اینترنتی شاپیک، بررسی، انتخاب و خرید آنلاین.
              </h1>
              <p className="gray-600 mt-3 fs-7">
                خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب
                را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که
                فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود
                را داشته باشد.
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3 d-flex justify-content-evenly align-items-center">
              <img
                src="assets/img/symbol-01.png"
                alt=""
                title=""
                className="img-fluid border border-gray-200 border-radius-3xl"
              />
              <img
                src="assets/img/symbol-02.png"
                alt=""
                title=""
                className="img-fluid border border-gray-200 border-radius-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="footer-copyright text-center py-4">
        <div className="container">
          <p className="fs-8 gray-600">
            برای استفاده از مطالب شاپیک، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای
            شرکت شاپیکزیت است.
          </p>
        </div>
      </div>
    </footer>
  );
}
