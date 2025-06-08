import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, Pagination } from "swiper/modules";
import Mithare from "./assets/Mithare.jpg";
import Varnika from "./assets/Varnika.jpg";
import Rohan from "./assets/IMG_20250608_000133.jpg";
import Contact from "./assets/images/contact-me.svg";
import Header from "./components/Header";
import Main from "./components/Main";

export const App = () => {
  return (
    <>
      <section className="flex flex-col justify-between h-screen" id="top">
        <Header></Header>

        <Main></Main>

        <div className="relative z-10 self-center after:content-[''] after:absolute after:w-[2px] after:h-[21px] after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-4/5">
          <button className="pointer-events-auto shadow-md/50 shadow-black sm:text-xl mb-16 bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#18b1d7] to-[#1f2a86e6] relative transition-transform duration-100 hover:scale-105 cursor-pointer group">
            <a
              href="#latestworks"
              className="transition-all ease-in-out duration-100"
            >
              Latest Works
            </a>
            <svg
              className="absolute left-1/2 -translate-x-1/2 top-12 transition-all duration-200 rotate-90 group-hover:top-13"
              fill="#fff"
              height="26px"
              width="26px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xml:space="preserve"
            >
              <path
                id="XMLID_27_"
                d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
              />
            </svg>
          </button>
        </div>
      </section>

      <section
        id="latestworks"
        className="max-w-screen-xl mx-auto px-8 lg:px-6 relative pb-8 sm:pb-16"
      >
        <h2 className="text-[30px] min-[650px]:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] min-[650px]:border-b-2 border-[#1788ae]">
          Latest Works
        </h2>
        <div className="flex flex-row max-[650px]:flex-col gap-[80px] items-center mt-8 min-[650px]:mt-20 relative">
          <div className="h-[1px] max-[650px]:hidden left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2"></div>
          <div className="w-4 h-4 max-[650px]:hidden rounded-full border-3 border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-125 transition-transform ease-in-out duration-150 cursor-pointer"></div>
          <a
            href="https://www.harigurus.com/"
            target="_blank"
            className="flex cursor-auto pointer-events-none w-full relative max-[650px]:justify-center"
          >
            <div className="relative group">
              <span className="flex max-[650px]:hidden pointer-events-auto cursor-pointer bg-[#fc815c] absolute left-1/2 -translate-x-1/2 top-5 group-hover:-top-14 ease-jump duration-300 px-4 py-2 rounded w-max items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Harigurus
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
              <img
                className="max-w-[400px] w-full h-auto min-[650px]:cursor-pointer min-[650px]:pointer-events-auto mr-auto relative ease-in-out duration-200 min-[650px]:group-hover:scale-110"
                src="https://anuragsinghbam.netlify.app/images/harigurus.webp"
                alt=""
              />
              <span className="hidden text-sm max-[650px]:flex pointer-events-auto cursor-pointer bg-[#fc815c] absolute left-1/2 -translate-x-1/2 top-full mt-6 px-4 py-2 rounded w-max items-center gap-1">
                Harigurus
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
          <div className="w-full">
            <h3 className="text-[#fc815c] font-bold text-4xl max-lg:text-3xl">
              Harigurus
            </h3>
            <span className="text-[#fc815c] text-lg">(Event Booking)</span>
            <p className="text-justify mt-2 text-[16px] max-lg:text-sm">
              HariGurus is a one-stop-shop for all Hindu religious, customs and
              traditional requirements. Built the complete site from scratch.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2 text-[13.6px] max-md:text-[12px]">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #react.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #express.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #node.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #swiper.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #mongoDB
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #mongoose
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #figma
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row max-[650px]:flex-col-reverse gap-[80px] items-center mt-8 min-[650px]:mt-20 relative">
          <div className="w-full">
            <h3 className="text-[#ffe578] font-bold text-4xl max-lg:text-3xl">
              EazyGrad
            </h3>
            <span className="text-[#ffe578] text-lg">(EdTech Startup)</span>
            <p className="text-justify mt-2 text-[16px] max-lg:text-sm">
              Being a lead developer, revamped the site to a highly responsive,
              and interactive website. Created new features and pages. Worked as
              a team with product manager and ux designer.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2 text-[13.6px] max-md:text-[12px]">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #node.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #express.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #mongoDB
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #mongoDBAtlas
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #ejs
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #swiper.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #html
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #lighthouse
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #figma
              </li>
            </ul>
          </div>
          <div className="h-[1px] max-[650px]:hidden left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2"></div>
          <div className="w-4 h-4 max-[650px]:hidden rounded-full border-3 border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-125 transition-transform ease-in-out duration-150 cursor-pointer"></div>
          <a
            href="https://www.eazygrad.com/"
            target="_blank"
            className="flex cursor-auto pointer-events-none w-full relative max-[650px]:justify-center"
          >
            <div className="relative group min-[650px]:ml-auto">
              <span className="flex max-[650px]:hidden text-black pointer-events-auto cursor-pointer bg-[#ffe578] absolute left-1/2 -translate-x-1/2 top-5 group-hover:-top-15 ease-jump duration-300 px-4 py-2 rounded w-max items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                EazyGrad
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
              <img
                className="max-w-[400px] w-full h-auto min-[650px]:cursor-pointer min-[650px]:pointer-events-auto mr-auto relative ease-in-out duration-200 min-[650px]:group-hover:scale-110"
                src="https://anuragsinghbam.netlify.app/images/eazygrad.webp"
                alt=""
              />
              <span className="hidden text-sm max-[650px]:flex text-black pointer-events-auto cursor-pointer bg-[#ffe578] absolute left-1/2 -translate-x-1/2 top-full mt-6 px-4 py-2 rounded w-max items-center gap-1">
                EazyGrad
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>
        <div className="flex flex-row max-[650px]:flex-col gap-[80px] items-center mt-8 min-[650px]:mt-20 relative">
          <div className="h-[1px] max-[650px]:hidden left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2"></div>
          <div className="w-4 h-4 max-[650px]:hidden rounded-full border-3 border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-125 transition-transform ease-in-out duration-150 cursor-pointer"></div>
          <a
            href="https://webdevenglish.com/"
            target="_blank"
            className="flex cursor-auto pointer-events-none w-full relative max-[650px]:justify-center"
          >
            <div className="relative group">
              <span className="flex max-[650px]:hidden pointer-events-auto cursor-pointer bg-[#47afa1] absolute left-1/2 -translate-x-1/2 top-5 group-hover:-top-15 ease-jump duration-300 px-4 py-2 rounded w-max items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Web Dev English
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
              <img
                className="max-w-[400px] w-full h-auto min-[650px]:cursor-pointer min-[650px]:pointer-events-auto mr-auto relative ease-in-out duration-200 min-[650px]:group-hover:scale-110"
                src="https://anuragsinghbam.netlify.app/images/web-dev-english.webp"
                alt=""
              />
              <span className="hidden text-sm max-[650px]:flex pointer-events-auto cursor-pointer bg-[#47afa1] absolute left-1/2 -translate-x-1/2 top-full mt-6 px-4 py-2 rounded w-max items-center gap-1">
                Web Dev English
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
          <div className="w-full">
            <h3 className="text-[#47afa1] font-bold text-4xl max-lg:text-3xl">
              Web Dev English
            </h3>
            <span className="text-[#47afa1] text-lg">
              (Coaching and Consulting)
            </span>
            <p className="text-justify mt-2 text-[16px] max-lg:text-sm">
              US-based English Coach's website for guiding techies. Improved
              existing look and added new features and sections.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2 text-[13.6px] max-md:text-[12px]">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #wordpress
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #elementor
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #html
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #figma
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row max-[650px]:flex-col-reverse gap-[80px] items-center mt-8 min-[650px]:mt-20 relative">
          <div className="w-full">
            <h3 className="text-[#2694d4] font-bold text-4xl max-lg:text-3xl">
              Money Arjan Solutions
            </h3>
            <span className="text-[#2694d4] text-lg">
              (Software Development Agency)
            </span>
            <p className="text-justify mt-2 text-[16px] max-lg:text-sm">
              Designed and developed the site from scratch. Used a combo of
              themes and Figma to get the best results. Integrated contact form
              in the website using Netlify.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2 text-[13.6px] max-md:text-[12px]">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #html
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #bootstrap
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #netlify
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #figma
              </li>
            </ul>
          </div>
          <div className="h-[1px] max-[650px]:hidden left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2"></div>
          <div className="w-4 h-4 max-[650px]:hidden rounded-full border-3 border-[#2694d4] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-125 transition-transform ease-in-out duration-150 cursor-pointer"></div>
          <a
            href="https://money-arjan.netlify.app/"
            target="_blank"
            className="flex cursor-auto pointer-events-none w-full relative max-[650px]:justify-center"
          >
            <div className="relative group min-[650px]:ml-auto">
              <span className="flex max-[650px]:hidden bg-[#2694d4] pointer-events-auto cursor-pointer absolute left-1/2 -translate-x-1/2 top-5 group-hover:-top-14 ease-jump duration-300 px-4 py-2 rounded w-max items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Money Arjan Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
              <img
                className="max-w-[400px] w-full h-auto min-[650px]:cursor-pointer min-[650px]:pointer-events-auto mr-auto relative ease-in-out duration-200 min-[650px]:group-hover:scale-110"
                src="https://anuragsinghbam.netlify.app/images/money-arjan.webp"
                alt=""
              />
              <span className="hidden text-sm max-[650px]:flex pointer-events-auto cursor-pointer bg-[#2694d4] absolute left-1/2 -translate-x-1/2 top-full mt-6 px-4 py-2 rounded w-max items-center gap-1">
                Money Arjan Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>
        <div className="w-[2px] max-[650px]:hidden bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-2/3"></div>
      </section>
      <section className="max-w-screen-xl mx-auto px-4 pb-12">
        <h2 className="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center sm:border-2 border-[#1788ae] rounded-md">
          What my clients are saying?
        </h2>
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          className="mySwiper !pb-12 !pt-6 min-[650px]:mt-8 max-w-[1000px]"
        >
          <SwiperSlide>
            <div className="flex flex-col min-[650px]:flex-row bg-[#141414] mx-2 sm:mx-8 md:mx-12 w-full md:max-w-[800px] items-center shadow-[0px_0px_25px_rgba(0,0,0,0.5)] rounded-xl p-7 md:p-9">
              <img
                className="shrink-0 w-full max-w-[160px] md:max-w-[180px] h-auto rounded-full drop-shadow-[0px_0px_6px_rgba(255,255,255,0.5)]"
                src={Mithare}
              />
              <div className="flex flex-col min-[650px]:ml-6 text-left pt-4 min-[650px]:pt-16">
                <p className="text-sm md:text-lg max-[650px]:text-justify max-[650px]:order-last my-3">
                  “Aditya is a talented person with his extraordinary skills in
                  Web Development! He is a literal God in this field and I want
                  to be his Sishya, I am a dust in front of him. If anyone has
                  his contact number, please share with me, I need him for my
                  successful career”
                </p>
                <h2 className="text-right max-[650px]:text-center text-2xl md:text-3xl font-semibold text-[#1788ae]">
                  Mithare Aditya
                </h2>
                <h5 className="text-right max-[650px]:text-center text-xs md:text-sm font-semibold text-[#1788ae]">
                  Class Technician
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col min-[650px]:flex-row bg-[#141414] mx-2 sm:mx-8 md:mx-12 w-full md:max-w-[800px] items-center shadow-[0px_0px_25px_rgba(0,0,0,0.5)] rounded-xl p-7 md:p-9">
              <img
                className="shrink-0 w-full max-w-[160px] md:max-w-[180px] h-auto rounded-full drop-shadow-[0px_0px_6px_rgba(255,255,255,0.5)]"
                src={Varnika}
              />
              <div className="flex flex-col min-[650px]:ml-6 text-left pt-4 min-[650px]:pt-16">
                <p className="text-sm md:text-lg max-[650px]:text-justify max-[650px]:order-last my-3">
                  “Aditya was a wonderful developer to work with! I was eating
                  my lunch and he coded me into his website! It's an honor to be
                  on his website, a dream come true! Do give him a job, he
                  deserves 40 LPA, let me eat my lunch now, Bbye!!”
                </p>
                <h2 className="text-right max-[650px]:text-center text-2xl md:text-3xl font-semibold text-[#1788ae]">
                  Varnika K
                </h2>
                <h5 className="text-right max-[650px]:text-center text-xs md:text-sm font-semibold text-[#1788ae]">
                  Class Representative
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col min-[650px]:flex-row bg-[#141414] mx-2 sm:mx-8 md:mx-12 w-full md:max-w-[800px] items-center shadow-[0px_0px_25px_rgba(0,0,0,0.5)] rounded-xl p-7 md:p-9">
              <img
                className="shrink-0 w-full max-w-[160px] md:max-w-[180px] h-auto rounded-full drop-shadow-[0px_0px_6px_rgba(255,255,255,0.5)]"
                src={Rohan}
              />
              <div className="flex flex-col min-[650px]:ml-6 text-left pt-4 min-[650px]:pt-16">
                <p className="text-sm md:text-lg max-[650px]:text-justify max-[650px]:order-last my-3">
                  “I don't know what all this stuff is about but whatever and
                  however he made, it's awesome. I don't have any clue about
                  coding and I insist him to join my circus but he doesn't
                  listen and keeps on coding.”
                </p>
                <h2 className="text-right max-[650px]:text-center text-2xl md:text-3xl font-semibold text-[#1788ae]">
                  Rohan
                </h2>
                <h5 className="text-right max-[650px]:text-center text-xs md:text-sm font-semibold text-[#1788ae]">
                  Class Joker
                </h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="max-w-screen-xl mx-auto px-4 pb-12">
        <h2 className="text-3xl mb-12 sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center sm:border-2 border-[#1788ae] rounded-md">
          Let's Connect!
        </h2>
        <div className="flex flex-col min-[990px]:flex-row">
          <div className="w-full max-w-[700px] h-auto">
            <img src={Contact} alt="" />
          </div>

          <form className="w-full max-w-[700px] mx-auto">
            <div className="mb-5">
              <label
                for="name"
                className="flex gap-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow-xs outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="flex gap-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-at-sign"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                </svg>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-xs outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="message"
                className="flex gap-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-message-square"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block outline-none p-2.5 mb-8 resize-none w-full h-45 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-4 pb-2">
        <footer>
          <div className="text-[#999] text-xs text-center mb-4">
            Aditya Prasad &copy; 2025
          </div>
          <div className="flex justify-center">
            <a
              href="#top"
              className="flex w-max mb-6 cursor-pointer relative group justify-center items-center"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 406 368"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                  stroke="#3675eb"
                  stroke-opacity="1"
                  stroke-width="16"
                />
                <path
                  d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                  stroke="url(#paint0_linear)"
                  stroke-width="16"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="205.549"
                    y1="20.0169"
                    x2="204.338"
                    y2="342.461"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1595B6" />
                    <stop offset="1" stop-color="#1595B6" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="flex opacity-0 pointer-events-auto cursor-pointer bg-blue-500 absolute px-4 py-2 rounded w-max ease-in-out transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-18 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-top-2">
                To Top
              </span>
            </a>
          </div>
          <ul className="flex gap-8 justify-center space-y-6 sm:space-y-8 text-blue-400">
            <li className="pointer-events-auto transition-transform duration-100 hover:text-blue-500 hover:scale-110">
              <a
                href="https://www.linkedin.com/in/aditya-prasad-095ab9329/"
                target="_blank"
              >
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </a>
            </li>
            <li className="pointer-events-auto transition-transform duration-100 hover:text-blue-500 hover:scale-110">
              <a href="https://x.com" target="_blank">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </a>
            </li>
            <li className="pointer-events-auto transition-transform duration-100 hover:text-blue-500 hover:scale-110">
              <a href="https://instagram.com" target="_blank">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
            </li>
            <li className="pointer-events-auto transition-transform duration-100 hover:text-blue-500 hover:scale-110">
              <a href="mailto:adithyap455@gmail.com" target="_blank">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                  />
                </svg>
              </a>
            </li>
            <li className="pointer-events-auto transition-transform duration-100 hover:text-blue-500 hover:scale-110">
              <a href="https://github.com/blueberry-adii" target="_blank">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </>
  );
};

export default App;
