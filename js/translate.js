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
  intro:
    "Build a company in 3 steps! <br/>Get started right away with our company formation guide with the transactions that suit you best.",
  intro_btn: "START IMMEDIATELY",
  about_details:
    "The main purpose of our company is to increase the sustainable financial power of all businesses we serve by using our experience and to establish the strongest and most reliable bond between them and government offices. In order to serve all businesses that want to do business in the Turkish Republic of Northern Cyprus, we offer better and quality service by increasing our services every day.",
  service_1:
    "Legal regulations to tax require meticulous work in the TRNC as in the rest of the world.",
  service_2:
    "We provide more transparent and reliable statements in accordance with audits.",
  service_3:
    "We respond to the needs of our customers in a timely, accurate, and reliable manner.",
  service_4:
    "We are at your disposal in consultancy services with our years of experiences.",
  footer_desc:
    "Get started right away with our company formation guide with the transactions that suit you best.",
  pages: "Pages",
  help: "Help",
  apply_now: "Apply Now",
  news: "News",
  blog_title_1: "Capital discount in company establishments of foreigners !",
  blog_title_2: "TRNC Work Amnesty In Force",
  blog_title_3: "Northern Cyprus Tax Free Company Establishment",
  blog_desc_1:
    "The minimum capital requirement for foreign company establishments was reduced. It is now easier to establish a company in TRNC.",
  blog_desc_2:
    "TRNC Labor Amnesty came into effect today, detailed information in our blog post.",
  blog_desc_3:
    "Do you know that by establishing a Tax-Free Company in Northern Cyprus, you can provide trouble-free service to the whole world from your office in Turkey?",
  read_all: "Read All",
  sub_about_1: "COMPANY PURCHASING AND VALUATIONS",
  sub_about_2: "PAYROLL AND WORK PERMIT",
  sub_about_3: "INVESTMENT CONSULTING",
  sub_about_4: "FOUNDING A COMPANY",
  sub_about_5: "VIRTUAL OFFICE",
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
  intro:
    "3 adımda şirket kur! <br/> Şirket kurma rehberimiz ile size en uygun işlemlerle hemen başlayın.",
  intro_btn: "HEMEN BAŞLA",
  about_details:
    "Firmamızın temel amacı tecrübelerimizi ve deneyimimizi kullanarak hizmet verdiğimiz tüm işletmelerin sürdürülebilir finansal gücünü artırmak ve devlet daireleri ile aralarındaki en güçlü ve güvenilir bağı kurmaktır. Kuzey Kıbrıs Türk Cumhuriyeti’nde iş yapmak isteyen tüm işletmelere hizmet vermek için hergeçen gün verdiğimiz hizmetleri artırarak daha iyi ve kaliteli hizmet sunmaktayız.",
  service_1:
    "Vergiye yönelik yasal düzenlemeler tüm dünyada olduğu gibi KKTC'de de titiz çalışmayı gerektirmektedir.",
  service_2:
    "Denetimler doğrultusunda daha şeffaf ve güvenilir beyanlar sunuyoruz.",
  service_3:
    "Müşterilerimizin ihtiyaçlarına zamanında, doğru ve güvenilir bir şekilde cevap veririz.",
  service_4:
    "Yılların verdiği tecrübe ile danışmanlık hizmetlerinde yanınızdayız.",
  footer_desc:
    "Şirket kurma rehberimiz ile size en uygun işlemlerle hemen başlayın.",
  pages: "Sayfalar",
  help: "Yardım",
  news: "Haberler",
  apply_now: "Şimdi Uygula",
  blog_title_1: "Yabancıların şirket kuruluşlarında sermaye indirimi !",
  blog_title_2: "KKTC Çalışma Affı Yürürlükte",
  blog_title_3: "Kuzey Kıbrıs Vergisiz Şirket Kuruluşu",
  blog_desc_1:
    "Yabancıların şirket kuruluşlarında minimum sermaye gereksiniminde indirime gidildi. KKTC' de şirket kurmak artık daha kolay.",
  blog_desc_2:
    "KKTC Çalışma Affı yürürlüğe bugün girdi, detaylı bilgi blog yazımızda.",
  blog_desc_3:
    "Kuzey Kıbrıs’ta Vergisiz Şirket kurarak Türkiye’deki ofisinizden tüm dünyaya hiç sorunsuz hizmet verebileceğinizi biliyor musunuz?.",
  read_all: "TAMAMINI OKU",
  sub_about_1: "ŞİRKET SATINALMA VE DEĞERLEMELERİ",
  sub_about_2: "BORDRO VE ÇALIŞMA İZNİ",
  sub_about_3: "YATIRIM DANIŞMANLIĞI",
  sub_about_4: "ŞİRKET KURMA",
  sub_about_5: "SANAL OFİS",
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
  intro:
    "Создайте компанию за 3 шага! <br/>Начните прямо сейчас с нашего руководства по созданию компании с транзакциями, которые подходят вам лучше всего.",
  intro_btn: "НАЧАТЬ НЕМЕДЛЕННО",
  about_details:
    "Основная цель нашей компании — увеличить устойчивую финансовую мощь всех предприятий, которые мы обслуживаем, используя наш опыт, и установить самую прочную и надежную связь между ними и государственными учреждениями. Чтобы обслуживать все предприятия, которые хотят вести бизнес в Турецкой Республике Северного Кипра, мы предлагаем лучший и качественный сервис, увеличивая наши услуги каждый день.",
  service_1:
    "Правовые нормы налогообложения требуют кропотливой работы в ТРСК, как и во всем остальном мире.",
  service_2:
    "Мы предоставляем более прозрачную и достоверную отчетность в соответствии с аудиторскими проверками.",
  service_3:
    "Мы своевременно, точно и надежно реагируем на потребности наших клиентов.",
  service_4:
    "Мы в вашем распоряжении в консультационных услугах с нашим многолетним опытом.",
  footer_desc:
    "Начните прямо сейчас с нашего руководства по созданию компании с транзакциями, которые подходят вам лучше всего.",
  pages: "Страницы",
  help: "Помощь",
  apply_now: "Применить сейчас",
  news: "Новости",
  blog_title_1: "Скидка на капитал в фирменных заведениях иностранцев!",
  blog_title_2: "Действует рабочая амнистия ТРСК",
  blog_title_3: "Создание компании Tax Free на Северном Кипре",
  blog_desc_1:
    "Минимальные требования к капиталу для учреждения иностранных компаний были снижены. Теперь легче создать компанию в ТРСК.",
  blog_desc_2:
    "Трудовая амнистия ТРСК вступила в силу сегодня, подробная информация в нашем блоге.",
  blog_desc_3:
    "Знаете ли вы, что, создав Tax Free компанию на Северном Кипре, вы сможете без проблем обслуживать весь мир из своего офиса в Турции?",
  read_all: "Читать все",
  sub_about_1: "ЗАКУПКА КОМПАНИИ И ОЦЕНКА",
  sub_about_2: "ЗАРПЛАТА И РАЗРЕШЕНИЕ НА РАБОТУ",
  sub_about_3: "ИНВЕСТИЦИОННЫЙ КОНСАЛТИНГ",
  sub_about_4: "ОСНОВАНИЕ КОМПАНИИ",
  sub_about_5: "ВИРТУАЛЬНЫЙ ОФИС",
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
  menu_4: "Formulaire de demande de création d'entreprise",
  menu_5: "Témoignages",
  menu_6: "Blogues",
  menu_7: "Contact",
  menu_8: "Prendre un rendez-vous",
  intro:
    "Créer une entreprise en 3 étapes ! <br/>Commencez tout de suite avec notre guide de création d'entreprise avec les transactions qui vous conviennent le mieux.",
  intro_btn: "COMMENCEZ IMMÉDIATEMENT",
  about_details:
    "L'objectif principal de notre société est d'augmenter la puissance financière durable de toutes les entreprises que nous servons en utilisant notre expérience et d'établir le lien le plus fort et le plus fiable entre elles et les bureaux gouvernementaux. Afin de servir toutes les entreprises qui souhaitent faire des affaires dans la République turque de Chypre du Nord, nous offrons un service de meilleure qualité en augmentant chaque jour nos services.",
  service_1:
    "Les réglementations légales en matière d'imposition nécessitent un travail minutieux en RTCN comme dans le reste du monde.",
  service_2:
    "Nous fournissons des déclarations plus transparentes et fiables conformément aux audits.",
  service_3:
    "Nous répondons aux besoins de nos clients de manière rapide, précise et fiable.",
  service_4:
    "Nous sommes à votre disposition dans les services de conseil avec nos années d'expériences.",
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
