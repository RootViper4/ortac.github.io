$.i18n = function (options) {
  options = $.extend(
    {},
    {
      lang: window.localStorage.getItem("language") || "tr",
      data: $.i18n,
    },
    options
  );

  var langStore = options.data[options.lang];
  this.setLang = function (language) {
    window.localStorage.setItem("language", language);
    langStore = options.data[language];
  };

  this.getItem = function (key) {
    return langStore[key];
  };

  return this;
};

$.i18n.en = {
  menu_1: "Home",
  menu_2: "About us",
  menu_uk: "United Kingdom",
  menu_kktc: "TRNC",
  menu_3: "Services",
  menu_3_1: "Tax",
  menu_3_2: "Audit",
  menu_3_3: "Accounting",
  menu_3_4: "Consultancy",
  menu_4: "Company Establishment Application Form",
  menu_5: "Testimonials",
  menu_6: "Blogs",
  menu_7: "Contact",
  menu_8: "Take an Appointment",
  intro: "About our company",
  intro_btn: "START IMMEDIATELY",
  intro_top_title: "Who we are",
  about_details:
    "Established in 1996, Ortaç Accounting provides Accounting, Financial Advisory, External Audit, Financial reporting and investment consultancy services to its customers in Northern Cyprus with more than 20 years of experience. Our company has been growing continuously since its establishment and has been providing the best service to its customers with its expert and trained personnel. <br/> <br/> The main purpose of our company is to increase the sustainable financial power of all businesses we serve by using our experience and to establish the strongest and most reliable bond between them and government offices. In order to serve all businesses that want to do business in the Turkish Republic of Northern Cyprus, we offer better and quality service by increasing our services every day.",
  vision: "OUR VISION",
  vision_details:
    "We are happy to be with our valuable solution partners with our years of experience, our experienced, creative and entrepreneurial expert staff in high-level financial and financial matters, with our vision aiming to provide financial and corporate added value to our taxpayers by producing practical and useful solutions in accounting, auditing and consultancy services within the framework of the authorities granted by the laws.",
  mission: "OUR MISSION",
  mission_details:
    "We are proud to be with you for a quarter of a century in the Turkish Republic of Northern Cyprus with its customer-oriented solution suggestions and timely, fast and effective service that makes a difference.",
  goal: "OUR GOALS",
  goal_details:
    "As ORTAÇ AUDIT COMPANY, it is one of our most important goals to analyze all financial needs and expectations of our taxpayers in the best way and to offer services that make a difference that they can benefit from.",
  team_title: "Team",
  audit_officer: "Audit Officer",
  auditor: "Authorized Accountant – Auditor",
  accounting: "Accounting – Audit",
  managing: "Managing partner",
  int_accounting: "International Accounting",
  admin_asst: "Administrative assistant",
  payroll: "Payroll Specialist",
  footer_desc:
    "Get started right away with our company formation guide with the transactions that suit you best.",
  pages: "Pages",
  help: "Help",
  apply_now: "Apply Now",
  news: "News",
  blog_title_1: "Capital discount in company establishments of foreigners !",
  blog_title_2: "TRNC Work Amnesty In Force",
  blog_title_3: "Northern Cyprus Tax Free Company Establishment",
  sub_about_1: "COMPANY PURCHASING AND VALUATIONS",
  sub_about_2: "PAYROLL AND WORK PERMIT",
  sub_about_3: "INVESTMENT CONSULTING",
  sub_about_4: "FOUNDING A COMPANY",
  sub_about_5: "VIRTUAL OFFICE",
  mail: "email",
};

