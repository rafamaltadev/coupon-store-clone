import { AiFillHome, AiFillTags } from "react-icons/ai";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import { Link } from "react-router-dom";

const TopOfer = () => {
  return (
    <div className="flex items-center justify-around h-20 w-screen border-b-2 border-x-primaryColorDark">
      <Link to="/">
        <div className="grid items-center justify-items-center cursor-pointer text-primaryColorDark transition-all duration-200 hover:scale-110">
          <AiFillHome className="w-6 h-6 flex items-center" />
          <p className="hidden sm:flex">Home</p>
        </div>
      </Link>
      <Link
        to="https://github.com/rafamaltadev?tab=repositories"
        target="_blank"
      >
        <div className="grid items-center justify-items-center cursor-pointer text-primaryColorDark transition-all duration-200 hover:scale-110">
          <AiFillTags className="w-6 h-6 flex items-center" />
          <p className="hidden sm:flex">Top Ofertas</p>
        </div>
      </Link>
      <Link
        to="https://github.com/rafamaltadev?tab=repositories"
        target="_blank"
      >
        <div className="grid items-center justify-items-center cursor-pointer text-primaryColorDark transition-all duration-200 hover:scale-110">
          <FaShippingFast className="w-6 h-6 flex items-center" />
          <p className="hidden sm:flex">Frete Grátis</p>
        </div>
      </Link>
      <Link
        to="https://github.com/rafamaltadev?tab=repositories"
        target="_blank"
      >
        <div className="grid items-center justify-items-center cursor-pointer text-primaryColorDark transition-all duration-200 hover:scale-110">
          <GiTicket className="w-6 h-6 flex items-center" />
          <p className="hidden sm:flex">Cupons</p>
        </div>
      </Link>
      <Link
        to="https://github.com/rafamaltadev?tab=repositories"
        target="_blank"
      >
        <div className="grid items-center justify-items-center cursor-pointer text-primaryColorDark transition-all duration-200 hover:scale-110">
          <RiInstagramFill className="w-6 h-6 flex items-center" />
          <p className="hidden sm:flex">Instagram</p>
        </div>
      </Link>
      <Link
        to="https://github.com/rafamaltadev?tab=repositories"
        target="_blank"
      >
        <div className="grid items-center justify-items-center cursor-pointer text-primaryColorDark transition-all duration-200 hover:scale-110">
          <RiWhatsappFill className="w-6 h-6 flex items-center" />
          <p className="hidden sm:flex">Grupo Whatsapp</p>
        </div>
      </Link>
    </div>
  );
};

export default TopOfer;
