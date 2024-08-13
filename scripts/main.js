(() => {


  const body = document.querySelector('body');
  const bodyOverlay = document.querySelector('.body-overlay');
  const navbar = document.querySelector('.navbar');
  const header = document.querySelector('.header');
  const menu = document.querySelector('.menu');
  const menuNavbar = document.querySelector('.navbar .menu');
  const burger = document.querySelector('#burger');
  const logoScroll = document.querySelector('.logo-scroll');
  const container = document.querySelector('.container');


  window.onresize = () => {
    navbar.classList.remove('show');
    burger.classList.remove('active');
    body.classList.remove('hidden');
    bodyOverlay.classList.remove('open');
    navbar.removeAttribute('style');
  }

  window.onscroll = () => {
    if (window.scrollY > 80) {
      logoScroll.classList.add('active');
      logoScroll.style.right = `calc(50% - ${container.clientWidth / 2 - 20}px)`;
    } else {
      navbar.classList.remove('show');
      navbar.removeAttribute('style');
      logoScroll.classList.remove('active');

    }
  };

  logoScroll.addEventListener('click', () => {
    navbar.classList.toggle('show');
    if (navbar.classList.contains('show')) {
      navbar.style.right = `calc(50% - ${container.clientWidth / 2}px)`;
    } else {
      navbar.removeAttribute('style');
    }

    if (window.innerWidth <= 650) {
      body.classList.toggle('hidden');
      bodyOverlay.classList.toggle('open');
    }
  });

  menuNavbar.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link') || e.target.classList.contains('soc-link')
        || e.target.tagName === 'svg' || e.target.tagName === 'path') {
      closeNavbar();
    }
  });


  /**бургер*/
  burger.addEventListener('click', (e) => {
    burger.classList.toggle('active');
    navbar.classList.toggle('show');
    body.classList.toggle('hidden');
    bodyOverlay.classList.toggle('open');
    if (navbar.classList.contains('show')) {
      navbar.style.right = `calc(50% - ${container.clientWidth / 2}px)`;
    } else {
      navbar.removeAttribute('style');
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target === bodyOverlay || e.target.classList.contains('logo') || (!e.composedPath().includes(navbar) && navbar.classList.contains('show'))
        && !e.composedPath().includes(logoScroll) && !e.composedPath().includes(burger)) {
      closeNavbar();
    }
  });

  function closeNavbar() {
    burger.classList.remove('active');
    body.classList.remove('hidden');
    bodyOverlay.classList.remove('open');
    navbar.classList.remove('show');
    navbar.style.right = '-100%';
  }

  const partnersItemsBlock = document.querySelector('.partners-items');
  const partnersPopup = document.querySelector('.partners-popup');
  // const popupBody = document.querySelector('.partners-popup-body');
  const popupTitle = document.querySelector('.partners-popup-title');
  const popupText = document.querySelector('.partners-popup-text');
  const popupLink = document.querySelector('.partners-popup-link');
  const partnersPopupClose = document.querySelector('.partners-popup-close');
  const partnersArr = [
    {
      name: 'hewlett',
      image: 'images/hewlett-p.png',
      url: 'https://www.hpe.com/us/en/home.html',
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
      image: 'images/cisco-p.png',
      url: 'https://www.cisco.com/',
      title: 'Cisco Systems, Inc.',
      text: 'Мировой лидер в области сетевых технологий, предназначенных для сети Интернет. Cisco разрабатывает\n' +
          '            комплексные решения, с помощью которых заказчики создают собственные объединенные информационные\n' +
          '            инфраструктуры или получают доступ к сетям других владельцев.'
    },
    {
      name: 'huawei',
      image: 'images/huawei-p.png',
      url: 'https://www.huawei.com/en/?ic_medium=direct&ic_source=surlent',
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
      image: 'images/symantec-p.png',
      url: 'https://www.broadcom.com/products/cybersecurity',
      title: 'Symantec',
      text: 'Компания Symantec специализируется в области решений для обеспечения безопасности, хранения данных и\n' +
          '            управления системами, которые помогают клиентам (от индивидуальных пользователей и небольших компаний до\n' +
          '            крупнейших организаций мира) управлять информацией и защищать её от большего числа рисков и угроз.'
    },
    {
      name: 'redhat',
      url: 'https://www.redhat.com/en',
      image: 'images/redhat-p.png',
      title: 'Red Hat',
      text: 'Ведущий мировой поставщик корпоративных ИТ-продуктов и услуг на базе открытого исходного кода, надёжных и\n' +
          '            высокопроизводительных технологий облачных вычислений, виртуализации, хранения данных, промежуточного ПО и\n' +
          '            операционных систем Linux. Компания также предлагает неоднократно отмеченные наградами услуги технической\n' +
          '            поддержки, обучения и консалтинга.'
    },
    {
      name: 'veritas',
      url: 'https://www.veritas.com/',
      image: 'images/veritas-p.png',
      title: 'Veritas',
      text: 'Компания Veritas представляет решения в области эффективного хранения и резервного копирования данных со\n' +
          '            всесторонним контролем и управлением информацией как отдельных пользователей, так глобальных корпораций в\n' +
          '            любой среде.',
      showInfo: () => {

      }
    }
  ];

  partnersArr.forEach(item => {
    const newElem = document.createElement('div');
    newElem.className = 'partners-item wow animate__bounce';
    newElem.setAttribute('data-name', item.name);
    newElem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" data-name="${item.name}">
      `;
    partnersItemsBlock.append(newElem);
  });

  /** информация о партнере */
  partnersItemsBlock.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' || e.target.classList.contains('partners-item')) {
      const currentItem = partnersArr.find(item => {
        return item.name.toLowerCase() === e.target.dataset.name.toLowerCase();
      });
      if (currentItem) {
        popupTitle.textContent = currentItem.title;
        popupText.textContent = currentItem.text;
        popupLink.setAttribute('href', currentItem.url);
        partnersPopup.classList.add('show');
      }
    }
  });
  document.addEventListener('click', (e) => {
    if (!e.composedPath().includes(partnersItemsBlock) || e.target === partnersPopup || e.target === popupLink) {
      partnersPopup.classList.remove('show');
      popupTitle.textContent = '';
      popupText.textContent = '';
      popupLink.setAttribute('href', '');
    }
  });

  partnersPopupClose.addEventListener('click', () => {
    partnersPopup.classList.remove('show');
    popupTitle.textContent = '';
    popupText.textContent = '';
  });

  if (location.href.includes('index.html')) {
    new WOW({
      animateClass: 'animate__animated',
    }).init();

    /** форма отправки */

    // let goodForm = false;
    // const userName = document.querySelector('#name');
    // const userPhone = document.querySelector('#phone');
    // const userEmail = document.querySelector('#email');
    // const userMessage = document.querySelector('#message');
    const formInputs = document.querySelectorAll('.form-input');
    const agreeElement = document.getElementById('agree');
    const formButton = document.querySelector('.form-button');
    const successPopupButton = document.querySelector('.success-popup-button');
    const successPopupOverlay = document.querySelector('.success-popup-overlay');
    const successPopup = document.querySelector('.success-popup');


    Array.from(formInputs).forEach(elem => {
      elem.addEventListener('input', (e) => {
        if (e.target.value.length >= 2) {
          e.target.classList.remove('error');
        }
      });
    });

    const fields = [
      {
        name: 'name',
        id: 'name',
        element: null,
        regex: /^([a-zA-Zа-яА-ЯёЁ]{2,}\s?-?)+/s,
        valid: false,
      },
      {
        name: 'phone',
        id: 'phone',
        element: null,
        regex: /^(?:[0-9]+-?){7,}/s,
        valid: false,
      },
      {
        name: 'email',
        id: 'email',
        element: null,
        regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        valid: false,
      },
      {
        name: 'message',
        id: 'message',
        element: null,
        regex: /.{10,}/,
        valid: false,
      },
    ];
    class Form {
      constructor() {
        const that = this;
        fields.forEach(item => {
          item.element = document.getElementById(item.id);
          item.element.onchange = function () {
            that.validateField.call(that, item, this);
          }
        });
        agreeElement.onchange = function () {
          that.validateForm();
        }
        formButton.onclick = function () {
          that.processForm()
        }
      }

      validateField(field, element) {
        if (!element.value || !element.value.match(field.regex)) {
          element.classList.add('error');
          field.valid = false;
        } else {
          element.classList.remove('error');
          field.valid = true;
        }
        this.validateForm();
      }

      validateForm() {
        const validForm = fields.every(item => item.valid);
        const isValid = agreeElement ? agreeElement.checked && validForm : validForm;
        if (isValid) {
          formButton.removeAttribute('disabled');
        } else {
          formButton.setAttribute('disabled', 'disabled');
        }
        return isValid
      }

      processForm() {
        if (this.validateForm()) {
          successPopupOverlay.classList.add('show');
          successPopup.classList.add('show');
          body.classList.add('hidden');
          fields.forEach(item => {
            item.valid = false;
          })
          Array.from(formInputs).forEach(elem => {
            elem.value = '';
          });
          agreeElement.checked = false;
          formButton.setAttribute('disabled', 'disabled');
        }
      }
    }

    new Form();

    successPopupButton.addEventListener('click', () => {
      successPopupOverlay.classList.remove('show');
      successPopup.classList.remove('show');
      body.classList.remove('hidden');
    });
  }
})();
