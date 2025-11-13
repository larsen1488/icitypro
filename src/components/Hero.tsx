export default function Hero() {
  return (
    <section className="bg-white shadow-xl mt-16 rounded-3xl p-8 md:p-12 my-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Текстовый блок */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight my-24">
            Установим{" "}
            <span className="text-blue-500">умный домофон</span>{" "}
            вместо обычного{" "}
            <span className="text-blue-400">бесплатно</span>
          </h1>

          <div className="mt-10">
            <p className="text-gray-600 text-sm mb-2">Наши партнёры:</p>
            <div className="flex items-center gap-2">
              <img src="/listPartner.svg" alt="Электронный дом" className="h-14 shadow-xl rounded-2xl" />
              <h2><span className="text-gray-800">Электронный дом</span></h2>
            </div>
          </div>
        </div>

        {/* Изображение */}
        <div className="flex justify-center">
          <div className="rounded-2xl p-4">
            <img
              src="/domofonPhoto.png"
              alt="Домофон"
              className="w-[300px] h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
