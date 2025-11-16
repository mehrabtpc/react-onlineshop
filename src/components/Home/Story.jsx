import { useState, useEffect } from "react";
import Popup from "./Popup";

export default function Story() {
  const [selectedStory, setSelectedStory] = useState(false);
  const [stories, setStories] = useState([]);

  async function getData() {
    const response = await fetch("https://api.elinorboutique.com/v1/front/home");
    const json = await response.json();
    console.log(json.data.response.stories);

    setStories(json.data.response.stories);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-xxxx-large">
      <Popup show={selectedStory} onClose={() => setSelectedStory(false)}>
        <h2>سلام!</h2>
        <p>این یک پاپاپ ساده ریکتی است :)</p>
      </Popup>

      <div className="story-section my-3 text-center px-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-around align-items-center mb-3">
            {stories.map((story, index) => (
              <div
                key={index}
                className="story-item"
                onClick={() => setSelectedStory(true)}
              >
                <img
                  src={story.video_cover.url}
                  alt={story.title}
                  className="img-fluid border-radius-circle"
                />
                <strong className="fs-7">{story.title}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
