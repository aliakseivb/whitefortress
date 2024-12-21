// import {partnersData} from "./scripts/partnersData.js";
import vendorsData from "./src/data/vendors.js";
import certificates from "./src/data/certificates.js";

// import {languageData} from "./scripts/languageData.js";
// import {productsData} from "./scripts/products.js";

(() => {
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const bodyOverlay = document.querySelector('.body-overlay');
  const navbar = document.querySelector('.navbar');
  const navbarLinks = document.querySelectorAll('.navbar .nav-link');
  const headerLinks = document.querySelectorAll('.header .nav-link');
  const menuNavbar = document.getElementById('navbarMenu');
  // const ruButtons = document.querySelectorAll('.lang-item-ru');
  // const enButtons = document.querySelectorAll('.lang-item-en');
  // const langBlocks = document.querySelectorAll('.lang');
  const burger = document.querySelector('#burger');
  const logoScroll = document.querySelector('.logo-scroll');
  const container = document.querySelector('.container');

  // let language
  // const whitefortress = JSON.parse(localStorage.getItem('whitefortress')) ? JSON.parse(localStorage.getItem('whitefortress')) : null;
  // if (whitefortress) {
  //   language = whitefortress.language ? whitefortress.language : 'ru';
  // } else {
  //   language = 'ru';
  //   localStorage.setItem('whitefortress', JSON.stringify({language: 'ru'}))
  // }


  /** ЛОВИМ ТЕКУЩИЙ ЯЗЫК И МЕНЯЕМ ТАМ ГДЕ НАДО ВСЕ ЧТО НАДО*/
  // changeLanguage(language);

  // function changeLanguage(language) {
  //   document.querySelector('.html').setAttribute('lang', language);
  //   if (language === 'ru') {
  //
  //     ruButtons.forEach(item => {
  //       item.classList.add('active');
  //     });
  //     enButtons.forEach(item => {
  //       item.classList.remove('active');
  //     });
  //     for (let key in languageData.ru.navbarItem) {
  //       let elem = document.querySelector(`.${key}`)
  //       if (elem) {
  //         elem.innerHTML = languageData.ru.navbarItem[`${key}`];
  //       }
  //     }
  //     for (let key in languageData.ru.headerItem) {
  //       let elem = document.querySelector(`.${key}`)
  //       if (elem) {
  //         elem.innerHTML = languageData.ru.headerItem[`${key}`];
  //       }
  //     }
  //     for (let key in languageData.ru.footerItem) {
  //       let elem = document.querySelector(`.${key}`)
  //       if (elem) {
  //         elem.innerHTML = languageData.ru.footerItem[`${key}`];
  //       }
  //     }
  //     if (location.href.includes('index.html')) {
  //       for (let key in languageData.ru.successPopup) {
  //         let elem = document.querySelector(`.${key}`)
  //         if (elem) {
  //           elem.innerHTML = languageData.ru.successPopup[`${key}`];
  //         }
  //       }
  //       for (let key in languageData.ru.placeholders) {
  //         let elem = document.querySelector(`#${key}`)
  //         if (elem) {
  //           elem.placeholder = languageData.ru.placeholders[`${key}`];
  //         }
  //       }
  //       for (let key in languageData.ru.mainPage) {
  //         let elem = document.querySelector(`.${key}`)
  //         if (elem) {
  //           elem.innerHTML = languageData.ru.mainPage[`${key}`];
  //         }
  //       }
  //     }
  //     if (location.href.includes('partner.html')) {
  //       for (let key in languageData.ru.partnerPage) {
  //         let elem = document.querySelector(`.${key}`)
  //         if (elem) {
  //           elem.innerHTML = languageData.ru.partnerPage[`${key}`];
  //         }
  //       }
  //     }
  //     if (location.href.includes('privacy.html')) {
  //       for (let key in languageData.ru.privacyPage) {
  //         let elem = document.querySelector(`.${key}`)
  //         if (elem) {
  //           elem.innerHTML = languageData.ru.privacyPage[`${key}`];
  //         }
  //       }
  //     }
  //     if (location.href.includes('conditions.html')) {
  //       for (let key in languageData.ru.conditionsPage) {
  //         let elem = document.querySelector(`.${key}`)
  //         if (elem) {
  //           elem.innerHTML = languageData.ru.conditionsPage[`${key}`];
  //         }
  //       }
  //     }
  //   }
  //   if (language === 'en') {
  //     ruButtons.forEach(item => {
  //       item.classList.remove('active');
  //     });
  //     enButtons.forEach(item => {
  //       item.classList.add('active');
  //     });
  //     for (let key in languageData.en.navbarItem) {
  //       let elem = document.querySelector(`.${key}`)
  //       if (elem) {
  //         elem.innerHTML = languageData.en.navbarItem[`${key}`];
  //       }
  //     }
  //     for (let key in languageData.en.headerItem) {
  //       let elem = document.querySelector(`.${key}`)
  //       if (elem) {
  //         elem.innerHTML = languageData.en.headerItem[`${key}`];
  //       }
  //     }
  //     for (let key in languageData.en.footerItem) {
  //       let elem = document.querySelector(`.${key}`)
  //       if (elem) {
  //         elem.innerHTML = languageData.en.footerItem[`${key}`];
  //       }
  //     }
  //     if (location.href.includes('index.html')) {
  //       for (let key in languageData.en.successPopup) {
  //         let elem = document.querySelector(`.${key}`)
  //         if (elem) {
  //           elem.innerHTML = languageData.en.successPopup[`${key}`];
  //         }
  //       }
  //       for (let key in languageData.en.placeholders) {
  //         let elem = document.querySelector(`#${key}`)
  //         if (elem) {
  //           elem.placeholder = languageData.en.placeholders[`${key}`];
  //         }
  //       }
  //       for (let key in languageData.en.mainPage) {
  //         let elem = document.querySelector(`.${key}`)
  //         if (elem) {
  //           elem.innerHTML = languageData.en.mainPage[`${key}`];
  //         }
  //       }
  //     }
  //     if (location.href.includes('partner.html')) {
  //       for (let key in languageData.en.partnerPage) {
  //         let elem = document.querySelector(`.${key}`)
  //         if (elem) {
  //           elem.innerHTML = languageData.en.partnerPage[`${key}`];
  //         }
  //       }
  //     }
  //     if (location.href.includes('privacy.html')) {
  //       for (let key in languageData.en.privacyPage) {
  //         let elem = document.querySelector(`.${key}`)
  //         if (elem) {
  //           elem.innerHTML = languageData.en.privacyPage[`${key}`];
  //         }
  //       }
  //     }
  //     if (location.href.includes('conditions.html')) {
  //       for (let key in languageData.en.conditionsPage) {
  //         let elem = document.querySelector(`.${key}`)
  //         if (elem) {
  //           elem.innerHTML = languageData.en.conditionsPage[`${key}`];
  //         }
  //       }
  //     }
  //   }
  // }

  // langBlocks.forEach(item => {
  //   item.addEventListener('click', (e) => {
  //     if (e.target.classList.contains('lang-item-ru')) {
  //       ruButtons.forEach(item => {
  //         item.classList.add('active');
  //         language = 'ru';
  //       });
  //       enButtons.forEach(item => {
  //         item.classList.remove('active');
  //       });
  //     }
  //     if (e.target.classList.contains('lang-item-en')) {
  //       ruButtons.forEach(item => {
  //         item.classList.remove('active')
  //       });
  //       enButtons.forEach(item => {
  //         item.classList.add('active')
  //         language = 'en';
  //       });
  //     }
  //     let tmp = JSON.parse(localStorage.getItem('whitefortress'));
  //     tmp.language = language;
  //     localStorage.setItem('whitefortress', JSON.stringify(tmp));
  //     changeLanguage(language);
  //   })
  // });

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
    } else {
      navbar.removeAttribute('style');
    }

    if (window.innerWidth <= 650) {
      body.classList.toggle('hidden');
      bodyOverlay.classList.toggle('open');
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


  if (location.href.includes('index.html')) {
    new WOW({
      animateClass: 'animate__animated',
    }).init();

    /** РАБОТАЕМ С ФИЛЬТРОМ */
    // const filterButton = document.querySelector('.products-filter-button');
    // filterButton.addEventListener('click', () => {
    //   location.href = 'products.html';
    // })
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
    // const res = JSON.parse(vendorsData);
    // console.log(res)
    vendorsData.forEach(item => {
        const newElem = document.createElement('div');
        newElem.className = 'partners-item wow animate__bounce';
        newElem.setAttribute('data-name', item.provider);
        // newElem.setAttribute('href', 'partner.html');
        // newElem.setAttribute('target', '_blank');
        newElem.innerHTML = `
        <img src="${item.picPath}" alt="${item.provider}" data-name="${item.provider}">
      `;
        partnersItemsBlock.append(newElem);
      });

    // console.log(vendors)



    /** ЛОВИМ КЛИК ПО КАРТОЧКЕ ПАРТНЕРОВ */
    partnersItemsBlock.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG' || e.target.classList.contains('partners-item')) {
        const currentPartner = vendorsData.find(item => {
          return item.provider.toLowerCase() === e.target.dataset.name.toLowerCase();
        });
        if (currentPartner) {
          localStorage.setItem('whiteFortress', JSON.stringify({partner: currentPartner}));
          location.href = 'partner.html' + '?partner=' + currentPartner.provider;
        }
      }
    });


    /** РАБОТАЕМ С ФОРМОЙ ОТПРАВКИ */
    const formBlock = document.querySelector('.form-block')
    const form = document.getElementById('form');
    // const formInputs = document.querySelectorAll('.form-input');
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

          // Array.from(formInputs).forEach(elem => {
          //   elem.value = '';
          // });
          // agreeElement.checked = false;
          // formButton.setAttribute('disabled', 'disabled');
          // successPopupOverlay.classList.add('show');
          // successPopup.classList.add('show');
          // body.classList.add('hidden');
        }
      }
    }

    new Form();

    async function formSend(e){
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
          .then(function() {
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
    function makeCertificateSlider(certificates){
      const swiperWrapper = document.getElementById('swiperWrapper');
      certificates.forEach(item => {
        swiperWrapper.insertAdjacentHTML('beforeend', `<div class="swiper-slide"><div class="swiper-slide-image" style="background-image:  url('${item}'); background-size: cover;background-position: center; background-repeat: no-repeat"></div></div>`)
      })
    }
    makeCertificateSlider(certificates)

    /** ЛОВИМ КЛИК ПО СЛАЙДУ ДЛЯ ОТКРЫТИЯ ПОПАПА */
    $('.swiper-slide-image').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below
      // removalDelay: 300,
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
      // other options
    });

    const slider = document.querySelector('.swiper');
    slider.addEventListener('click', (e) => {
      const tmp = e.target.getAttribute('style').split(';')[0].split("url('.")[1]
      const elemToPopup = tmp.slice(0,tmp.length-2)
      $.magnificPopup.open({
        items: {
          src: `${elemToPopup}`
        },
        type: 'image'
      });
    })


  }

  if (location.href.includes('partner.html')) {
    const partnerLogo = document.querySelector('.partner-logo-image');
    const partnerTitle = document.querySelector('.partner-title');
    const partnerText = document.querySelector('.partner-text');
    const partnerLink = document.querySelector('.partner-link');
    // const aboutButton = document.getElementById('about');
    // const solutionsButton = document.getElementById('solutions');
    // const whiteFortress = ;
    const currentPartner = JSON.parse(localStorage.getItem('whiteFortress')).partner;

    // langBlocks.forEach(item => {
    //   item.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('lang-item-ru')) {
    //       ruButtons.forEach(item => {
    //         item.classList.add('active');
    //         // language = 'ru';
    //       });
    //       enButtons.forEach(item => {
    //         item.classList.remove('active');
    //       });
    //
    //     }
    //     if (e.target.classList.contains('lang-item-en')) {
    //       ruButtons.forEach(item => {
    //         item.classList.remove('active')
    //       });
    //       enButtons.forEach(item => {
    //         item.classList.add('active')
    //         language = 'en';
    //       });
    //     }
    //     localStorage.setItem('whitefortress', JSON.stringify({partner: currentPartner, language: language}));
    //
    //     partnerTitle.textContent = language === "ru" ? currentPartner.ru.title : currentPartner.en.title;
    //     doSolutions(currentPartner, language);
    //   })
    // });


    if (currentPartner) {
      partnerLogo.setAttribute('src', currentPartner.picPath);
      partnerTitle.textContent = currentPartner.provider;
        currentPartner.descriptions.forEach(elem => {
          const newElem = document.createElement('p')
          newElem.insertAdjacentHTML('beforeend', elem)
          partnerText.append(newElem)
        })

      // partnerText.innerHTML
      partnerLink.setAttribute('href', currentPartner.pLink);
    }

    // aboutButton.addEventListener('click', () => {
    //   partnerText.innerHTML = language === "ru" ? currentPartner.ru.text : currentPartner.en.text;
    //   aboutButton.classList.add('active');
    //   solutionsButton.classList.remove('active');
    // });
    //
    // solutionsButton.addEventListener('click', () => {
    //   aboutButton.classList.remove('active');
    //   solutionsButton.classList.add('active');
    //   partnerText.textContent = '';
    //   doSolutions(currentPartner, language);
    // });

    // function doSolutions(currentPartner, language) {
    //
    //   if (aboutButton.classList.contains('active')) {
    //     partnerText.innerHTML = language === "ru" ? currentPartner.ru.text : currentPartner.en.text;
    //   }
    //   if (solutionsButton.classList.contains('active')) {
    //     partnerText.innerHTML = '';
    //     currentPartner[language].solutions.forEach(item => {
    //       const newElem = document.createElement('div');
    //       newElem.className = 'partner-text-item';
    //       const newElemHead = document.createElement('div');
    //       newElemHead.className = 'partner-text-item-head';
    //       newElemHead.textContent = item.head;
    //       const newElemDesc = document.createElement('div');
    //       newElemDesc.className = 'partner-text-item-desc';
    //       newElemDesc.textContent = item.desc;
    //       newElem.append(newElemHead);
    //       newElem.append(newElemDesc);
    //       partnerText.append(newElem);
    //     });
    //   }
    // }
  }



  if (location.href.includes('privacy.html')) {
    // some code here
  }
  if (location.href.includes('conditions.html')) {
    // some code here
  }
