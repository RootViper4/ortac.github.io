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
    " Legal regulations and practices related to tax require meticulous work in the Turkish Republic of Northern Cyprus as in the rest of the world. It is very important for companies to set up the said taxes correctly and to know enough about exemption, exception and deduction rights.",
  about_details_2:
    "In accordance with the tax legislation, the tax returns and declarations that the companies are obliged to prepare and submit in a timely manner and in accordance with the legal books are prepared and declared by the experts in the field of ORTAC AUDIT COMPANY.",
  about_details_3:
    "As ORTAC AUDIT COMPANY, based on our experience in this sector for more than 20 years, we carry out the legal obligations of our taxpayers and the tax inspection process with our professional approach in a way that provides the most appropriate conditions.",
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
    "Vergi ile ilgili yasal düzenleme ve uygulamalar bütün dünyada olduğu gibi Kuzey Kıbrıs Türk Cumhuriyeti’nde de son derece titizlikle çalışmayı gerektirir. Söz konusu vergilerin doğru kurgulanması ve muafiyet, istisna, indirim haklarının yeterince bilinmesi şirketler için çok önemlidir.",
  about_details_2:
    "Vergi mevzuatı gereğince şirketlerin zamanında ve yasal defterlerle uyumlu olarak hazırlayıp vermekle yükümlü oldukları vergi beyannameleri ve bildirimleri, ORTAC AUDIT COMPANY bünyesindeki alanında uzman kişiler tarafından hazırlanıp beyan edilmektedir.",
  about_details_3:
    "ORTAC AUDIT COMPANY olarak 20 yılı aşkın süredir bu sektörde edindiğimiz tecrübeye dayanarak, mükelleflerimizin yasal yükümlülüklerini ve vergi incelemeleri sürecini profesyonel yaklaşımımızla en uygun şartları sağlayacak şekilde yürütüyoruz.",
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
    " Правовые нормы и практика, связанные с налогообложением, требуют кропотливой работы в Турецкой Республике Северного Кипра, как и во всем остальном мире. Для компаний очень важно правильно установить указанные налоги и достаточно знать о правах на освобождение, исключения и вычеты.",
  about_details_2:
    "Правовые нормы и практика, связанные с налогообложением, требуют кропотливой работы в Турецкой Республике Северного Кипра, как и во всем остальном мире. Для компаний очень важно правильно установить указанные налоги и достаточно знать о правах на освобождение, исключения и вычеты.",
  about_details_3:
    "Как ORTAC AUDIT COMPANY, основываясь на нашем опыте в этом секторе более 20 лет, мы выполняем юридические обязательства наших налогоплательщиков и процесс налоговой проверки с нашим профессиональным подходом таким образом, чтобы обеспечить наиболее подходящие условия.",
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
  intro_btn: "START IMMEDIATELY",
  about_details_1:
    "Les réglementations et pratiques juridiques liées à la fiscalité nécessitent un travail minutieux en République turque de Chypre du Nord comme dans le reste du monde. Il est très important pour les entreprises de configurer correctement lesdites taxes et d'en savoir suffisamment sur les droits d'exonération, d'exception et de déduction.",
  about_details_2:
    "Conformément à la législation fiscale, les déclarations et déclarations fiscales que les sociétés sont tenues d'établir et de déposer dans les délais et conformément aux livres légaux sont établies et déclarées par les experts dans le domaine d'ORTAC AUDIT COMPANY.",
  about_details_3:
    "En tant que SOCIETE D'AUDIT ORTAC, fort de notre expérience dans ce secteur depuis plus de 20 ans, nous réalisons les obligations légales de nos contribuables et le processus de contrôle fiscal avec notre approche professionnelle dans les conditions les plus appropriées.",
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
