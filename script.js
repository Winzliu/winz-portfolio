// Navbar
// const li = document.querySelectorAll('nav ul li ion-icon')

// li.forEach(el => {
//   el.addEventListener('click',function(e){
    
//     li.forEach(a => {
//       if(a.classList.contains('w-[5rem]')){
//         a.classList.remove('w-[5rem]')
//         a.classList.add('p-4')
//         a.classList.remove('pl-1')
//         a.classList.remove('py-4')
//         a.classList.remove('pr-16')
//         a.classList.add('bg-slate-200')
//         a.classList.remove('bg-cyan-500')
//         a.parentElement.nextSibling.nextSibling.classList.add('hidden')
//       }
//     })
    
//     e.target.classList.add('w-[5rem]')
//     e.target.classList.remove('p-4')
//     e.target.classList.add('pl-1')
//     e.target.classList.add('py-4')
//     e.target.classList.add('pr-16')
//     e.target.classList.remove('bg-slate-200')
//     e.target.classList.add('bg-cyan-500')
//     e.target.parentElement.nextSibling.nextSibling.classList.remove('hidden')

//   })
// });

const hamburger = document.querySelector("nav div input")

hamburger.addEventListener('click', function(){
  this.parentElement.previousSibling.previousSibling.classList.toggle('hidden')
  this.parentElement.parentElement.classList.toggle('bg-slate-500')
})

// Akhir Navbar

