import {partnersArr} from "./scripts/partnersData.js";
import {languageObj} from "./scripts/languageData.js";

(() => {


  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const bodyOverlay = document.querySelector('.body-overlay');
  const navbar = document.querySelector('.navbar');
  const navbarLinks = document.querySelectorAll('.navbar .nav-link');
  const headerLinks = document.querySelectorAll('.header .nav-link');
  const menuNavbar = document.querySelector('.navbar .menu');
  const ruButtons = document.querySelectorAll('.lang-item-ru');
  const enButtons = document.querySelectorAll('.lang-item-en');
  const langBlocks = document.querySelectorAll('.lang');
  const burger = document.querySelector('#burger');
  const logoScroll = document.querySelector('.logo-scroll');
  const container = document.querySelector('.container');

  let language
  const whitefortress = JSON.parse(localStorage.getItem('whitefortress')) ? JSON.parse(localStorage.getItem('whitefortress')) : null;
  if (whitefortress) {
    language = whitefortress.language ? whitefortress.language : 'ru';
  } else {
    language = 'ru';
    localStorage.setItem('whitefortress', JSON.stringify({language: 'ru'}))
  }
  /** ЛОВИМ ТЕКУЩИЙ ЯЗЫК И МЕНЯЕМ ТАМ ГДЕ НАДО ВСЕ ЧТО НАДО*/

  changeLanguage(language);

  function changeLanguage(language) {
    document.querySelector('.html').setAttribute('lang', language);
    if (language === 'ru') {

      ruButtons.forEach(item => {
        item.classList.add('active');
      });
      enButtons.forEach(item => {
        item.classList.remove('active');
      });
      for (let key in languageObj.ru.navbarItem) {
        let elem = document.querySelector(`.${key}`)
        if (elem) {
          elem.innerHTML = languageObj.ru.navbarItem[`${key}`];
        }
      }
      for (let key in languageObj.ru.headerItem) {
        let elem = document.querySelector(`.${key}`)
        if (elem) {
          elem.innerHTML = languageObj.ru.headerItem[`${key}`];
        }
      }
      for (let key in languageObj.ru.footerItem) {
        let elem = document.querySelector(`.${key}`)
        if (elem) {
          elem.innerHTML = languageObj.ru.footerItem[`${key}`];
        }
      }
      if (location.href.includes('index.html')) {
        for (let key in languageObj.ru.successPopup) {
          let elem = document.querySelector(`.${key}`)
          if (elem) {
            elem.innerHTML = languageObj.ru.successPopup[`${key}`];
          }
        }
        for (let key in languageObj.ru.placeholders) {
          let elem = document.querySelector(`#${key}`)
          if (elem) {
            elem.placeholder = languageObj.ru.placeholders[`${key}`];
          }
        }
        for (let key in languageObj.ru.mainPage) {
          let elem = document.querySelector(`.${key}`)
          if (elem) {
            elem.innerHTML = languageObj.ru.mainPage[`${key}`];
          }
        }
      }
      if (location.href.includes('partner.html')) {
        for (let key in languageObj.ru.partnerPage) {
          let elem = document.querySelector(`.${key}`)
          if (elem) {
            elem.innerHTML = languageObj.ru.partnerPage[`${key}`];
          }
        }
      }
      if (location.href.includes('privacy.html')) {
        for (let key in languageObj.ru.privacyPage) {
          let elem = document.querySelector(`.${key}`)
          if (elem) {
            elem.innerHTML = languageObj.ru.privacyPage[`${key}`];
          }
        }
      }
      if (location.href.includes('conditions.html')) {
        for (let key in languageObj.ru.conditionsPage) {
          let elem = document.querySelector(`.${key}`)
          if (elem) {
            elem.innerHTML = languageObj.ru.conditionsPage[`${key}`];
          }
        }
      }
    }
    if (language === 'en') {
      ruButtons.forEach(item => {
        item.classList.remove('active');
      });
      enButtons.forEach(item => {
        item.classList.add('active');
      });
      for (let key in languageObj.en.navbarItem) {
        let elem = document.querySelector(`.${key}`)
        if (elem) {
          elem.innerHTML = languageObj.en.navbarItem[`${key}`];
        }
      }
      for (let key in languageObj.en.headerItem) {
        let elem = document.querySelector(`.${key}`)
        if (elem) {
          elem.innerHTML = languageObj.en.headerItem[`${key}`];
        }
      }
      for (let key in languageObj.en.footerItem) {
        let elem = document.querySelector(`.${key}`)
        if (elem) {
          elem.innerHTML = languageObj.en.footerItem[`${key}`];
        }
      }
      if (location.href.includes('index.html')) {
        for (let key in languageObj.en.successPopup) {
          let elem = document.querySelector(`.${key}`)
          if (elem) {
            elem.innerHTML = languageObj.en.successPopup[`${key}`];
          }
        }
        for (let key in languageObj.en.placeholders) {
          let elem = document.querySelector(`#${key}`)
          if (elem) {
            elem.placeholder = languageObj.en.placeholders[`${key}`];
          }
        }
        for (let key in languageObj.en.mainPage) {
          let elem = document.querySelector(`.${key}`)
          if (elem) {
            elem.innerHTML = languageObj.en.mainPage[`${key}`];
          }
        }
      }
      if (location.href.includes('partner.html')) {
        for (let key in languageObj.en.partnerPage) {
          let elem = document.querySelector(`.${key}`)
          if (elem) {
            elem.innerHTML = languageObj.en.partnerPage[`${key}`];
          }
        }
      }
      if (location.href.includes('privacy.html')) {
        for (let key in languageObj.en.privacyPage) {
          let elem = document.querySelector(`.${key}`)
          if (elem) {
            elem.innerHTML = languageObj.en.privacyPage[`${key}`];
          }
        }
      }
      if (location.href.includes('conditions.html')) {
        for (let key in languageObj.en.conditionsPage) {
          let elem = document.querySelector(`.${key}`)
          if (elem) {
            elem.innerHTML = languageObj.en.conditionsPage[`${key}`];
          }
        }
      }
    }
  }

  langBlocks.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('lang-item-ru')) {
        ruButtons.forEach(item => {
          item.classList.add('active');
          language = 'ru';
        });
        enButtons.forEach(item => {
          item.classList.remove('active');
        });
      }
      if (e.target.classList.contains('lang-item-en')) {
        ruButtons.forEach(item => {
          item.classList.remove('active')
        });
        enButtons.forEach(item => {
          item.classList.add('active')
          language = 'en';
        });
      }
      let tmp = JSON.parse(localStorage.getItem('whitefortress'));
      tmp.language = language;
      localStorage.setItem('whitefortress', JSON.stringify(tmp));
      changeLanguage(language);
    })
  });

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
        || e.target.tagName === 'svg' || e.target.tagName === 'path' || e.target.classList.contains('lang-item')) {
      closeNavbar();
    }
  });


  /** СЛАШЕМ БУРГЕР */
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


  if (location.href.includes('index.html')) {
    new WOW({
      animateClass: 'animate__animated',
    }).init();

    /** РАБОТАЕМ С ФИЛЬТРОМ */
    const filterButton = document.querySelector('.products-filter-button');
    const inside = document.querySelector('.inside');
    filterButton.addEventListener('click', () => {
      filterButton.classList.toggle('active');
      inside.classList.toggle('see');
    })
    // const selectOption = document.querySelectorAll('.select-option');
    //
    // select.addEventListener('click', (e) => {
    //   if (select.classList.contains('open')) {
    //     select.classList.remove('open');
    //     inside.style.maxHeight = `0`;
    //     setTimeout(() => {
    //       inside.classList.remove('see');
    //     }, 250)
    //
    //   } else {
    //
    //     inside.style.maxHeight = `${inside.scrollHeight}px`;
    //     // inside.style.maxWidth = `max-content`;
    //     // inside.style.display = `flex`;
    //     // inside.style.display = `flex`;
    //     // inside.style.overflow = `unset`;
    //     inside.classList.add('see');
    //     select.classList.toggle('open');
    //   }
    // });
    // selectOption.forEach(elem => {
    //   elem.addEventListener('click', (e) => {
    //     inside.style.maxHeight = `0`;
    //     setTimeout(() => {
    //       select.innerText = e.target.innerText;
    //       select.classList.remove('open');
    //       select.style.color = '#333';
    //       inside.classList.remove('see')
    //     }, 250);
    //   });
    // });
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
    // header.addEventListener('click', (e) => {
    //   if (e.target.classList.contains('nav-link')) {
    //     headerLinks.forEach(item => {
    //       item.classList.remove('active');
    //     });
    //     e.target.classList.add('active');
    //     navbarLinks.forEach(item => {
    //       item.classList.remove('active');
    //       if (item.dataset.name === e.target.dataset.name) {
    //         item.classList.add('active');
    //       }
    //     });
    //   }
    // });

    // navbar.addEventListener('click', (e) => {
    //   if (e.target.classList.contains('nav-link')) {
    //     navbarLinks.forEach(item => {
    //       item.classList.remove('active');
    //     });
    //     e.target.classList.add('active');
    //     headerLinks.forEach(item => {
    //       item.classList.remove('active');
    //       if (item.dataset.name === e.target.dataset.name) {
    //         item.classList.add('active');
    //       }
    //     });
    //   }
    // });

    /** СОЗДАЕМ КАРТОЧКИ ПАРТНЕРОВ */
    const partnersItemsBlock = document.querySelector('.partners-items');
    partnersArr.forEach(item => {
      const newElem = document.createElement('div');
      newElem.className = 'partners-item wow animate__bounce';
      newElem.setAttribute('data-name', item.name);
      // newElem.setAttribute('href', 'partner.html');
      // newElem.setAttribute('target', '_blank');
      newElem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" data-name="${item.name}">
      `;
      partnersItemsBlock.append(newElem);
    });


    /** ЛОВИМ КЛИК ПО КАРТОЧКЕ ПАРТНЕРОВ */
    partnersItemsBlock.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG' || e.target.classList.contains('partners-item')) {
        const currentPartner = partnersArr.find(item => {
          return item.name.toLowerCase() === e.target.dataset.name.toLowerCase();
        });
        if (currentPartner) {
          localStorage.setItem('whitefortress', JSON.stringify({partner: currentPartner, language: language}));
          location.href = 'partner.html' + '?partner=' + currentPartner.name;
        }
      }
    });


    /** РАБОТАЕМ С ФОРМОЙ ОТПРАВКИ */
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

  if (location.href.includes('partner.html')) {
    const partnerLogo = document.querySelector('.partner-logo-image');
    const partnerTitle = document.querySelector('.partner-title');
    const partnerText = document.querySelector('.partner-text');
    const partnerLink = document.querySelector('.partner-link');
    const aboutButton = document.getElementById('about');
    const solutionsButton = document.getElementById('solutions');
    const whitefortress = JSON.parse(localStorage.getItem('whitefortress'));
    const currentPartner = whitefortress.partner;

    langBlocks.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target.classList.contains('lang-item-ru')) {
          ruButtons.forEach(item => {
            item.classList.add('active');
            language = 'ru';
          });
          enButtons.forEach(item => {
            item.classList.remove('active');
          });

        }
        if (e.target.classList.contains('lang-item-en')) {
          ruButtons.forEach(item => {
            item.classList.remove('active')
          });
          enButtons.forEach(item => {
            item.classList.add('active')
            language = 'en';
          });
        }
        localStorage.setItem('whitefortress', JSON.stringify({partner: currentPartner, language: language}));

        partnerTitle.textContent = language === "ru" ? currentPartner.ru.title : currentPartner.en.title;
        doSolutions(currentPartner, language);
      })
    });


    if (currentPartner) {
      partnerLogo.setAttribute('src', currentPartner.image);
      partnerTitle.textContent = language === "ru" ? currentPartner.ru.title : currentPartner.en.title;
      partnerText.innerHTML = language === "ru" ? currentPartner.ru.text : currentPartner.en.text;
      partnerLink.setAttribute('href', currentPartner.url);
    }

    aboutButton.addEventListener('click', () => {
      partnerText.innerHTML = language === "ru" ? currentPartner.ru.text : currentPartner.en.text;
      aboutButton.classList.add('active');
      solutionsButton.classList.remove('active');
    });

    solutionsButton.addEventListener('click', () => {
      aboutButton.classList.remove('active');
      solutionsButton.classList.add('active');
      partnerText.textContent = '';
      doSolutions(currentPartner, language);
    });

    function doSolutions(currentPartner, language) {

      if (aboutButton.classList.contains('active')) {
        partnerText.innerHTML = language === "ru" ? currentPartner.ru.text : currentPartner.en.text;
      }
      if (solutionsButton.classList.contains('active')) {
        partnerText.innerHTML = '';
        currentPartner[language].solutions.forEach(item => {
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
        });
      }
    }
  }
  if (location.href.includes('privacy.html')) {

  }
  if (location.href.includes('conditions.html')) {

  }
})();

