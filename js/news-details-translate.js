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
  go_apply: "Begin Company Establishment",
  news: "News",
  blog_title_1: "Capital discount in company establishments of foreigners!",
  blog_title_2: "TRNC Work Amnesty In Force",
  blog_title_3: "Northern Cyprus Tax Free Company Establishment",
  blog_title_4: "Would you like to have a company in Northern Cyprus?",
  blog_title_5: "New minimum wage entered into force in TRNC",
  blog_title_6: "Free Port Zone Companies",
  blog_title_7: "Free Zone Port Company Establishment Procedures",
  blog_desc:
    "<p>Incorporating a company in the Turkish Republic of Northern Cyprus foreign national (TRNC) anyone other than its nationals) The minimum capital required to invest when establishing a company is 100,000 USD (One Hundred Thousand US Dollars) is the minimum It was reduced to 50,000 Euros (Fifty Thousand Euros). As a result of this transaction, the company establishment costs were reduced and foreign It has become one step easier for investors to establish a company in the TRNC.</p> <p>For detailed information, you can contact us.</p>",
  blog_desc_1:
    "The TRNC Labor Amnesty entered into force today, for detailed information, you can view the poster published by the Ministry of Labor and Social Security below.",
  blog_desc_2:
    "<p>Internet, advertising and software, which we have heard quite often lately, tax-free companies that are the focus of their companies It is established 100% legally in the Turkish Republic of Northern Cyprus. </p> <p> VAT and VAT from your office in Turkey by establishing a company in Northern Cyprus Income Tax free service to the whole world You can give. </p> <p>Sectors that will benefit the most:</p> <ul> <li>Software companies</li> <li>Content sites</li> <li>Internet phenomena (Youtube, Instagram,…)</li> <li>Media industry</li> <li>Mobile application companies</li> <li>Digital Advertising companies</li> <li>Consulting services</li> <li>International Trade – Transit Trade</li> </ul> <p>If you are operating in one of the sectors, the company in Northern Cyprus from your office in Turkey to the whole world Do you know that you can provide trouble-free service?</p> <p>Therefore, complete exemption from Income and Corporate Tax and VAT and free profit transfer you can. To local banks in the Turkish Republic of Northern Cyprus additionally Many leading Turkish banks It will enable you to do your transactions quickly and safely. </p> <p>For detailed information, you can contact us or from the link below. company You can start the installation process immediately.</p>",
  blog_desc_3:
    "<p>If your answer is yes, you are in the right place. as ORTAC AUDIT COMPANY the fastest way to set up your company we conclude. </p> <p> The ever-developing economic structure of the Turkish Republic of Northern Cyprus opportunities for new investments in offers. Cyprus today has an advanced banking system for companies and with a wide variety of advantageous tax arrangements Offers company formation advantages. From Cyprus to Turkey sales classified as export. from the Free Zone or through the International Business Company. Value Added Tax on sales is 0%. Year Corporate Tax of 0% or 1% on the profit you will earn at the end of the day any tax payment after it has been paid there is none. </p> <p>If we count the types of companies you can establish in Northern Cyprus:</p> <ul> <li>Local Company (M.Ş)</li> <li>Foreign Company (Y.Ş.)</li> <li>Free Port and Region Companies</li> </ul> <p>Free Port Companies are in the port of Famagusta by TRNC laws. Location operating in a special status in a region While showing International Business Companies within the borders of TRNC company that can only operate abroad type.</p> <p>When compared to other offshore centers, Northern Cyprus is low establishment costs and on account in bank accounts comes to the fore with the absence of an obligation to keep an amount comes out. Account in Turkish banks located in Cyprus You can open your online transactions easily through these banks. </p> <p>Since they do not need to be located in the same country as the services they offer e-commerce, software, publishing, media and finance tax advantage by operating in Cyprus they provide. </p>",
  blog_desc_4:
    "<p>Minimum wage effective from 1 August 2019 27 August It was published in the official gazette in 2019. Gross according to the new minimum wage:</p> <ul> <li>Hourly: 19.62 TL</li> <li>Daily: 156.92 TL</li> <li>Weekly: 784,62 TL</li> <li>Monthly: 3.400 TL</li> </ul>",
  blog_desc_5:
    "<p>Free Port Zone Companies, which have become more popular lately; interest of internet, advertising and software companies It is located in the Famagusta region of the Turkish Republic of Northern Cyprus. is being established.</p> <p>Subject to the rules of the Free Port and Zone Law No. 26/1983 registration and audit procedures Chapter 113 Companies Free Port Zone Companies Limited, which is being built in accordance with the Law Company is established with at least 2 shareholders and TRNC A workplace or a mailbox in the Free Port area way they execute with.</p> <p>Companies operating under the TRNC Free Port Zone Law Independent They register the company with the Regional Management.</p> <p>Free Port Zone Companies with no annual license fee,</p> <ul> <li>As long as they do not export their services to the TRNC, their earnings are Income tax and Corporate Tax,</li> <li>From Customs Duty,</li> <li>All goods imported pursuant to the Value Added Tax Law from VAT companies that are completely exempt.</li> </ul> <p>Free Port Zone Companies may not use their earnings in any way. freely exported without restriction can. To local banks in the Turkish Republic of Northern Cyprus additionally Many leading Turkish banks It will enable you to do your transactions quickly and safely. </p> <p>TRNC Income Tax and Income Tax of Free Port Zone Companies employees Social social security laws investments in insurance, provident funds and other premiums </p> <p>Famagusta Free Port and Zone with an area of ​​103.000 m2 Port Production opportunities for Regional Companies Besides, excellent opportunities for foreign investors for transit trade presents. </p>",
  blog_desc_6:
    "<p>The Free Port Zone Companies, which stand out with their tax advantages, The establishment procedures are as follows.</p> <ul> <li>After you've identified a few names you're considering giving your company, name Application is made for approval,</li> <li>Copy of your Passport or ID Card, preferably from e-government taken proof of residence or declaring address an official document such as electricity, GSM invoice and again preferably Email us of the criminal record document obtained from e-government sent via ,</li> <li>Your company incorporation documents prepared by us and sent to you signed and sent to us by cargo,</li> <li>Company establishment costs required for company application sent to us,</li> <li>Company application and approval of the Free Port Board,</li> <li>Referral of the company to the Council of Ministers by the Ministry of Economy to be made and approval,</li> <li>Capital block (A maximum of one capital amount before the establishment of the company) transactions are blocked in the bank for a week can be withdrawn upon completion),</li> <li>Paying the Free Port Company registration fee.</li> </ul> <p>With this, the establishment of the company is finalized within an average of 30 days.</p>",
  read_all: "Read All",
  next: "Next Post",
  prev: "Previous Post",
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
  go_apply: "ŞIRKET KURULUMUNA BAŞLA",
  blog_title_1: "Yabancıların şirket kuruluşlarında sermaye indirimi!",
  blog_title_2: "KKTC Çalışma Affı Yürürlükte",
  blog_title_3: "Kuzey Kıbrıs Vergisiz Şirket Kuruluşu",
  blog_title_4: "Kuzey Kıbrıs' ta bir şirketiniz olsun ister misiniz?",
  blog_title_5: "KKTC' de yeni asgari ücret yürürlüğe girdi",
  blog_title_6: "Serbest Liman Bölge Şirketleri",
  blog_title_7: "Serbest Bölge Liman Şirketi Kuruluş İşlemleri",
  blog_desc:
    "<p>Kuzey Kıbrıs Türk Cumhuriyetinde şirket kurmak isteyen yabancı uyruklu (KKTC vatandaşı dışındaki herkes) kişilerin şirket kurarken yatırmak zorunda olduğu minimum sermaye bedeli 100,000 USD (Yüz bin Amerikan Doları) olan rakam minimum 50,000 Euro (Elli Bin Euro) ‘ya indirildi. Bu işlem neticesinde şirket kuruluş masraflarında indirime gidildi ve yabancı yatırımcılara KKTC’ de şirket kurmak bir adım daha kolaylaştı.</p> <p>Detaylı bilgi için bizimle iletişime geçebilirsiniz..</p>",
  blog_desc_1:
    "KKTC Çalışma Affı yürürlüğe bugün girdi, detaylı bilgi için aşağıdaki Çalışma ve Sosyal Güvenlik Bakanlığının yayınladığı posteri inceleyebilirsiniz.",
  blog_desc_2:
    "<p>Son dönemde oldukça sık adını duyduğumuz internet, reklam ve yazılım şirketlerinin ilgi odağı olan vergisiz şirketler Kuzey Kıbrıs Türk Cumhuriyeti’nde %100 yasal olarak kurulmaktadır. </p> <p> Kuzey Kıbrıs’ ta şirket kurarak Türkiye’ de bulunan ofisinizden KDV ve Gelir Vergisinden muaf tüm dünyaya hizmet verebilirsiniz. </p> <p>En çok fayda sağlayacak sektörler:</p> <ul> <li>Yazılım şirketleri</li> <li>İçerik siteleri</li> <li>İnternet fenomenleri (Youtube, Instagram,…)</li> <li>Medya sektörü</li> <li>Mobil uygulama şirketleri</li> <li>Dijital Reklam şirketleri</li> <li>Danışmanlık hizmetleri</li> <li>Uluslararası Ticaret – Transit Ticaret</li> </ul> <p>Sektörlerinden birinde faaliyet gösteriyorsanız Kuzey Kıbrıs’ta şirket kurarak Türkiye’deki ofisinizden tüm dünyaya hiç sorunsuz hizmet verebileceğinizi biliyor musunuz?</p> <p>Böylelikle, Gelir ve Kurumlar Vergisi ve KDV’den tamamen muafiyet sağlayabilecek ve serbest kar transferi yapabileceksiniz. Kuzey Kıbrıs Türk Cumhuriyeti’nde yerel bankalara ilaveten birçok önde gelen Türkiye bankasının da bulunması işlemlerinizi hızlı ve güvenli olarak yapmanızı sağlayacaktır. </p> <p>Detaylı bilgi için bizimle iletişime geçebilir veya aşağıdaki link ten şirket kurulum işlemini hemen başlatabilirsiniz.</p>",
  blog_desc_3:
    "<p>Eğer cevabınız evet ise doğru yerdesiniz. ORTAC AUDIT COMPANY olarak şirketinizin tüm kurulum işlemlerini en hızlı şekilde sonuçlandırıyoruz. </p> <p> Kuzey Kıbrıs Türk Cumhuriyeti gittikçe gelişmekte olan ekonomik yapısı içerisinde yeni yatırımlar için imkanlar sunmaktadır. Kıbrıs bugün şirketler için gelişmiş bankacılık sistemi ve avantajlı vergi düzenlemeleri ile çok çeşitli şirket kurma avantajları sunmaktadır. Kıbrıs’tan Türkiye’ye yapılan satışlar ihracat olarak sınıflandırılmaktadır. Serbest Bölge’den ya da Uluslararası İşletme Şirketi üzerinden yapılan satışlarda Katma Değer Vergisi %0’dır. Yıl sonunda elde edeceğiniz kar üzerinden %0 ya da %1 lik Kurumlar Vergisi ödendikten sonra herhangi bir vergi ödemesi yoktur. </p> <p>Kuzey Kıbrıs’ta kurabileceğiniz şirket türlerini sayacak olursak:</p> <ul> <li>Mahalli Şirket (M.Ş)</li> <li>Yabancı Şirket (Y.Ş.)</li> <li>Serbest Liman ve Bölge Şirketleri</li> </ul> <p>Serbest Liman Şirketleri KKTC yasaları tarafından Gazi Mağusa limanında yer alan bir bölgede özel statüde faaliyet gösterirken Uluslararası İşletme Şirketleri KKTC sınırları içerisinden sadece yurt dışına faaliyet gösterebilen şirket türüdür.</p> <p>Diğer Offshore merkezleri ile karşılaştırıldığında Kuzey Kıbrıs düşük kuruluş maliyetleri ve banka hesaplarında hesapta tutulması gereken bir tutar zorunluluğu olmayışı ile ön plana çıkmaktadır. Kıbrıs’ta bulunan Türkiye bankalarında hesap açtırabilir ve online işlemlerinizi bu bankalar aracılığıyla kolaylıkla yapabilirsiniz.</p> <p>Sundukları hizmetler ile aynı ülkede yerleşik olmaları gerekmediğinden e-ticaret, yazılım, yayıncılık, medya ve finans işletmeleri Kıbrıs’ta faaliyet göstererek vergi avantajı sağlamaktadırlar. </p>",
  blog_desc_4:
    "<p>1 Ağustos 2019 tarihinden itibaren yürürlüğe giren asgari ücret 27 Ağustos 2019 tarihinde resmi gazetede yayınlandı. Yeni asgari ücrete göre brüt:</p> <ul> <li>Saatlik: 19,62 TL</li> <li>Günlük: 156,92 TL</li> <li>Haftalık: 784,62 TL</li> <li>Aylık: 3.400 TL</li> </ul>",
  blog_desc_5:
    "<p>Serbest Liman Bölge Şirketleri son dönemde daha fazla popüler hale gelen; internet, reklam ve yazılım şirketlerinin ilgi odağı olup Kuzey Kıbrıs Türk Cumhuriyeti’nde Gazimağusa bölgesinde kurulmaktadır.</p> <p>26/1983 sayılı Serbest Liman ve Bölge Yasası kurallarına tabi olarak kayıt ve denetim işlemleri Fasıl 113 Şirketler Yasasına göre yapılmakta olan Serbest Liman Bölge Şirketleri Limited Şirket olarak en az 2 hissedar ile kurulur ve KKTC Serbest Liman bölgesinde faaliyetlerini bir işyeri veya posta kutusu yolu ile yürütürler.</p> <p>KKTC Serbest Liman Bölge Yasası tahtında faaliyet gösteren şirketler Serbest Bölge Yönetimine şirket kaydı yaparlar.</p> <p>Serbest Liman Bölge Şirketleri yıllık lisans ücreti olmayan,</p> <ul> <li>Hizmetlerini KKTC’ye ihraç etmedikleri sürece kazançları Gelir Vergisi ve Kurumlar Vergisi’nden,</li> <li>Gümrük Vergisi’nden,</li> <li>Katma Değer Vergisi Yasası’na istinaden ithal edilen tüm mallar KDV’den tamamen muaf olan şirketlerdir.</li> </ul> <p>Serbest Liman Bölge Şirketleri, elde ettikleri kazançlarını herhangi bir kısıtlamaya tabii olmadan serbestçe ihraç edebilmektedir. Kuzey Kıbrıs Türk Cumhuriyeti’nde yerel bankalara ilaveten birçok önde gelen Türkiye bankasının da bulunması işlemlerinizi hızlı ve güvenli olarak yapmanızı sağlayacaktır. </p> <p>Serbest Liman Bölgesi Şirketleri çalışanlarının KKTC Gelir Vergisi ve Sosyal Güvenlik yasaları kapsamındaki sosyal sigorta, ihtiyat sandığı ve diğer primlerle ilgili yatırımları gerçekleştirmesi gerekmektedir.</p> <p>Gazimağusa Serbest Liman ve Bölgesi 103.000 m2’lik alanı ile Serbest Liman Bölge Şirketleri için üretim fırsatlarının yanında yabancı yatırımcılara transit ticaret için mükemmel fırsatlar sunar. </p>",
  blog_desc_6:
    "<p>Vergi avantajları ile ön plana çıkan Serbest Liman Bölge Şirketleri’nin kuruluş işlemleri aşağıdaki gibidir.</p> <ul> <li>Şirketinize vermeyi düşündüğünüz birkaç ismi belirledikten sonra isim onayı için başvuru yapılır,</li> <li>Pasaport veya Kimlik Kartınızın kopyası, tercihen e-devletten alınmış ikametgah belgesi veya adresi beyan eden elektrik,GSM faturası benzeri resmi bir belge ve yine tercihen e-devletten alınmış adli sicil belgesinin tarafımıza mail yoluyla gönderilmesi ,</li> <li>Tarafımızca hazırlanarak size gönderilen şirket kuruluş belgelerinin imzalanarak kargo ile tarafımıza gönderilmesi,</li> <li>Şirket başvurusu için gerekli olan şirket kuruluş masraflarının tarafımıza gönderilmesi,</li> <li>Şirket başvurusu ve Serbest Liman Kurulunun onayının alınması,</li> <li>Ekonomi Bakanlığı tarafından şirketin Bakanlar Kuruluna sevk edilmesi ve onayı,</li> <li>Sermaye blokesi (Sermaye tutarı şirket kurulmadan önce en fazla bir hafta süre ile bankada bloke edilip işlemlerin tamamlanması ile geri çekilebilir),</li> <li>Serbest Liman Şirket tescil harcının yatırılması.</li> </ul> <p>İle şirket kuruluşu ortalama 30 gün içerisinde sonuçlandırılır.</p>",
  read_all: "TAMAMINI OKU",
  next: "Sonraki Gönderi",
  prev: "Önceki yazı",
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
  go_apply: "Начать создание компании",
  news: "Новости",
  blog_title_1: "Скидка на капитал в фирменных заведениях иностранцев!",
  blog_title_2: "Действует рабочая амнистия ТРСК",
  blog_title_3: "Создание компании Tax Free на Северном Кипре",
  blog_title_4: "Хотели бы вы иметь компанию на Северном Кипре?",
  blog_title_5: "В ТРСК вступила в силу новая минимальная заработная плата",
  blog_title_6: "Компании зоны свободного порта",
  blog_title_7: "Процедуры создания портовой компании свободной зоны",
  blog_desc:
    "<p>Учреждение компании в Турецкой Республике Северного Кипра иностранным гражданином (ТРСК) кем-либо, кроме ее граждан) Минимальный капитал, необходимый для инвестирования при создании компании, составляет 100 000 долларов США (сто тысяч долларов США) является минимумом. Он был уменьшен до 50 000 евро (пятьдесят тысяч евро). В результате этой сделки затраты на создание компании были снижены, и иностранным инвесторам стало на один шаг проще создать компанию в ТРСК.</p> <p>Для получения подробной информации вы можете связаться с нами.</p>",
  blog_desc_1:
    "Трудовая амнистия ТРСК вступила в силу сегодня, для получения подробной информации вы можете просмотреть плакат, опубликованный Министерством труда и социального обеспечения ниже.",
  blog_desc_2:
    "<p>Интернет, реклама и программное обеспечение, о которых мы довольно часто слышим в последнее время, безналоговые компании, на которых сосредоточены их компании. Основано на 100% легально в Турецкой Республике Северного Кипра. </p> <p> НДС и НДС из вашего офиса в Турции путем создания компании на Северном Кипре Бесплатный подоходный налог по всему миру Вы можете предоставить. </p> <p>Секторы, которые выиграют больше всего:</p> <ul> <li>Компании-разработчики программного обеспечения</li> <li>Контентные сайты</li> <li>Интернет-явления (Youtube, Instagram,… )</li> <li>Медиаиндустрия</li> <li>Компании, разрабатывающие мобильные приложения</li> <li>Компании, занимающиеся цифровой рекламой</li> <li>Консалтинговые услуги</li> <li>Международная торговля – Транзит Торговля</li> </ul> <p>Если вы работаете в одном из секторов, компания на Северном Кипре из вашего офиса в Турции по всему миру Знаете ли вы, что можете обеспечить бесперебойное обслуживание?</p> <p>Поэтому полное освобождение от подоходного и корпоративного налога и НДС и бесплатное перечисление прибыли вы можете. В местные банки в Турецкой Республике Северного Кипра Дополнительно Многие ведущие турецкие банки Это позволит вам совершать транзакции быстро и безопасно. </p> <p>Для получения подробной информации вы можете связаться с нами или по ссылке ниже. компания Вы можете начать процесс установки немедленно.</p>",
  blog_desc_3:
    "<p>Если ваш ответ да, вы находитесь в правильном месте. как ORTAC AUDIT COMPANY мы заключаем, что это самый быстрый способ создания вашей компании. </p> <p> Постоянно развивающаяся экономическая структура Турецкой Республики Северного Кипра предлагает новые возможности для инвестиций. Кипр сегодня имеет передовую банковскую систему для компаний и широкий спектр выгодных налоговых соглашений. Предлагает преимущества при создании компаний. Продажа с Кипра в Турцию классифицируется как экспорт. из Свободной зоны или через Международную коммерческую компанию. Налог на добавленную стоимость с продаж составляет 0%. Годовой корпоративный налог в размере 0% или 1% от прибыли, которую вы заработаете в конце дня, никаких налоговых платежей после их уплаты нет. </p> <p>Если учесть типы компаний, которые вы можете учредить на Северном Кипре:</p> <ul> <li>Местная компания (M.Ş)</li> <li>Иностранная компания (Y. Ş.)</li> <li>Свободные портовые и региональные компании</li> </ul> <p>Свободные портовые компании находятся в порту Фамагусты по законам ТРСК. Расположение, работающее в особом статусе в регионе. При этом показаны международные бизнес-компании в пределах границ компании ТРСК, которые могут работать только за границей.</p> <p>По сравнению с другими оффшорными центрами, Северный Кипр отличается низкими затратами на учреждение и в счете. на банковских счетах выходит на первый план при отсутствии обязанности хранить сумму. Счет в турецких банках, расположенных на Кипре. Вы можете легко открывать свои онлайн-транзакции через эти банки. </p> <p>Поскольку им не обязательно находиться в той же стране, что и услуги, которые они предлагают, электронная коммерция, программное обеспечение, издательское дело, средства массовой информации и финансы, они получают налоговые преимущества, работая на Кипре, который они предоставляют. </p>",
  blog_desc_4:
    "<p>Минимальная заработная плата, действующая с 1 августа 2019 г. 27 августа. Она была опубликована в официальном вестнике в 2019 г. Брутто в соответствии с новой минимальной заработной платой:</p> <ul> <li>Почасовая оплата: 19,62 TL</li> <li> >Ежедневно: 156,92 турецких лир</li> <li>Еженедельно: 784,62 турецких лир</li> <li>Ежемесячно: 3400 турецких лир</li> </ul>",
  blog_desc_5:
    "<p>Компании зоны свободного порта, которые в последнее время стали более популярными; интерес интернет-компаний, рекламных компаний и компаний-разработчиков программного обеспечения Он расположен в районе Фамагусты Турецкой Республики Северного Кипра. создается.</p> <p>В соответствии с правилами Закона о свободных портах и ​​зонах № 26/1983 процедуры регистрации и аудита Глава 113 Компании компаний зоны свободного порта с ограниченной ответственностью, которая строится в соответствии с Законом о компании создается как минимум с 2 акционерами и ТРСК. Рабочее место или почтовый ящик в зоне свободного порта, как они работают.</p> <p>Компании, работающие в соответствии с Законом о зоне свободного порта ТРСК. Независимая. Они регистрируют компанию в региональном управлении. </p> <p>Компании из зоны свободного порта без ежегодного лицензионного сбора</p> <ul> <li>Пока они не экспортируют свои услуги в ТРСК, их доходы составляют подоходный налог и корпоративный налог,< /li> <li>От таможенных пошлин,</li> <li>Все товары, ввозимые в соответствии с Законом о налоге на добавленную стоимость от компаний, которые полностью освобождены от НДС.</li> </ul> <p>Компании из зоны свободного порта никоим образом не может использовать свои доходы. свободно вывозится без ограничений. В местные банки в Турецкой Республике Северного Кипра Дополнительно Многие ведущие турецкие банки Это позволит вам совершать транзакции быстро и безопасно. </p> <p>Подоходный налог ТРСК и подоходный налог сотрудников компаний из зоны свободного порта Законы о социальном обеспечении, инвестиции в страхование, резервные фонды и другие взносы </p> <p>Свободный порт и зона Фамагусты площадью 103.000 м2 Порт Производственные возможности для региональных компаний Кроме того, здесь представлены отличные возможности для иностранных инвесторов для транзитной торговли. </p>",
  blog_desc_6:
    "<p>Компании зоны свободного порта, которые выделяются своими налоговыми преимуществами. Процедуры учреждения следующие.</p> <ul> <li>После того, как вы определили несколько имен, которые вы рассматриваете для своей компании, имя Заявка подается на утверждение,</li> <li>Копия вашего паспорта или удостоверения личности, предпочтительно из электронного правительства, взятого с подтверждением места жительства или декларированием адреса, официальным документом, таким как электроэнергия, счет-фактура GSM и, опять же, предпочтительно, по электронной почте документ о судимости, полученный из электронного правительства, отправленный через ,</li> <li>Учредительные документы вашей компании, подготовленные нами и отправленные вам, подписанные и отправленные нам грузом,</li> <li>Расходы на создание компании, необходимые для компании заявление, отправленное нам,</li> <li>Заявка компании и одобрение Правления Свободного порта,</li> <li>Направление компании в Совет Министров Министерством экономики, которое должно быть сделано и одобрено,< /li> <li>Операции с блоком капитала (максимум одна сумма капитала до создания компании) заблокированы в банке на неделю, могут быть сняты после завершения),</li> <li>Оплата регистрационного сбора компании Свободного порта.</li> </ul> <p>При этом учреждение компании завершается в среднем в течение 30 дней.</p>",
  read_all: "Читать все",
  next: "Следующий пост",
  prev: "Предыдущий пост",
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
  go_apply: "Begin Company Establishment",
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
  blog_desc:
    "<p>Incorporer une société dans la République turque de Chypre du Nord ressortissant étranger (TRNC) toute personne autre que ses ressortissants) Le capital minimum requis pour investir lors de la création d'une société est de 100 000 USD (cent mille dollars américains) est le minimum Il a été réduit à 50 000 euros (cinquante mille euros). À la suite de cette transaction, les coûts d'établissement de l'entreprise ont été réduits et étrangers Il est devenu une étape plus facile pour les investisseurs d'établir une entreprise en RTCN.</p> <p>Pour des informations détaillées, vous pouvez nous contacter.</p >",
  blog_desc_1:
    "L'amnistie du travail de la RTCN est entrée en vigueur aujourd'hui, pour des informations détaillées, vous pouvez consulter l'affiche publiée par le ministère du Travail et de la Sécurité sociale ci-dessous.",
  blog_desc_2:
    "<p>Internet, publicité et logiciels, dont nous avons entendu parler assez souvent ces derniers temps, les sociétés hors taxes qui sont au centre de leurs entreprises Il est établi à 100% légalement dans la République turque de Chypre du Nord. </p> <p> TVA et TVA depuis votre bureau en Turquie en créant une société dans le nord de Chypre Service sans impôt sur le revenu dans le monde entier Vous pouvez donner. </p> <p>Secteurs qui en bénéficieront le plus :</p> <ul> <li>Sociétés de logiciels</li> <li>Sites de contenu</li> <li>Phénomènes Internet (Youtube, Instagram,… )</li> <li>Industrie des médias</li> <li>Entreprises d'applications mobiles</li> <li>Entreprises de publicité numérique</li> <li>Services de conseil</li> <li>Commerce international - Transit Commerce</li> </ul> <p>Si vous opérez dans l'un des secteurs, l'entreprise du nord de Chypre depuis votre bureau en Turquie vers le monde entier Savez-vous que vous pouvez fournir un service sans problème ?</ p> <p>Par conséquent, l'exonération complète de l'impôt sur le revenu et des sociétés et de la TVA et le transfert gratuit des bénéfices vous le pouvez. Aux banques locales de la République turque de Chypre du Nord ainsi qu'à de nombreuses banques turques de premier plan Cela vous permettra d'effectuer vos transactions rapidement et en toute sécurité. </p> <p>Pour des informations détaillées, vous pouvez nous contacter ou à partir du lien ci-dessous. entreprise Vous pouvez commencer le processus d'installation immédiatement.</p>",
  blog_desc_3:
    "<p>Si votre réponse est oui, vous êtes au bon endroit. en tant que ORTAC AUDIT COMPANY, le moyen le plus rapide de créer votre entreprise, nous concluons. </p> <p> La structure économique en constante évolution de la République turque de Chypre du Nord offre des opportunités pour de nouveaux investissements dans les offres. Chypre dispose aujourd'hui d'un système bancaire avancé pour les entreprises et d'une grande variété de régimes fiscaux avantageux Offre des avantages pour la création d'entreprise. De Chypre à la Turquie, ventes classées à l'exportation. de la zone franche ou par l'intermédiaire de l'International Business Company. La taxe sur la valeur ajoutée sur les ventes est de 0 %. Impôt sur les sociétés de 0 % ou 1 % sur les bénéfices que vous réaliserez à la fin de la journée. Tout paiement d'impôt après qu'il a été payé n'existe pas. </p> <p>Si l'on compte les types d'entreprises que vous pouvez établir dans le nord de Chypre :</p> <ul> <li>Société locale (M.Ş)</li> <li>Société étrangère (Y. Ş.)</li> <li>Compagnies du port franc et de la région</li> </ul> <p>Les compagnies du port franc sont dans le port de Famagouste selon les lois de la RTCN. Emplacement opérant dans un statut spécial dans une région Tout en montrant les sociétés commerciales internationales à l'intérieur des frontières de la société TRNC qui ne peuvent opérer qu'à l'étranger.</p> <p>Par rapport à d'autres centres offshore, le nord de Chypre a de faibles coûts d'établissement et sur compte dans les comptes bancaires vient au premier plan avec l'absence d'une obligation de conserver un montant sort. Compte dans des banques turques situées à Chypre Vous pouvez facilement ouvrir vos transactions en ligne via ces banques. </p> <p>Puisqu'ils n'ont pas besoin d'être situés dans le même pays que les services qu'ils proposent, le commerce électronique, les logiciels, l'édition, les médias et la finance bénéficient d'un avantage fiscal en opérant à Chypre. </p>",
  blog_desc_4:
    "<p>Salaire minimum en vigueur à partir du 1er août 2019 27 août Il a été publié au journal officiel en 2019. Brut selon le nouveau salaire minimum :</p> <ul> <li>Horaire : 19,62 TL</li> <li >Journal : 156,92 TL</li> <li>Hebdomadaire : 784,62 TL</li> <li>Mensuel : 3.400 TL</li> </ul>",
  blog_desc_5:
    "<p>Les sociétés de zone portuaire franche, qui sont devenues plus populaires ces derniers temps ; intérêt des sociétés Internet, de publicité et de logiciels Il est situé dans la région de Famagouste de la République turque de Chypre du Nord. est en cours d'établissement.</p> <p>Sous réserve des règles de la loi n° 26/1983 sur les ports francs et les procédures d'enregistrement et d'audit du chapitre 113 des sociétés Free Port Zone Companies Limited, qui est en cours de construction conformément à la loi sur les sociétés est établi avec au moins 2 actionnaires et TRNC Un lieu de travail ou une boîte aux lettres dans la zone du port franc avec lequel ils s'exécutent.</p> <p>Entreprises opérant sous la loi TRNC Free Port Zone Indépendant Ils enregistrent la société auprès de la direction régionale. </p> <p>Entreprises de la zone portuaire franche sans frais de licence annuels,</p> <ul> <li>Tant qu'elles n'exportent pas leurs services vers la RTCN, leurs revenus sont l'impôt sur le revenu et l'impôt sur les sociétés,< /li> <li>Des droits de douane,</li> <li>Toutes les marchandises importées conformément à la loi sur la taxe sur la valeur ajoutée par des sociétés de TVA totalement exonérées.</li> </ul> <p>Sociétés de la zone franche portuaire ne peuvent en aucun cas utiliser leurs gains. librement exportés sans restriction can. Aux banques locales de la République turque de Chypre du Nord ainsi qu'à de nombreuses banques turques de premier plan Cela vous permettra d'effectuer vos transactions rapidement et en toute sécurité. </p> <p>Impôt sur le revenu de la RTCN et impôt sur le revenu des employés des entreprises de la zone franche sociale Lois sur la sécurité sociale investissements dans les assurances, fonds de prévoyance et autres primes </p> <p>Port et zone franche de Famagouste d'une superficie de 103.000 m2 d'opportunités de production portuaire pour les entreprises régionales En outre, d'excellentes opportunités pour les investisseurs étrangers pour le commerce de transit se présentent. </p>",
  blog_desc_6:
    "<p>Les entreprises de la zone franche portuaire, qui se distinguent par leurs avantages fiscaux, les procédures d'établissement sont les suivantes.</p> <ul> <li>Après avoir identifié quelques noms que vous envisagez de donner à votre entreprise, nom La demande est faite pour approbation,</li> <li>Copie de votre passeport ou carte d'identité, de préférence de l'e-gouvernement pris une preuve de résidence ou déclarant l'adresse un document officiel tel que l'électricité, la facture GSM et encore une fois de préférence Envoyez-nous un e-mail du document de casier judiciaire obtenu auprès de l'e-gouvernement envoyé via ,</li> <li>Les documents de constitution de votre société préparés par nous et vous sont envoyés signés et nous sont envoyés par fret,</li> <li>Coûts d'établissement de la société requis pour la société dossier qui nous est transmis,</li> <li>Requête de la société et approbation du Conseil du Port Franc,</li> <li>Saisine de la société en Conseil des Ministres par le Ministère de l'Economie à faire et approbation,< /li> <li>Transactions de bloc de capital (Un maximum d'un montant de capital avant la constitution de la société) sont bloqués à la banque pendant une semaine peuvent être retirés à la fin),</li> <li>Payer les frais d'inscription de la société de port franc.</li> </ul> <p>Avec cela, la création de la société est finalisé dans un délai moyen de 30 jours.</p>",
  read_all: "Tout lire",
  next: "Article suivant",
  prev: "Article précédent",
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
