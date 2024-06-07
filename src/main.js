import 'normalize.css'
import './output.css'
import imgHeaderMobile from './images/image-header-mobile.jpg'
import imgHeaderDesktop from './images/image-header-desktop.jpg'

document.querySelector('#app').innerHTML = /* html */`
  <div class="flex flex-col w-5/6 min-w-[326.5px] max-w-[1109px] mx-auto font-inter font-normal text-center text-white rounded-lg overflow-hidden md:flex-row-reverse">
    <header class="relative after:absolute after:top-0 after:bottom-0 after:block after:w-full after:bg-soft-violet after:opacity-50 md:basis-[48.75%] md:flex-shrink-0">
      <picture>
        <source 
          media="(min-width: 768px)" 
          srcset=${imgHeaderDesktop} 
        >
        <img class="w-full h-full object-cover" src=${imgHeaderMobile} alt="Header">
      </picture>
    </header>
    <footer class="flex flex-col gap-y-9 pt-10 pb-9 px-8 bg-dark-desaturated-blue md:justify-between md:flex-grow md:p-[4.45rem] md:pb-[3.85rem]">
      <div class="md:text-left">
        <h1 class="mb-5 font-bold text-[1.75rem] leading-8 md:mb-7 md:text-4xl">Get <span class="text-soft-violet">insights</span> that help your business grow.</h1>
        <p class="text-[15px] leading-6 text-slightly-transparent-white-for-main-paragraph md:w-11/12">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
      </div>
      <ul class="flex flex-col gap-y-[1.45rem] uppercase md:flex-row md:justify-between md:max-w-[336px]">
        <li class="flex flex-col md:text-left">
          <span class="font-bold text-[1.525rem] lowercase">10k+</span>
          <span class="font-lexend-deca text-[.825rem] text-[#76738c]">companies<span>
        </li>
        <li class="flex flex-col md:text-left">
          <span class="font-bold text-[1.525rem]">314</span>
          <span class="font-lexend-deca text-[.825rem] text-[#76738c]">templates<span>
        </li>
        <li class="flex flex-col md:text-left">
          <span class="font-bold text-[1.525rem]">12m+</span>
          <span class="font-lexend-deca text-[.825rem] text-[#76738c]">queries<span>
        </li>
      </ul>
    </footer>
  </div>
`