// scroll
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  
  if(wScroll > -1 && wScroll < 580){
    // Home-on
    $("nav ul li ion-icon.Home").addClass('md:w-[5rem]')
    $("nav ul li ion-icon.Home").removeClass('md:p-4')
    $("nav ul li ion-icon.Home").addClass('md:pl-1')
    $("nav ul li ion-icon.Home").addClass('md:py-4')
    $("nav ul li ion-icon.Home").addClass('md:pr-16')
    $("nav ul li ion-icon.Home").removeClass('md:bg-slate-200')
    $("nav ul li ion-icon.Home").addClass('md:bg-cyan-500')
    $("nav ul li div.Home").removeClass('md:hidden')
    // About-off
    $("nav ul li ion-icon.About").removeClass('md:w-[5rem]')
    $("nav ul li ion-icon.About").addClass('md:p-4')
    $("nav ul li ion-icon.About").removeClass('md:pl-1')
    $("nav ul li ion-icon.About").removeClass('md:py-4')
    $("nav ul li ion-icon.About").removeClass('md:pr-16')
    $("nav ul li ion-icon.About").addClass('md:bg-slate-200')
    $("nav ul li ion-icon.About").removeClass('md:bg-cyan-500')
    $("nav ul li div.About").addClass('md:hidden')
    // Project-off
    $("nav ul li ion-icon.Project").removeClass('md:w-[5rem]')
    $("nav ul li ion-icon.Project").addClass('md:p-4')
    $("nav ul li ion-icon.Project").removeClass('md:pl-1')
    $("nav ul li ion-icon.Project").removeClass('md:py-4')
    $("nav ul li ion-icon.Project").removeClass('md:pr-16')
    $("nav ul li ion-icon.Project").addClass('md:bg-slate-200')
    $("nav ul li ion-icon.Project").removeClass('md:bg-cyan-500')
    $("nav ul li div.Project").addClass('md:hidden')
    // Contact-off
    $("nav ul li ion-icon.Contact").removeClass('md:w-[5rem]')
    $("nav ul li ion-icon.Contact").addClass('md:p-4')
    $("nav ul li ion-icon.Contact").removeClass('md:pl-1')
    $("nav ul li ion-icon.Contact").removeClass('md:py-4')
    $("nav ul li ion-icon.Contact").removeClass('md:pr-16')
    $("nav ul li ion-icon.Contact").addClass('md:bg-slate-200')
    $("nav ul li ion-icon.Contact").removeClass('md:bg-cyan-500')
    $("nav ul li div.Contact").addClass('md:hidden')
  }else if(wScroll>=580 && wScroll < 1300){
    // Home-off
    $("nav ul li ion-icon.Home").removeClass('md:w-[5rem]')
    $("nav ul li ion-icon.Home").addClass('md:p-4')
    $("nav ul li ion-icon.Home").removeClass('md:pl-1')
    $("nav ul li ion-icon.Home").removeClass('md:py-4')
    $("nav ul li ion-icon.Home").removeClass('md:pr-16')
    $("nav ul li ion-icon.Home").addClass('md:bg-slate-200')
    $("nav ul li ion-icon.Home").removeClass('md:bg-cyan-500')
    $("nav ul li div.Home").addClass('md:hidden')
    // About-on
    $("nav ul li ion-icon.About").addClass('md:w-[5rem]')
    $("nav ul li ion-icon.About").removeClass('md:p-4')
    $("nav ul li ion-icon.About").addClass('md:pl-1')
    $("nav ul li ion-icon.About").addClass('md:py-4')
    $("nav ul li ion-icon.About").addClass('md:pr-16')
    $("nav ul li ion-icon.About").removeClass('md:bg-slate-200')
    $("nav ul li ion-icon.About").addClass('md:bg-cyan-500')
    $("nav ul li div.About").removeClass('md:hidden')
    // Project-off
    $("nav ul li ion-icon.Project").removeClass('md:w-[5rem]')
    $("nav ul li ion-icon.Project").addClass('md:p-4')
    $("nav ul li ion-icon.Project").removeClass('md:pl-1')
    $("nav ul li ion-icon.Project").removeClass('md:py-4')
    $("nav ul li ion-icon.Project").removeClass('md:pr-16')
    $("nav ul li ion-icon.Project").addClass('md:bg-slate-200')
    $("nav ul li ion-icon.Project").removeClass('md:bg-cyan-500')
    $("nav ul li div.Project").addClass('md:hidden')
    // Contact-off
    $("nav ul li ion-icon.Contact").removeClass('md:w-[5rem]')
    $("nav ul li ion-icon.Contact").addClass('md:p-4')
    $("nav ul li ion-icon.Contact").removeClass('md:pl-1')
    $("nav ul li ion-icon.Contact").removeClass('md:py-4')
    $("nav ul li ion-icon.Contact").removeClass('md:pr-16')
    $("nav ul li ion-icon.Contact").addClass('md:bg-slate-200')
    $("nav ul li ion-icon.Contact").removeClass('md:bg-cyan-500')
    $("nav ul li div.Contact").addClass('md:hidden')
  }else if(wScroll >= 1300 && wScroll < 1700){
    // Home-off
    $("nav ul li ion-icon.Home").removeClass('md:w-[5rem]')
    $("nav ul li ion-icon.Home").addClass('md:p-4')
    $("nav ul li ion-icon.Home").removeClass('md:pl-1')
    $("nav ul li ion-icon.Home").removeClass('md:py-4')
    $("nav ul li ion-icon.Home").removeClass('md:pr-16')
    $("nav ul li ion-icon.Home").addClass('md:bg-slate-200')
    $("nav ul li ion-icon.Home").removeClass('md:bg-cyan-500')
    $("nav ul li div.Home").addClass('md:hidden')
    // About-off
    $("nav ul li ion-icon.About").removeClass('md:w-[5rem]')
    $("nav ul li ion-icon.About").addClass('md:p-4')
    $("nav ul li ion-icon.About").removeClass('md:pl-1')
    $("nav ul li ion-icon.About").removeClass('md:py-4')
    $("nav ul li ion-icon.About").removeClass('md:pr-16')
    $("nav ul li ion-icon.About").addClass('md:bg-slate-200')
    $("nav ul li ion-icon.About").removeClass('md:bg-cyan-500')
    $("nav ul li div.About").addClass('md:hidden')
    // Project-on
    $("nav ul li ion-icon.Project").addClass('md:w-[5rem]')
    $("nav ul li ion-icon.Project").removeClass('md:p-4')
    $("nav ul li ion-icon.Project").addClass('md:pl-1')
    $("nav ul li ion-icon.Project").addClass('md:py-4')
    $("nav ul li ion-icon.Project").addClass('md:pr-16')
    $("nav ul li ion-icon.Project").removeClass('md:bg-slate-200')
    $("nav ul li ion-icon.Project").addClass('md:bg-cyan-500')
    $("nav ul li div.Project").removeClass('md:hidden')
    // Contact-off
    $("nav ul li ion-icon.Contact").removeClass('md:w-[5rem]')
    $("nav ul li ion-icon.Contact").addClass('md:p-4')
    $("nav ul li ion-icon.Contact").removeClass('md:pl-1')
    $("nav ul li ion-icon.Contact").removeClass('md:py-4')
    $("nav ul li ion-icon.Contact").removeClass('md:pr-16')
    $("nav ul li ion-icon.Contact").addClass('md:bg-slate-200')
    $("nav ul li ion-icon.Contact").removeClass('md:bg-cyan-500')
    $("nav ul li div.Contact").addClass('md:hidden')
  }else{
    // Home-off
    $("nav ul li ion-icon.Home").removeClass('md:w-[5rem]')
    $("nav ul li ion-icon.Home").addClass('md:p-4')
    $("nav ul li ion-icon.Home").removeClass('md:pl-1')
    $("nav ul li ion-icon.Home").removeClass('md:py-4')
    $("nav ul li ion-icon.Home").removeClass('md:pr-16')
    $("nav ul li ion-icon.Home").addClass('md:bg-slate-200')
    $("nav ul li ion-icon.Home").removeClass('md:bg-cyan-500')
    $("nav ul li div.Home").addClass('md:hidden')
    // About
    $("nav ul li ion-icon.About").removeClass('md:w-[5rem]')
    $("nav ul li ion-icon.About").addClass('md:p-4')
    $("nav ul li ion-icon.About").removeClass('md:pl-1')
    $("nav ul li ion-icon.About").removeClass('md:py-4')
    $("nav ul li ion-icon.About").removeClass('md:pr-16')
    $("nav ul li ion-icon.About").addClass('md:bg-slate-200')
    $("nav ul li ion-icon.About").removeClass('md:bg-cyan-500')
    $("nav ul li div.About").addClass('md:hidden')
    // Project
    $("nav ul li ion-icon.Project").removeClass('md:w-[5rem]')
    $("nav ul li ion-icon.Project").addClass('md:p-4')
    $("nav ul li ion-icon.Project").removeClass('md:pl-1')
    $("nav ul li ion-icon.Project").removeClass('md:py-4')
    $("nav ul li ion-icon.Project").removeClass('md:pr-16')
    $("nav ul li ion-icon.Project").addClass('md:bg-slate-200')
    $("nav ul li ion-icon.Project").removeClass('md:bg-cyan-500')
    $("nav ul li div.Project").addClass('md:hidden')
    // Contact-on
    $("nav ul li ion-icon.Contact").addClass('md:w-[5rem]')
    $("nav ul li ion-icon.Contact").removeClass('md:p-4')
    $("nav ul li ion-icon.Contact").addClass('md:pl-1')
    $("nav ul li ion-icon.Contact").addClass('md:py-4')
    $("nav ul li ion-icon.Contact").addClass('md:pr-16')
    $("nav ul li ion-icon.Contact").removeClass('md:bg-slate-200')
    $("nav ul li ion-icon.Contact").addClass('md:bg-cyan-500')
    $("nav ul li div.Contact").removeClass('md:hidden')
  }

})
// akhir scroll