$.i18n.tr = {
  menu_1: "Ana Sayfa",
  menu_2: "Hakkımızda",
  menu_uk: "Birleşik Krallık",
  menu_kktc: "KKTC",
  menu_3: "Hizmetler",
  menu_3_1: "Vergi",
  menu_3_2: "Denetim",
  menu_3_3: "Muhasebe",
  menu_3_4: "Danışmanlık",
  menu_4: "Şirket Kurma Başvuru Formu",
  menu_5: "Referanslar",
  menu_6: "Bloglar",
  menu_7: "İletişim",
  menu_8: "Randevu Al",
  intro: "Firmamız hakkında",
  intro_btn: "HEMEN BAŞLA",
  intro_top_title: "Biz Kimiz",
  about_details:
    "1996 yılında kurulan Ortaç Muhasebe, Kuzey Kıbrıs’ ta müşterilerine sunduğu 20 yıldan fazla tecrübesi ile Muhasebe, Mali Müşavirlik, Dış Denetim, Finansal raporlama ve yatırım danışmanlığı hizmetleri vermektedir. Firmamız kurulduğu günden bugüne kadar sürekli büyüyerek müşterilerine, uzman ve eğitimli personelleri ile en iyi hizmeti vermektedir.<br/> <br/> Firmamızın temel amacı tecrübelerimizi ve deneyimimizi kullanarak hizmet verdiğimiz tüm işletmelerin sürdürülebilir finansal gücünü artırmak ve devlet daireleri ile aralarındaki en güçlü ve güvenilir bağı kurmaktır. Kuzey Kıbrıs Türk Cumhuriyeti’nde iş yapmak isteyen tüm işletmelere hizmet vermek için hergeçen gün verdiğimiz hizmetleri artırarak daha iyi ve kaliteli hizmet sunmaktayız.",
  vision: "VİZYONUMUZ",
  vision_details:
    "Yıllara dayanan tecrübemiz, üst düzey mali ve finansal konulardaki deneyimli, yaratıcı ve girişimci uzman kadromuzla muhasebe, denetim, ve danışmanlık hizmetlerinde yasaların tanıdığı yetkiler çerçevesinde pratik ve faydalı çözümler üreterek mükelleflerimize finansal ve kurumsal katma değer sağlamayı amaçlayan vizyonumuz ile değerli çözüm ortaklarımızın yanında olmaktan mutluyuz.",
  mission: "MİSYONUMUZ",
  mission_details:
    "Fark yaratan, zamanında, hızlı ve etkili hizmet anlayışı ile müşteri odaklı çözüm önerileri ile Kuzey Kıbrıs Türk Cumhuriyeti’nde çeyrek asırdan beri yanınızda olmaktan gurur duyuyoruz.",
  goal: "HEDEFLERİMİZ",
  goal_details:
    "ORTAÇ AUDIT COMPANY olarak mükelleflerimizin tüm finansal ihtiyaç ve beklentilerini en iyi şekilde analiz ederek, yararlanabilecekleri fark yaratan hizmetleri sunmak en önemli hedeflerimizdendir.",
  team_title: "Takım",
  audit_officer: "Denetim Görevlisi",
  auditor: "Yetkili Muhasebeci – Denetçi",
  accounting: "Muhasebe – Denetim",
  managing: "Yönetici Ortağı",
  int_accounting: "Uluslararası Muhasebe",
  admin_asst: "Yönetici Asistan",
  payroll: "Bordro Uzmanı",
  footer_desc:
    "Şirket kurma rehberimiz ile size en uygun işlemlerle hemen başlayın.",
  pages: "Sayfalar",
  help: "Yardım",
  news: "Haberler",
  apply_now: "Şimdi Uygula",
  blog_title_1: "Yabancıların şirket kuruluşlarında sermaye indirimi!",
  blog_title_2: "KKTC Çalışma Affı Yürürlükte",
  blog_title_3: "Kuzey Kıbrıs Vergisiz Şirket Kuruluşu",
  sub_about_1: "ŞİRKET SATINALMA VE DEĞERLEMELERİ",
  sub_about_2: "BORDRO VE ÇALIŞMA İZNİ",
  sub_about_3: "YATIRIM DANIŞMANLIĞI",
  sub_about_4: "ŞİRKET KURMA",
  sub_about_5: "SANAL OFİS",
  mail: "e-posta",
};

