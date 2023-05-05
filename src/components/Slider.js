import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

import banner01 from "../img/banner01.png";
import banner02 from "../img/banner02.png";
import banner03 from "../img/banner03.jpg";
import banner04 from "../img/banner04.jpg";

const Slider = () => {
  const slider = [
    {
      id: "banner01",
      img: banner01,
      url: "https://github.com/rafamaltadev?tab=repositories",
    },
    {
      id: "banner02",
      img: banner02,
      url: "https://github.com/rafamaltadev?tab=repositories",
    },
    {
      id: "banner03",
      img: banner03,
      url: "https://github.com/rafamaltadev?tab=repositories",
    },
    {
      id: "banner04",
      img: banner04,
      url: "https://github.com/rafamaltadev?tab=repositories",
    },
  ];

  const splideOptions = {
    perPage: 1,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "1rem",
    autoplay: true,
    interval: 2000,
    pauseOnHover: true,
    drag: true,
  };

  return (
    <div className="hidden sm:flex w-full my-7 bg-primayBackground">
      <Splide options={splideOptions}>
        {slider.map((item) => (
          <SplideSlide key={item.id} className="mb-0.5">
            <div className="items-center pb-2 rounded-lg ">
              <div className="flex items-center justify-center w-full h-full ">
                <a
                  className="flex items-center justify-center w-full h-full "
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={item.img}
                    alt="example"
                    className="w-auto h-[47vh] lg:h-[35vh] md:h-[31vh] sm:h-[19vh] xsm:h-[12vh] object-cover shadow-md shadow-primaryColorLight rounded-lg"
                  />
                </a>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;
