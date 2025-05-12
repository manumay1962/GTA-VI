import { useGSAP } from "@gsap/react";
import React, { useState } from "react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import Card from "./components/Card";
import Trailer from "./components/Trailer";

function App() {
  const [ShowContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 20,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "center center",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -2,
      ease: "Expo.easeInOut",
      opacity: 0,
      transformOrigin: "50% 50%",
      onUpdate: () => {
        if (tl.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          tl.kill();
        }
      },
    });
  }, []);
  useGSAP(() => {
    if (!ShowContent) return;
    gsap.to(".main", {
      rotate: 0,
      scale: 1,
      delay: "-1",
      duration: 2,
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      rotate: 0,
      scale: 1.1,
      delay: "-0.8",
      duration: 2,
      ease: "Expo.easeInOut",
    });
    gsap.to(".building", {
      rotate: 0,
      scale: 1.2,
      delay: "-0.8",
      duration: 2,
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      rotate: 0,
      scale: 1,
      delay: "-0.8",
      bottom: "-70%",
      duration: 2,
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".building", {
        x: xMove,
      });
    });
  }, [ShowContent]);
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {ShowContent && (
        <div className="w-full  main  rotate-[-20deg] scale-[1.8] ">
          <div className="w-full h-screen  bg-black landing overflow-hidden relative">
            <div className="navbar top-0 left-0 py-10 w-full px-10 absolute z-[10] ">
              <div className="flex gap-7  items-center ">
                <div className="lines flex  flex-col gap-1  logo ">
                  <div className="line w-8 h-1 mt-2  bg-white"></div>
                  <div className="line w-5  h-1  bg-white"></div>
                  <div className="line w-3  h-1  bg-white"></div>
                </div>
                <div className="text-3xl text-white leading-none">rockstar</div>
              </div>
            </div>

            <div className="imagesdiv overflow-hidden relative w-full h-screen ">
              <img
                className=" top-0 sky scale-[1.5] rotate-[-20deg] left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="w-full h-full scale-[1.8] rotate-[-5deg]  building object-cover absolute top-0 left-0"
                src="./bg.png"
                alt=""
              />
              <div className="text absolute top-10 left-1/2 flex flex-col gap-3 -translate-x-1/2 ">
                <h1 className="text-white text text-8xl -ml-20 leading-none ">
                  grand
                </h1>
                <h1 className="text-white text text-8xl ml-20 leading-none ">
                  theft
                </h1>
                <h1 className="text-white text  text-8xl -ml-20 leading-none ">
                  auto
                </h1>
              </div>
              <img
                className="character  absolute -bottom-[210%] scale-[3] rotate-[-20deg] left-[25%]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar w-full py-10 px-10 bottom-0 left-0 bg-gradient-to-t from-black to-transparent absolute z-10">
              <div className=" flex gap-4 items-center ">
                <i className="text-3xl text-white ri-arrow-down-line"></i>
                <h3 className="font-[Helvetica_Now_Display] text-xl text-white">
                  Scroll Down
                </h3>
              </div>
              <img
                src="./ps5.png"
                className="h-[65px] object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-10"
                alt=""
              />
            </div>
          </div>
          <div className="bg-black flex px-20 items-center justify-center w-full h-screen">
            <div className="cant flex justify-between  items-center w-full h-[80%] ">
              <div className="relative limg h-full w-1/2">
                <img
                  className=" hover:scale-80 transition-all duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.7] "
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="relative rimg w-1/2">
                <h1 className=" hover:scale-105 transition-all duration-300 text-white text-6xl  mb-2 ">
                  Explore. Build.{" "}
                </h1>
                <h1 className="hover:scale-105 transition-all duration-300 text-white text-6xl  ">
                  Dominate. VI.
                </h1>
                <p className=" text-white text-xl mt-8 font-[Helvetica_Now_Display]">
                  Welcome to the ultimate destination for GTA VI enthusiasts.
                  Explore buildings, maps, leaks, and thrilling gameplay
                  content. Stay updated with news, videos, and community
                  discussions about Grand Theft Auto VI.
                </p>
                <p className="text-white text-xl mt-3 font-[Helvetica_Now_Display]">
                  Discover the future of open-world gaming with our GTA VI hub.
                  From iconic buildings to thrilling leaks and updates, dive
                  into everything you need to know about Rockstar’s next
                  masterpiece.
                </p>
                <p className="text-white text-xl mt-3 font-[Helvetica_Now_Display]">
                  Explore buildings, leaks, and updates from the exciting world
                  of GTA VI today!
                </p>
                <button className="hover:scale-105 transition-all duration-300 text-black bg-yellow-500 px-8 py-8 rounded text-3xl mt-10">
                  Explore More
                </button>
              </div>
            </div>
          </div>
          <Card />
          <Trailer />
        </div>
      )}
    </>
  );
}

export default App;
