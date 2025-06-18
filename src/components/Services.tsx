import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "💅",
      title: "Маникюр",
      description: "Классический и аппаратный маникюр, покрытие гель-лаком",
      price: "от 1500 ₽",
      features: ["Обработка кутикулы", "Покрытие гель-лак", "Дизайн ногтей"],
    },
    {
      icon: "🦶",
      title: "Педикюр",
      description: "Профессиональный уход за стопами и ногтями",
      price: "от 2000 ₽",
      features: [
        "Аппаратная обработка",
        "Удаление мозолей",
        "Покрытие гель-лак",
      ],
    },
    {
      icon: "✂️",
      title: "Стрижки",
      description: "Модные стрижки и укладки для любого стиля",
      price: "от 2500 ₽",
      features: ["Консультация стилиста", "Мытье головы", "Укладка феном"],
    },
    {
      icon: "🎨",
      title: "Окрашивание",
      description: "Профессиональное окрашивание волос премиум красками",
      price: "от 4000 ₽",
      features: ["Подбор цвета", "Уход после окрашивания", "Тонирование"],
    },
    {
      icon: "👁️",
      title: "Бровист",
      description: "Оформление и коррекция бровей, окрашивание",
      price: "от 1200 ₽",
      features: ["Коррекция формы", "Окрашивание хной", "Ламинирование"],
    },
    {
      icon: "👀",
      title: "Наращивание ресниц",
      description: "Классическое и объемное наращивание ресниц",
      price: "от 2200 ₽",
      features: ["2D-6D объем", "Различные эффекты", "Коррекция"],
    },
    {
      icon: "🌟",
      title: "Косметология",
      description: "Профессиональные процедуры по уходу за лицом",
      price: "от 3000 ₽",
      features: ["Чистка лица", "Пилинги", "Массаж лица"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг красоты для вашего совершенства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 text-center leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <Icon
                      name="Check"
                      size={16}
                      className="text-rose-500 mr-2 flex-shrink-0"
                    />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-2xl font-bold text-rose-600">
                  {service.price}
                </span>
                <button className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-rose-500 hover:to-pink-500 transition-all duration-200 shadow-md hover:shadow-lg">
                  Записаться
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
