"use client";

import { House } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  startAnimation: boolean;
}

function Counter({ end, duration = 2000, startAnimation }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return; 

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min((progress / duration) * end, end);
      setCount(Math.floor(current));
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [startAnimation, end, duration]);

  return <span>{count.toLocaleString("ru-RU")}</span>;
}

export default function CityProStats() {
  const stats = [
    { label: "Количество видеозвонков", value: 33292 },
    { label: "Количество открытий кнопкой в приложении", value: 146441 },
    { label: "Количество проходов по коду", value: 3026380 },
    { label: "Количество открытий дверей", value: 4754545 },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="flex justify-center items-center mt-16">
      <div className="bg-white rounded-2xl shadow p-8 max-w-5xl w-full">
        <div className="flex flex-row md:items-center mb-6">
          <House className="md:w-6 h-6 text-blue-500" />
          <h2 className="text-xl font-medium pl-2">
            <span className="text-blue-600 font-semibold">iCityPro</span> – технологии, которые работают для вас
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 mb-10">
          <div>
            <h3 className="font-semibold mb-2">Разрабатываем, производим, совершенствуем</h3>
            <p>
              АО «Айситипро» – это технологическая компания полного цикла, разработчик программно-аппаратных комплексов
              в области автоматизации многоквартирных домов. В частности, основным продуктом является ПАК «Умный
              домофон iCP».
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Производство и контроль качества</h3>
            <p>
              Все программное обеспечение и оборудование ПАК «Умный домофон iCP» разработаны АО «Айситипро». Контроль
              качества осуществляется нашей компанией на каждом этапе, что гарантирует надёжность решений.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-4">Цифры, которые говорят за нас</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold text-gray-900">
                <Counter end={stat.value} startAnimation={isVisible} />
              </div>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
