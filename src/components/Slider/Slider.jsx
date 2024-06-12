import { useState } from "react";
import { IconButton } from "../Buttons/IconButton";
import { ButtonCard } from "../Buttons/ButtonCard";
import "./Slider.css";

export const Slider = ({ data }) => {
  const [activeId, setActiveId] = useState(0);

  //Потом нужно прописать эти функции в зависимости от того что они выводят
  const [progressValue, setProgressValue] = useState(0);

  const prev = () => {
    setActiveId((activeId) => {
      if (activeId > 0) {
        return activeId - 1;
      }
      return activeId;
    });
  };

  const next = () => {
    setActiveId((activeId) => {
      if (activeId < data.length - 1) {
        return activeId + 1;
      }
      return activeId;
    });
  };

  return (
    <div className="slider-wrap">
      <div className="slider__actions">
        <IconButton direction="left" onClick={prev} disable={activeId === 0} />
        <IconButton
          direction="right"
          onClick={next}
          disable={activeId === data.length - 1}
        />
      </div>
      <div className="slider">
        {data.map((slide, idx) => (
          <div
            className={`slide${idx === activeId ? " active" : ""}`}
            key={slide.id}
          >
            <div className="slide__title">{slide.title}</div>
            <div className="slide__info">
              <div className="slide__progress">
                <p className="slide__progress-text">
                  <span className="slide__progress-begin">{progressValue}</span>
                  <span className="slide__progress-slash">/</span>
                  <span className="slide__progress-end">
                    {slide.progressValueTotal} пройдено
                  </span>
                </p>
              </div>
              <img
                className="slide__image"
                src={slide.img}
                alt={`Slide ${idx + 1}`}
              />
              <ButtonCard text="Начать" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
