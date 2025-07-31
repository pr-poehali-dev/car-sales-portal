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
      image: '/img/10d2b38e-a2f6-47c5-b34f-deddf4e52ac1.jpg',
      type: 'SUV'
    },
    {
      id: 2,
      name: 'Audi A6',
      price: '3,200,000',
      year: 2024,
      engine: '2.0L',
      power: '245 л.с.',
      fuel: '7.2 л/100км',
      image: '/img/1fa3a355-cad3-4f8c-a654-4bb47f321142.jpg',
      type: 'Седан'
    },
    {
      id: 3,
      name: 'Mercedes GLC',
      price: '5,100,000',
      year: 2024,
      engine: '2.0L',
      power: '258 л.с.',
      fuel: '8.5 л/100км',
      image: '/img/eb873272-c17f-4c00-bdcb-b377ea561b08.jpg',
      type: 'SUV'
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
            АВТО<span className="text-yellow-300">САЛОН</span>
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
                  <SelectItem value="suv">SUV</SelectItem>
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
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="catalog" className="text-lg">
              <Icon name="Car" size={20} className="mr-2" />
              Каталог
            </TabsTrigger>
            <TabsTrigger value="comparison" className="text-lg">
              <Icon name="BarChart3" size={20} className="mr-2" />
              Сравнение
            </TabsTrigger>
            <TabsTrigger value="credit" className="text-lg">
              <Icon name="Calculator" size={20} className="mr-2" />
              Кредит
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
                    
                    <div className="mt-6 space-y-2">
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Подробнее
                      </Button>
                      <Button variant="outline" className="w-full">
                        Тест-драйв
                      </Button>
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

          {/* Credit Tab */}
          <TabsContent value="credit" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Кредитный калькулятор</h2>
              <p className="text-gray-600">Рассчитайте ежемесячный платеж</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Параметры кредита</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Стоимость автомобиля</label>
                    <Input placeholder="3,000,000 ₽" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Первоначальный взнос</label>
                    <Input placeholder="600,000 ₽" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Срок кредита</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите срок" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12">1 год</SelectItem>
                        <SelectItem value="24">2 года</SelectItem>
                        <SelectItem value="36">3 года</SelectItem>
                        <SelectItem value="60">5 лет</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle>Результат расчета</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-gray-600">Ежемесячный платеж</div>
                    <div className="text-3xl font-bold text-primary">45,200 ₽</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-gray-600">Переплата</div>
                    <div className="text-xl font-semibold">324,000 ₽</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-gray-600">Общая сумма</div>
                    <div className="text-xl font-semibold">3,324,000 ₽</div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
              <p className="text-lg">+7 (495) 123-45-67</p>
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