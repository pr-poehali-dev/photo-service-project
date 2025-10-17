import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      icon: 'Camera',
      title: 'Фото на документы',
      description: 'Профессиональная съёмка для паспорта, визы, удостоверений. Соответствие всем стандартам.',
      price: 'от 300 ₽'
    },
    {
      icon: 'Sparkles',
      title: 'Ретушь фотографий',
      description: 'Цветокоррекция, устранение дефектов, художественная обработка любой сложности.',
      price: 'от 500 ₽'
    },
    {
      icon: 'Heart',
      title: 'Ритуальные портреты',
      description: 'Деликатная реставрация и печать портретов на холсте с высоким качеством.',
      price: 'от 1500 ₽'
    },
    {
      icon: 'Image',
      title: 'Постеры и коллажи',
      description: 'Печать фотопостеров A4, A3. Создание коллажей по вашему макету.',
      price: 'от 400 ₽'
    },
    {
      icon: 'Coffee',
      title: 'Сублимация на кружках',
      description: 'Печать любых изображений на керамических кружках. Стойкая сублимационная печать.',
      price: 'от 600 ₽'
    },
    {
      icon: 'Gift',
      title: 'Сувенирная продукция',
      description: 'Печать на подушках, шоперах, футболках, пайтах. Брелоки с вашим фото.',
      price: 'от 500 ₽'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/c1cd7515-37f1-4ad5-9171-2c7ae9b9e97c/files/5fac948f-3700-45f0-b83f-7ee71cc967d0.jpg',
      title: 'Фото на документы',
      category: 'Документы'
    },
    {
      image: 'https://cdn.poehali.dev/projects/c1cd7515-37f1-4ad5-9171-2c7ae9b9e97c/files/ff529e72-f9d2-4b0f-9ab4-5a60f0d3b696.jpg',
      title: 'Ретушь портретов',
      category: 'Ретушь'
    },
    {
      image: 'https://cdn.poehali.dev/projects/c1cd7515-37f1-4ad5-9171-2c7ae9b9e97c/files/14b9754a-0771-43ff-95bd-47ecd01dc1ed.jpg',
      title: 'Сувениры',
      category: 'Продукция'
    }
  ];

  const priceList = [
    { service: 'Фото на документы (4 шт)', price: '300 ₽' },
    { service: 'Фото на документы (8 шт)', price: '500 ₽' },
    { service: 'Ретушь простая', price: '500 ₽' },
    { service: 'Ретушь сложная', price: '1000 ₽' },
    { service: 'Ритуальный портрет 20×30', price: '1500 ₽' },
    { service: 'Ритуальный портрет 30×40', price: '2500 ₽' },
    { service: 'Постер A4', price: '400 ₽' },
    { service: 'Постер A3', price: '700 ₽' },
    { service: 'Коллаж A4', price: '600 ₽' },
    { service: 'Коллаж A3', price: '900 ₽' },
    { service: 'Кружка с фото', price: '600 ₽' },
    { service: 'Подушка с фото', price: '800 ₽' },
    { service: 'Шопер с фото', price: '700 ₽' },
    { service: 'Футболка с фото', price: '1200 ₽' },
    { service: 'Брелок с фото', price: '500 ₽' }
  ];

  const faqs = [
    {
      question: 'Сколько времени занимает изготовление?',
      answer: 'Фото на документы готовы в течение 15 минут. Сувенирная продукция изготавливается 1-3 рабочих дня в зависимости от сложности заказа.'
    },
    {
      question: 'Какие форматы фото вы принимаете?',
      answer: 'Мы работаем с любыми форматами: JPEG, PNG, TIFF, RAW. Можете принести фото на флешке, отправить по email или в мессенджер.'
    },
    {
      question: 'Можно ли заказать доставку?',
      answer: 'Да, мы осуществляем доставку по городу курьером или отправляем почтой в другие регионы. Стоимость доставки рассчитывается индивидуально.'
    },
    {
      question: 'Предоставляете ли вы гарантию на продукцию?',
      answer: 'На всю сувенирную продукцию предоставляется гарантия 30 дней. Если качество печати вас не устроит, мы переделаем заказ бесплатно.'
    },
    {
      question: 'Можно ли заказать нестандартный размер?',
      answer: 'Конечно! Мы изготавливаем продукцию любых размеров по вашему запросу. Свяжитесь с нами для уточнения деталей и стоимости.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Camera" className="text-primary" size={28} />
              <span className="text-xl font-semibold">ФотоСтудия</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-sm hover:text-primary transition-colors">Портфолио</a>
              <a href="#price" className="text-sm hover:text-primary transition-colors">Прайс</a>
              <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Профессиональные
                <span className="text-primary"> фотоуслуги</span> и сувениры
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Качественная съёмка на документы, ретушь любой сложности, изготовление ритуальных портретов 
                и сувенирной продукции с индивидуальным дизайном.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="hover-scale">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" className="hover-scale">
                  <Icon name="ArrowDown" size={18} className="mr-2" />
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/c1cd7515-37f1-4ad5-9171-2c7ae9b9e97c/files/5fac948f-3700-45f0-b83f-7ee71cc967d0.jpg"
                alt="Фотостудия"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding bg-muted/30 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Полный спектр фотоуслуг и изготовление сувенирной продукции</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale cursor-pointer border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <p className="text-primary font-semibold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-padding px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground text-lg">Примеры наших работ</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg hover-scale cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-wider text-primary mb-1">{item.category}</p>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="section-padding bg-muted/30 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-muted-foreground text-lg">Актуальные цены на все услуги</p>
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-4">
                {priceList.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b last:border-0">
                    <span className="text-foreground">{item.service}</span>
                    <span className="font-semibold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="section-padding px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground text-lg">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="section-padding bg-secondary text-white px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-white/80 mb-8">
                Оставьте заявку, и мы свяжемся с вами в течение 15 минут для уточнения деталей заказа.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-white/80">г. Москва, ул. Примерная, д. 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-white/80">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/80">info@photostudio.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-white/80">Пн-Пт: 9:00 - 20:00<br/>Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Опишите ваш заказ" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/10 py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2024 ФотоСтудия. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;