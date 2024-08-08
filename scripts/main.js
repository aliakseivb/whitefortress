(() => {


  const body = document.querySelector('body');
  const bodyOverlay = document.querySelector('.body-overlay');
  const header = document.querySelector('.header');
  const menu = document.querySelector('.menu');
  const burger = document.querySelector('#burger');

  window.onscroll = () => {
    if (window.scrollY > 1) {
      header.classList.add('scrolly');
    } else {
      header.classList.remove('scrolly');
    }
  };

  /**бургер*/
  burger.addEventListener('click', (e) => {
    event.preventDefault();
    burger.classList.toggle('active');
    menu.classList.toggle('open');
    body.classList.toggle('hidden');
    bodyOverlay.classList.toggle('open');
  });

  menu.addEventListener('click', (e) => {
    if (menu.classList.contains('open')
        && ((e.target.classList.contains('nav-link')) || e.target.classList.contains('soc-link')
            || e.target.tagName === 'path')) {
      closeMenu();
    }
  });

  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open')
        && (e.target === bodyOverlay || e.target.classList.contains('header-container')
            || e.target.classList.contains('logo'))) {
      closeMenu();
    }
  });

  function closeMenu() {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
    body.classList.toggle('hidden');
    bodyOverlay.classList.toggle('open');
  }

  /**разные страницы, исключение ошибок рантайма*/
  if (location.href.includes('partners.html')) {
    const partnersItemsBlock = document.querySelector('.partners-items');
    const partnersPopup = document.querySelector('.partners-popup');
    const popupBody = document.querySelector('.partners-popup-body');
    const popupTitle = document.querySelector('.partners-popup-title');
    const popupText = document.querySelector('.partners-popup-text');
    const overlay = document.querySelector('.overlay');
    const popupClose = document.querySelector('.partners-popup-close');
    const partnersArr = [
      {
        name: 'hewlett',
        title: 'Hewlett Packard Enterprise (HPE)',
        text: 'Американская ИТ-компания, созданная в 2015 году вместе с HP Inc после раздела материнской компании\n' +
            '            Hewlett-Packard на две компании.\n' +
            '            Компания HPE развивает и производит оборудование для корпоративных клиентов, такое как: сервера, системы\n' +
            '            хранения данных, сети хранения данных, сетевое оборудование, занимается построением облачных инфраструктур,\n' +
            '            системной интеграцией, конвергированными системами и разрабатывает программное обеспечение.\n' +
            '            HPE предоставляет высококачественные, высокорентабельные продукты, услуги консалтинга и технической\n' +
            '            поддержки\n' +
            '            в составе единого решения.'
      },
      {
        name: 'cisco',
        title: 'Cisco Systems, Inc.',
        text: 'Мировой лидер в области сетевых технологий, предназначенных для сети Интернет. Cisco разрабатывает\n' +
            '            комплексные решения, с помощью которых заказчики создают собственные объединенные информационные\n' +
            '            инфраструктуры или получают доступ к сетям других владельцев.'
      },
      {
        name: 'huawei',
        title: 'Huawei',
        text: 'Ведущий мировой поставщик инфокоммуникационных решений, цель которого обогащать жизнь людей через общение.\n' +
            '            Благодаря инновационным разработкам, ориентированным на потребности клиентов, и развитой партнерской сети мы\n' +
            '            достигли высоких результатов в разработке телекоммуникационных сетей, терминальных решений и систем облачных\n' +
            '            вычислений. 180 тыс. сотрудников Huawei по всему миру стремятся создавать максимально выгодные условия для\n' +
            '            операторов, предприятий и конечных пользователей, предоставляя им конкурентоспособные решения и услуги. Одна\n' +
            '            треть населения планеты использует наши инновационные продукты, решения и сервисы более чем в 170 странах\n' +
            '            мира. Основанная в 1987 году Huawei является частной компанией, полностью находящейся во владении своих\n' +
            '            сотрудников.'
      },
      {
        name: 'symantec',
        title: 'Symantec',
        text: 'Компания Symantec специализируется в области решений для обеспечения безопасности, хранения данных и\n' +
            '            управления системами, которые помогают клиентам (от индивидуальных пользователей и небольших компаний до\n' +
            '            крупнейших организаций мира) управлять информацией и защищать её от большего числа рисков и угроз.'
      },
      {
        name: 'redhat',
        title: 'Red Hat',
        text: 'Ведущий мировой поставщик корпоративных ИТ-продуктов и услуг на базе открытого исходного кода, надёжных и\n' +
            '            высокопроизводительных технологий облачных вычислений, виртуализации, хранения данных, промежуточного ПО и\n' +
            '            операционных систем Linux. Компания также предлагает неоднократно отмеченные наградами услуги технической\n' +
            '            поддержки, обучения и консалтинга.'
      },
      {
        name: 'veritas',
        title: 'Veritas',
        text: 'Компания Veritas представляет решения в области эффективного хранения и резервного копирования данных со\n' +
            '            всесторонним контролем и управлением информацией как отдельных пользователей, так глобальных корпораций в\n' +
            '            любой среде.'
      }
    ];

    document.addEventListener('click', (e) => {
      if (!e.composedPath().includes(partnersItemsBlock)) {
        partnersPopup.classList.remove('show');
        overlay.classList.remove('show');
        popupTitle.textContent = '';
        popupText.textContent = '';
      }
    });

    popupClose.addEventListener('click', () => {
      partnersPopup.classList.remove('show');
      overlay.classList.remove('show');
      popupTitle.textContent = '';
      popupText.textContent = '';

    });

    overlay.addEventListener('click', () => {
      partnersPopup.classList.remove('show');
      overlay.classList.remove('show');
      popupTitle.textContent = '';
      popupText.textContent = '';

    });

    partnersItemsBlock.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
        const currentItem = partnersArr.find(item => {
          return item.name.toLowerCase() === e.target.dataset.name.toLowerCase();
        });
        if (currentItem) {
          popupTitle.textContent = currentItem.title;
          popupText.textContent = currentItem.text
          partnersPopup.classList.add('show');
          overlay.classList.add('show');
        }
      }
    });
  }
  if (location.href.includes('index.html')) {
    new WOW({
      animateClass: 'animate__animated',
    }).init();


    const formButton = document.querySelector('.form-button');
    const successPopupButton = document.querySelector('.success-popup-button');
    const successPopupOverlay = document.querySelector('.success-popup-overlay');
    const successPopup = document.querySelector('.success-popup');

    formButton.addEventListener('click', () => {
      successPopupOverlay.classList.add('show');
      successPopup.classList.add('show');
      body.classList.add('hidden');
    });
    successPopupButton.addEventListener('click', () => {
      successPopupOverlay.classList.remove('show');
      successPopup.classList.remove('show');
      body.classList.remove('hidden');
    });
  } else {

  }
})();
