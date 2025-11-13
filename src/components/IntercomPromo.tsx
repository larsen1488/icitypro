export default function IntercomPromo() {
  return (
    <section className="w-full mt-16">
      <div className="bg-[#3366FF] text-white rounded-2xl p-8 flex flex-col md:flex-row gap-6">
        {/* Текстовая часть */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold leading-snug">
            Заменим ваш домофон <br />
            <span className="font-bold">БЕСПЛАТНО</span> в рамках проекта
            Правительства Москвы «Электронный дом»
          </h2>

          <p className="text-lg font-medium underline underline-offset-2">
            <a
              href="#form"
              className="text-lg font-medium underline underline-offset-2 cursor-pointer hover:text-gray-200 transition"
            >
              Подайте заявку на бесплатную замену домофона
            </a>
          </p>
        </div>

        {/* Видео часть */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative rounded-lg overflow-hidden">
            <video
              className="w-full h-48 object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/vid.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}