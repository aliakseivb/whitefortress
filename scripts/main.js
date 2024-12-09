import {partnersArr} from "./partnersData.js";


(() => {
  const body = document.querySelector('body');
  const bodyOverlay = document.querySelector('.body-overlay');
  const navbar = document.querySelector('.navbar');
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
    navbar.removeAttribute('style');
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

  if (location.href.includes('index')) {
    new WOW({
      animateClass: 'animate__animated',
    }).init();

    /** создаем карточки партнеров */
    partnersArr.forEach(item => {
      const newElem = document.createElement('div');
      newElem.className = 'partners-item wow animate__bounce';
      newElem.setAttribute('data-name', item.name);
      // newElem.setAttribute('href', 'partner.html');
      newElem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" data-name="${item.name}">
      `;
      partnersItemsBlock.append(newElem);
    });

    partnersItemsBlock.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG' || e.target.classList.contains('partners-item')) {
        const currentPartner = partnersArr.find(item => {
          return item.name.toLowerCase() === e.target.dataset.name.toLowerCase();
        });
        if (currentPartner) {
          localStorage.setItem('partner', JSON.stringify(currentPartner));
          location.href = 'partner.html' + '?partner=' + currentPartner.name;
        }
      }
    });
    /** форма отправки */
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
  if (location.href.includes('partner')) {
    const partnerLogo = document.querySelector('.partner-logo-image');
    const partnerTitle = document.querySelector('.partner-title');
    const partnerText = document.querySelector('.partner-text');
    const partnerLink = document.querySelector('.partner-link');
    const aboutButton = document.getElementById('about');
    const aboutSolutions = document.getElementById('solutions');

    const currentPartner = JSON.parse(localStorage.getItem('partner'));
    if (currentPartner) {
      partnerLogo.setAttribute('src', currentPartner.image);
      partnerTitle.textContent = currentPartner.title;
      partnerText.innerHTML = currentPartner.text;
      partnerLink.setAttribute('href', currentPartner.url);
    }

    aboutButton.addEventListener('click', () => {
      partnerText.innerHTML = currentPartner.text;
      aboutButton.classList.add('active');
      aboutSolutions.classList.remove('active');
    });

    aboutSolutions.addEventListener('click', () => {
      aboutButton.classList.remove('active');
      aboutSolutions.classList.add('active');
      partnerText.textContent = '';
      currentPartner.solutions.forEach(item => {
        const newElem = document.createElement('div');
        newElem.className = 'partner-text-item';
        const newElemHead = document.createElement('div');
        newElemHead.className = 'partner-text-item-head';
        newElemHead.textContent = item.head;
        const newElemDesc = document.createElement('div');
        newElemDesc.className = 'partner-text-item-desc';
        newElemDesc.textContent = item.desc;
        newElem.append(newElemHead);
        newElem.append(newElemDesc);
        partnerText.append(newElem);
      })
    });
  }
})();
