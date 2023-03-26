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
    "In today's competitive business conditions, while many companies want to focus on their core activities, they also have difficulties in fulfilling their obligations imposed by the legislation. Obligations such as keeping the legal books in a timely and accurate manner, sending complete declarations and notifications, preparing payroll and similar documents require meticulous follow-up.",
  about_details_2:
    "Within the scope of our accounting services, we keep the legal books and financial statements of companies in accordance with Chapter 113 Companies Law and the Uniform Chart of Accounts requirements, and present them to the relevant authorities when necessary.",
  about_details_3:
    "As ORTAC AUDIT COMPANY, with our accounting and reporting team, we respond to the needs of our customers in a timely, accurate and reliable manner, with the knowledge and experience we have gained over the years.",
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
    "Günümüzde rekabetçi iş koşullarında, birçok şirket bir yandan esas faaliyetlerine odaklanmak isterken, bir yandan da kendileri için mevzuatın zorunlu kıldığı yükümlülükleri yerine getirmekte güçlük çeker. Yasal defterlerin zamanında ve doğru tutulması, beyanname ve bildirimlerin eksiksiz gönderilmesi, bordro ve benzeri belgelerin hazırlanması gibi yükümlülükler titizlikle takip edilmeyi gerektirir.",
  about_details_2:
    "Muhasebe hizmetlerimiz kapsamında şirketlerin yasal defterlerini ve finansal tablolarını Fasıl 113 Şirketler Yasası gereği ve Tek Düzen Hesap Planı gereklerine uygun olarak tutuyor, gerektiğinde ilgili mercilere sunuyoruz.",
  about_details_3:
    "ORTAC AUDIT COMPANY olarak, muhasebe ve raporlama ekibimizle, yıllardır edindiğimiz bilgi birikimi ve deneyimle müşterilerimizin ihtiyaçlarına zamanında, doğru ve güvenilir şekilde cevap vermekteyiz.",
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
    "В современных конкурентных условиях ведения бизнеса, хотя многие компании хотят сосредоточиться на своей основной деятельности, они также испытывают трудности с выполнением своих обязательств, возложенных на них законодательством. Такие обязательства, как своевременное и точное ведение юридических книг, отправка полных деклараций и уведомлений, подготовка платежной ведомости и аналогичных документов, требуют тщательного контроля.",
  about_details_2:
    "В рамках наших бухгалтерских услуг мы ведем юридические книги и финансовые отчеты компаний в соответствии с Главой 113 Закона о компаниях и требованиями Единого плана счетов и при необходимости представляем их в соответствующие органы.",
  about_details_3:
    "Как ORTAC AUDIT COMPANY, с нашей командой по бухгалтерскому учету и отчетности, мы своевременно, точно и надежно реагируем на потребности наших клиентов, используя знания и опыт, которые мы накопили за эти годы.",
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
    "Dans les conditions commerciales concurrentielles d'aujourd'hui, alors que de nombreuses entreprises veulent se concentrer sur leurs activités de base, elles ont également des difficultés à remplir leurs obligations imposées par la législation. Des obligations telles que la tenue des livres légaux en temps opportun et de manière précise, l'envoi de déclarations et notifications complètes, la préparation de la paie et des documents similaires nécessitent un suivi méticuleux.",
  about_details_2:
    "Dans le cadre de nos services comptables, nous tenons les livres juridiques et les états financiers des entreprises conformément au chapitre 113 de la loi sur les sociétés et aux exigences du plan comptable uniforme, et les présentons aux autorités compétentes si nécessaire.",
  about_details_3:
    "En tant que ORTAC AUDIT COMPANY, avec notre équipe de comptabilité et de reporting, nous répondons aux besoins de nos clients de manière rapide, précise et fiable, avec les connaissances et l'expérience que nous avons acquises au fil des ans.",
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
