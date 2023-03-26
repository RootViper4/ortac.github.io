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
  intro_btn: "START IMMEDIATELY",
  footer_desc:
    "Get started right away with our company formation guide with the transactions that suit you best.",
  pages: "Pages",
  help: "Help",
  apply_now: "Apply Now",
  news: "News",
  blog_title_1: "Capital discount in company establishments of foreigners !",
  blog_title_2: "TRNC Work Amnesty In Force",
  blog_title_3: "Northern Cyprus Tax Free Company Establishment",
  blog_title_4: "Would you like to have a company in Northern Cyprus?",
  blog_title_5: "New minimum wage entered into force in TRNC",
  blog_title_6: "Free Port Zone Companies",
  blog_title_7: "Free Zone Port Company Establishment Procedures",
  blog_desc_1:
    "The minimum capital requirement for foreign company establishments was reduced. It is now easier to establish a company in TRNC.",
  blog_desc_2:
    "TRNC Labor Amnesty came into effect today, detailed information in our blog post.",
  blog_desc_3:
    "Do you know that by establishing a Tax-Free Company in Northern Cyprus, you can provide trouble-free service to the whole world from your office in Turkey?",
  blog_desc_4:
    "If your answer is yes, you are in the right place. As ORTAC AUDIT COMPANY, we finalize all the installation processes of your company in the fastest way.",
  blog_desc_5:
    "The minimum wage, which came into effect as of August 1, 2019, was published in the Official Gazette on August 27, 2019.",
  blog_desc_6:
    "Free Port Zone Companies, which have become more popular lately; It is the focus of attention of internet, advertising and software companies and is established in the Famagusta region of the Turkish Republic of Northern Cyprus.",
  blog_desc_7:
    "The establishment procedures of Free Port Zone Companies, which stand out with their tax advantages, are as follows.",
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
  intro_btn: "HEMEN BAŞLA",
  footer_desc:
    "Şirket kurma rehberimiz ile size en uygun işlemlerle hemen başlayın.",
  pages: "Sayfalar",
  help: "Yardım",
  news: "Haberler",
  apply_now: "Şimdi Uygula",
  blog_title_1: "Yabancıların şirket kuruluşlarında sermaye indirimi !",
  blog_title_2: "KKTC Çalışma Affı Yürürlükte",
  blog_title_3: "Kuzey Kıbrıs Vergisiz Şirket Kuruluşu",
  blog_title_4: "Kuzey Kıbrıs' ta bir şirketiniz olsun ister misiniz?",
  blog_title_5: "KKTC' de yeni asgari ücret yürürlüğe girdi",
  blog_title_6: "Serbest Liman Bölge Şirketleri",
  blog_title_7: "Serbest Bölge Liman Şirketi Kuruluş İşlemleri",
  blog_desc_1:
    "Yabancıların şirket kuruluşlarında minimum sermaye gereksiniminde indirime gidildi. KKTC' de şirket kurmak artık daha kolay.",
  blog_desc_2:
    "KKTC Çalışma Affı yürürlüğe bugün girdi, detaylı bilgi blog yazımızda.",
  blog_desc_3:
    "Kuzey Kıbrıs’ta Vergisiz Şirket kurarak Türkiye’deki ofisinizden tüm dünyaya hiç sorunsuz hizmet verebileceğinizi biliyor musunuz?.",
  blog_desc_4:
    "Eğer cevabınız evet ise doğru yerdesiniz. ORTAC AUDIT COMPANY olarak şirketinizin tüm kurulum işlemlerini en hızlı şekilde sonuçlandırıyoruz.",
  blog_desc_5:
    "1 Ağustos 2019 tarihinden itibaren yürürlüğe giren asgari ücret 27 Ağustos 2019 tarihinde resmi gazetede yayınlandı.",
  blog_desc_6:
    "Serbest Liman Bölge Şirketleri son dönemde daha fazla popüler hale gelen; internet, reklam ve yazılım şirketlerinin ilgi odağı olup Kuzey Kıbrıs Türk Cumhuriyeti’nde Gazimağusa bölgesinde kurulmaktadır.",
  blog_desc_7:
    "Vergi avantajları ile ön plana çıkan Serbest Liman Bölge Şirketleri’nin kuruluş işlemleri aşağıdaki gibidir.",
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
  intro_btn: "НАЧАТЬ НЕМЕДЛЕННО",
  footer_desc:
    "Начните прямо сейчас с нашего руководства по созданию компании с транзакциями, которые подходят вам лучше всего.",
  pages: "Страницы",
  help: "Помощь",
  apply_now: "Применить сейчас",
  news: "Новости",
  blog_title_1: "Скидка на капитал в фирменных заведениях иностранцев!",
  blog_title_2: "Действует рабочая амнистия ТРСК",
  blog_title_3: "Создание компании Tax Free на Северном Кипре",
  blog_title_4: "Хотели бы вы иметь компанию на Северном Кипре?",
  blog_title_5: "В ТРСК вступила в силу новая минимальная заработная плата",
  blog_title_6: "Компании зоны свободного порта",
  blog_title_7: "Процедуры создания портовой компании свободной зоны",
  blog_desc_1:
    "Минимальные требования к капиталу для учреждения иностранных компаний были снижены. Теперь легче создать компанию в ТРСК.",
  blog_desc_2:
    "Трудовая амнистия ТРСК вступила в силу сегодня, подробная информация в нашем блоге.",
  blog_desc_3:
    "Знаете ли вы, что, создав Tax Free компанию на Северном Кипре, вы сможете без проблем обслуживать весь мир из своего офиса в Турции?",
  blog_desc_4:
    "Если ваш ответ да, вы находитесь в правильном месте. Как ORTAC AUDIT COMPANY, мы завершаем все процессы установки вашей компании самым быстрым способом.",
  blog_desc_5:
    "Минимальная заработная плата, вступившая в силу с 1 августа 2019 года, была опубликована в Официальном вестнике 27 августа 2019 года.",
  blog_desc_6:
    "Компании зоны свободного порта, которые в последнее время стали более популярными; Он находится в центре внимания интернет-компаний, рекламных компаний и компаний-разработчиков программного обеспечения и расположен в районе Фамагусты Турецкой Республики Северного Кипра.",
  blog_desc_7:
    "Процедуры создания компаний зоны свободного порта, которые выделяются своими налоговыми преимуществами, заключаются в следующем.",
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
  intro_btn: "COMMENCEZ IMMÉDIATEMENT",
  footer_desc:
    "Get started right away with our company formation guide with the transactions that suit you best.",
  pages: "Pages",
  help: "Help",
  apply_now: "Apply Now",
  news: "News",
  blog_title_1:
    "Réduction de capital dans la création d'entreprises pour les étrangers !",
  blog_title_2: "L'amnistie du travail de la RTCN est en vigueur",
  blog_title_3: "Création d'une société exempte d'impôts à Chypre du Nord",
  blog_title_4: "Souhaitez-vous avoir une entreprise dans le nord de Chypre?",
  blog_title_5: "Un nouveau salaire minimum est entré en vigueur en RTCN",
  blog_title_6: "Entreprises de la zone portuaire franche",
  blog_title_7:
    "Procédures d'établissement de la société portuaire en zone franche",
  blog_desc_1:
    "L'exigence de capital minimum pour les établissements de sociétés étrangères a été réduite. Il est désormais plus facile de créer une entreprise en RTCN.",
  blog_desc_2:
    "L'amnistie du travail TRNC est entrée en vigueur aujourd'hui, des informations détaillées dans notre article de blog.",
  blog_desc_3:
    "Savez-vous qu'en établissant une société hors taxes dans le nord de Chypre, vous pouvez fournir un service sans problème au monde entier depuis votre bureau en Turquie ?",
  blog_desc_4:
    "Si votre réponse est oui, vous êtes au bon endroit. En tant qu'ORTAC AUDIT COMPANY, nous finalisons tous les processus d'installation de votre entreprise de la manière la plus rapide.",
  blog_desc_5:
    "Le salaire minimum, entré en vigueur le 1er août 2019, a été publié au Journal officiel le 27 août 2019.",
  blog_desc_6:
    "Les entreprises de la zone portuaire franche, qui sont devenues plus populaires ces derniers temps ; Elle est au centre de l'attention des sociétés Internet, de publicité et de logiciels et est établie dans la région de Famagouste de la République turque de Chypre du Nord.",
  blog_desc_7:
    "Les procédures d'établissement des Sociétés de la Zone Franche Portuaire, qui se distinguent par leurs avantages fiscaux, sont les suivantes.",
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
