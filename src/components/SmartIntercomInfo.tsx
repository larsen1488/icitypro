export default function SmartIntercomInfo () {
    return (
        <section className="flex flex-col md:flex-row gap-4 md:gap-6 mt-16">
            <div className="bg-[#3249D9] text-white rounded-2xl p-6 md:p-8 flex-1 relative shadow-xl">
                <h2 className="text-xl md:text-2xl font-semibold leading-snug">
                    Умный домофон ИСР АО «Айситипро» включен в проект Правительства Москвы
                    «Электронный дом»
                </h2>

                <div className="mt-6">
                    <p className="text-sm opacity-80 mb-2">Тариф:</p>
                    <span className="inline-block bg-lime-300 text-black font-medium px-3 py-1 rounded-md text-lg">
                    68,54 руб./мес.*
                    </span>
                </div>

                <p className="text-xs opacity-80 mt-6 leading-snug">
                    * Мы установим Умный домофон на вход в подъезд и бесплатно оборудуем
                    считывателем брелков 1 дополнительную дверь. В случае, если у вас
                    другая конфигурация подъезда, пожалуйста, ознакомьтесь с остальными
                    тарифами на сайте.
                </p>
                {/* Декоративная фигура */}
                <div className="absolute bottom-0 right-0 opacity-20 text-[10rem] leading-none select-none">
                    “
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 flex-1 shadow-xl">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                    Узнайте, подходит ли ваш дом
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-800">
                    <li>
                        Зайдите на сайт{" "}
                        <a
                        href="https://ed.mos.ru/"
                        className="text-blue-600 hover:underline font-medium"
                        >
                        Электронного дома
                        </a>{" "}
                        Правительства Москвы
                    </li>
                    <li>
                        Авторизуйтесь с помощью учетной записи{" "}
                        <a
                        href="https://www.mos.ru"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                        >
                        mos.ru
                        </a>
                    </li>
                    <li>Добавьте адрес Вашего дома, следуя подсказкам на сайте</li>
                    <li>В разделе «Мой дом» оставьте заявку на замену домофона</li>
                    <li>
                        Дальнейший статус Вы сможете отслеживать в Вашем личном кабинете в
                        Электронном доме
                    </li>
                </ol>
            </div>
        </section>
    )
}