import { useState } from "react";
import Popup from "./Popup";

export default function Story() {
  const [selectedStory,setSelectedStory] = useState(false)

  

  return (
      <div className="container mt-xxxx-large">
          <Popup show={selectedStory} onClose={() => setSelectedStory(false)}>
            <h2>سلام!</h2>
            <p>این یک پاپاپ ساده ریکتی است :)</p>
          </Popup>

        <div className="story-section my-3 text-center px-5">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-around align-items-center mb-3">
              {/* Story Item:start */}
              <div className="story-item" data-bs-toggle="modal" onClick={()=> setSelectedStory(true)} data-bs-target="#exampleModal" data-index="0">
                <img src="assets/img/story-1.jpg" alt="" className="img-fluid border-radius-circle" />
                <strong className="fs-7">سشوار</strong>
              </div>
              {/* Story Item:end */}
              <div className="story-item" data-bs-toggle="modal" data-bs-target="#exampleModal" data-index="1">
                <img src="assets/img/story-2.jpg" alt="" className="img-fluid border-radius-circle" />
                <strong className="fs-7">دکوری</strong>
              </div>

              <div className="story-item" data-bs-toggle="modal" data-bs-target="#exampleModal" data-index="2">
                <img src="assets/img/story-3.jpg" alt="" className="img-fluid border-radius-circle" />
                <strong className="fs-7">تخفیف</strong>
              </div>

              <div className="story-item" data-bs-toggle="modal" data-bs-target="#exampleModal" data-index="3">
                <img src="assets/img/story-4.jpeg" alt="" className="img-fluid border-radius-circle" />
                <strong className="fs-7">بهداشتی</strong>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-around align-items-center mb-3">
              <div className="story-item" data-bs-toggle="modal" data-bs-target="#exampleModal" data-index="4">
                <img src="assets/img/story-5.jpeg" alt="" className="img-fluid border-radius-circle" />
                <strong className="fs-7">وقت سفر</strong>
              </div>
              <div className="story-item" data-bs-toggle="modal" data-bs-target="#exampleModal" data-index="5">
                <img src="assets/img/story-7.jpeg" alt="" className="img-fluid border-radius-circle" />
                <strong className="fs-7">پیراهن</strong>
              </div>
              <div className="story-item" data-bs-toggle="modal" data-bs-target="#exampleModal" data-index="6">
                <img src="assets/img/story-8.jpeg" alt="" className="img-fluid border-radius-circle" />
                <strong className="fs-7">آرایش </strong>
              </div>
              <div className="story-item" data-bs-toggle="modal" data-bs-target="#exampleModal" data-index="7">
                <img src="assets/img/story-6.jpeg" alt="" className="img-fluid border-radius-circle" />
                <strong className="fs-7">برترین‌ها</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}