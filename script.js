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

// Akhir Navbar

// scroll
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  
  if(wScroll > -1 && wScroll < 740){
    // Home-on
    $("nav ul li ion-icon.Home").addClass('w-[5rem]')
    $("nav ul li ion-icon.Home").removeClass('p-4')
    $("nav ul li ion-icon.Home").addClass('pl-1')
    $("nav ul li ion-icon.Home").addClass('py-4')
    $("nav ul li ion-icon.Home").addClass('pr-16')
    $("nav ul li ion-icon.Home").removeClass('bg-slate-200')
    $("nav ul li ion-icon.Home").addClass('bg-cyan-500')
    $("nav ul li div.Home").removeClass('hidden')
    // About-off
    $("nav ul li ion-icon.About").removeClass('w-[5rem]')
    $("nav ul li ion-icon.About").addClass('p-4')
    $("nav ul li ion-icon.About").removeClass('pl-1')
    $("nav ul li ion-icon.About").removeClass('py-4')
    $("nav ul li ion-icon.About").removeClass('pr-16')
    $("nav ul li ion-icon.About").addClass('bg-slate-200')
    $("nav ul li ion-icon.About").removeClass('bg-cyan-500')
    $("nav ul li div.About").addClass('hidden')
    // Project-off
    $("nav ul li ion-icon.Project").removeClass('w-[5rem]')
    $("nav ul li ion-icon.Project").addClass('p-4')
    $("nav ul li ion-icon.Project").removeClass('pl-1')
    $("nav ul li ion-icon.Project").removeClass('py-4')
    $("nav ul li ion-icon.Project").removeClass('pr-16')
    $("nav ul li ion-icon.Project").addClass('bg-slate-200')
    $("nav ul li ion-icon.Project").removeClass('bg-cyan-500')
    $("nav ul li div.Project").addClass('hidden')
    // Contact-off
    $("nav ul li ion-icon.Contact").removeClass('w-[5rem]')
    $("nav ul li ion-icon.Contact").addClass('p-4')
    $("nav ul li ion-icon.Contact").removeClass('pl-1')
    $("nav ul li ion-icon.Contact").removeClass('py-4')
    $("nav ul li ion-icon.Contact").removeClass('pr-16')
    $("nav ul li ion-icon.Contact").addClass('bg-slate-200')
    $("nav ul li ion-icon.Contact").removeClass('bg-cyan-500')
    $("nav ul li div.Contact").addClass('hidden')
  }else if(wScroll>740 && wScroll < 1470){
    // Home-off
    $("nav ul li ion-icon.Home").removeClass('w-[5rem]')
    $("nav ul li ion-icon.Home").addClass('p-4')
    $("nav ul li ion-icon.Home").removeClass('pl-1')
    $("nav ul li ion-icon.Home").removeClass('py-4')
    $("nav ul li ion-icon.Home").removeClass('pr-16')
    $("nav ul li ion-icon.Home").addClass('bg-slate-200')
    $("nav ul li ion-icon.Home").removeClass('bg-cyan-500')
    $("nav ul li div.Home").addClass('hidden')
    // About-on
    $("nav ul li ion-icon.About").addClass('w-[5rem]')
    $("nav ul li ion-icon.About").removeClass('p-4')
    $("nav ul li ion-icon.About").addClass('pl-1')
    $("nav ul li ion-icon.About").addClass('py-4')
    $("nav ul li ion-icon.About").addClass('pr-16')
    $("nav ul li ion-icon.About").removeClass('bg-slate-200')
    $("nav ul li ion-icon.About").addClass('bg-cyan-500')
    $("nav ul li div.About").removeClass('hidden')
    // Project-off
    $("nav ul li ion-icon.Project").removeClass('w-[5rem]')
    $("nav ul li ion-icon.Project").addClass('p-4')
    $("nav ul li ion-icon.Project").removeClass('pl-1')
    $("nav ul li ion-icon.Project").removeClass('py-4')
    $("nav ul li ion-icon.Project").removeClass('pr-16')
    $("nav ul li ion-icon.Project").addClass('bg-slate-200')
    $("nav ul li ion-icon.Project").removeClass('bg-cyan-500')
    $("nav ul li div.Project").addClass('hidden')
    // Contact-off
    $("nav ul li ion-icon.Contact").removeClass('w-[5rem]')
    $("nav ul li ion-icon.Contact").addClass('p-4')
    $("nav ul li ion-icon.Contact").removeClass('pl-1')
    $("nav ul li ion-icon.Contact").removeClass('py-4')
    $("nav ul li ion-icon.Contact").removeClass('pr-16')
    $("nav ul li ion-icon.Contact").addClass('bg-slate-200')
    $("nav ul li ion-icon.Contact").removeClass('bg-cyan-500')
    $("nav ul li div.Contact").addClass('hidden')
  }else if(wScroll > 1470 && wScroll < 1700){
    // Home-off
    $("nav ul li ion-icon.Home").removeClass('w-[5rem]')
    $("nav ul li ion-icon.Home").addClass('p-4')
    $("nav ul li ion-icon.Home").removeClass('pl-1')
    $("nav ul li ion-icon.Home").removeClass('py-4')
    $("nav ul li ion-icon.Home").removeClass('pr-16')
    $("nav ul li ion-icon.Home").addClass('bg-slate-200')
    $("nav ul li ion-icon.Home").removeClass('bg-cyan-500')
    $("nav ul li div.Home").addClass('hidden')
    // About-off
    $("nav ul li ion-icon.About").removeClass('w-[5rem]')
    $("nav ul li ion-icon.About").addClass('p-4')
    $("nav ul li ion-icon.About").removeClass('pl-1')
    $("nav ul li ion-icon.About").removeClass('py-4')
    $("nav ul li ion-icon.About").removeClass('pr-16')
    $("nav ul li ion-icon.About").addClass('bg-slate-200')
    $("nav ul li ion-icon.About").removeClass('bg-cyan-500')
    $("nav ul li div.About").addClass('hidden')
    // Project-on
    $("nav ul li ion-icon.Project").addClass('w-[5rem]')
    $("nav ul li ion-icon.Project").removeClass('p-4')
    $("nav ul li ion-icon.Project").addClass('pl-1')
    $("nav ul li ion-icon.Project").addClass('py-4')
    $("nav ul li ion-icon.Project").addClass('pr-16')
    $("nav ul li ion-icon.Project").removeClass('bg-slate-200')
    $("nav ul li ion-icon.Project").addClass('bg-cyan-500')
    $("nav ul li div.Project").removeClass('hidden')
    // Contact-off
    $("nav ul li ion-icon.Contact").removeClass('w-[5rem]')
    $("nav ul li ion-icon.Contact").addClass('p-4')
    $("nav ul li ion-icon.Contact").removeClass('pl-1')
    $("nav ul li ion-icon.Contact").removeClass('py-4')
    $("nav ul li ion-icon.Contact").removeClass('pr-16')
    $("nav ul li ion-icon.Contact").addClass('bg-slate-200')
    $("nav ul li ion-icon.Contact").removeClass('bg-cyan-500')
    $("nav ul li div.Contact").addClass('hidden')
  }else{
    // Home-off
    $("nav ul li ion-icon.Home").removeClass('w-[5rem]')
    $("nav ul li ion-icon.Home").addClass('p-4')
    $("nav ul li ion-icon.Home").removeClass('pl-1')
    $("nav ul li ion-icon.Home").removeClass('py-4')
    $("nav ul li ion-icon.Home").removeClass('pr-16')
    $("nav ul li ion-icon.Home").addClass('bg-slate-200')
    $("nav ul li ion-icon.Home").removeClass('bg-cyan-500')
    $("nav ul li div.Home").addClass('hidden')
    // About
    $("nav ul li ion-icon.About").removeClass('w-[5rem]')
    $("nav ul li ion-icon.About").addClass('p-4')
    $("nav ul li ion-icon.About").removeClass('pl-1')
    $("nav ul li ion-icon.About").removeClass('py-4')
    $("nav ul li ion-icon.About").removeClass('pr-16')
    $("nav ul li ion-icon.About").addClass('bg-slate-200')
    $("nav ul li ion-icon.About").removeClass('bg-cyan-500')
    $("nav ul li div.About").addClass('hidden')
    // Project
    $("nav ul li ion-icon.Project").removeClass('w-[5rem]')
    $("nav ul li ion-icon.Project").addClass('p-4')
    $("nav ul li ion-icon.Project").removeClass('pl-1')
    $("nav ul li ion-icon.Project").removeClass('py-4')
    $("nav ul li ion-icon.Project").removeClass('pr-16')
    $("nav ul li ion-icon.Project").addClass('bg-slate-200')
    $("nav ul li ion-icon.Project").removeClass('bg-cyan-500')
    $("nav ul li div.Project").addClass('hidden')
    // Contact-on
    $("nav ul li ion-icon.Contact").addClass('w-[5rem]')
    $("nav ul li ion-icon.Contact").removeClass('p-4')
    $("nav ul li ion-icon.Contact").addClass('pl-1')
    $("nav ul li ion-icon.Contact").addClass('py-4')
    $("nav ul li ion-icon.Contact").addClass('pr-16')
    $("nav ul li ion-icon.Contact").removeClass('bg-slate-200')
    $("nav ul li ion-icon.Contact").addClass('bg-cyan-500')
    $("nav ul li div.Contact").removeClass('hidden')
  }

})
// akhir scroll