//   if (location.href.includes('products.html')) {
//
//     const productsItemsBlock = document.querySelector('.products-items');
//     if (language === 'ru') {
//       for (const key in productsData.ru) {
//
//         if (productsData.ru[`${key}`].length) {
//           productsData.ru[`${key}`].forEach(item => {
//             const newProductsElem = document.createElement('div');
//             newProductsElem.className = 'products-item';
//             newProductsElem.dataset.name = `${Object.keys(item)}`;
//             newProductsElem.textContent = item[Object.keys(item)];
//             productsItemsBlock.append(newProductsElem)
//           });
//         }
//       }
//     }
//
//     const partnerItemsBlock = document.querySelector('.partner-items');
//     productsItemsBlock.addEventListener('click', (e) => {
//       if (e.target.classList.contains('products-item') && !e.target.classList.contains('selected')) {
//         e.target.classList.add('selected');
//         partnersData.forEach(item => {
//           if (item.forExample.includes(e.target.dataset.name)) {
//             if (partnerItemsBlock.children.length) {
//               const currentElemToAddProduct = Array.from(partnerItemsBlock.children).find(elem => {
//                 return elem.dataset.name === item.name;
//               });
//               if (currentElemToAddProduct) {
//                 currentElemToAddProduct.dataset.product = `${currentElemToAddProduct.dataset.product} ${e.target.dataset.name}`;
//                 currentElemToAddProduct.children[1].insertAdjacentHTML('beforeend', `
// <div class="partner-item-info" data-name="${e.target.dataset.name}"><div class="partner-item-service">
// ${e.target.innerText}</div>
// <a href="https://gardatech.ru/" class="partner-item-link">
// ${language === 'ru' ? 'Подробнее' : 'Details'}
// </a></div>`);
//                 goToNewElem(partnerItemsBlock.lastElementChild);
//               } else {
//                 createAndAppendNewPartnerElem(e.target, item, partnerItemsBlock);
//                 goToNewElem(partnerItemsBlock.lastElementChild);
//               }
//             } else {
//               createAndAppendNewPartnerElem(e.target, item, partnerItemsBlock);
//               goToNewElem(partnerItemsBlock.lastElementChild);
//               partnerItemsBlock.classList.add('fully');
//             }
//           }
//         });
//       } else if (e.target.classList.contains('products-item') && e.target.classList.contains('selected')) {
//         e.target.classList.remove('selected');
//         if (partnerItemsBlock.children.length) {
//           Array.from(partnerItemsBlock.children).forEach(elem => {
//             for (let i = 1; i < elem.children[1].children.length; i++) {
//               if (elem.children[1].children[i].dataset.name === e.target.dataset.name) {
//                 elem.children[1].children[i].remove();
//                 if (elem.children[1].children.length < 2) {
//                   elem.remove();
//                 }
//                 if (!partnerItemsBlock.children.length) {
//                   partnerItemsBlock.classList.remove('fully');
//                   productsItemsBlock.scrollIntoView({block: "start", behavior: "smooth"})
//                 }
//               }
//             }
//           });
//         }
//       }
//     });
//   }

