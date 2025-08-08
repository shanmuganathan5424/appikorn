import ImageSliderContainer from "../mad-x/component/image-slider";
import MadxGrid from "../mad-x/component/mad-x-grid";
import MadxImage from "../mad-x/component/mad-x-image-show";
import SlidingImage from "../mad-x/component/slideing-card";

export default function Summa() {
  return (
    <div className="w-full">
      <ImageSliderContainer />
      <MadxGrid />
      <MadxImage />
      <SlidingImage />
    </div>
  );
}
