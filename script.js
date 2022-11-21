// Navbar
const li = document.querySelectorAll('nav ul li ion-icon')

li.forEach(el => {
  el.addEventListener('click',function(e){
    
    li.forEach(a => {
      if(a.classList.contains('w-[5rem]')){
        a.classList.remove('w-[5rem]')
        a.classList.add('p-4')
        a.classList.remove('pl-1')
        a.classList.remove('py-4')
        a.classList.remove('pr-16')
        a.classList.add('bg-slate-200')
        a.classList.remove('bg-cyan-500')
        a.parentElement.nextSibling.nextSibling.classList.add('hidden')
      }
    })
    
    e.target.classList.add('w-[5rem]')
    e.target.classList.remove('p-4')
    e.target.classList.add('pl-1')
    e.target.classList.add('py-4')
    e.target.classList.add('pr-16')
    e.target.classList.remove('bg-slate-200')
    e.target.classList.add('bg-cyan-500')
    e.target.parentElement.nextSibling.nextSibling.classList.remove('hidden')

  })
});

// Akhir Navbar