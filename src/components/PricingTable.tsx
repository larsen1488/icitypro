export default function PricingTable() {
  const tariffs = [
    {
      description:
        "При установке одной вызывной панели и наличии одной дополнительной двери в подъезде",
      details: "1 панель, 1 дверь",
      price: "68.54 р.",
      extra: "",
      note: "",
    },
    {
      description:
        "При установке одной вызывной панели и наличии двух дополнительных дверей в подъезде",
      details: "1 панель, 2 двери",
      price: "68.54 р.",
      extra: "+ 51.41 р.",
      note: "за каждую последующую дополнительную дверь",
    },
  ];

  return (
    <section className="mt-16">
      <h3 className="text-xl font-semibold mb-4">Тарификация</h3>

      <div className="border-t border-gray-300">
        {tariffs.map((t, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-4 py-4 border-b border-gray-300 text-gray-800 text-sm md:text-base"
          >
            {/* Левая часть — описание */}
            <div className="md:col-span-1">{t.description}</div>

            {/* Колонка "детали" */}
            <div className="text-gray-600">{t.details}</div>

            {/* Основная цена */}
            <div className="font-semibold text-blue-600">{t.price}</div>

            {/* Дополнительная цена и примечание */}
            <div className="flex flex-col md:items-end text-right">
              {t.extra && (
                <span className="font-semibold text-blue-600">{t.extra}</span>
              )}
              {t.note && (
                <span className="text-gray-500 text-xs mt-1">{t.note}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}