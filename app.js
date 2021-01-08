const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.overlay');
const element=document.querySelector('.element')


      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        menuToggle.classList.toggle('move');
        element.classList.toggle('right');
        showcase.classList.toggle('active');
      })