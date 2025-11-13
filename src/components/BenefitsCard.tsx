import { ArrowRight } from "lucide-react"; // npm install lucide-react

export default function BenefitsCard() {
  const benefits = [
    "Установка бесплатна",
    "3 брелка на каждую квартиру бесплатно, дополнительные — 150 руб/шт",
    "В случае поломки или вандализма — замена бесплатна",
    "Имеющиеся аудиотрубки продолжат работу",
    "Видеовызовы в смартфон — уже включены в тариф",
    "Можно пользоваться как обычным домофоном в случае, если нет смартфона",
  ];

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl mt-6">
      <ul className="space-y-3">
        {benefits.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-800">
            <ArrowRight className="text-blue-600 w-5 h-5 shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}