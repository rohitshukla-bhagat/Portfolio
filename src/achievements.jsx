import { useEffect, useState } from "react";
import Achievements from "./Data/achievements";
import "./Achievement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import achievements from "./Data/achievements";

export default function AchievementPage() {
  const [currentImage, setCurrentImage] = useState(Achievements[0]);
  const [leftBtn, setLeftBtn] = useState(true);
  const [rightBtn, setRightBtn] = useState(true);
  console.log(currentImage);
  const leftLogic = () => {
    if (currentImage.id === 0) {
      setLeftBtn(false);
    } else {
      setCurrentImage(Achievements[currentImage.id - 1]);
    }
    if (currentImage.id === Achievements.length - 1) {
      setRightBtn(true);
    }
  };
  const rightLogic = () => {
    if (currentImage.id === achievements.length - 1) {
      setRightBtn(false);
    } else {
      setCurrentImage(Achievements[currentImage.id + 1]);
    }
    if (currentImage.id === 0) {
      setLeftBtn(true);
    }
  };
  return (
    <>
      <div className="achieveContainer">
        <div className="achieveElement">
          <div className="achieveHead">
            <span>Achievements</span>
            <p>
              My achievements reflect my dedication and growth. Here are the
              highlights of my accomplishments.
            </p>
          </div>
          <div className="achieveMain">
            <button
              onClick={leftLogic}
              style={{ visibility: leftBtn ? "visible" : "hidden" }}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="arrowIcons" />
            </button>
            <img src={currentImage.image} alt="" />
            <button
              onClick={rightLogic}
              style={{ visibility: rightBtn ? "visible" : "hidden" }}
            >
              <FontAwesomeIcon icon={faArrowRight} className="arrowIcons" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
