import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="gradient-rose min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20">🌸</div>
      <div className="absolute bottom-20 right-20 text-4xl opacity-20">💅</div>
      <div className="absolute top-32 right-32 text-5xl opacity-20">✨</div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
          Belle Salon
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light">
          Салон красоты премиум-класса
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Откройте для себя мир красоты и элегантности. Профессиональные услуги
          маникюра, педикюра, стрижек и многого другого
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-2">
            <Icon name="Calendar" size={20} />
            Записаться онлайн
          </button>

          <button className="bg-white/80 text-gray-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
            <Icon name="Phone" size={20} />
            +7 (999) 123-45-67
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="text-2xl mb-2">👑</div>
            <div className="text-sm text-gray-700 font-medium">
              Премиум качество
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="text-2xl mb-2">⭐</div>
            <div className="text-sm text-gray-700 font-medium">
              5+ лет опыта
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="text-2xl mb-2">💯</div>
            <div className="text-sm text-gray-700 font-medium">
              1000+ клиентов
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="text-2xl mb-2">✨</div>
            <div className="text-sm text-gray-700 font-medium">
              Современные методы
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
