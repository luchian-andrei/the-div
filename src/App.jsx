import { useEffect, useState } from "react";
import MobileView from "./views/MobileView";
import DesktopView from "./views/DesktopView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [showInfo, setShowInfo] = useState(false);
  const [parent, setParent] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={`flex flex-col  text-center p-6 bg-gradient-to-b  from-[#667EEA] to-[#764BA2]  ${
        parent ? "h-fit" : "h-fit sm:h-screen"
      } `}
    >
      <p className="text-black font-semibold text-2xl mt-10 mb-5">
        The div{" "}
        <FontAwesomeIcon
          icon={faCircleQuestion}
          onMouseOver={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
        />{" "}
      </p>
      {showInfo && (
        <p className="p-5 bg-gray-100 border-2 border-gray-200 absolute top-28 md:right-44 right-0 z-30 rounded-[0px_20px_20px_20px] md:w-1/3 w-full h-fit leading-loose shadow-xl">
          Using this project you can go through some of the most popular CSS
          settings and apply them directly to the div in the right. You can see
          the changes in real time and decide which one does the job for you.
          <span className="font-semibold">
            For the best experience it is recommended to visit this site from a
            device with bigger screen.{" "}
          </span>
        </p>
      )}
      {width < 768 ? (
        <MobileView handleParent={(state) => setParent(state)} />
      ) : (
        <DesktopView handleParent={(state) => setParent(state)} />
      )}
    </section>
  );
}

export default App;
