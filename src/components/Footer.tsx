export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Продукты */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Наши продукты</h3>
          <ul className="space-y-2 text-sm">
            <li>Разработка ПО</li>
            <li>Умный домофон ICP</li>
            <li>Руководство по эксплуатации</li>
          </ul>
        </div>

        {/* Инструкции */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Инструкции</h3>
          <ul className="space-y-2 text-sm">
            <li>Описание функциональных характеристик</li>
            <li>Инструкция по установке и эксплуатации</li>
            <li>Инструкция по скачиванию приложения для жителей Москвы</li>
            <li>Приложение для жителей регионов</li>
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Контакты</h3>
          <p className="text-sm mb-1">Офис: Москва, ул. Волхонка, д. 16, этаж 2, помещение 9</p>
          <p className="text-sm mb-1">Почта: <a href="mailto:info@icitypro.ru" className="underline">info@icitypro.ru</a></p>
          <p className="text-sm mb-1">Тел.: <a href="tel:+74950238842" className="underline">+7 (495) 023-88-42</a></p>
          <p className="text-sm mb-1">ОГРН: 1207700201257</p>
          <p className="text-sm mb-1">ИНН: 9706006321</p>
          <p className="text-sm mb-1">ОКВЭД: 62.01 Разработка компьютерного программного обеспечения</p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/30 pt-4 text-center text-sm">
        © 2025 АО «АйСитиПро» | Все права зарегистрированы
      </div>
    </footer>
  );
}
