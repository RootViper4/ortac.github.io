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
  about_details_1:
    "As ORTAC AUDIT COMPANY, we have been effectively offering audit services that will provide added value to our taxpayers, together with our expert team, by combining our experience in accounting and auditing standards in the Turkish Republic of Northern Cyprus with the accounting practices in our country since 1996.",
  about_details_2:
    "As both the development of corporate structures of enterprises and the development of global economic practices increase, the need for audit services increases and companies have to present more transparent and reliable statements.",
  about_details_3:
    "We prepare the reports that our taxpayers need by examining the financial statements and information of companies in an impartial and reliable manner with appropriate techniques in line with financial reporting standards.",
  about_details_4:
    "During the audit service and in the independent audit report we have prepared, we aim to increase the quality and efficiency of our taxpayers by identifying their current problems and financial risks that may occur in the future, as well as legal requirements, in line with their needs.",
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
  about_details_1:
    "ORTAC AUDIT COMPANY olarak Kuzey Kıbrıs Türk Cumhuriyeti’nde 1996 yılından bu güne muhasebe ve denetim standartları konusundaki deneyimlerimizi ülkemizdeki muhasebe uygulamaları ile birleştirerek, mükelleflerimize katma değer sağlayacak denetim hizmetlerini uzman ekibimiz ile birlikte etkin bir biçimde sunmaktayız.",
  about_details_2:
    "Gerek işletmelerin kurumsal yapılarının gelişmesi gerekse küresel ekonomik uygulamaların gelişmesi arttıkça denetim hizmetlerine olan ihtiyaç da artmakta ve şirketler daha şeffaf ve güvenilir tablolar ortaya koymak durumunda kalmaktadır.",
  about_details_3:
    "Şirketlerin mali tablo ve bilgilerini, finansal raporlama standartları doğrultusunda uygun tekniklerle tarafsız, güvenilir biçimde inceleyerek mükelleflerimize ihtiyaçları olan raporları hazırlıyoruz.",
  about_details_4:
    "Denetim hizmeti sırasında ve düzenlediğimiz bağımsız denetim raporunda, mükelleflerimizin ihtiyaçları doğrultusunda yasal gerekliliklerin yanı sıra mevcut sorunlarını ve gelecekte oluşabilecek finansal risklerini tespit ederek kontrol ve yeterlilik konularında öneriler sunuyor, kalite ve verimliliklerini arttırmayı hedefliyoruz.",
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
  about_details_1:
    "Как ORTAC AUDIT COMPANY, мы эффективно предлагаем аудиторские услуги, которые обеспечат добавленную стоимость нашим налогоплательщикам, вместе с нашей командой экспертов, объединив наш опыт в области стандартов бухгалтерского учета и аудита в Турецкой Республике Северного Кипра с практикой бухгалтерского учета в нашей стране. с 1996 года.",
  about_details_2:
    "По мере развития корпоративных структур предприятий и развития мировой экономической практики возрастает потребность в аудиторских услугах, и компании должны представлять более прозрачную и достоверную отчетность.",
  about_details_3:
    "Мы готовим отчеты, которые нужны нашим налогоплательщикам, изучая финансовые отчеты и информацию компаний беспристрастным и надежным образом с использованием соответствующих методов в соответствии со стандартами финансовой отчетности.",
  about_details_4:
    "В ходе аудиторской услуги и в подготовленном нами независимом аудиторском отчете мы стремимся повысить качество и эффективность работы наших налогоплательщиков путем выявления их текущих проблем и финансовых рисков, которые могут возникнуть в будущем, а также требований законодательства в соответствии с их потребности.",
  footer_desc:
    "Начните прямо сейчас с нашего руководства по созданию компании с транзакциями, которые подходят вам лучше всего.",
  pages: "Страницы",
  help: "Помощь",
  apply_now: "Применить сейчас",
  news: "Новости",
  blog_title_1: "Скидка на капитал в фирменных заведениях иностранцев!",
  blog_title_2: "Действует рабочая амнистия ТРСК",
  blog_title_3: "Создание компании Tax Free на Северном Кипре",
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
  about_details_1:
    "En tant que ORTAC AUDIT COMPANY, nous offrons efficacement des services d'audit qui apporteront une valeur ajoutée à nos contribuables, en collaboration avec notre équipe d'experts, en combinant notre expérience des normes comptables et d'audit en République turque de Chypre du Nord avec les pratiques comptables de notre pays. depuis 1996.",
  about_details_2:
    "À mesure que le développement des structures d'entreprise des entreprises et le développement des pratiques économiques mondiales augmentent, le besoin de services d'audit augmente et les entreprises doivent présenter des déclarations plus transparentes et fiables.",
  about_details_3:
    "Nous préparons les rapports dont nos contribuables ont besoin en examinant les états financiers et les informations des entreprises de manière impartiale et fiable avec des techniques appropriées conformes aux normes d'information financière.",
  about_details_4:
    "Au cours du service d'audit et dans le rapport d'audit indépendant que nous avons préparé, nous visons à accroître la qualité et l'efficacité de nos contribuables en identifiant leurs problèmes actuels et les risques financiers qui pourraient survenir à l'avenir, ainsi que les exigences légales, conformément à leur Besoins.",
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
