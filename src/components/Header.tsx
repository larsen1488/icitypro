"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Menu, X, House} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center 2xl:px-120 xl:px-40 lg:px-40 py-4 text-sm bg-stone-50 shadow-md min-h-24 relative">
      {/* Логотип */}
      <div className="flex items-center gap-2">
        <House className="w-7 h-7 text-blue-500"/>
        {/* <img src="/headerLogo.svg" alt="iCityPro" className="h-7" /> */}
        <span className="font-semibold text-lg text-[#3b82f6]">iCityPro</span>
      </div>

      {/* Навигация для больших экранов */}
      <nav className="hidden md:flex items-center gap-8 text-gray-800">
        <div className="flex items-center gap-1 text-gray-500">
          <MapPin className="w-4 h-4" />
          <span>г. Москва, ул. Волхонка, д. 16</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-500" />
          <a href="mailto:info@icitypro.ru" className="hover:text-blue-500">
            info@icitypro.ru
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#">
            <img src="/Whatsapp.png" alt="contact" className="w-4 h-4" />
          </a>
          <Phone className="w-4 h-4 text-gray-500" />
          <a href="tel:+74950238842" className="hover:text-blue-500">
            +7 (495) 023-88-42
          </a>
        </div>
      </nav>

      {/* Кнопка бургер-меню (только на телефоне) */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(true)}
      >
        <Menu className="w-7 h-7" />
      </button>

      {/* Мобильное меню (выезжает слева) */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Верхняя часть с кнопкой закрытия */}
        <div className="flex flex-row-reverse px-4 py-4 border-b">
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6 text-gray-700 text-right" />
          </button>
        </div>

        {/* Содержимое меню */}
        <nav className="flex flex-col gap-4 px-6 py-6 text-gray-800">
          <div className="flex items-center gap-2 text-gray-500">
            <MapPin className="w-4 h-4 text-blue-500" />
            <h1 className="font-large">г. Москва, ул. Волхонка, д. 16</h1>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-500" />
            <a href="mailto:info@icitypro.ru font-large" className="hover:text-blue-500">
              info@icitypro.ru
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#">
              <img src="/Whatsapp.png" alt="contact" className="w-4 h-4" />
            </a>
            <Phone className="w-4 h-4 text-gray-500" />
            <a href="tel:+74950238842" className="hover:text-blue-500 font-large">
              +7 (495) 023-88-42
            </a>
          </div>
        </nav>
      </div>

      {/* Полупрозрачный фон при открытом меню */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-stone-950/30 bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
