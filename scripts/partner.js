// const partnerTitle = document.querySelector('.partner-title');
// const partnerText = document.querySelector('.partner-text');
// const partnerLink = document.querySelector('.partner-link');
// const aboutButton = document.getElementById('about');
// const aboutSolutions = document.getElementById('solutions');
//
// const currentPartner = JSON.parse(localStorage.getItem('partner'));
// if (currentPartner) {
//   partnerTitle.textContent = currentPartner.title;
//   partnerText.innerHTML = currentPartner.text;
//   partnerLink.setAttribute('href', currentPartner.url);
// }
//
// aboutButton.addEventListener('click', () => {
//   partnerText.innerHTML = currentPartner.text;
//   aboutButton.classList.add('active');
//   aboutSolutions.classList.remove('active');
// });
//
// aboutSolutions.addEventListener('click', () => {
//   aboutButton.classList.remove('active');
//   aboutSolutions.classList.add('active');
//   partnerText.textContent = '';
//   currentPartner.solutions.forEach(item => {
//     const newElem = document.createElement('div');
//     newElem.className = 'partner-text-item';
//     const newElemHead = document.createElement('div');
//     newElemHead.className = 'partner-text-item-head';
//     newElemHead.textContent = item.head;
//     const newElemDesc = document.createElement('div');
//     newElemDesc.className = 'partner-text-item-desc';
//     newElemDesc.textContent = item.desc;
//     newElem.append(newElemHead);
//     newElem.append(newElemDesc);
//     partnerText.append(newElem);
//   })
// });