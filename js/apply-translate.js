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
  apply_details:
    "Welcome, in just a few steps we will determine the most suitable company type for you. Let's get to know you a little first:",
  name: "Your name?",
  email: "Your email adress?",
  phone: "Phone",
  target: "Where is your target audience customer?",
  hour: "Working Hours:",
  target_details_1:
    "KKTC (Describes companies providing services to companies in TRNC.)",
  target_details_2:
    "Overseas (Describes companies that provide services outside of the TRNC.)",
  target_details_3:
    "Both (Describes companies that serve customers both inside and outside the TRNC.)",
  citizen: "Are you a TRNC Citizen?",
  yes: "Yes",
  no: "No",
  message:
    "If you tell us a little about what you're going to do, we might be able to help you better.",
  messages: "Message",
  send: "Send message",
  contact_title: "Get in touch with us",
  contact_details:
    "Do you have a question about our products and services that you are interested in? Please fill in the form below, we are happy to help.",
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
  start_bus: "Start Your Business in United Kingdom",
  start_bus_kktc: "Start Your Business in North Cyprus",
  start_bus_detail:
    "We offer the opportunity to establish your business in the United Kingdom from anywhere in the world and provide licensed bookkeeping service with our professional advisors. If you want to benefit from these privileges, grow your company and open up to the global world, start below with the most appropriate steps",
  start_bus_detail_kktc:
    "We offer the opportunity to establish your business in the North Cyprus from anywhere in the world and provide licensed bookkeeping service with our professional advisors. If you want to benefit from these privileges, grow your company and open up to the global world, start below with the most appropriate steps",
  company_formation: "Company Formation",
  company_formation_details:
    "If you're looking to create a company in the UK, Ortac Audit can provide the guidance you need. As experts in accounting and auditing, we can help you determine the type of company that's right for you, whether it's a limited liability company or a sole trader. We can also assist with the registration process, including registering your company name with Companies House and appointing directors.",
  company_formation_details_kktc:
    "If you're looking to create a company in the Northern Cyprus, Ortac Audit can provide the guidance you need. As experts in accounting and auditing, we can help you determine the type of company that's right for you, whether it's a limited liability company or a sole trader. We can also assist with the registration process, including registering your company name with Companies House and appointing directors.",
  read_more: "Read More",
  bookeeping_details:
    "We offer comprehensive bookkeeping services to ensure your company's finances are in order. Our experienced bookkeepers can manage your accounts, including recording all financial transactions, reconciling bank statements, and preparing financial statements. We'll also ensure that your accounts are up-to-date with the latest regulations and tax laws, so you can avoid any penalties or fines.",
  bookeeping: "Bookkeeping",
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
  apply_details:
    "Hoşgeldiniz, sadece birkaç adımda size en uygun şirket türünü belirleyeceğiz. Önce sizi biraz tanıyalım:",
  name: "İsminiz?",
  email: "Email adresiniz?",
  phone: "Telefon",
  target: "Hedef kitle müşteriniz nerede?",
  hour: "Çalışma saatleri:",
  target_details_1:
    "KTC (KKTC'deki şirketlere hizmet veren şirketleri anlatır.)",
  target_details_2: "Yurtdışı (KKTC dışına hizmet veren şirketleri anlatır.)",
  target_details_3:
    "Her ikisi de (Hem KKTC içi hem de KKTC dışındaki müşterilere hizmet veren şirketleri anlatır.)",
  citizen: "KKTC Vatandaşımısınız?",
  yes: "Evet",
  no: "Hayır",
  message:
    "Bize biraz yapacağınız işten bahsederseniz size daha iyi yardımcı olabiliriz.",
  messages: "Mesaj",
  send: "Mesaj gönder",
  contact_title: "Bizimle temasa geçin",
  contact_details:
    "İlgilendiğiniz ürün ve hizmetlerimiz hakkında bir sorunuz mu var? Lütfen aşağıdaki formu doldurun, size yardımcı olmaktan memnuniyet duyarız.",
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
  start_bus: "Sİşletmenizi Birleşik Krallık’ta Kurun",
  start_bus_kktc: "Kuzey Kıbrıs'ta İşinizi Başlatın",
  start_bus_detail:
    "Dünyanın herhangi bir ülkesinden Birleşik Krallık’ta şirket kurma fırsatı ve şirketinize özel lisanslı danışman ön muhasebe hizmeti ile karşınızdayız. Siz de bu ayrıcalıklardan faydalanmak, şirketinizi büyütmek ve dünyaya açılmak istiyorsanız en uygun adımlarla hemen başlayın.",
  start_bus_detail_kktc:
    "Dünya genelinden Kuzey Kıbrıs'ta şirket kurma fırsatı ve şirketinize özel lisanslı danışmanlık hizmetleri sunuyoruz. Bu ayrıcalıklardan yararlanmak, işinizi büyütmek ve dünya çapında yayılmak isterseniz, en uygun adımlarla hemen başlayın.",
  company_formation: "Şirket Kurulumu",
  company_formation_details:
    "Eğer İngiltere'de bir şirket oluşturmak istiyorsanız, Ortac Audit size gereken rehberliği sağlayabilir. Muhasebe ve denetim konusunda uzman olarak, sınırlı sorumluluklu bir şirket veya tek kişilik işletme gibi sizin için doğru şirket türünü belirlemenize yardımcı olabiliriz. Ayrıca, şirket adınızı Şirketler Evi'ne kaydetmek ve yönetim kurulu üyelerini atamak da dahil olmak üzere kayıt sürecinde yardımcı olabiliriz.",
  company_formation_details_kktc:
    "Eğer Kuzey Kıbrıs'ta bir şirket oluşturmak istiyorsanız, Ortac Audit size ihtiyacınız olan rehberliği sağlayabilir. Muhasebe ve denetim konularında uzmanlar olarak, size sınırlı sorumluluklu bir şirket veya tek tüccar gibi sizin için doğru olan şirket türünü belirlemede yardımcı olabiliriz. Ayrıca, şirketinizin ismini Companies House ile kaydettirme ve yönetim kurulu üyeleri atama gibi kayıt işlemlerinde de yardımcı olabiliriz.",
  read_more: "Devamını Oku",
  bookeeping_details:
    "Şirketinizin finanslarının düzenli olduğundan emin olmak için kapsamlı bir muhasebe hizmeti sunuyoruz. Tecrübeli muhasebecilerimiz, tüm finansal işlemleri kaydetmek, banka hesapları mutabakatını yapmak ve finansal tablolar hazırlamak da dahil olmak üzere hesaplarınızı yönetebilir. Ayrıca hesaplarınızın en son yönetmelik ve vergi kanunlarına uygun olduğundan emin olacak ve herhangi bir ceza veya para cezasından kaçınmanızı sağlayacağız.",
  bookeeping: "Ön Muhasebe",
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
  apply_details:
    "Добро пожаловать, всего за несколько шагов мы определим наиболее подходящий для вас тип компании. Давайте сначала немного познакомимся с вами:",
  name: "Ваше имя?",
  email: "Ваша электронная почта?",
  phone: "Телефон",
  target: "Где находится ваша целевая аудитория?",
  hour: "Рабочее время:",
  target_details_1:
    "KKTC (Описывает компании, предоставляющие услуги компаниям в ТРСК.)",
  target_details_2:
    "За рубежом (Описывает компании, которые предоставляют услуги за пределами ТРСК.)",
  target_details_3:
    "Оба (Описывает компании, которые обслуживают клиентов как внутри, так и за пределами ТРСК.)",
  citizen: "Вы гражданин ТРСК?",
  yes: "Да",
  no: "Нет",
  message:
    "Если вы расскажете нам немного о том, что собираетесь делать, возможно, мы сможем помочь вам лучше.",
  messages: "Сообщение",
  send: "Отправить сообщение",
  contact_title: "Свяжись с нами",
  contact_details:
    "У вас есть вопрос о наших продуктах и услугах, которые вас интересуют? Пожалуйста, заполните форму ниже, мы будем рады помочь.",
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
  apply_details:
    "Bienvenue, en quelques étapes, nous déterminerons le type d'entreprise qui vous convient le mieux. Faisons d'abord un peu connaissance avec vous :",
  name: "Votre nom?",
  email: "Votre adresse e-mail?",
  phone: "Téléphone",
  target: "Où est votre clientèle cible ?",
  hour: "Heures d'ouverture:",
  target_details_1:
    "KKTC (Décrit les entreprises fournissant des services aux entreprises en TRNC.)",
  target_details_2:
    "Outre-mer (Décrit les entreprises qui fournissent des services en dehors de la RTCN.)",
  target_details_3:
    "Les deux (Décrit les entreprises qui servent des clients à l'intérieur et à l'extérieur de la RTCN.)",
  citizen: "Êtes-vous un citoyen TRNC ?",
  yes: "Oui",
  no: "Non",
  message:
    "Si vous nous parlez un peu de ce que vous allez faire, nous pourrons peut-être mieux vous aider.",
  messages: "Message",
  send: "Envoyer message",
  contact_title: "Contactez-nous",
  contact_details:
    "Vous avez une question sur nos produits et services qui vous intéresse ? Veuillez remplir le formulaire ci-dessous, nous sommes heureux de vous aider.",
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

