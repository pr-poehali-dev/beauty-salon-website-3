const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              О Belle Salon
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Belle Salon — это место, где красота встречается с
              профессионализмом. Мы создали пространство, где каждая деталь
              продумана для вашего комфорта и удовольствия.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Наша команда — это опытные мастера, которые постоянно
              совершенствуют свои навыки и следят за последними трендами в мире
              красоты. Мы используем только качественные материалы и современное
              оборудование.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">5+</div>
                <div className="text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">
                  1000+
                </div>
                <div className="text-gray-600">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">15+</div>
                <div className="text-gray-600">услуг красоты</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">7</div>
                <div className="text-gray-600">дней в неделю</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-rose-200 to-pink-200 rounded-3xl p-8 h-96 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Belle Salon Interior"
                className="rounded-2xl shadow-xl w-full h-full object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full opacity-70"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-lavender-100 to-rose-200 rounded-full opacity-70"></div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-rose-50 to-peach-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Наша миссия
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Мы стремимся подчеркнуть естественную красоту каждой женщины,
              создавая неповторимые образы и даря незабываемые эмоции. В Belle
              Salon вы не просто клиент — вы часть нашей большой семьи красоты.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
