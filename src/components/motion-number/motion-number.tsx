import { useState, useRef } from "react";
import NumberFlow from "@number-flow/react";
import { ReloadWrapper } from "../reload-wrapper";
import * as RadixSlider from "@radix-ui/react-slider";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { cn } from "@/lib/utils";
export default function Slider({ className }: RadixSlider.SliderProps) {
  const [value, setValue] = useState([0]);
  const animationRef = useRef<Player>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (animationRef.current) {
      animationRef.current.stop();
    }
  };

  const handleSliderChange = (val: number[]) => {
    setValue([val[0]]);
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  const handleMouseUp = () => {
    if (animationRef.current) {
      animationRef.current.stop();
    }
  };
  return (
    <ReloadWrapper className="w-96 relative font-mono">
      <div className="w-full flex justify-center items-center  px-4">
        {isHovered ? (
          <Player ref={animationRef} src="src/assets/animation/rabbit.json" className="player w-16" loop autoplay />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width={40} height={40} viewBox="0 0 511.979 511.979">
            <path
              d="M343.736 447.903s-15.343-19.999-16.687-33.437c-1.344-13.452-3.765-51.889-3.765-51.889l-53.546 25.999s3.547 40.218 12.219 56.217 16.328 45.778 16.328 45.778h75.027c.001-23.998-29.576-42.668-29.576-42.668zM54.623 405.67l-11.921-69.341a10.678 10.678 0 0 0-9.078-8.766 10.669 10.669 0 0 0-11.094 6.031L1.016 379.358a10.764 10.764 0 0 0-.984 5.406c1.016 12.359 9.125 35.718 32.686 35.718 4.75 0 9.843-1.016 15.171-3.031a10.685 10.685 0 0 0 6.734-11.781z"
              style={{
                fill: "#ccd1d9",
              }}
            />
            <path
              d="M97.418 446.169c-8.89 0-13.828-.266-14.031-.281-3-.172-5.78-1.609-7.671-3.938L22.78 376.624a10.706 10.706 0 0 1-2.375-6.921c.156-8.516 1.921-83.841 14.125-107.316.375-.718.766-1.468 1.141-2.202 5.734-11.125 13.562-26.343 34.295-41.42 23.015-16.75 57.763-30.452 106.246-41.905 21.843-5.156 42.249-7.781 60.638-7.781 47.389 0 71.936 17.25 82.716 28.155l70.746-44.358a10.604 10.604 0 0 1 5.672-1.641c7.203 0 45.67 10.125 65.2 31.468 17.953 19.625 47.607 61.966 48.873 63.748a10.736 10.736 0 0 1 1.922 6.125v14.733c0 2.172-.672 4.297-1.906 6.102l-12 17.249a10.812 10.812 0 0 1-2.077 2.234c-1.188.953-28.14 22.266-64.919 24.203-4.656 6.42-15.374 22.498-32.296 55.06-20.421 39.295-60.576 44.357-111.417 50.764-18.344 2.312-39.139 4.938-61.248 9.437-59.091 12.014-105.995 13.811-128.698 13.811z"
              style={{
                fill: "#e6e9ed",
              }}
            />
            <path
              d="M430.171 88.363c-1.906-13.296-12.812-29.686-33.374-50.107-14.281-14.179-27.905-24.937-28.483-25.39a10.627 10.627 0 0 0-9.874-1.766 10.682 10.682 0 0 0-6.984 7.227c-.781 2.766-19.172 67.989-15.547 97.988 3.594 29.702 27.859 78.325 28.891 80.372a10.628 10.628 0 0 0 6.202 5.359 11.05 11.05 0 0 0 3.328.531c1.672 0 3.344-.406 4.859-1.172l41.687-21.343a10.633 10.633 0 0 0 5.702-8.078c.311-2.296 7.452-56.513 3.593-83.621z"
              style={{
                fill: "#e6e9ed",
              }}
            />
            <path
              d="M447.982 213.233c0 5.89-4.781 10.671-10.671 10.671-5.891 0-10.656-4.781-10.656-10.671a10.65 10.65 0 0 1 10.656-10.656c5.89 0 10.671 4.766 10.671 10.656z"
              style={{
                fill: "#434a54",
              }}
            />
            <path
              d="m354.814 175.141-15.015 9.421 25 12.125zM25.515 379.999l10.172 12.562 10.187-38.468zM142.151 293.003c-18.625 1.641-39.374 14.609-39.374 14.609l112.73 126.822 18.015-3.53s28.202-46.796 1.172-92.122c-22.327-37.467-58.404-48.779-92.543-45.779z"
              style={{
                fill: "#ccd1d9",
              }}
            />
            <path
              d="M319.941 465.167c-.547-10.326-8.797-18.248-24.515-23.545-9.234-3.109-18.281-4.391-18.656-4.453-.5-.062-1-.094-1.5-.094l-61.544.125.938-1.453c12.874-19.968 14.202-28.968 14.39-33.998 1.25-33.249-4.906-53.749-26.092-77.857-11.281-12.826-31.468-20.686-63.294-20.686-17.187 0-31.171 2.062-31.764 2.156a10.555 10.555 0 0 0-5.125 2.25l-54.888 44.325a10.978 10.978 0 0 0-2.016 2.156c-14.453 20.53-17.171 45.765-7.859 72.998 6.734 19.702 17.5 33.623 17.953 34.201a10.669 10.669 0 0 0 9.421 4.062l30.139-2.874-.469 28.076a10.771 10.771 0 0 0 3.062 7.656 10.73 10.73 0 0 0 7.609 3.188h192.555c2.828 0 5.531-1.125 7.531-3.109 1.547-1.547 15.046-15.531 14.124-33.124z"
              style={{
                fill: "#e6e9ed",
              }}
            />
          </svg>
        )}
        <RadixSlider.Root max={100} step={1} value={value} onValueChange={handleSliderChange} className={cn(className, "relative flex h-10 w-[70%] my-20 mx-auto touch-none select-none items-center")}>
          <RadixSlider.Track className="relative h-[3px] grow rounded-full bg-zinc-100 dark:bg-zinc-800">
            <RadixSlider.Range className="absolute h-full rounded-full bg-black dark:bg-white" />
          </RadixSlider.Track>
          <RadixSlider.Thumb
            className="relative block h-5 w-5 rounded-[1rem] bg-white shadow-md ring ring-black/10"
            aria-label="Volume"
            onMouseEnter={handleMouseEnter} // Menampilkan Player saat mouse masuk
            onMouseLeave={handleMouseLeave} // Menampilkan gambar saat mouse keluar
            onMouseUp={handleMouseLeave}
          >
            <NumberFlow
              willChange
              value={value}
              isolate
              opacityTiming={{
                duration: 250,
                easing: "ease-out",
              }}
              transformTiming={{
                easing: `linear(0, 0.0033 0.8%, 0.0263 2.39%, 0.0896 4.77%, 0.4676 15.12%, 0.5688, 0.6553, 0.7274, 0.7862, 0.8336 31.04%, 0.8793, 0.9132 38.99%, 0.9421 43.77%, 0.9642 49.34%, 0.9796 55.71%, 0.9893 62.87%, 0.9952 71.62%, 0.9983 82.76%, 0.9996 99.47%)`,
                duration: 500,
              }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-lg font-semibold"
            />
          </RadixSlider.Thumb>
        </RadixSlider.Root>
      </div>
    </ReloadWrapper>
  );
}
