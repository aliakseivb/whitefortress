import vendorsData from "./src/data/vendors.js";
import certificates from "./src/data/certificates.js";


(() => {
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const bodyOverlay = document.querySelector('.body-overlay');
  const navbar = document.querySelector('.navbar');
  const navbarLinks = document.querySelectorAll('.navbar .nav-link');
  const headerLinks = document.querySelectorAll('.header .nav-link');
  const menuNavbar = document.getElementById('navbarMenu');
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
    navbar.removeAttribute('style');
    if (window.scrollY > 40 && window.innerWidth > 1000) {
      header.classList.add('scroll');
      if (location.href.includes('partner.html')) {
        const partnerContainer = document.querySelector('.partner-container');
        partnerContainer.style.padding = '150px 10px 40px';
      }
    } else {
      if (location.href.includes('partner.html')) {
        const partnerContainer = document.querySelector('.partner-container');
        partnerContainer.style.padding = '40px 10px';
      }
      header.classList.remove('scroll');
    }
    if (window.scrollY > 80 && window.innerWidth <= 1000) {
      logoScroll.classList.add('active');
      logoScroll.style.right = `calc(50% - ${container.clientWidth / 2 - 10}px)`;
    } else {
      navbar.classList.remove('show');
      navbar.removeAttribute('style');
      logoScroll.classList.remove('active');
    }
  };

  /** СЛУШАЕМ КЛИК НА ИНТЕРАКТИВНОМ ЛОГОТИПЕ **/
  logoScroll.addEventListener('click', () => {
    navbar.classList.toggle('show');
    if (navbar.classList.contains('show')) {
      navbar.style.right = `calc(50% - ${container.clientWidth / 2}px)`;
      body.classList.add('hidden');
      bodyOverlay.classList.add('open');
    } else {
      navbar.removeAttribute('style');
      body.classList.remove('hidden');
      bodyOverlay.classList.remove('open');
    }
  });

  /** СЛУШАЕМ КЛИК НА ВЫПАДАЮЩЕМ МЕНЮ **/
  menuNavbar.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      closeNavbar();
    }
  });


  /** СЛУШАЕМ БУРГЕР **/
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

  /** АКТУАЛЬНЫЙ ГОД В ФУТЕРЕ **/
  const rights = document.getElementById('rights');
  rights.innerText = `© 2010-${new Date().getFullYear()} "Белая крепость". Все права защищены`;

  /** ИНИЦИАЛИЗАЦИЯ ЭФФЕКТОВ **/
  if (location.href.includes('index.html')) {
    new WOW({
      animateClass: 'animate__animated',
    }).init();

    /** АКТИВИРУЕМ ССЫЛКИ ПРИ СКРОЛЛЕ */
    const partnersBlock = document.querySelector('#partners');
    const aboutBlock = document.querySelector('#about');
    const servicesBlock = document.querySelector('#services');
    const questionsBlock = document.querySelector('#questions');

    function changeActiveLink(block) {
      navbarLinks.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.name === block.dataset.name) {
          item.classList.add('active');
        }
      });
      headerLinks.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.name === block.dataset.name) {
          item.classList.add('active');
        }
      });
    }

    document.addEventListener('scroll', () => {
      if (window.scrollY + 300 > partnersBlock.offsetTop) {
        changeActiveLink(partnersBlock);
      }
      if (window.scrollY + 300 > aboutBlock.offsetTop) {
        changeActiveLink(aboutBlock);
      }
      if (window.scrollY + 300 > servicesBlock.offsetTop) {
        changeActiveLink(servicesBlock);
      }
      if (window.scrollY + 300 > questionsBlock.offsetTop) {
        changeActiveLink(questionsBlock);
      }
      if (window.scrollY < 200) {
        navbarLinks.forEach(item => {
          item.classList.remove('active');

        });
        headerLinks.forEach(item => {
          item.classList.remove('active');
        });
        navbarLinks[0].classList.add('active');
        headerLinks[0].classList.add('active');
      }
    });

    /** СОЗДАЕМ КАРТОЧКИ ПАРТНЕРОВ */
    const partnersItemsBlock = document.querySelector('.partners-items');
    vendorsData.forEach(item => {
      const newElem = document.createElement('div');
      newElem.className = 'partners-item wow animate__bounce';
      newElem.setAttribute('data-name', item.provider);
      newElem.innerHTML = `<img src="./src/data/vendorsImages/${item.image}" alt="${item.provider}" data-name="${item.provider}">`;
      partnersItemsBlock.append(newElem);
    });

    /** ЛОВИМ КЛИК ПО КАРТОЧКЕ ПАРТНЕРОВ */
    partnersItemsBlock.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG' || e.target.classList.contains('partners-item')) {
        const currentPartner = vendorsData.find(item => {
          return item.provider.toLowerCase() === e.target.dataset.name.toLowerCase();
        });
        if (currentPartner) {
          localStorage.setItem('whiteFortress', JSON.stringify({partner: currentPartner}));
          location.href = 'src/pages/partner.html' + '?partner=' + currentPartner.provider;
        }
      }
    });

    /** РАБОТАЕМ С ФОРМОЙ ОТПРАВКИ */
    const formBlock = document.querySelector('.form-block')
    const form = document.getElementById('form');
    const agreeElement = document.getElementById('agree');
    const formButton = document.querySelector('.form-button');
    const successPopupButton = document.querySelector('.success-popup-button');
    const successPopupOverlay = document.querySelector('.success-popup-overlay');
    const successPopup = document.querySelector('.success-popup');

    const fields = [
      {
        name: 'name',
        id: 'name',
        element: null,
        regex: /^([a-zA-Zа-яА-ЯёЁ]{2,}[ -]?)+$/s,
        valid: false,
      },
      {
        name: 'phone',
        id: 'phone',
        element: null,
        regex: /^\+(?:[0-9]+-?){12,}/s,
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
          item.element.oninput = function () {
            that.validateField.call(that, item, this);
          }
          item.element.addEventListener('blur', () => {
            if (!item.element.value) {
              if (!item.element.parentElement.children[1]) {
                item.element.insertAdjacentHTML('afterend', '<div class="input-error">Обязательное поле</div>');
              }
            }
          })
        });
        agreeElement.onchange = function () {
          that.validateForm();
          fields.forEach(item => {
            if (!item.valid) {
              const elem = document.getElementById(item.id)
              elem.classList.add('error');
              if (!elem.parentElement.children[1]) {
                elem.insertAdjacentHTML('afterend', '<div class="input-error">Обязательное поле</div>');
              }
            }
          })
        }
        formButton.onclick = function () {
          that.processForm()
        }
      }

      validateField(field, element) {
        if (!element.value || !element.value.match(field.regex)) {
          // element.classList.add('error');
          if (!element.parentElement.children[1]) {
            element.insertAdjacentHTML('afterend', '<div class="input-error">Обязательное поле</div>');
          }

          field.valid = false;
        } else {
          element.classList.remove('error');
          if (element.parentElement.children[1]) {
            element.parentElement.children[1].remove();
          }
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
          form.addEventListener('submit', formSend);
        }
      }
    }

    new Form();

    async function formSend(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      const loader = document.querySelector('.loader');
      loader.classList.add('show');
      formBlock.classList.add('sending');
      fields.forEach(item => {
        item.valid = false;
      })

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      })
          .then(async (response) => {
            // let json = await response.json();
            if (response.status === 200) {
              loader.classList.remove('show');
              formBlock.classList.remove('sending');
            } else {
              console.log(response);
              // result.innerHTML = json.message;
            }
          })
          .catch(error => {
            console.log(error);

          })
          .then(function () {
            agreeElement.checked = false;
            formButton.setAttribute('disabled', 'disabled');
            form.reset();
            successPopupOverlay.classList.add('show');
            successPopup.classList.add('show');
            body.classList.add('hidden');
          });
    }

    successPopupButton.addEventListener('click', () => {
      successPopupOverlay.classList.remove('show');
      successPopup.classList.remove('show');
      body.classList.remove('hidden');
    });


    /** СОЗДАЕМ СЛАЙДЕР СЕРТИФИКАТОВ */
    function makeCertificateSlider(certificates) {
      const swiperWrapper = document.getElementById('swiperWrapper');
      certificates.forEach(item => {
        swiperWrapper.insertAdjacentHTML('beforeend', `<div class="swiper-slide"><div class="swiper-slide-image" style="background-image: url('./src/data/certificatesImages/${item}'); background-size: cover;background-position: center; background-repeat: no-repeat"></div></div>`)
      })
    }

    makeCertificateSlider(certificates)

    /** ЛОВИМ КЛИК ПО СЛАЙДУ ДЛЯ ОТКРЫТИЯ ПОПАПА */
    $('.swiper-slide-image').magnificPopup({
      type: 'image',
    });

    const slider = document.querySelector('.swiper');
    slider.addEventListener('click', (e) => {
      const tmp = e.target.getAttribute('style').split(';')[0].split("url('.")[1]
      const urlOfElemToPopup = tmp.slice(0, tmp.length - 2)
      $.magnificPopup.open({
        items: {
          src: `.${urlOfElemToPopup}`
        },
        type: 'image'
      }, 0);
    });
  }

  if (location.href.includes('partner.html')) {
    const partnerLogo = document.querySelector('.partner-logo-image');
    const partnerTitle = document.querySelector('.partner-title');
    const partnerText = document.querySelector('.partner-text');
    const partnerLink = document.querySelector('.partner-link');
    const currentPartner = JSON.parse(localStorage.getItem('whiteFortress')).partner;

    if (currentPartner) {
      partnerLogo.setAttribute('src', `../data/vendorsImages/${currentPartner.image}`);
      partnerTitle.textContent = currentPartner.provider;
      currentPartner.descriptions.forEach(elem => {
        const newElem = document.createElement('p')
        newElem.insertAdjacentHTML('beforeend', elem)
        partnerText.append(newElem)
      })
      partnerLink.setAttribute('href', currentPartner.pLink);
    }
  }

  if (location.href.includes('privacy.html')) {
    // some code here
  }
  if (location.href.includes('conditions.html')) {
    // some code here
  }
})();