//   function createAndAppendNewPartnerElem(targetElem, data, parentBlock) {
//     const newPartnerElem = document.createElement('div');
//     newPartnerElem.className = 'partner-item';
//     newPartnerElem.dataset.product = targetElem.dataset.name;
//     newPartnerElem.dataset.name = data.name;
//     newPartnerElem.innerHTML = `<div class="partner-item-image"><img src="${data.image}" alt="partner"></div>
// <div class="partner-item-body"><div class="partner-item-head"><div class="partner-item-name">
// ${language === 'ru' ? data.ru.title : data.en.title}</div><a href="${data.url}" class="partner-item-link">
// ${language === 'ru' ? 'К партнеру' : 'To partner'}</a></div><div class="partner-item-info" data-name="${targetElem.dataset.name}">
// <div class="partner-item-service">${targetElem.innerText}</div><a href="https://gardatech.ru/" class="partner-item-link">
// ${language === 'ru' ? 'Подробнее' : 'Details'}</a></div></div>`
//     parentBlock.append(newPartnerElem);
//     goToNewElem(parentBlock.lastElementChild);
//   }

  // function goToNewElem(elem) {
  //   setTimeout(() => {
  //     elem.scrollIntoView({block: "center", behavior: "smooth"});
  //   }, 100);
  // }
})();

