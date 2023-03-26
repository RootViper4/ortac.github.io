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
  menu_3_4: "Bookkeeping Service",
  menu_4: "Company Establishment Application Form",
  menu_5: "Testimonials",
  menu_6: "Blogs",
  menu_7: "Contact",
  menu_8: "Take an Appointment",
  intro_btn: "START IMMEDIATELY",
  menu_title:
    "Ease Your Accounting Firm Tasks with Our Professional and Remote Bookkeeping Service",
  about_details_1:
    "Personalized and certified advisor bookkeeping service offered by the experienced work force of Ortac Audit Company UK. Consistent, high-standard and easy-to-understand reporting to enhance time allowance on business growth.",
  about_details_2:
    "Certified advisor bookkeeping service through Xero and Sage accounting software",
  sub_about_1: "What is the difference between accounting and bookkeeping",
  sub_about_2: "Which bookkeeping software does Ortac Audit UK use?",
  sub_about_3: "How can I sign up for my business?",
  sub_about_4: "Will I work with a dedicated bookkeeper",
  sub_about_5: "What kind of bookkeeping services do you provide?",
  sub_detail_1:
    "Bookkeeping and accounting serve separate and distinct functions in the running of a business. Bookkeeping is the function of documenting and maintaining records of transactions. Accounting is the act of analyzing and interpreting the documentation and turning it into meaningful data. While bookkeepers maintain the data needed to file your taxes, an accountant is likely the one who will prepare and file them.",
  sub_detail_2:
    "The workforce behind Ortac Audit UK is experienced with many bookkeeping software programs and mostly provide service in Xero and Sage",
  sub_detail_3:
    "Simply click Contact Us to onboard with Ortac Audit UK. A bookkeeping appointment with an expert bookkeeper will be scheduled based on your availability. Typically, this is a next business day appointment and lasts between 15-30 minutes. The bookkeeper will ask questions and help you set up your account for bookkeeping",
  sub_detail_4:
    "Every Ortac Audit UK client receives a dedicated and experienced bookkeeper overseen by a Senior Accounting Manager. Each hired bookkeeper gets familiar with your accounting business to provide the best service possible",
  sub_detail_5:
    "Simply click Services to get acquainted with the bookkeeping services İsirket provides. If you are looking for more, we deliver custom solutions to each client. Contact Us today and see how Ortac Audit & Bookkeeping can support your business.",
  footer_desc:
    "Get started right away with our company formation guide with the transactions that suit you best.",
  pages: "Pages",
  help: "Help",
  apply_now: "Apply Now",
  news: "News",
  blog_title_1: "Capital discount in company establishments of foreigners !",
  blog_title_2: "TRNC Work Amnesty In Force",
  blog_title_3: "Northern Cyprus Tax Free Company Establishment",
  menu_title_1: "Get Your Transactions in Order with Guaranteed Accuracy",
  menu_title_2: "Services",
  menu_title_3: "Frequently Asked Questions",
  menu_down_title_1:
    "Freedom to focus on running your accountancy business while we handle your everyday bookkeeping tasks.",
  menu_down_title_2:
    "Accurate and fast-paced transaction categorization, detailed reconciliation reporting and on-time information flow.",
  menu_down_title_3:
    "Automation features to connect your bank accounts, send invoices, upload receipts and track progress.",
  menu_down_title_4:
    "Our common bookkeeping services include but are not limited to:",
  menu_down_title_5:
    "Raising invoices to record sales income from the customers",
  menu_down_title_6:
    "Recording expenses of service and product purchase from the suppliers",
  menu_down_title_7: "Account management of business bookkeeping",
  menu_down_title_8: "Tracking firm's P&L status",
  menu_down_title_9: "Controlled financial reporting",
  menu_down_title_10: "Reconciliation of bank accounts",
  contact_title:
    "If you are interested in remote bookkeeping for your accounting business, Ortac Audit Company is your trusted partner to thrive your business financially. Do not hesitate to contact us via email or phone; a team member will get back to you within 24 business hours to discuss your needs.",
  time_period:
    "Working Period: Monday - Friday 8:00-13:00 ve 14:00-17:00 (GMT+2)",
  form_control: "Complete the Form",
  name: "Name",
  email: "Email",
  phone: "Phone",
  message: "Additional Message",
  menu_title_uk: "UK Limited Company Formation",
  about_details_uk_5: "Why UK",
  about_details_uk:
    "The United Kingdom is one of the best places from which to establish your business as it is the world’s 5th largest economy in GDP providing great opportunity for investment freedom and capital flows. Also, the UK tax regime provides one of Europe’s lowest corporate tax rates as of 2023. Having a company based in UK allows you to reach more than 500 million consumer pool across Europe, offering great potential for foreign entrepreneurs and investors with business support and tax incentives. Ortac Audit Company makes it an easy process for non-UK residents to register their new company in UK from anywhere in the world.",
  about_details_uk_1: "Advantages of Setting Up a Limited Company in UK",
  about_details_uk_list_1:
    "<li><b>Straightforward Company Formation Procedure</b> – in simple steps you can register your new UK company as the Companies House incentives entrepreneurship.</li><li><b>Inexpensive Company Set Up</b> – when compared with the rest of the world, United Kingdom is one of the most affordable countries to establish a business.</li><li><b>Global Reputation</b> – English common law is the basis of company law in many countries which makes any UK company a stable, well-regulated vehicle through which to conduct local and international trade and provides reputational advantage and trust towards your customers, suppliers, governments and banks.</li><li><b>Attractive Tax Regime for Multinational Clients</b> – the corporate tax rate is 19% as of 2023, one of the lowest in Europe.</li> ",
  about_details_uk_2: "Advantages of Setting Up a Limited Company in UK",
  about_details_uk_list_2:
    "<li>Choose your company name</li><li>Collection of required details (Copy of your ID/passport, criminal record, proof of residency)</li><li>Completed registration is submitted to Companies House </li><li>Receive official paperwork via e-mail (Company Summary, Memorandum and Articles of Association, Certificate of Incorporation, Share Certificate)  </li><li>Your company is now registered in Companies House</li><li>UTR (Unique Taxpayer Reference) registration</li>",
  about_details_uk_3: "Our Company Registration Package",
  about_details_uk_4:
    "Our professional package for company formation includes but is not limited to:",
  about_details_uk_list_3:
    "<li><b>Limited Company Formation</b> – get your limited company formed within 3 days and documents sent to you fast and hassle-free </li><li><b>Company Documents</b> – you will receive your Certificate of Incorporation, Memorandum and Articles of Association, Share Certificate, Company Summary by email and post</li><li><b>Wamo UK Business Banking</b> – we have partnered with WAMO to provide our Non-Resident UK customers with international business banking. Wamo Business Account provides worldwide coverage allowing you to send money to +70 countries, and receive and hold +50 currencies</li><li><b>London Registered Office Address</b> – this service allows you to maintain the privacy of your home address, by using our prestigious London office location as your company's official registered office address</li><li><b>London Business Address Service</b> - Every company director, secretary, shareholder and person with significant control (e.g., shareholders who own more than 25% of the company’s shares), needs to provide a service address (also known as the correspondence address) where mail from Companies House, HMRC and other government bodies can be delivered. This then appears on the Companies House public register. Because this is publicly viewable, many people choose not to use their residential address as the service address A business address in London’s Covent Garden is the perfect way to boost your image and impress potential clients. All mail will be forwarded to an address of your choice by first class post</li><li><b>Free International Business Tracked Delivery</b> – we track and inform your printed company documents delivered to anywhere in the world</li><li><b>VAT Registration with HMRC</b> – For companies that will only be operating within the UK and be exposed to VAT income over £85,000, we we will take care of the formalities and process the application on your behalf for VAT registration</li>",
  about_details_uk_6: "Additional Services",
  about_details_uk_7:
    "In addition to services included in our company formation procedure and company registration package we also provide the remote bookkeeping service for our valued customers who seek for consistent, high-standard and easy-to-understand accounting reports of their business. Simply check our Bookkeeping Service and contact us to get the best of accountant bookkeeping we provide.",
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
  menu_3_4: "Ön Muhasebe Hizmeti",
  menu_4: "Şirket Kurma Başvuru Formu",
  menu_5: "Referanslar",
  menu_6: "Bloglar",
  menu_7: "İletişim",
  menu_8: "Randevu Al",
  intro_btn: "HEMEN BAŞLA",
  menu_title:
    "Profesyonel Ön Muhasebe Hizmetimiz ile Muhasebe Şirketinizin İşlerini Kolaylaştırın",
  about_details_1:
    "Ortac Audit Company UK’in deneyimli çalışma takımı tarafından muhasebe şirketinize özel lisanslı danışman ön muhasebe hizmeti. Şirketinizin büyümesine ayrılan zamanı artırmak için tutarlı, yüksek standartlı ve anlaşılması kolay raporlama.",
  about_details_2:
    "Xero ve Sage muhasebe programları üzerinden lisanslı danışman ön muhasebe hizmeti.",
  sub_about_1: "Muhasebe ve Ön Muhasebe arasındaki fark nedir?",
  sub_about_2:
    "Ortac Audit UK hangi muhasebe ve bookkeeping yazılımını kullanıyor?",
  sub_about_3: "Ön Muhasebe hizmetinize nasıl başvurabilirim?",
  sub_about_4: "Çalışacağım lisanslı danışman ne kadar iyi olacak?",
  sub_about_5: "Ne tür Ön Muhasebe hizmetleri veriyorsunuz?",
  sub_detail_1:
    "Ön Muhasebe ve Muhasebe bir şirketin yürütülmesinde ayrı amaçlara ve farklı işlevlere hizmet eder. Bookkeeping olarak da adlandırılan Ön Muhasebe, alım satım işlemlerinin kayıtlarını belgeleme ve teyit etme işlevidir. Muhasebe ise, Bookkeeping tarafından teyitlenen belgeleri analiz etme, yorumlama ve anlamlı verilere dönüştürme eylemidir. Bookkeeping hizmetimiz vergilerinizi beyan etmek için gereken verileri işleyip tutarken, hazırlanan raporları muhasebe şirketiniz tarafından resmi işleme koyulması için hazır hale getirir.",
  sub_detail_2:
    "Ortac Audit UK’in arkasındaki iş gücü birçok muhasebe yazılımı hakkında deneyimli ve sertifikalı olmakla birlikte, çoğunlukla Xero ve Sage üzerinden hizmet vermektedir",
  sub_detail_3:
    "Ortac Audit UK’e katılmak için tek yapmanız gereken Bize Ulaşın’a tıklamak. Belirlemiş olduğumuz uygunluk durumuna göre uzman saymanlarımızdan biri ile telefon veya internet üzerinden görüşme randevusu ayarlanacaktır. Randevular genellikle başvuru tarihinden bir sonraki gün gerçekleştirilir ve yaklaşık 15-30 dakika sürer. Muhasebe şirketiniz hakkında sorular soracak olan uzman saymanımız, muhasebe hesabınızı bookkeeping için ayarlamanıza yardımcı olacaktır.",
  sub_detail_4:
    "Her Ortac Audit UK müşterisine, Kıdemli Muhasebe Müdürümüz tarafından denetlenen kendini işe adamış ve deneyimli bir lisanslı danışman atanır. Muhasebe şirketinize atadığımız her lisanslı danışman mümkün olan en iyi hizmeti sunabilmek için muhasebe şirketinizi tanımak ve anlamakla mükelleftir.",
  sub_detail_5:
    "Ortac Audit UK’in sunduğu muhasebe ve Ön Muhasebe hizmetleri hakkında bilgi almak için Hizmetler’e tıklamanız yeterli. Genel hizmetlerimiz dışında daha fazlasını arayan her muhasebe şirketine özel çözümler sunuyoruz. Bugün Bize Ulaşın ve Ortac Audit UK’in muhasebe şirketinizi nasıl destekleyebileceğini hemen öğrenin.",
  footer_desc:
    "Şirket kurma rehberimiz ile size en uygun işlemlerle hemen başlayın.",
  pages: "Sayfalar",
  help: "Yardım",
  news: "Haberler",
  apply_now: "Şimdi Uygula",
  blog_title_1: "Yabancıların şirket kuruluşlarında sermaye indirimi!",
  blog_title_2: "KKTC Çalışma Affı Yürürlükte",
  blog_title_3: "Kuzey Kıbrıs Vergisiz Şirket Kuruluşu",
  menu_title_1:
    "Muhasebe Şirketinizin Bookkeeping İşlemlerini Garantilli Doğrulukla Düzene Sokun",
  menu_title_2: "Hizmetler",
  menu_title_3: "Sıkça Sorulan Sorular",
  menu_down_title_1:
    "Biz günlük ön muhasebe işlerinizi hallederken muhasebe şirketinizi yürütme ve yönetmeye odaklanma özgürlüğü.",
  menu_down_title_2:
    "Doğru ve hızlı işlem sınıflandırması, detaylı mutabakat raporlaması ve zamanında bilgi akışı.",
  menu_down_title_3:
    "Banka hesaplarınızı bağlamak, fatura göndermek, makbuz yüklemek ve gelişmeleri takip etmek için otomasyon özellikleri.",
  menu_down_title_4:
    "Genel ön muhasebe hizmetlerimiz aşağıdakilerle sınırlı olmamakla birlikte şunları içerir:",
  menu_down_title_5: "Müşterilerden gelen satış faturaları için gelir işlemek",
  menu_down_title_6:
    "Tedarikçilerden alınan hizmet ve ürünler için gider oluşturmak",
  menu_down_title_7: "Şirket ön muhasebe yönetimi",
  menu_down_title_8: "İşletme karlılık takibi",
  menu_down_title_9: "Rapor kontrolü",
  menu_down_title_10: "Hesaplar arası mutabakat",
  contact_title:
    "Muhasebe firmanız için uzaktan ön muhasebe ile ilgileniyorsanız, Ortac Audit Company işinizi finansal olarak geliştirmek için güvenilir ortağınızdır. E-posta veya telefon yoluyla bizimle iletişime geçmekten çekinmeyin; takım arkadaşlarımız, ihtiyaçlarınızı görüşmek üzere 24 iş saati içinde size geri dönüş yapacaktır.",
  time_period:
    "Çalışma Saatlerimiz: Pazartesi – Cuma 8:00-13:00 ve 14:00-17:00 (GMT+2)",
  form_control: "Complete the Form",
  name: "Name",
  email: "Email",
  phone: "Phone",
  message: "Additional Message",
  menu_title_uk: "Birleşik Krallık’ta Şirket Kurulumu",
  about_details_uk_5: "Neden Birleşik Krallık",
  about_details_uk:
    "Dünyanın ekonomik anlamda en güçlü ülkelerinden biri olan Birleşik Krallık, şirketinizi kurmak ve dünya markası haline getirmek için en ideal yerlerin başında gelmektedir. Her sene Gayri Safi Yurt İçi Hasıla (GSYİH) sıralamasında dünya devleriyle ilk 5 sırayı paylaşan Birleşik Krallık, yatırım özgürlüğü ve sermaye akımları için muhteşem fırsatlar sunmakta ve dolayısı ile yatırımcıların odak noktası haline gelmiştir. 2023 yılı itibarı ile Birleşik Krallık vergi rejimi Avrupa Birliği’ndeki ülkelere kıyasla Avrupa’nın en düşük kurumlar vergisinden birini sağlamaktadır. Birleşik Krallık’ta kurulan bir şirket sahibi olmak Avrupa’nın 500 milyon tüketici havuzuna erişiminizi kolaylaştırırken aynı zamanda yabancı girişimciler ve yabancı yatırımcılar için ticari destek ve vergi teşvikine istinaden vergi indirimi imkanları sunmaktadır. Ortaç Audit Company, Birleşik Krallık’ta ikamet etmeyen herkese dünyanın herhangi bir ülkesinden Birleşik Krallık’ta şirket kurmayı en kolay hale getirmiştir.",
  about_details_uk_1: "Birleşik Krallık’ta Limited Şirket Kurmanın Faydaları",
  about_details_uk_list_1:
    "<li><b>Anlaşılır ve Basit Şirket Kurma Prosedürü </b>– Şirket Sicil Kurumu (Companies House) tarafından sağlanan girişimcilik teşviki sayesinde kolay adımlarla yeni şirketinizi Birleşik Krallık’ta kuruyoruz</li><li><b>Makul Fiyata Şirket Kurulumu </b>– işinizi Birleşik Krallık’ta kurmak için dünyanın geri kalanına kıyasla daha az masraf gerektirmektedir</li><li><b>Dünya Çapında İtibar </b>– birçok ülkenin şirketler yasası olarak temel aldığı İngiliz hukuk sistemi sayesinde Birleşik Krallık’ta kurulan her şirkete yerel ve uluslararası ticaret idame ettirmek açısından en istikrarlı ve iyi düzenlenmiş araç gözüyle bakılmaktadır. Dolayısıyla müşterileriniz, tedarikçileriniz, devlet ve bankalara karşı itibar ve güven avantajı sağlar.</li><li><b>Uluslararası Müşterilere Özel Cazip Vergi Düzenlemesi </b>– 2023 yılında 19% olan Birleşik Krallık kurumlar vergisi Avrupa’nın en düşük oranlarının başında gelmektedir</li>",
  about_details_uk_2: "Şirket Kurulum Süreci",
  about_details_uk_list_2:
    "<li>Şirket isminin belirlenmesi ve uygunluk kontrolü</li><li>Kurulum başvurusu için gerekli evraklar toplanır (Kimlik Kartı/Pasaport, Sicil Kaydı, İkametgah)</li><li>Şirket Sicil Kurumu’na başvuru kaydı teslim edilir</li><li>Resmi evraklar (Şirket Özeti Belgesi, Şirket Ana Sözleşme Belgesi, Şirket Kuruluş Belgesi, Hisse Senedi Belgesi) e-posta aracılığıyla tarafınıza teslim edilir</li><li>Şirket Sicil Kurumu tarafından şirket kaydınız tamamlanır</li><li>UTR (Şirkete Özgün Vergi Mükellefi Numarası) kaydınız yapılır</li>",
  about_details_uk_3: "Şirket Kurulum Paketimiz",
  about_details_uk_4:
    "Şirket kurulumu için sunduğumuz profesyonel hizmet anlayışı aşağıdaki gibidir:",
  about_details_uk_list_3:
    "<li><b>Limited Şirket Kurulumu</b> – 3 gün içerisinde hızlı ve sorunsuz bir şekilde limited şirketinizi kurup şirket evraklarınızı size gönderiyoruz</li><li><b>Şirket Evrakları </b>-  Şirket Özeti Belgesi, Şirket Ana Sözleşme Belgesi, Şirket Kuruluş Belgesi, ve Hisse Senedi Belgesi’ni e-posta ve posta aracılığıyla tarafınıza teslim edilir</li><li><b>WAMO UK Banka Hesabı </b>– WAMO ile ortaklık anlaşmamız doğrultusunda Birleşik Krallık’ta ikamet etmeyen müşterilerimize özel uluslararası bankacılık hizmeti sunuyoruz. WAMO Ticari Hesap sayesinde dünya genelinde 70’den fazla ülkeye para gönderebilir ve 50’den fazla para birimi tutup havale yapabilirsiniz</li><li><b>Londra Kayıtlı Ofis Adresi</b> – bu hizmet sayesinde kişisel gizlilik hakkınız korunarak ev adresiniz gösterilmez, onun yerine Londra’nın saygın konumunda bulunan ofis adresimiz şirketinizin resmi kayıtlı adresi olarak gözükür</li><li><b>Londra’da Şirket Hizmet Adresi </b>– Birleşik Krallık’a ait devlet kurumlarının şirketinize posta teslim edebilmesi için şirketinizin bünyesinde bulunan şirket yöneticileri, sekreter ve 25%’den fazla paya sahip olan hissederlar şirket hizmet adresi sağlamakla mükelleftir. Bu hizmet adresi Şirket Sicil Kurumu tarafından halka açık kayıt olarak gözüktüğü için çoğu iş sahibi ikamet ettiği adres yerine şirket hizmet adresini kullanmayı tercih ederler. Ortac Audit Company tarafından Londra’nın Covent Garden merkezinde sizler için temin ettiği prestijli konum şirket imajınız ve potanyisel müşterilerinizi etkilemek için mükemmel bir fırsat sunar </li><li><b>Uluslararası Teslimat Takibi </b> – matbu şirket evraklarınız teslim edilme süresince dünyanın neresinde olursanız takibini biz sağlıyoruz ve sizi bilgilendiriyoruz</li><li><b>HMRC (Majestelerinin Gümrük ve Hazine Dairesi) Vergi Kaydı </b>– sadece Birleşik Krallık içerisinde hizmet verecek ve vergiye tabi yıllık cirosu £85,000 üzerinde gerçekleşecek şirketler için ek olarak KDV kayıdı hizmeti sunmaktayız. Bu konuda deneyimli takımımız, formalite işleri sizin için hallederken sizin adınıza başvurunuzu tamamlıyor</li>",
  about_details_uk_6: "Ek Hizmetler",
  about_details_uk_7:
    "Birleşik Krallık’ta şirket kurulumu ve kurulum paketimiz içerisinde belirtilen hizmetler haricinde şirketinize özel ön muhasebe hizmeti de sunuyoruz. Kuruma özgün, tutarlı, yüksek kalitede ve anlaşılması kolay ön muhasebe raporlamamız şirketinizi yürütme ve yönetmeye odaklanma özgürlüğü sağlıyor. Ek hizmetlerimiz hakkında detalı bilgi almak için Ön Muhasebe Hizmeti’ni inceleyip bizimle iletişime geçebilirsiniz.",
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
    "Мы в вашем распоряжении в консультационных услугах с нашим многолетним опытом и нашим опытным, творческим и предприимчивым экспертным персоналом в финансовых и финансовых вопросах высокого уровня.",
  sub_about_1: "ЗАКУПКА КОМПАНИИ И ОЦЕНКА",
  sub_about_2: "ЗАРПЛАТА И РАЗРЕШЕНИЕ НА РАБОТУ",
  sub_about_3: "ИНВЕСТИЦИОННЫЙ КОНСАЛТИНГ",
  sub_about_4: "ОСНОВАНИЕ КОМПАНИИ",
  sub_about_5: "ВИРТУАЛЬНЫЙ ОФИС",
  sub_detail_1:
    "<p>Колебания в мировой экономике и на рынках заставили компании изменить свою стратегию; расти или может заставить его сжиматься. Слияния, поглощения, выделения для адаптации к новым условиям, такие как процессы корпоративной реструктуризации, являются часто используемыми методами. У нас также есть эти процессы. Благодаря нашему опыту управления, он производит комплексные финансовые решения как для покупателя, так и для продавца и успешно реализует свои проекты. мы дорабатываем. </p> <p>Как ORTAC AUDIT COMPANY, мы уже более 20 лет участвуем во многих важных проектах по слияниям и поглощениям. Мы внесли свой вклад, предоставив управленческие и консультационные услуги. Это то, к чему мы успешно пришли из проектов. Благодаря опыту и доверию, которые мы приобрели, мы обслуживаем наших клиентов с помощью нашего опытного персонала и профессионального подхода. </p>",
  sub_detail_2:
    "<p>Согласно законодательству Турецкой Республики Северного Кипра, в отношении заработной платы, выплачиваемой компаниями своим сотрудникам, требуется соответствующее регулирование заработной платы. В платежных ведомостях; промежуточные платежи, юридические отчисления и вознаграждения работникам за вычетом подлежащих выплате правильный расчет вознаграждения; должны быть надежными для правильного управления такими процессами, как прием на работу и увольнение, а также должна поддерживаться эффективная система начисления заработной платы.</p> <p> Благодаря нашей технической ИТ-инфраструктуре, совместимой с современными технологиями, наши клиенты получают надежные услуги по расчету заработной платы. Мы представляем это как-то.</p> <p>Как ORTAC AUDIT COMPANY, все внутренние и иностранные предварительные авторизации ваших работников и все. Следуя процедурам регистрации, ваши сотрудники будут официально зарегистрированы в вашем бизнесе в кратчайшие сроки. быть мы предоставляем.</p> <p>Небрежность в разрешении на работу наносит серьезный материальный и моральный ущерб вашей компании. работа слишком авторизована Перекладывая всю ответственность за отпуска ваших сотрудников на нас, мы никогда не предпринимаем никаких возможных преступных действий. не думая Вы можете продолжать свои сделки.</p> <p>Благодаря нашим знаниям и опыту, накопленным с 1996 года, мы предоставляем нашим клиентам возможность оправдать их ожидания. за, надежный и Мы предлагаем уникальные услуги.</p>",
  sub_detail_3:
    "<p>В сегодняшних жестких условиях конкуренции наша профессиональная команда идет навстречу нашим клиентам. практично и креативно Мы предлагаем решения. </p> <p>Благодаря консультационным услугам, которые мы предоставляем как ORTAC AUDIT COMPANY, наши клиенты получат решения, оценку возможностей, определение перспективных стратегий и стратегий роста, а также поддержку в реализации, которой мы становимся. Таким образом, в меняющейся экономической конъюнктуре финансовые структуры наших клиентов и эффективно Мы помогаем им быть конкурентоспособными и создать конкурентоспособную структуру.</p> <p>Благодаря нашему четвертьвековому опыту и обширным отраслевым знаниям, мы находимся в контакте с нашими клиентами. в области инвестиций Начавшееся сотрудничество продолжается на этапах развития и роста их бизнеса. Таким образом, важно для наших клиентов Мы предлагаем комплексные решения, которые повышают их ценность при принятии решений.</p> <p>Проведение соответствующих технико-экономических обоснований, оценки, торговли и переговоров по сделке на каждом этапе инвестиционного процесса. такие как управление Мы предлагаем консультационные услуги в областях.</p>",
  sub_detail_4:
    "<p>Как ORTAÇ AUDIT COMPANY, мы работаем в Турецкой Республике Северного Кипра уже более 20 лет. по всему миру Кроме того, вы можете основать свою новую компанию на прочном фундаменте и уверенно двигаться вперед. Наши специалисты для Мы с вами. </p> <p>Существуют различные законы, регулирующие условия работы компаний в Турецкой Республике Северного Кипра. Основной закон вместе Закон о компаниях - глава 113.</p> <p>Опять же, выберите наиболее подходящую для вас компанию среди компаний, уже созданных в рамках нашей компании. время покупать Вы можете начать свой бизнес без потерь.</p> <p>Турецкая Республика Северного Кипра предлагает широкий спектр возможностей как для отечественных, так и для иностранных инвесторов. предложения. мы тоже Благодаря нашему многолетнему опыту, мы идем с вами, ценными инвесторами, в этом процессе, чтобы получить самую точную информацию. и поддержку мы даем.</p>",
  sub_detail_5:
    "<p>Что такое виртуальный офис? <br /> Виртуальный офис — это услуга предпринимателя или компании для своих клиентов без физического офиса по определенному адресу. общение и это область, где могут быть предложены секретарские услуги. </p> <br /> <p>Для кого предназначен виртуальный офис? <br /> Больше предпринимателей, тех, кто постоянно путешествует из-за своей профессии, сотрудников домашнего офиса или проектов, консультирующих Виртуальные офисы, решение, предпочитаемое теми, кто это делает, предоставляют множество возможностей своим пользователям. </p> <p>Как и в остальном мире, работа на Северном Кипре из-за технологических разработок последних лет в виде изменений привела к разным офисным пониманиям.</p> <p>Многие молодые предприниматели, которые хотят начать свой собственный бизнес в ТРСК, особенно в процессе запуска, платят высокую арендную плату. затраты Многие предприниматели, не имеющие достаточно средств для этого или работающие в домашнем офисе, имеют юридический адрес. и общение, могут потребоваться услуги секретаря. </p> <br /> <p>Преимущества виртуального офиса <ul> <li>Престижный адрес корпоративного офиса</li> <li>Бюджетный</li> <li>Ваши документы и грузы принимаются для вас, хранятся или сканируются по вашему запросу. с вами по почте поделился.</li> <li>На ваши звонки отвечает профессиональная команда и переадресовывает их вам.</li>",
  footer_desc:
    "Начните прямо сейчас с нашего руководства по созданию компании с транзакциями, которые подходят вам лучше всего.",
  pages: "Страницы",
  help: "Помощь",
  apply_now: "Применить сейчас",
  news: "Новости",
  blog_title_1: "Скидка на капитал в фирменных заведениях иностранцев!",
  blog_title_2: "Действует рабочая амнистия ТРСК",
  blog_title_3: "Создание компании Tax Free на Северном Кипре",
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
    "Nous sommes à votre disposition dans les services de conseil avec nos années d'expérience et notre équipe d'experts expérimentés, créatifs et entreprenants en matière financière et financière de haut niveau.",
  sub_detail_1:
    "<p>Les fluctuations de l'économie mondiale et des marchés ont amené les entreprises à changer de stratégie ; grandir ou peut le forcer à rétrécir. Les fusions, acquisitions, scissions pour s'adapter aux nouvelles conditions telles que les processus de restructuration d'entreprise sont des méthodes fréquemment utilisées. Nous avons aussi ces processus Fort de notre expérience en gestion, Il produit des solutions financières globales tant par l'acheteur que par le vendeur et mène à bien ses projets. nous finalisons. </p> <p>En tant que ORTAC AUDIT COMPANY, nous avons participé à de nombreux projets importants de fusion et d'acquisition depuis plus de 20 ans, nous avons besoin d'un processus. Nous avons contribué en fournissant des services de gestion et de conseil. C'est ce que nous avons conclu avec succès des projets. Grâce à l'expérience et à la confiance que nous avons acquises, nous servons nos clients avec notre personnel expert et notre approche professionnelle. continuer à donner </p>",
  sub_detail_2:
    "<p>Selon la législation de la République turque de Chypre du Nord, les salaires versés par les entreprises à leurs employés doivent être régis par une réglementation pertinente en matière de paie. Dans les paies ; acomptes, retenues légales et avantages sociaux nets à payer calcul correct de la redevance ; fiable pour la bonne gestion des processus tels que l'embauche et la sortie et un système de paie efficace doit être maintenu.</p> <p>Grâce à notre infrastructure technique informatique compatible avec la technologie d'aujourd'hui, nos clients paient des services fiables Nous le présentons en quelque sorte.< /p> <p>Comme ORTAC AUDIT COMPANY, toutes les pré-autorisations nationales et étrangères de vos travailleurs et tous En suivant les procédures d'enregistrement, vos employés seront officiellement enregistrés dans votre entreprise dans les plus brefs délais. être que nous fournissons.</p> <p>La négligence dans les permis de travail cause de graves dommages matériels et moraux à votre entreprise. travail trop autorisé En nous transférant l'entière responsabilité des transactions de congés de vos employés, nous ne commettons jamais d'éventuelles poursuites pénales. sans réfléchir Vous pouvez poursuivre vos transactions.</p> <p>Grâce à notre savoir-faire et à notre expérience acquise depuis 1996, nous offrons à nos clients la possibilité de répondre à leurs attentes. au-delà, fiables et Nous offrons des services uniques.</p>",
  sub_detail_3:
    "<p>Dans les conditions de concurrence difficiles d'aujourd'hui, notre équipe professionnelle répond aux besoins de nos clients. pratique et créatif Nous offrons des solutions. </p> <p>Avec les services de conseil que nous fournissons en tant que ORTAC AUDIT COMPANY, nos clients recevront des décisions, une évaluation des opportunités, la détermination des performances futures et des stratégies de croissance et un soutien dans la mise en œuvre que nous devenons Ainsi, dans la conjoncture économique changeante, notre structures financières des clients, activités efficaces et efficientes Nous les aidons à être compétitifs et à atteindre une structure compétitive.</p> <p>Grâce à notre expérience d'un quart de siècle et à notre vaste connaissance de l'industrie, nous sommes en contact avec nos clients. dans le domaine de l'investissement La coopération entamée se poursuit pendant les phases de développement et de croissance de leurs entreprises. Ainsi, important pour nos clients, nous proposons des solutions complètes qui leur ajoutent de la valeur lors de la prise de décisions.</p> <p>Méthode de faisabilité, d'évaluation, de négociation et de négociations appropriées à chaque étape du processus d'investissement. comme la gestion Nous offrons des services de conseil dans les domaines.</p>",
  sub_detail_4:
    "<p>En tant que ORTAÇ AUDIT COMPANY, nous sommes présents dans la République turque de Chypre du Nord depuis plus de 20 ans. à travers le monde De plus, vous pouvez établir votre nouvelle entreprise sur des bases solides et avancer en toute confiance. Notre équipe d'experts pour Nous sommes avec vous. </p> <p>Il existe différentes lois régissant les conditions de travail des entreprises dans la République turque de Chypre du Nord. loi fondamentale ensemble La loi sur les sociétés est le chapitre 113.</p> <p>Encore une fois, choisissez la société qui vous convient le mieux parmi les sociétés déjà établies au sein de notre société. il est temps d'acheter Vous pouvez démarrer votre entreprise sans perdre.</p> <p>La République turque de Chypre du Nord offre un large éventail d'opportunités aux investisseurs nationaux et étrangers. des offres. nous aussi Grâce à nos années d'expérience, nous accompagnons vous, précieux investisseurs, dans ce processus, pour obtenir les informations les plus précises. et le soutien que nous apportons.</p>",
  sub_detail_5:
    "<p>Qu'est-ce qu'un bureau virtuel ? <br /> Le bureau virtuel est le service d'un entrepreneur ou d'une entreprise à ses clients sans bureau physique à une adresse spécifique. communication et C'est un domaine où des services de secrétariat peuvent être offerts. </p> <br /> <p>A qui s'adresse le Bureau Virtuel ? <br /> De plus en plus d'entrepreneurs, ceux qui se déplacent constamment en raison de leur profession, les employés en télétravail ou en projet, consultent Les bureaux virtuels, une solution préférée par ceux qui le font, offrent de nombreuses opportunités à leurs utilisateurs. </p> <p>Comme dans le reste du monde, travailler dans le nord de Chypre en raison des développements technologiques de ces dernières années sous la forme de Les changements ont entraîné différentes compréhensions de bureau.</p> <p>Beaucoup de jeunes entrepreneurs qui veulent pour démarrer leur propre entreprise en RTCN, en particulier dans le processus de démarrage, paient des loyers élevés. coûts Beaucoup d'entrepreneurs qui n'ont pas les moyens de se le permettre ou qui travaillent dans un bureau à domicile ont une adresse légale. et la communication, peuvent nécessiter des services de secrétariat. </p> <br /> <p>Avantages du bureau virtuel <ul> <li>Une adresse de siège social prestigieuse</li> <li>Faible coût</li> <li>Vos documents et cargaisons sont réceptionnés pour vous, stockées ou numérisées à votre demande. avec vous par mail partagé.</li> <li>Vos appels sont pris en charge par une équipe professionnelle et vous sont transférés.</li>",
  footer_desc:
    "Commencez tout de suite avec notre guide de création d'entreprise avec les transactions qui vous conviennent le mieux.",
  pages: "Pages",
  help: "Aide",
  apply_now: "Appliquer maintenant",
  news: "Actualités",
  blog_title_1:
    "L'exigence de capital minimum pour les établissements de sociétés étrangères a été réduite. Il est désormais plus facile de créer une entreprise en RTCN.",
  blog_title_2:
    "L'amnistie du travail TRNC est entrée en vigueur aujourd'hui, des informations détaillées dans notre article de blog.",
  blog_title_3: "Création d'une société exempte d'impôts à Chypre du Nord",
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
