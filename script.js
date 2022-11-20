// Navbar
const li = document.querySelectorAll('nav ul li ion-icon')

li.forEach(el => {
  el.addEventListener('click',function(e){
    e.target.classList.add('w-32')
    e.target.classList.remove('p-4')
    e.target.classList.add('pl-1')
    e.target.classList.add('py-4')
    e.target.classList.add('pr-20')
    e.target.nextSibling.nextSibling.classList.remove('hidden')
    // console.log(e.target.nextSibling.nextSibling)
  })
});

// Akhir Navbar