$.i18n.ru = {
  menu_1: "Главная страница",
   menu_2: "О нас",
  menu_uk: "United Kingdom",
  menu_kktc: "TRNC",
  menu_3: "Услуги",
  menu_3_1: "Налог",
  menu_3_2: "Аудит",
  menu_3_3: "Бухгалтерия",
  menu_3_4: "Консультирование",
  menu_4: "Форма заявки на создание компании",
  menu_5: "Отзывы",
  menu_6: "Блоги",
  menu_7: "Контакт",
  menu_8: "Записаться на прием",
  intro: "О нашей компании",
  intro_btn: "НАЧАТЬ НЕМЕДЛЕННО",
  intro_top_title: "Кто мы есть",
  about_details:
    "Основанная в 1996 году, Ortaç Accounting предоставляет своим клиентам на Северном Кипре услуги бухгалтерского учета, финансового консультирования, внешнего аудита, финансовой отчетности и инвестиционного консультирования с более чем 20-летним опытом. Наша компания постоянно растет с момента своего основания и предоставляет своим клиентам лучший сервис с помощью опытного и обученного персонала. <br/> <br/> Основная цель нашей компании — увеличить устойчивую финансовую мощь всех предприятий, которые мы обслуживаем, используя наш опыт, и установить самую прочную и надежную связь между ними и государственными учреждениями. Чтобы обслуживать все предприятия, которые хотят вести бизнес в Турецкой Республике Северного Кипра, мы предлагаем лучший и качественный сервис, увеличивая наши услуги каждый день.",
  vision: "НАШ ВЗГЛЯД",
  vision_details:
    "Мы рады быть с нашими ценными партнерами по решениям с нашим многолетним опытом, нашим опытным, творческим и предприимчивым экспертным персоналом в финансовых и финансовых вопросах высокого уровня, с нашим видением, направленным на предоставление финансовой и корпоративной добавленной стоимости нашим налогоплательщикам путем создания практических и полезные решения в области бухгалтерского учета, аудита и консультационных услуг в рамках полномочий, предоставленных законодательством.",
  mission: "НАШЕ ПРЕДНАЗНАЧЕНИЕ",
  mission_details:
    "Мы гордимся тем, что уже четверть века работаем с вами в Турецкой Республике Северного Кипра, предлагая решения, ориентированные на клиента, и своевременное, быстрое и эффективное обслуживание, которое имеет значение.",
  goal: "НАШИ ЦЕЛИ",
  goal_details:
    "Как ORTAÇ AUDIT COMPANY, одной из наших самых важных целей является анализ всех финансовых потребностей и ожиданий наших налогоплательщиков наилучшим образом и предложение услуг, которые имеют значение, от которых они могут извлечь выгоду.",
  team_title: "Команда",
  audit_officer: "Аудитор",
  auditor: "Уполномоченный бухгалтер-Аудитор",
  accounting: "Бухгалтерский учет – Аудит",
  managing: "Управляющий партнер",
  int_accounting: "Международная бухгалтертя",
  admin_asst: "Административный помощник",
  payroll: "Специалист заработной платы",
  footer_desc:
    "Начните прямо сейчас с нашего руководства по созданию компании с транзакциями, которые подходят вам лучше всего.",
  pages: "Страницы",
  help: "Помощь",
  apply_now: "Подать заявление сейчас",
  news: "Новости",
  blog_title_1: "Столичная скидка в фирменных заведениях иностранцев!",
  blog_title_2: "Северный Кипр Действует рабочая амнистия",
  blog_title_3: "Создание компании Tax Free на Северном Кипре",
  sub_about_1: "ЗАКУПКА КОМПАНИИ И ОЦЕНКА",
  sub_about_2: "НАЧИСЛЕНИЕ ЗАРАБОТНОЙ ПЛАТЫ И РАЗРЕШЕНИЕ НА РАБОТУ",
  sub_about_3: "ИНВЕСТИЦИОННЫЙ КОНСАЛТИНГ",
  sub_about_4: "ОСНОВАНИЕ КОМПАНИИ",
  sub_about_5: "ВИРТУАЛЬНЫЙ ОФИС",
  mail: "Эл. адрес",
};

