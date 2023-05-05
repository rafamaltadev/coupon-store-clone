import { useEffect, useState } from "react";
import { BiDollarCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  const [year, setYear] = useState();

  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);

  return (
    <footer className="grid grid-cols-1 items-center justify-center w-screen">
      <div className="w-full p-4 px-8 gap-4 bg-primaryTextColor">
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-1">
            <BiDollarCircle className="text-slate-300 text-2xl font-semibold" />
            <div className="text-slate-300 text-2xl font-bold">Promogate</div>
          </div>
          <div>
            <div className="flex-col grow">
              <h2 className="text-slate-300 text-2xl font-bold">Quem somos?</h2>
              <p className="text-slate-300 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate corrupti voluptatem velit enim, quae modi quos libero
                itaque ipsa. Porro suscipit harum velit, ipsam praesentium
                officiis consectetur nulla reprehenderit ab iste quas eaque ipsa
                inventore laudantium! Accusamus quod ut rerum?
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center py-4">
          <div className="bg-primaryTextColorLight h-[2px] w-44"></div>
        </div>
        <div className="flex justify-around px-8">
          <div>
            <div>
              <h2 className="text-xl text-slate-300 mb-4">Páginas</h2>
              <a
                href="/"
                className="flex items-center text-slate-300 text-base gap-2 mb-2"
              >
                Produtos
              </a>
              <a
                href="/"
                className="flex items-center text-slate-300 text-base gap-2 mb-2"
              >
                Cupons
              </a>
              <a
                href="/"
                className="flex items-center text-slate-300 text-base gap-2 mb-2"
              >
                Lojas
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl text-slate-300 mb-4">Páginas</h2>
            <a
              href="/"
              className="flex items-center text-slate-300 text-base gap-2 mb-2"
            >
              <RiWhatsappFill />
              <p>Whatsapp</p>
            </a>
            <a
              href="/"
              className="flex items-center text-slate-300 text-base gap-2 mb-2"
            >
              <FaTelegramPlane />
              <p>Telegram</p>
            </a>
          </div>
          <div>
            <h2 className="text-xl text-slate-300 mb-4">Redes Sociais</h2>
            <a
              href="/"
              className="flex items-center text-slate-300 text-base gap-2 mb-2"
            >
              <RiInstagramFill />
              <p>Intagram</p>
            </a>
            <a
              href="/"
              className="flex items-center text-slate-300 text-base gap-2 mb-2"
            >
              <BsFacebook />
              <p>Telegram</p>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 text-center w-full bg-primaryTextColorDark text-slate-300">
        <p className="text-sm md:text-center">
          Copyright <span className="text-xs font-semibold">&copy;</span> |
          Todos os Direitos Reservados{" "}
          <span className="font-semibold">Rafa Malta {year}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
