import { Slider } from "../Slider/Slider";
import photo_1 from "../../assets/images/modul1.png";
import photo_2 from "../../assets/images/modul2.png";
import photo_3 from "../../assets/images/modul3.png";
import photo_4 from "../../assets/images/modul4.png";

const sliderData = [
  {
    title: "Модуль 1. Начало приключения",
    img: photo_1,
  },
  {
    title: "Модуль 2. ",
    img: photo_2,
  },
  {
    title: "Модуль 3.",
    img: photo_3,
  },
  {
    title: "Модуль 4. Конец приключения",
    img: photo_4,
  },
];

export const Content = () => (
  <div className="content">
    <Slider data={sliderData} />
  </div>
);
