import { truncate } from "lodash";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const ItemCard = ({ img, title, old_price, price, link, store }) => {
  return (
    <div className="grid items-center justify-items-center min-h-[455px] rounded-xl py-4 px-5 bg-slate-100 transition-all duration-700 ease-in-out w-full hover:scale-105 my-4">
      <img src={img} alt={`imagem do produto: ${img}`} className="h-36 w-36" />
      <h1 className="text-base md:text-lg xl:text-xl text">
        {truncate(title, { length: 75 })}
      </h1>
      <p className="text-sm md:text-base line-through text-primaryColor font-normal">
        R$ {old_price}
      </p>
      <p className="text-lg md:text-2xl text-primaryColorDark font-bold">
        R$ {price}
      </p>
      <button type="button" className="btn-primary">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2"
        >
          <p>Ver Produto</p>
          <BsArrowUpRightSquareFill className="hidden md:flex" />
        </a>
      </button>
      <div className="flex flex-col items-center justify-center mt-5">
        <p className="text-xs">Vendido por:</p>
        <div className="text-base font-bold">{store}</div>
      </div>
    </div>
  );
};

export default ItemCard;
