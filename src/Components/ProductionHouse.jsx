import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";

import starwarV from "./../assets/Videos/star-wars.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";

const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGV,
    },
  ];
  return (
    <div className="flex gap-5 p-2 px-5 md:px-16 ">
      {productionHouseList.map((list) => (
        <div
          key={list.id}
          className="border-[2px] border-gray-600
        rounded-lg hover:scale-105 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-xl shadow-gray-800"
        >
          <video src={list.video} autoPlay loop playsInline 
          className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50 "/>
          <img src={list.image} alt="PH Image" className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;