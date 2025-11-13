"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PhoneForm() {
  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [keysCount, setKeysCount] = useState("1");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone.match(/^(\+7|8)\d{10}$/)) {
      alert("Введите корректный номер телефона в формате +7XXXXXXXXXX");
      return;
    }

    setIsLoading(true);

    const res = await fetch("/api/save-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fio, phone, city, street, house, keysCount }),
    });

    setIsLoading(false);

    if (res.ok) {
      router.push("/error");
    } else {
      alert("Ошибка при отправке формы. Попробуйте позже.");
    }
  };

  return (
    <section id="form" className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-semibold text-center">Укажите адрес замены</h2>

          <label htmlFor="fio" className="text-sm font-medium text-gray-600 mb-1">
            Укажите имя получателя
          </label>
          <input
            type="text"
            value={fio}
            onChange={(e) => setFio(e.target.value)}
            placeholder="Фамилия Имя Отчество"
            required
            className="w-full border rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          
          <label htmlFor="fio" className="text-sm font-medium text-gray-600 mb-1">
            Укажите номер телефона получателя
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+7XXXXXXXXXX"
            required
            className="w-full border rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <label htmlFor="fio" className="text-sm font-medium text-gray-600 mb-1">
            Укажите город в котором нужно провести замену
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Город"
            required
            className="w-full border rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <label htmlFor="fio" className="text-sm font-medium text-gray-600 mb-1">
            Укажите адрес по которой нужно провести замену
          </label>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Улица"
            required
            className="w-full border rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
            placeholder="Дом"
            required
            className="w-full border rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <div>
            <label className="block mb-1 font-medium">Количество ключей</label>
            <select
              value={keysCount}
              onChange={(e) => setKeysCount(e.target.value)}
              className="w-full border rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="1">1 ключ</option>
              <option value="2">2 ключа</option>
              <option value="3">3 ключа</option>
              <option value="4">4 ключа</option>
              <option value="5">5 ключей</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            {isLoading ? "Отправка..." : "Отправить"}
          </button>
        </form>
      </div>
    </section>
  );
}
