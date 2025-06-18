import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 gradient-lavender">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Контакты
          </h2>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами для записи или консультации
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-rose-100 p-3 rounded-full mr-4">
                  <Icon name="MapPin" size={24} className="text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Адрес</h3>
                  <p className="text-gray-600">ул. Красоты, 15, Москва</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-rose-100 p-3 rounded-full mr-4">
                  <Icon name="Phone" size={24} className="text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Телефон
                  </h3>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-rose-100 p-3 rounded-full mr-4">
                  <Icon name="Clock" size={24} className="text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Режим работы
                  </h3>
                  <div className="text-gray-600">
                    <p>Пн-Пт: 9:00 - 21:00</p>
                    <p>Сб-Вс: 10:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-rose-100 p-3 rounded-full mr-4">
                  <Icon name="Mail" size={24} className="text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">hello@bellesalon.ru</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Записаться на прием
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-200"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Услуга
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-200">
                  <option>Выберите услугу</option>
                  <option>Маникюр</option>
                  <option>Педикюр</option>
                  <option>Стрижка</option>
                  <option>Окрашивание</option>
                  <option>Бровист</option>
                  <option>Наращивание ресниц</option>
                  <option>Косметология</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Дополнительные пожелания..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-6 rounded-xl text-lg font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