$.i18n.fr = {
  menu_1: "Accueil",
  menu_2: "À propos de nous",
  menu_uk: "Royaume Uni",
  menu_kktc: "Chypre du Nord",
  menu_3: "Services",
  menu_3_1: "Taxe",
  menu_3_2: "Audit",
  menu_3_3: "Comptabilité",
  menu_3_4: "Consultance",
  menu_4: "Formulaire de demande d'établissement d'entreprise",
  menu_5: "Témoignages",
  menu_6: "Blogues",
  menu_7: "Contact",
  menu_8: "Prendre un rendez-vous",
  intro: "À propos de notre entreprise",
  intro_btn: "COMMENCEZ IMMÉDIATEMENT",
  intro_top_title: "Qui nous sommes",
  about_details:
    "Fondée en 1996, Ortaç Accounting fournit des services de comptabilité, de conseil financier, d'audit externe, de reporting financier et de conseil en investissement à ses clients du nord de Chypre avec plus de 20 ans d'expérience. Notre entreprise n'a cessé de croître depuis sa création et offre le meilleur service à ses clients grâce à son personnel expert et formé. <br/> <br/> L'objectif principal de notre entreprise est d'augmenter la puissance financière durable de toutes les entreprises que nous servons en utilisant notre expérience et d'établir le lien le plus fort et le plus fiable entre elles et les bureaux gouvernementaux. Afin de servir toutes les entreprises qui souhaitent faire des affaires dans la République turque de Chypre du Nord, nous offrons un service de meilleure qualité en augmentant chaque jour nos services.",
  vision: "NOTRE VISION",
  vision_details:
    "Nous sommes heureux d'être avec nos précieux partenaires de solutions avec nos années d'expérience, notre personnel expert expérimenté, créatif et entrepreneurial dans les questions financières et financières de haut niveau, avec notre vision visant à fournir une valeur ajoutée financière et d'entreprise à nos contribuables en produisant des pratiques et des solutions utiles dans les services de comptabilité, d'audit et de conseil dans le cadre des pouvoirs accordés par les lois.",
  mission: "NOTRE MISSION",
  mission_details:
    "Nous sommes fiers d'être avec vous depuis un quart de siècle dans la République turque de Chypre du Nord avec ses suggestions de solutions orientées client et son service rapide, rapide et efficace qui fait la différence.",
  goal: "NOS OBJECTIFS",
  goal_details:
    "En tant que SOCIÉTÉ D'AUDIT ORTAÇ, l'un de nos objectifs les plus importants est d'analyser au mieux tous les besoins et attentes financiers de nos contribuables et d'offrir des services qui font la différence dont ils peuvent bénéficier.",
  team_title: "L'équipe",
  audit_officer: "Agent d'audit",
  auditor: "Expert Comptable - Commissaire aux Comptes",
  accounting: "Comptabilité – Audit",
  managing: "Partenaire gérant",
  int_accounting: "Comptabilité International",
  admin_asst: "Assistante administrative",
  payroll: "Spécialiste de la paie",
  footer_desc:
    "Commencez tout de suite avec notre guide de création d'entreprise avec les transactions qui vous conviennent le mieux.",
  pages: "Pages",
  help: "Aide",
  apply_now: "Appliquer maintenant",
  news: "Actualités",
  blog_title_1:
    "Réduction de capital dans la création d'entreprises pour les étrangers !",
  blog_title_2: "L'amnistie du travail de la RTCN est en vigueur",
  blog_title_3: "Création d'une société exempte d'impôts à Chypre du Nord",
  blog_desc_1:
    "L'exigence de capital minimum pour les établissements de sociétés étrangères a été réduite. Il est désormais plus facile de créer une entreprise en RTCN.",
  blog_desc_2:
    "L'amnistie du travail TRNC est entrée en vigueur aujourd'hui, des informations détaillées dans notre article de blog.",
  blog_desc_3:
    "Savez-vous qu'en établissant une société hors taxes dans le nord de Chypre, vous pouvez fournir un service sans problème au monde entier depuis votre bureau en Turquie ?",
  read_all: "Tout lire",
  sub_about_1: "ACHATS ET VALORISATIONS D'ENTREPRISES",
  sub_about_2: "SALAIRE ET PERMIS DE TRAVAIL",
  sub_about_3: "CONSEIL EN INVESTISSEMENT",
  sub_about_4: "CRÉER UNE ENTREPRISE",
  sub_about_5: "BUREAU VIRTUEL",
  mail: "email",
};

var i18n = $.i18n();

var changeLabels = function () {
  $("[data-translate]").each(function () {
    var forLabel = $(this).attr("data-translate");
    this.innerHTML = i18n.getItem(forLabel);
  });
};

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready(function () {
  const lang = getParameterByName("lang");
  if (lang) {
    window.localStorage.setItem("language", lang);
    i18n.setLang(lang);
  }
  changeLabels();

  $("#dropdownMenuButton").text(
    (window.localStorage.getItem("language") || "tr").toUpperCase()
  );
});

$("#lang")
  .find("a")
  .click(function (e) {
    var lang = this.href.slice(-2);
    i18n.setLang(lang);
    $("#dropdownMenuButton").text(
      (window.localStorage.getItem("language") || "tr").toUpperCase()
    );

    const langQueryParam = getParameterByName("lang");
    if (langQueryParam) {
      var url = new URL(window.location.href);
      var search_params = url.searchParams;
      search_params.set("lang", lang);
      url.search = search_params.toString();
      var new_url = url.pathname + url.search;
      window.history.replaceState({}, "", new_url);
    }

    changeLabels();
    e.preventDefault();
  });
