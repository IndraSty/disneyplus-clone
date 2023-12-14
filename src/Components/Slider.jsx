import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = () => {
    GlobalApi.getTrandingMovies.then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 
      mt-[160px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 
      mt-[160px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 
      scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((movie) => (
          <img
            key={movie.id}
            src={IMAGE_BASE_URL + movie.backdrop_path}
            alt="Image Movie"
            className="min-w-full md:h-[310px] object-cover object-left-top
          mr-5 rounded-md hover:border-[3px] border-gray-400 transition-all
          duration-100 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