function setContactFormPlaceholders(lang) {
  if (lang === "en") {
    $('input[name="name"]').attr("placeholder", "Name");
    $('input[name="phone"]').attr("placeholder", "Phone");
    $('input[name="email"]').attr("placeholder", "Email");
    $('textarea[name="message"]').attr("placeholder", "Message");
  }
  if (lang === "fr") {
    $('input[name="name"]').attr("placeholder", "Nom");
    $('input[name="phone"]').attr("placeholder", "Téléphone");
    $('input[name="email"]').attr("placeholder", "Email");
    $('textarea[name="message"]').attr("placeholder", "Message");
  } else {
    $('input[name="name"]').attr("placeholder", "Isim");
    $('input[name="phone"]').attr("placeholder", "Telefon");
    $('input[name="email"]').attr("placeholder", "Email");
    $('textarea[name="message"]').attr("placeholder", "Mesaj");
  }
}

$(document).ready(function () {
  const lang = getParameterByName("lang");
  if (lang) {
    window.localStorage.setItem("language", lang);
    i18n.setLang(lang);
  }
  changeLabels();
  setContactFormPlaceholders(window.localStorage.getItem("language") || "tr");

  $("#dropdownMenuButton").text(
    (window.localStorage.getItem("language") || "tr").toUpperCase()
  );
});

$("#lang")
  .find("a")
  .click(function (e) {
    var lang = this.href.slice(-2);
    i18n.setLang(lang);
    setContactFormPlaceholders(lang);
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
