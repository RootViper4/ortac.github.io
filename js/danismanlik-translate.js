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
    "We are at your disposal in consultancy services with our years of experience and our experienced, creative and entrepreneurial expert staff in high-level financial and financial matters.",
  sub_about_1: "COMPANY PURCHASING AND VALUATIONS",
  sub_about_2: "PAYROLL AND WORK PERMIT",
  sub_about_3: "INVESTMENT CONSULTING",
  sub_about_4: "FOUNDING A COMPANY",
  sub_about_5: "VIRTUAL OFFICE",
  sub_detail_1:
    "<p>The fluctuations in the world economy and the markets made the companies change their strategy; to grow or can force it to shrink. Mergers, acquisitions, spin-offs to adapt to new conditions such as corporate restructuring processes are frequently used methods. We also have these processes With our experience in management, It produces comprehensive financial solutions by both the buyer and the seller and successfully carries out its projects. we are finalizing. </p> <p>As ORTAC AUDIT COMPANY, we have been in many important merger and acquisition projects for more than 20 years, need process We contributed by providing management and consultancy services. This is what we have successfully concluded from projects With the experience and trust we have gained, we serve our customers with our expert staff and professional approach. keep giving </p>",
  sub_detail_2:
    "<p>According to the legislation in the Turkish Republic of Northern Cyprus, the wages paid by the companies to their employees relevant payroll regulation is required. In payrolls; progress payments, legal deductions and employee benefits net payable correct calculation of the fee; reliable for the correct management of processes such as hiring and exiting and an effective payroll system should be kept.</p> <p>Thanks to our IT technical infrastructure compatible with today's technology, our customers payroll reliable services We present it somehow.</p> <p>As ORTAC AUDIT COMPANY, all domestic and foreign pre-authorization of your workers and all By following the registration procedures, your employees will be officially registered in your business as soon as possible. to be we provide.</p> <p>Negligence in work permits causes serious material and moral damages to your company. work too authorized By transferring all responsibility for your employees' leave transactions to us, we never take any possible criminal actions. without thinking You can continue your transactions.</p> <p>With our expertise and experience we have gained since 1996, we provide our customers with the opportunity to meet their expectations. beyond, reliable and We offer unique services.</p>",
  sub_detail_3:
    "<p>In today's tough competition conditions, our professional team meets the needs of our customers. practical and creative We offer solutions. </p> <p>With the consultancy services we provide as ORTAC AUDIT COMPANY, our customers will receive decisions, opportunities evaluation, determination of forward performance and growth strategies and support in the implementation we become Thus, in the changing economic conjuncture, our customers' financial structures, activities effective and efficient We help them to be competitive and achieve a competitive structure.</p> <p>Due to our quarter-century experience and wide-ranging industry knowledge, we are in contact with our customers. in the field of investment The cooperation that has started continues during the development and growth phases of their businesses. Thus, important to our customers We offer comprehensive solutions that add value to them while making decisions.</p> <p>Conducting appropriate feasibility, valuation, trading and deal negotiations at every stage of the investment process. such as managing We offer consultancy services in the fields.</p>",
  sub_detail_4:
    "<p>As ORTAÇ AUDIT COMPANY, we have been in the Turkish Republic of Northern Cyprus for more than 20 years. around the world In addition, you can establish your new company on solid foundations and move forward with confidence. Our expert staff for We are with you. </p> <p>There are different laws regulating the working conditions of companies in the Turkish Republic of Northern Cyprus. basic law together The Companies Law is Chapter 113.</p> <p>Again, choose the most suitable company for you among the companies already established within our company. time to buy You can start your business without losing.</p> <p>The Turkish Republic of Northern Cyprus offers a wide range of opportunities for both domestic and foreign investors. offers. we too With our years of experience, we walk with you, valuable investors, in this process, to get the most accurate information. and support we give.</p>",
  sub_detail_5:
    "<p>What is a Virtual Office? <br /> The virtual office is the service of an entrepreneur or company to its customers without a physical office at a specific address. communication and It is an area where secretarial services can be offered. </p> <br /> <p>Who is the Virtual Office for? <br /> More entrepreneurs, those who are constantly traveling due to their profession, home-office or project-based employees, consulting Virtual offices, a solution preferred by those who do, provide many opportunities to their users. </p> <p>As in the rest of the world, working in Northern Cyprus due to technological developments in recent years in the form of The changes brought about different office understandings.</p> <p>Many young entrepreneurs who want to start their own business in TRNC, especially in the startup process, pay high rents. costs Many entrepreneurs who do not have enough finance to afford it or who work in a home-office have a legal address. and communication, may require secretarial services. </p> <br /> <p>Virtual Office advantages <ul> <li>A prestigious corporate office address</li> <li>Low cost</li> <li>Your documents and cargoes are received for you, stored or scanned upon your request. with you by mail shared.</li> <li>Your calls are answered by a professional team and transferred to you.</li>",
  footer_desc:
    "Get started right away with our company formation guide with the transactions that suit you best.",
  pages: "Pages",
  help: "Help",
  apply_now: "Apply Now",
  news: "News",
  blog_title_1: "Capital discount in company establishments of foreigners !",
  blog_title_2: "TRNC Work Amnesty In Force",
  blog_title_3: "Northern Cyprus Tax Free Company Establishment",
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
    "Yıllara dayanan tecrübemiz, üst düzey mali ve finansal konulardaki deneyimli, yaratıcı ve girişimci uzman kadromuzla danışmanlık hizmetlerinde emrinizdeyiz.",
  sub_about_1: "ŞİRKET SATINALMA VE DEĞERLEMELERİ",
  sub_about_2: "BORDRO VE ÇALIŞMA İZNİ",
  sub_about_3: "YATIRIM DANIŞMANLIĞI",
  sub_about_4: "ŞİRKET KURMA",
  sub_about_5: "SANAL OFİS",
  sub_detail_1:
    "<p>Dünya ekonomisinde ve piyasalarda meydana gelen dalgalanmalar şirketleri strateji değişikliklerine; büyümeye ya da küçülmeye zorlayabilmektedir. Yeni koşullara uyum sağlamak için birleşmeler, satın almalar, bölünmeler gibi kurumsal yeniden yapılandırma süreçleri sıkça uygulanan yöntemlerdir. Biz de söz konusu süreçlerin yönetimindeki tecrübemizle, gerek alıcı gerekse satıcı tarafından kapsamlı finansal çözümler üretmekte ve projeleri başarı ile sonuçlandırmaktayız. </p> <p>ORTAC AUDIT COMPANY olarak, 20 yılı aşkın süredir birçok önemli birleşme ve satın alma projelerinde, gerek süreç yönetimi gerekse danışmanlık hizmetleri sunarak katkıda bulunduk. Başarı ile sonuçlandırdığımız bu projelerden kazandığımız deneyim ve güven ile müşterilerimize uzman kadromuz ve profesyonel yaklaşımımızla hizmet vermeye devam etmekteyiz.</p>",
  sub_detail_2:
    "<p>Kuzey Kıbrıs Türk Cumhuriyeti’ndeki mevzuata göre, şirketlerin çalışanlarına ödedikleri ücretlerle ilgili bordro düzenleme zorunluluğu bulunmaktadır. Ücret bordrolarında; hakedişlerin, yasal kesintilerin ve çalışana ödenecek net ücretin doğru hesaplanması; işe giriş ve işten çıkış gibi süreçlerin doğru yönetilmesi için güvenilir ve etkin bir bordro sistemi tutulması gerekmektedir.</p> <p>Günümüz teknolojisi ile uyumlu bilgi işlem teknik alt yapımız sayesinde müşterilerimize bordro hizmetlerini güvenilir bir şekilde sunmaktayız.</p> <p>ORTAC AUDIT COMPANY olarak, şirketinizde çalıştırmak üzere aldığınız tüm yerli ve yabancı işçilerinizin ön izin ve tüm kayıt işlemlerini takip ederek çalışanlarınızın en kısa zamanda resmi olarak işletmenizde kayıtlı olmasını sağlamaktayız.</p> <p>Çalışma izinlerindeki ihmaller şirketinize maddi ve manevi ciddi zararlar vermektedir. Siz de çalışma izinli çalışanlarınızın izin işlemlerindeki tüm sorumluluğu tarafımıza aktararak olası cezai işlemleri hiç düşünmeden işlemlerinizi sürdürebilirsiniz.</p> <p>1996 yılından bu yana kazandığımız uzmanlığımız ve deneyimimizle, müşterilerimize beklentilerinin ötesinde, güvenilir ve benzersiz hizmetler sunuyoruz.</p>",
  sub_detail_3:
    "<p>Günümüzün zorlu rekabet şartlarında, profesyonel ekibimizle müşterilerimizin ihtiyaçlarına uygun pratik ve yaratıcı çözümler sunuyoruz. </p> <p>ORTAC AUDIT COMPANY olarak verdiğimiz danışmanlık hizmetlerimiz ile müşterilerimize alacakları kararlarda, fırsatların değerlendirilmesinde, ileriye dönük performans ve büyüme stratejilerinin belirlenmesinde ve uygulanmasında destek oluyoruz. Böylelikle, müşterilerimizin değişen ekonomik konjonktürde mali yapılarının, faaliyetlerinin etkin ve verimli olmasını ve rekabetçi bir yapıya ulaşmalarını sağlamalarında yardımcı oluyoruz.</p> <p>Çeyrek asırlık tecrübemiz ve geniş bir alana yayılmış sektör bilgimizden dolayı müşterilerimizle yatırım alanında başlayan işbirliği, işlerini geliştirme ve büyütme dönemlerinde de devam etmektedir. Böylelikle, müşterilerimize önemli kararlar alırken onlara değer katan kapsamlı çözümler sunuyoruz.</p> <p>Yatırım süreçlerinin her aşamasında uygun fizibilite, değerleme, alım satım ve anlaşma görüşmelerinin yönetilmesi gibi alanlarda danışmanlık hizmetlerini sunuyoruz.</p>",
  sub_detail_4:
    "<p>ORTAÇ AUDIT COMPANY olarak 20 yılı aşkın süredir gerek Kuzey Kıbrıs Türk Cumhuriyeti’nde gerekse dünyanın dört bir yanında yeni kuracağınız şirketinizi sağlam temeller üzerine kurabilmeniz ve güvenle yol alabilmeniz için uzman kadromuz ile yanınızda yer alıyoruz. </p> <p>Kuzey Kıbrıs Türk Cumhuriyeti’nde şirketlerin çalışma şartlarını düzenleyen farklı yasalar olmakla beraber temel yasa Şirketler Yasası Fasıl 113’tür.</p> <p>Yine şirketimiz bünyesinde hazır kurulmuş olarak bulunan şirketlerden sizin için en uygun olanını satın alarak zaman kaybetmeden işinize başlayabilirsiniz.</p> <p>Kuzey Kıbrıs Türk Cumhuriyeti gerek yerli gerekse yabancı yatırımcılar için çok çeşitli imkanlar sunmaktadır. Biz de yıllara dayanan tecrübemizle bu süreçte siz değerli yatırımcılarla birlikte yürüyerek en doğru bilgi ve desteği veriyoruz.</p>",
  sub_detail_5:
    "<p>Sanal Ofis Nedir? <br /> Sanal ofis, bir girişimcinin veya şirketin belirli bir adreste fiziki ofisi olmaksızın müşterilerine iletişim ve sekreterlik hizmetlerini sunabildiği bir alandır. </p> <br /> <p>Sanal Ofis kimler için? <br /> Daha çok girişimciler, mesleği gereği sürekli seyahatte olanlar, home-office veya proje bazlı çalışanlar, danışmanlık yapanlar tarafından tercih edilen bir çözüm olan sanal ofisler kullanıcılarına birçok olanak sağlar. </p> <p>Tüm dünyada olduğu gibi Kuzey Kıbrıs’ ta son yıllarda teknolojik gelişmeler sebebiyle çalışma biçimlerindeki değişiklikler farklı ofis anlayışlarını da beraberinde getirdi.</p> <p>KKTC’ de kendi işini kurmak isteyen pek çok genç girişimci özellikle startup sürecinde yüksek kira maliyetlerini karşılayacak yeterli finansmana sahip olmuyor ya da home-office çalışan birçok girişimci yasal adres ve iletişim, sekreterya hizmetlerine ihtiyaç duyabiliyor. </p> <br /> <p>Sanal Ofis avantajları <ul> <li>Prestijli kurumsal bir ofis adresi</li> <li>Düşük maliyet</li> <li>Evrak ve kargolarınız sizin için teslim alınır, talebiniz üzerine muhafaza edilir veya scan edilip sizinle mail olarak paylaşılır.</li> <li>Çağrılarınız profesyonel bir ekip tarafından karşılanır ve size aktarılır.</li>",
  footer_desc:
    "Şirket kurma rehberimiz ile size en uygun işlemlerle hemen başlayın.",
  pages: "Sayfalar",
  help: "Yardım",
  news: "Haberler",
  apply_now: "Şimdi Uygula",
  blog_title_1: "Yabancıların şirket kuruluşlarında sermaye indirimi!",
  blog_title_2: "KKTC Çalışma Affı Yürürlükte",
  blog_title_3: "Kuzey Kıbrıs Vergisiz Şirket Kuruluşu",
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
