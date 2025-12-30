import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCars, setSelectedCars] = useState<number[]>([]);

  const cars = [
    {
      id: 1,
      name: 'BMW X5',
      price: '4,500,000',
      year: 2024,
      engine: '3.0L',
      power: '340 л.с.',
      fuel: '9.8 л/100км',
      image: 'https://cdn.poehali.dev/files/80cbf593-3dea-430c-b439-044ce9c5b8cf.png',
      type: 'Кроссовер'
    },
    {
      id: 2,
      name: 'Lada Granta',
      price: '850,000',
      year: 2024,
      engine: '1.6L',
      power: '106 л.с.',
      fuel: '6.8 л/100км',
      image: 'https://cdn.poehali.dev/files/granta.png',
      type: 'Седан'
    },
    {
      id: 3,
      name: 'Lada Vesta',
      price: '1,200,000',
      year: 2024,
      engine: '1.8L',
      power: '122 л.с.',
      fuel: '7.1 л/100км',
      image: 'https://cdn.poehali.dev/files/vesta.png',
      type: 'Седан'
    }
  ];

  const toggleCarSelection = (carId: number) => {
    setSelectedCars(prev => 
      prev.includes(carId) 
        ? prev.filter(id => id !== carId)
        : [...prev, carId].slice(0, 3)
    );
  };

  const getSelectedCarsData = () => {
    return cars.filter(car => selectedCars.includes(car.id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-secondary to-primary text-white py-24 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            ГАРАНТ<span className="text-yellow-300">АВТО</span>
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Найдите автомобиль мечты среди премиальных моделей
          </p>
          
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <div className="flex gap-4 flex-wrap">
              <Input
                placeholder="Поиск по марке или модели..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-white/20 border-white/30 text-white placeholder-white/70"
              />
              <Select>
                <SelectTrigger className="w-40 bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Тип кузова" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Седан</SelectItem>
                  <SelectItem value="crossover">Кроссовер</SelectItem>
                  <SelectItem value="hatchback">Хэтчбек</SelectItem>
                </SelectContent>
              </Select>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Icon name="Search" size={20} className="mr-2" />
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="catalog" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="catalog" className="text-lg">
              <Icon name="Car" size={20} className="mr-2" />
              Каталог
            </TabsTrigger>
            <TabsTrigger value="comparison" className="text-lg">
              <Icon name="BarChart3" size={20} className="mr-2" />
              Сравнение
            </TabsTrigger>
          </TabsList>

          {/* Catalog Tab */}
          <TabsContent value="catalog" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Популярные модели</h2>
              <p className="text-gray-600 text-lg">Выберите автомобиль для сравнения</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car) => (
                <Card key={car.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                  <div className="relative">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-white">
                      {car.type}
                    </Badge>
                    <div className="absolute top-4 left-4">
                      <Button
                        size="sm"
                        variant={selectedCars.includes(car.id) ? "default" : "secondary"}
                        onClick={() => toggleCarSelection(car.id)}
                        className="rounded-full"
                      >
                        <Icon name={selectedCars.includes(car.id) ? "Check" : "Plus"} size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-800">{car.name}</CardTitle>
                    <CardDescription className="text-primary text-xl font-bold">
                      {car.price} ₽
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} className="text-gray-500" />
                        <span>{car.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Zap" size={16} className="text-gray-500" />
                        <span>{car.power}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Settings" size={16} className="text-gray-500" />
                        <span>{car.engine}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Fuel" size={16} className="text-gray-500" />
                        <span>{car.fuel}</span>
                      </div>
                    </div>
                    

                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Comparison Tab */}
          <TabsContent value="comparison" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Сравнение автомобилей</h2>
              <p className="text-gray-600">
                Выбрано: {selectedCars.length}/3 автомобиля
              </p>
            </div>

            {selectedCars.length === 0 ? (
              <Card className="p-12 text-center">
                <Icon name="Car" size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Выберите автомобили для сравнения
                </h3>
                <p className="text-gray-500">
                  Перейдите в каталог и выберите до 3 автомобилей
                </p>
              </Card>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                      <th className="p-4 text-left font-semibold">Характеристика</th>
                      {getSelectedCarsData().map(car => (
                        <th key={car.id} className="p-4 text-center font-semibold min-w-48">
                          <div className="space-y-2">
                            <img 
                              src={car.image} 
                              alt={car.name}
                              className="w-20 h-12 object-cover rounded mx-auto"
                            />
                            <div>{car.name}</div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-gray-50">Цена</td>
                      {getSelectedCarsData().map(car => (
                        <td key={car.id} className="p-4 text-center text-primary font-bold">
                          {car.price} ₽
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-gray-50">Год выпуска</td>
                      {getSelectedCarsData().map(car => (
                        <td key={car.id} className="p-4 text-center">{car.year}</td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-gray-50">Двигатель</td>
                      {getSelectedCarsData().map(car => (
                        <td key={car.id} className="p-4 text-center">{car.engine}</td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold bg-gray-50">Мощность</td>
                      {getSelectedCarsData().map(car => (
                        <td key={car.id} className="p-4 text-center">{car.power}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold bg-gray-50">Расход топлива</td>
                      {getSelectedCarsData().map(car => (
                        <td key={car.id} className="p-4 text-center">{car.fuel}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </TabsContent>


        </Tabs>

        {/* Contact Section */}
        <section className="mt-16 bg-gradient-to-r from-accent to-gray-800 text-white rounded-2xl p-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl opacity-90">Мы поможем подобрать идеальный автомобиль</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-lg">+7 (928)736-11-39</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-lg">info@autosalon.ru</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-lg">г. Москва, ул. Тверская, 1</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;