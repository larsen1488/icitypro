import { Dot } from "lucide-react"

export default function PromoSection () {
    const items = [
        {
            img: "/price.png",
            alt: "price",
            text: [
                "Можно принимать видеовызов на смартфон",
                "Подключение до 10 смартфонов на каждую квартиру бесплатно",
                "Можно отвечать на вызовы из любой точки мира",
                "Можно самостоятельно создавать и удалять пин-коды для домофона",
                "Можно просматривать журнал проходов с указанием способа, даты и времени входа",
            ],
        }, 
        {
            img: "/settings.png",
            alt: "settings",
            text: [
                "При отсутствии смартфона привычные способы открытия двери остаются (коды, брелки, трубки)",
                "Не требует замены трубок (старые продолжат работу)",
                "Антивандальный корпус",
            ]
        },
        {
            img: "/price.png",
            alt: "price",
            text: [
                "ариф фиксирован согласно Постановлению Правительства Москвы №2801-ПП",
                "Приложение – полностью бесплатно",
                "3 брелка на квартиру бесплатно, дополнительный – 150 руб/шт",
                "Установка – бесплатно",
                "В случае поломки/вандализма – замена бесплатно",
            ]
        }
    ]
    return (
        <section className="mt-16 px-4 md:px-0">
            <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                Умный домофон ICP делает вашу жизнь комфортнее и безопаснее
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-6 md:gap-4">
                {items.map((item, i) => (
                    <div className="bg-stone-50 shadow-xl p-2 rounded-2xl" key={i}>
                        <img src={item.img} alt={item.alt} className="p-2"/>
                        <ul className="flex flex-col gap-3 p-2">
                            {item.text.map((text, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-700">
                                    <Dot className="w-12 h-12 mt-0 text-blue-500 shrink-0" />
                                    <span className="font-light text-sm">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}