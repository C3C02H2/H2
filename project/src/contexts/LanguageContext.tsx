import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'bg';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Home Page
    'home.title': 'Powering the Future with',
    'home.element': 'Hydrogen',
    'home.description': 'Discover how hydrogen technology is revolutionizing clean energy and shaping a sustainable tomorrow',
    'home.explore': 'Explore Properties',
    'home.see': 'See Applications',
    'home.mission': 'Our mission is to accelerate the transition to a sustainable hydrogen economy through cooperation, innovation, and community engagement.',
    'home.join': 'See Our Team',
    'home.learnMore': 'Learn More',
    
    // Features Section
    'home.features.tech.title': 'Advanced Technology',
    'home.features.tech.desc': 'Cutting-edge hydrogen solutions for the future',
    'home.features.storage.title': 'Energy Storage',
    'home.features.storage.desc': 'Efficient and safe hydrogen storage systems',
    'home.features.power.title': 'Clean Power',
    'home.features.power.desc': 'Zero-emission energy generation',
    
    // Additional Features
    'home.features.sustainable.title': 'Sustainability',
    'home.features.sustainable.desc': 'Hydrogen produced from renewable sources creates truly zero-emission energy cycles',
    'home.features.versatile.title': 'Versatility',
    'home.features.versatile.desc': 'Powers everything from vehicles and homes to industrial processes',
    'home.features.efficient.title': 'High Efficiency',
    'home.features.efficient.desc': 'Fuel cells convert hydrogen to electricity with greater efficiency than combustion engines',

    // Info Section
    'home.info.molecular.title': 'Molecular Structure',
    'home.info.molecular.desc': 'Hydrogen is the simplest and most abundant element in the universe. Its unique molecular structure makes it ideal for clean energy applications.',
    'home.info.future.title': 'Hydrogen: The Future of Clean Energy',
    'home.info.future.desc': 'Discover how hydrogen technology is revolutionizing the energy sector with zero-emission solutions for a sustainable future.',
    'home.info.production.title': 'Clean Production',
    'home.info.production.desc': 'Zero-emission hydrogen generation through electrolysis',
    'home.info.storage.title': 'Efficient Storage',
    'home.info.storage.desc': 'Advanced storage solutions for reliable energy supply',
    'home.info.about.title': 'About COOP VEK',
    'home.info.about.desc': 'Founded in Bulgaria, we are the first hydrogen cooperative in Southeast Europe, bringing together experts and enthusiasts to promote hydrogen technology and sustainable energy solutions.',
    'home.info.benefits.title': 'Benefits of Cooperation',
    'home.info.benefits.desc': 'By joining our cooperative, members gain access to expertise, resources, and collaborative opportunities in the growing hydrogen economy.',

    // Navigation
    'nav.applications': 'Applications',
    'nav.properties': 'Properties',
    'nav.whoWeAre': 'Who We Are',
    'nav.blog': 'Blog',
    'nav.transport': 'Transportation',
    'nav.power': 'Power Generation',
    'nav.industrial': 'Industrial Use',
    'nav.physical': 'Physical Properties',
    'nav.chemical': 'Chemical Properties',
    'nav.vision': 'Our Vision',
    'nav.team': 'Our Team',
    'nav.latest': 'Latest Posts',
    'nav.categories': 'Categories',

    // Footer
    'footer.company': 'COOP VEK',
    'footer.description': 'The first Hydrogen cooperative established in Bulgaria, the Balkans, and Southeast Europe.',
    'footer.quickLinks': 'Quick Links',
    'footer.properties': 'Properties',
    'footer.applications': 'Applications',
    'footer.whoWeAre': 'Who We Are',
    'footer.blog': 'Blog',
    'footer.contacts': 'Contacts',
    'footer.rights': 'Made by Tsvetomir Nikolaev.',

    // Who We Are Page
    'who.vision.description': 'Our cooperative brings together like-minded people in the field of Hydrogen economy. We believe hydrogen is a completely new chapter in the development of economic life worldwide.',
    'who.vision.value1.title': 'Vision',
    'who.vision.value1.description': 'We are the first Hydrogen cooperative established in Bulgaria, the Balkans, and Southeast Europe, uniting experts in hydrogen technologies, innovations, and renewable energy sources.',
    'who.vision.value2.title': 'Mission',
    'who.vision.value2.description': 'Our mission is to develop and expand our activities through responsible management. We believe that the future belongs to organizations that invest in "shared benefit".',
    'who.vision.value3.title': 'Values & Principles',
    'who.vision.value3.description': 'Our cooperative business model is built on solidarity, mutual assistance, volunteering, democratic governance, autonomy, and cooperation among members, working entirely for the benefit of members and the community.',
    
    // Team section
    'team.management': 'Management Board',
    'team.supervisory': 'Supervisory Board',
    
    // Properties Page
    'properties.title': 'Hydrogen Properties',
    'properties.green.hydrogen': 'Green Hydrogen',
    'properties.green.description': 'Green hydrogen is a zero-emission fuel that has the potential to revolutionize the energy industry. It is produced by splitting water into hydrogen and oxygen using renewable energy sources such as wind, solar, or hydroelectric power.',
    'properties.green.description2': 'Unlike traditional hydrogen production methods that rely on fossil fuels, green hydrogen is sustainable and environmentally friendly. Using green hydrogen can significantly reduce carbon emissions across various sectors, including transportation, industry, and power generation.',
    'properties.green.description3': 'It can also provide energy storage solutions for intermittent renewable sources, such as wind and solar power, allowing for more reliable and stable energy supply.',
    
    'properties.atomicNumber': 'Atomic Number',
    'properties.atomicMass': 'Atomic Mass',
    'properties.meltingPoint': 'Melting Point',
    'properties.boilingPoint': 'Boiling Point',
    
    'properties.physicalProps': 'Physical Properties',
    'properties.stateRT': 'State at Room Temperature',
    'properties.stateDesc': 'Colorless, odorless, tasteless, non-toxic, highly combustible diatomic gas',
    'properties.density': 'Density',
    'properties.densityValue': '0.08988 g/L at 0°C (gas), 0.07099 g/L at 20°C (gas), 0.07078 g/L at 25°C (gas)',
    'properties.crystal': 'Crystal Structure',
    'properties.crystalValue': 'Hexagonal close-packed (hcp) at low temperatures',
    'properties.thermal': 'Thermal Conductivity',
    'properties.thermalValue': '0.1805 W/(m·K)',
    
    'properties.chemicalProps': 'Chemical Properties',
    'properties.oxidation': 'Oxidation States',
    'properties.oxidationValue': '-1, 0, +1 (amphoteric oxide)',
    'properties.electronegativity': 'Electronegativity',
    'properties.electroValue': '2.20 (Pauling scale)',
    'properties.ionization': 'Ionization Energy',
    'properties.ionizationValue': '1312.0 kJ/mol (1st)',
    'properties.covalent': 'Covalent Radius',
    'properties.covalentValue': '31±5 pm',

    // Applications Page
    'applications.title': 'Hydrogen Applications',
    
    'applications.industrial': 'Industrial Applications',
    'applications.refining': 'Oil Refining',
    'applications.refiningDesc': 'Hydrogen is used to remove impurities like sulfur from petroleum and to convert heavy hydrocarbons into lighter, more valuable products.',
    'applications.ammonia': 'Ammonia Production',
    'applications.ammoniaDesc': 'Hydrogen is a key component in ammonia synthesis via the Haber process, essential for fertilizer production that sustains global agriculture.',
    'applications.metal': 'Metal Processing',
    'applications.metalDesc': 'Used in metal treatment processes as a reducing agent and to create controlled atmospheres for heat treatment of steel and other metals.',
    
    'applications.energy': 'Energy Applications',
    'applications.fuelCells': 'Fuel Cells',
    'applications.fuelCellsDesc': 'Hydrogen fuel cells generate electricity through an electrochemical reaction, producing only water and heat as byproducts, ideal for clean power generation.',
    'applications.storage': 'Energy Storage',
    'applications.storageDesc': 'Hydrogen can store excess renewable energy for later use, enabling grid balancing and providing a solution for seasonal energy storage needs.',
    'applications.rocket': 'Rocket Fuel',
    'applications.rocketDesc': 'Liquid hydrogen is used as rocket fuel due to its high energy-to-weight ratio, powering space missions and satellite launches.',
    
    'applications.research': 'Research & Advanced Technologies',
    'applications.physics': 'Particle Physics',
    'applications.physicsDesc': 'Hydrogen is used in particle accelerators and fundamental physics research to study atomic and subatomic processes.',
    'applications.cryogenics': 'Cryogenics',
    'applications.cryogenicsDesc': 'Liquid hydrogen serves as a coolant in cryogenic applications, reaching temperatures as low as 20K (-253°C).',
    'applications.spectroscopy': 'Spectroscopy',
    'applications.spectroscopyDesc': 'The hydrogen spectrum is used as a reference in spectroscopy and for calibrating scientific instruments.',
    
    'applications.transport': 'Transportation',
    'applications.fuelVehicles': 'Fuel Cell Vehicles',
    'applications.fuelVehiclesDesc': 'Hydrogen powers fuel cell electric vehicles (FCEVs) with quick refueling times and long-range capabilities, emitting only water vapor.',
    'applications.heavyTransport': 'Heavy Transportation',
    'applications.heavyTransportDesc': 'Ideal for trucks, buses, and commercial fleets where battery electric solutions face challenges with weight, range, and recharging times.',
    'applications.maritime': 'Maritime & Aviation',
    'applications.maritimeDesc': 'Emerging applications in shipping and aviation sectors where hydrogen and hydrogen-derived fuels offer pathways to decarbonize long-distance transport.',

    // Blog Page
    'blog.title': 'Hydrogen Blog',
    'blog.subtitle': 'Latest news, research and updates from the world of hydrogen',
    'blog.categories': 'Categories',
    'blog.allCategories': 'All Categories',
    'blog.tags': 'Tags',
    'blog.allTags': 'All Tags',
    'blog.readMore': 'Read More',
    'blog.publishedOn': 'Published on',
    'blog.noResults': 'No posts found. Please try a different category or tag.',
    'blog.loading': 'Loading posts...',
    
    // Blog Categories (common ones to prepopulate)
    'blog.category.technology': 'Technology',
    'blog.category.research': 'Research',
    'blog.category.industry': 'Industry',
    'blog.category.policy': 'Policy & Regulation',
    'blog.category.environment': 'Environment',
  },
  bg: {
    // Home Page
    'home.title': 'Захранваме бъдещето с',
    'home.element': 'Водород',
    'home.description': 'Открийте как водородните технологии революционизират чистата енергия и оформят устойчиво бъдеще',
    'home.explore': 'Разгледайте свойствата',
    'home.see': 'Вижте приложенията',
    'home.mission': 'Нашата мисия е да ускорим прехода към устойчива водородна икономика чрез сътрудничество, иновации и ангажиране на общността.',
    'home.join': 'Вижте екипа ни',
    'home.learnMore': 'Научете повече',
    
    // Features Section
    'home.features.tech.title': 'Модерни Технологии',
    'home.features.tech.desc': 'Съвременни водородни решения за бъдещето',
    'home.features.storage.title': 'Съхранение на Енергия',
    'home.features.storage.desc': 'Ефективни и безопасни системи за съхранение на водород',
    'home.features.power.title': 'Чиста Енергия',
    'home.features.power.desc': 'Производство на енергия с нулеви емисии',
    
    // Additional Features
    'home.features.sustainable.title': 'Устойчивост',
    'home.features.sustainable.desc': 'Водородът, произведен от възобновяеми източници, създава истински енергийни цикли с нулеви емисии',
    'home.features.versatile.title': 'Универсалност',
    'home.features.versatile.desc': 'Захранва всичко от превозни средства и домове до индустриални процеси',
    'home.features.efficient.title': 'Висока ефективност',
    'home.features.efficient.desc': 'Горивните клетки превръщат водорода в електричество с по-голяма ефективност от двигателите с вътрешно горене',

    // Info Section
    'home.info.molecular.title': 'Молекулярна Структура',
    'home.info.molecular.desc': 'Водородът е най-простият и най-разпространеният елемент във вселената. Неговата уникална молекулярна структура го прави идеален за приложения в чистата енергия.',
    'home.info.future.title': 'Водород: Бъдещето на Чистата Енергия',
    'home.info.future.desc': 'Открийте как водородните технологии революционизират енергийния сектор с решения за нулеви емисии за устойчиво бъдеще.',
    'home.info.production.title': 'Чисто Производство',
    'home.info.production.desc': 'Производство на водород с нулеви емисии чрез електролиза',
    'home.info.storage.title': 'Ефективно Съхранение',
    'home.info.storage.desc': 'Модерни решения за съхранение за надеждно енергийно снабдяване',
    'home.info.about.title': 'За КООП ВЕК',
    'home.info.about.desc': 'Основан в България, ние сме първият водороден кооператив в Югоизточна Европа, обединяващ експерти и ентусиасти за популяризиране на водородните технологии и устойчивите енергийни решения.',
    'home.info.benefits.title': 'Ползи от сътрудничеството',
    'home.info.benefits.desc': 'Чрез присъединяване към нашия кооператив, членовете получават достъп до експертиза, ресурси и възможности за сътрудничество в развиващата се водородна икономика.',

    // Navigation
    'nav.applications': 'Приложения',
    'nav.properties': 'Свойства',
    'nav.whoWeAre': 'За Нас',
    'nav.blog': 'Блог',
    'nav.transport': 'Транспорт',
    'nav.power': 'Производство на енергия',
    'nav.industrial': 'Промишлена употреба',
    'nav.physical': 'Физични свойства',
    'nav.chemical': 'Химични свойства',
    'nav.vision': 'Нашата Визия',
    'nav.team': 'Нашият Екип',
    'nav.latest': 'Последни публикации',
    'nav.categories': 'Категории',

    // Footer
    'footer.company': 'КООП ВЕК',
    'footer.description': 'КООПЕРАЦИЯ "ВОДОРОДЕН ЕНЕРГИЕН КООПЕРАТИВ" (КООП ВЕК) е първият Водороден кооператив създаден в Република България, Балканския полуостров и Югоизточна Европа. КООП ВЕК обединява съмишленици в сферата на Водородната икономика.',
    'footer.quickLinks': 'Бързи връзки',
    'footer.properties': 'Свойства',
    'footer.applications': 'Приложения',
    'footer.whoWeAre': 'За Нас',
    'footer.blog': 'Блог',
    'footer.contacts': 'Контакти',
    'footer.rights': 'Направено от Цветомир Николаев.',

    // Who We Are Page
    'who.vision.description': 'КООПЕРАЦИЯ "ВОДОРОДЕН ЕНЕРГИЕН КООПЕРАТИВ" (КООП ВЕК) е първият Водороден кооператив създаден в Република България, Балканския полуостров и Югоизточна Европа. КООП ВЕК обединява съмишленици в сферата на Водородната икономика.',
    'who.vision.value1.title': 'Нашата визия',
    'who.vision.value1.description': 'За нас от КООП ВЕК, Водородната икономика е цялостна нова страница от развитието на стопанския живот в света. КООП ВЕК е създадена от експерти в сферата на водородните технологии, иновациите, възобновяемите енергийни източници.',
    'who.vision.value2.title': 'Нашата мисия',
    'who.vision.value2.description': 'Мисията на КООП ВЕК е да се развива и разширява дейността си чрез отговорно управление. Вярвайки, че бъдещето принадлежи на организациите, които инвестират в "споделената полза", ние имаме визията за развитие на кооперативната икономика насочена във Водородната икономика.',
    'who.vision.value3.title': 'Ценности и принципи',
    'who.vision.value3.description': 'КООП ВЕК има кооперативен бизнес модел, който е изграден на принципите на солидарността и взаимопомощта, доброволност, демократично управление от членовете, автономност и независимост, коопериране между членовете и загриженост за общността.',
    
    // Team section
    'team.management': 'Управителен съвет',
    'team.supervisory': 'Контролен съвет',
    
    // Properties Page
    'properties.title': 'Свойства на Водорода',
    'properties.green.hydrogen': 'Зелен водород',
    'properties.green.description': 'Зеленият водород е гориво с нулеви емисии, което има потенциала да революционизира енергийната индустрия. Произвежда се чрез разделяне на водата на водород и кислород с помощта на възобновяеми енергийни източници като вятърна, слънчева или водна енергия.',
    'properties.green.description2': 'За разлика от традиционните методи за производство на водород, които разчитат на изкопаеми горива, зеленият водород е устойчив и екологичен. Използването на зелен водород може значително да намали въглеродните емисии в различни сектори, включително транспорт, индустрия и производство на електроенергия.',
    'properties.green.description3': 'Той може също така да осигури решения за съхранение на енергия за периодични възобновяеми източници, като вятърна и слънчева енергия, позволявайки по-надеждно и стабилно енергоснабдяване.',
    
    'properties.atomicNumber': 'Атомен Номер',
    'properties.atomicMass': 'Атомна Маса',
    'properties.meltingPoint': 'Точка на Топене',
    'properties.boilingPoint': 'Точка на Кипене',
    
    'properties.physicalProps': 'Физични Свойства',
    'properties.stateRT': 'Състояние при Стайна Температура',
    'properties.stateDesc': 'Безцветен, без мирис, безвкусен, нетоксичен, силно запалим двуатомен газ',
    'properties.density': 'Плътност',
    'properties.densityValue': '0.08988 g/L при 0°C (газ), 0.07099 g/L при 20°C (газ), 0.07078 g/L при 25°C (газ)',
    'properties.crystal': 'Кристална Структура',
    'properties.crystalValue': 'Хексагонална плътно-опакована (hcp) при ниски температури',
    'properties.thermal': 'Топлопроводимост',
    'properties.thermalValue': '0.1805 W/(m·K)',
    
    'properties.chemicalProps': 'Химични Свойства',
    'properties.oxidation': 'Окислителни Състояния',
    'properties.oxidationValue': '-1, 0, +1 (амфотерен оксид)',
    'properties.electronegativity': 'Електроотрицателност',
    'properties.electroValue': '2.20 (по скалата на Полинг)',
    'properties.ionization': 'Йонизационна Енергия',
    'properties.ionizationValue': '1312.0 kJ/mol (1-ва)',
    'properties.covalent': 'Ковалентен Радиус',
    'properties.covalentValue': '31±5 pm',

    // Applications Page
    'applications.title': 'Приложения на Водорода',
    
    'applications.industrial': 'Индустриални Приложения',
    'applications.refining': 'Рафиниране на Петрол',
    'applications.refiningDesc': 'Водородът се използва за премахване на примеси като сяра от петрола и за преобразуване на тежки въглеводороди в по-леки, по-ценни продукти.',
    'applications.ammonia': 'Производство на Амоняк',
    'applications.ammoniaDesc': 'Водородът е ключов компонент в синтеза на амоняк чрез процеса на Хабер, от съществено значение за производството на торове, които поддържат глобалното земеделие.',
    'applications.metal': 'Обработка на Метали',
    'applications.metalDesc': 'Използва се в процесите за обработка на метали като редуциращ агент и за създаване на контролирани атмосфери за термична обработка на стомана и други метали.',
    
    'applications.energy': 'Енергийни Приложения',
    'applications.fuelCells': 'Горивни Клетки',
    'applications.fuelCellsDesc': 'Водородните горивни клетки генерират електричество чрез електрохимична реакция, произвеждайки само вода и топлина като странични продукти, идеални за чисто производство на енергия.',
    'applications.storage': 'Съхранение на Енергия',
    'applications.storageDesc': 'Водородът може да съхранява излишната възобновяема енергия за по-късно използване, позволявайки балансиране на мрежата и предоставяйки решение за сезонни нужди от съхранение на енергия.',
    'applications.rocket': 'Ракетно Гориво',
    'applications.rocketDesc': 'Течният водород се използва като ракетно гориво поради високото си съотношение енергия-тегло, захранващо космически мисии и изстрелване на сателити.',
    
    'applications.research': 'Изследвания и Модерни Технологии',
    'applications.physics': 'Физика на Частиците',
    'applications.physicsDesc': 'Водородът се използва в ускорители на частици и фундаментални физически изследвания за изучаване на атомни и субатомни процеси.',
    'applications.cryogenics': 'Криогеника',
    'applications.cryogenicsDesc': 'Течният водород служи като охладител в криогенни приложения, достигайки температури до 20K (-253°C).',
    'applications.spectroscopy': 'Спектроскопия',
    'applications.spectroscopyDesc': 'Водородният спектър се използва като референция в спектроскопията и за калибриране на научни инструменти.',
    
    'applications.transport': 'Транспорт',
    'applications.fuelVehicles': 'Превозни Средства с Горивни Клетки',
    'applications.fuelVehiclesDesc': 'Водородът захранва електрически превозни средства с горивни клетки (FCEVs) с бързо време за зареждане и възможности за дълъг пробег, като емитира само водна пара.',
    'applications.heavyTransport': 'Тежък Транспорт',
    'applications.heavyTransportDesc': 'Идеален за камиони, автобуси и търговски флотилии, където решенията с електрически батерии срещат предизвикателства с тегло, обхват и време за презареждане.',
    'applications.maritime': 'Морски и Авиационен Транспорт',
    'applications.maritimeDesc': 'Нововъзникващи приложения в секторите на корабоплаването и авиацията, където водородът и производните от водород горива предлагат пътища за декарбонизиране на транспорта на дълги разстояния.',

    // Blog Page
    'blog.title': 'Водороден Блог',
    'blog.subtitle': 'Последни новини, изследвания и актуализации от света на водорода',
    'blog.categories': 'Категории',
    'blog.allCategories': 'Всички Категории',
    'blog.tags': 'Тагове',
    'blog.allTags': 'Всички Тагове',
    'blog.readMore': 'Прочети Повече',
    'blog.publishedOn': 'Публикувано на',
    'blog.noResults': 'Няма намерени публикации. Моля, опитайте с друга категория или таг.',
    'blog.loading': 'Зареждане на публикации...',
    
    // Blog Categories (common ones to prepopulate)
    'blog.category.technology': 'Технологии',
    'blog.category.research': 'Изследвания',
    'blog.category.industry': 'Индустрия',
    'blog.category.policy': 'Политики и Регулации',
    'blog.category.environment': 'Околна среда',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageProvider;