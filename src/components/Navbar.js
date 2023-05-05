import { BiDollarCircle, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between gap-3 w-screen px-12 py-4 bg-primaryColorLight">
      <div className="flex items-center justify-center gap-1">
        <BiDollarCircle className="text-primaryColor text-2xl font-semibold" />
        <div className="text-primaryColor text-2xl font-bold">Promogate</div>
      </div>
      <div className="flex items-center justify-start border border-primaryColorLight p-2 rounded-full bg-white gap-1 w-[40%]">
        <BiSearchAlt2 className="text-primaryColor text-lg" />
        <input
          type="text"
          placeholder="Pesquisar"
          className="bg-transparent border-none outline-none w-full"
        />
      </div>
      <div className=""></div>
    </header>
  );
};

export default Navbar;
