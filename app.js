let id = 1;

const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const listNode = document.querySelector('.gallery');

// Создание Галереи
const galery = galleryItems.map(item => {
  const htmlString = `<li class="gallery__item">
  <a class="gallery__link" href='${item.original}'>
    <img class="gallery__image" id='${id++}' src='${item.preview}' data-source='${item.original}' alt='${item.description}' />
  </a>
</li>`
  
    listNode.insertAdjacentHTML('beforeend', htmlString);
});

const divNode = document.querySelector('.lightbox');

const modalImg = document.querySelector('.lightbox__image');

// Открытие модалки по клику

listNode.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.tagName !== 'IMG') return false;
  divNode.classList.add('is-open');
  modalImg.src = e.target.dataset.source;
  modalImg.alt = e.target.alt;
  modalImg.id = e.target.id;
});

// Кнопка закрытия модалки

const btnCloseModal = document.querySelector('button[data-action="close-lightbox"]');

btnCloseModal.addEventListener('click', e => {
  divNode.classList.remove('is-open');
  modalImg.src = '';
  modalImg.alt = '';
});

// console.log(listNode.lastChild.querySelector('img').dataset.source);
console.log(listNode.lastChild.querySelector('img').dataset.source);


// ДОП ЗАДАНИЕ

console.log(listNode.firstChild.querySelector('img').dataset.source);

// Закрытие модалки по клику на оверлей

const overleyBtnNode = document.querySelector('.lightbox__overlay');
overleyBtnNode.addEventListener('click', e => {
  divNode.classList.remove('is-open');
  modalImg.src = '';
  modalImg.alt = '';
});



// Закрытие модалки клавишей Esc

// e.keyCode === 27 - Если нажата клавиша Esc
const escBtnClose = document.addEventListener('keydown', e => {
  if (e.keyCode !== 27) return false;
  divNode.classList.remove('is-open');
  modalImg.src = '';
  modalImg.alt = '';
});



// Пролистывание галереи по стрелкам
// e.keyCode !== 39 - Если нажата стрелка вправо 
// e.keyCode !== 37 - Если нажата стрелка влево

const arrowBtnRight = document.addEventListener('keydown', e => {
  if (e.keyCode === 39) {
    const neighbourRightImgId = +modalImg.id + 1;
  let neighbourRightImg = document.getElementById(neighbourRightImgId);
  if (!neighbourRightImg) neighbourRightImg = listNode.firstChild.querySelector('img');
  modalImg.src = neighbourRightImg.dataset.source;
  modalImg.alt = neighbourRightImg.alt;
  modalImg.id = neighbourRightImg.id;
  };

  

  // console.log(listNode.firstChild.querySelector('img').dataset.source);

  if (e.keyCode === 37) {
    const neighbourLeftImgId = +modalImg.id - 1;
  let neighbourLeftImg = document.getElementById(neighbourLeftImgId);
  if (!neighbourLeftImg) neighbourLeftImg = listNode.lastChild.querySelector('img');
  modalImg.src = neighbourLeftImg.dataset.source;
  modalImg.alt = neighbourLeftImg.alt;
  modalImg.id = neighbourLeftImg.id;
  };
  

});

// const arrowBtnLeft = document.addEventListener('keydown', e => {
 

  

  
// });


