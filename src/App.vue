<!-- eslint-disable max-len -->
<template>
  <div class="app-container">
    <header class="flex justify-between items-center h-14">
      <div class="flex items-center">
        <div class="flex items-center ">
          <img class="mr-1.5" src="./assets/images/logo.svg" alt="logo">
          <p class="text-xl font-sen font-normal">Salty</p>
        </div>
        <nav class="hidden xl:flex font-main ml-[72px] text-blue-grey tracking-[.16px]">
          <a href="#" class="ml-9">Home</a>
          <a href="#" class="ml-9">About us</a>
          <a href="#" class="ml-9">Destinations</a>
          <a href="#" class="ml-9">Tours</a>
          <a href="#" class="ml-9">Blog</a>
        </nav>
      </div>
      <div class="hidden xl:flex">
        <button class="flex justify-center items-center w-[170px] h-[54px] btn border-2 border-coral-color">
          <span class="mr-1.5 text-coral-color font-nav font-medium">Book Now</span>
          <img src="./assets/images/red-arrow.svg" alt="arrow-book-now">
        </button>
      </div>
      <button class="inline-block xl:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </header>
    <main>
      <section class="xl:flex justify-between">
        <div class="mt-12 xl:mt-[108px]">
          <h1 class="text-4xl font-sen font-bold text-primary-header-color xl:text-[84px] xl:leading-[86px]">Discover the <br class="hidden xl:inline-block">Best Lovely<br>Places</h1>
          <p class="max-w-[500px] text-sm mt-4 font-main font-normal text-primary-text-color leading-6 tracking-wide xl:max-w-[490px] xl:mt-[26px] xl:text-lg xl:leading-7">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
          <div class=" max-w-lg flex items-center h-[76px] mt-11 pl-7 pr-[20px] bg-bg-white-color  rounded-[100px]">
            <div class="mr-[68px]">
              <p class="search-input-header">Where</p>
              <div class="flex truncate">
                <p class="search-input-text truncate">Center Point, Lo...</p>
                <img src="./assets/images/point.svg" alt="point">
              </div>
            </div>
            <div>
              <p class="search-input-header">Date</p>
              <div class="flex">
                <p class="search-input-text">
                  09th March 2021
                </p>
                <img src="./assets/images/date.svg" alt="date">
              </div>
            </div>
            <button
              class="ml-[57px] p-3 bg-coral-color border-none rounded-full cursor-pointer"
              type="submit"
            >
              <img src="./assets/images/dandruff.svg" alt="dandruff">
            </button>
          </div>
        </div>
        <div
          class="mx-auto relative w-[470px] h-[596px] "
        >
          <img
            class="absolute top-12 left-4"
            src="./assets/images/traveler-1.png"
            alt="about image"
          >
          <img
            class="absolute top-[134px] -right-6"
            src="./assets/images/globe.svg"
            alt="globe"
          >
          <img
            class="absolute top-24 left-14 rotate-[-34deg)]"
            src="./assets/images/map.svg"
            alt="map"
          >
          <div
            class="w-[133px] h-[146px] bg-bg-white-color rounded-[10px] absolute bottom-11 -left-11"
          >
            <img src="./assets/images/desert.svg" alt="desert">
            <div
              class="absolute top-7 -right-3 flex pt-2 pl-1.5 pr-1 pb-1.5 bg-white rounded-[5px]"
            >
              <img class="mr-1" src="./assets/images/point-black.svg" alt="pointer">
              <p class="text-[10px]  leading-3">Dubai</p>
            </div>
            <p class="mt-3 text-center  text-xs leading-[15px]">Dubai moruvumi</p>
            <div class="flex absolute -bottom-4 right-1">
              <img
                class="w-[33px] h-[33px] rounded-[50%] border-2 border-white"
                src="./assets/images/ava1.png"
                alt="avatar"
              >
              <img
                class="w-[33px] h-[33px] rounded-[50%] border-2 border-white translate-x-[-10px]"
                src="./assets/images/ava2.png"
                alt="avatar"
              >
              <img
                class="w-[33px] h-[33px] rounded-[50%] border-2 border-white translate-x-[-20px]"
                src="./assets/images/ava3.png"
                alt="avatar"
              >
            </div>
          </div>
        </div>
      </section>
      <section class="mt-16 xl:mt-44">
        <div class="flex justify-between items-start">
          <div>
            <h1 class="text-4xl font-main font-semibold  leading-[56px] xl:text-[56px]">Categories</h1>
            <p class="max-w-[370px] mt-6 font-main font-normal text-base text-primary-text-color leading-[26px] tracking-wide">Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</p>
          </div>
          <div class="flex justify-center flex-row">
            <div class="slider-btn">
              <img class="pt-[20px] pl-[21px]" src="./assets/images/dark-arrow.svg" alt="left-button">
            </div>
            <div class="slider-btn ml-[16px] bg-primary-header-color">
              <img class="pt-[20px] pl-[23px]" src="./assets/images/light-arrow.svg" alt="right-button">
            </div>
          </div>
        </div>
        <div class="flex flex-wrap mt-[60px] text-xl text-center font-main font-medium text-primary-header-color xl:flex-nowrap xl:shrink xl:text-[26px]">
          <figure class="pl-[20px] xl:pl-[30px] xl:p-0">
            <img class="w-[170px]" src="./assets/images/beach.png" alt="Beach">
            <figcaption class="pt-[18px] leading-[26px]">Beach</figcaption>
          </figure>
          <figure class="pl-[20px] pb-4 xl:pl-[30px] xl:pb-0">
            <img class="w-[170px]" src="./assets/images/desert.png" alt="Desert">
            <figcaption class="pt-[18px] leading-[26px]">Desert</figcaption>
          </figure>
          <figure class="pl-[20px] pb-4 xl:pl-[30px] xl:pb-0">
            <img class="w-[170px]" src="./assets/images/mountain.png" alt="Mountain">
            <figcaption class="pt-[18px] leading-[26px]">Mountain</figcaption>
          </figure>
          <figure class="pl-[20px] pb-4 xl:pl-[30px] xl:pb-0">
            <img class="w-[170px]" src="./assets/images/temple.png" alt="Temple">
            <figcaption class="pt-[18px] leading-[26px]">Temple</figcaption>
          </figure>
          <figure class="pl-[20px] pb-4 xl:pl-[30px] xl:pb-0">
            <img class="w-[170px]" src="./assets/images/tower.png" alt="Tower">
            <figcaption class="pt-[18px] leading-[26px]">Tower</figcaption>
          </figure>
          <figure class="pl-[20px] pb-4 xl:pl-[30px] xl:pb-0">
            <img class="w-[170px]" src="./assets/images/pyramid.png" alt="Pyramid">
            <figcaption class="pt-[18px] leading-[26px]">Pyramid</figcaption>
          </figure>
        </div>
      </section>
      <section class="mt-16 xl:mt-[140px] xl:flex justify-between">
        <div class="w-[492px] h-[659px] relative">
          <img class="absolute left-1" src="./assets/images/traveler-2.png" alt="traveler">
          <div
            class="absolute bottom-44 -left-14 flex flex-col items-center py-[20px] bg-white rounded-[14px] w-[140px]"
          >
            <img class="pt-[20px]" src="./assets/images/destination-icon.svg" alt="destinations">
            <p class="pt-[20px] font-semibold text-[30px] text-coral-color">600%</p>
            <span class="pt-1 font-normal text-[21px] leading-[29px]  text-lightgrey-text-span-color">Destinations</span>
          </div>
          <div
            class="absolute bottom-[122px] -right-2.5 px-[21px] py-[20px] bg-white rounded-[10px] w-[171px]"
          >
            <div class="flex items-center mb-[10px]">
              <img class="mr-[16px]" src="./assets/images/signal-icon.svg" alt="signal">
              <p class="font-semibold text-2xl text-primary-header-color">5000+</p>
            </div>
            <span class="ml-[38px] font-nav font-normal text-lightgrey-text-span-color">Customers</span>
          </div>
        </div>

        <div class="pt-8 font-main xl:pl-[153px] xl:pt-16">
          <h1 class="font-semibold text-xl text-coral-color leading-5 tracking-[4px]">Our Experience</h1>
          <h2 class="text-4xl pt-5 font-semibold text-primary-header-color xl:leading-[66px] xl:text-[56px]">Our Stories Have <br class="hidden xl:inline"> Adventures</h2>
          <p class="max-w-[456px] pt-5 font-normal text-base text-primary-text-color">
            We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!
          </p>
          <div class="flex justify-center pt-[40px]">
            <div class="card-bg ">
              <p class="font-semibold text-[46px] text-coral-color">12K+</p>
              <span class="font-normal text-[21px] leading-[29px]  text-lightgrey-text-span-color tracking-wide">Success <br> Journey</span>
            </div>
            <div class="card-bg mx-[20px]">
              <p class=" font-semibold text-[46px] text-coral-color">16+</p>
              <span class="font-normal text-[21px] leading-[29px]  text-lightgrey-text-span-color tracking-wide">Awards <br> Winning</span>
            </div>
            <div class="card-bg">
              <p class="font-semibold text-[46px] text-coral-color">20+</p>
              <span class="font-normal text-[21px] leading-[29px] text-lightgrey-text-span-color tracking-wide">Years Of <br> Experience</span>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-16 xl:mt-28">
        <div class="flex justify-between items-center">
          <h1 class="text-4xl font-main font-semibold xl:text-[56px] xl:leading-[66px]">Find Popular <br> Destination</h1>
          <div class="flex justify-center flex-row">
            <div class="slider-btn">
              <img class="pt-[20px] pl-[21px]" src="./assets/images/dark-arrow.svg" alt="left-button">
            </div>
            <div class="slider-btn ml-[16px] bg-primary-header-color">
              <img class="pt-[20px] pl-[23px]" src="./assets/images/light-arrow.svg" alt="right-button">
            </div>
          </div>
        </div>
        <div class="flex mt-[35px] overflow-hidden xl:w-[1209px]">
          <div class="tour-card">
            <img class="max-w-[362px] rounded-[16px]" src="./assets/images/mountain-tour.png" alt="Mountain Hiking Tour">
            <h3 class="tour-header">Mountain Hiking Tour</h3>
            <p class="tour-text">Mountain Hiking Tour</p>
            <div class="flex">
              <p class="tour-price">$99<span class="tour-price-span">/Person</span></p>
              <a class="book-btn  hover:bg-primary-header-color hover:text-bg-white-color ease-in-out duration-300" href="#">
                <p class="book-btn-text">Book Now</p>
              </a>
            </div>
          </div>
          <div class="tour-card ">
            <img class="max-w-[362px] rounded-[16px]" src="./assets/images/peru-tour.png" alt="Machu Picchu Tour">
            <h3 class="tour-header">Machu Picchu, Peru</h3>
            <p class="tour-text">Machu Picchu, Peru</p>
            <div class="flex">
              <p class="tour-price">$99<span class="tour-price-span">/Person</span></p>
              <a class="book-btn hover:bg-primary-header-color hover:text-bg-white-color ease-in-out duration-300" href="#">
                <p class="book-btn-text">Book Now</p>
              </a>
            </div>
          </div>
          <div class="tour-card">
            <img class="max-w-[362px] rounded-[16px]" src="./assets/images/arizona-tour.png" alt="The Grand Canyon Tour">
            <h3 class="tour-header">The Grand Canyon, Arizona</h3>
            <p class="tour-text">The Grand Canyon, Arizona</p>
            <div class="flex">
              <p class="tour-price">$99<span class="tour-price-span">/Person</span></p>
              <a class="book-btn hover:bg-primary-header-color hover:text-bg-white-color ease-in-out duration-300" href="#">
                <p class="book-btn-text">Book Now</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-16 xl:mt-32">
        <div>
          <h2 class="text-4xl font-main font-semibold xl:text-[56px] xl:leading-[66px] text-primary-header-color text-center">
            Top Destinations
          </h2>
          <p class="text-center font-main text-primary-text-color mt-4 mb-5">
            Sost Brilliant reasons Entrada should be your one-stop-shop!
          </p>
          <div class="flex flex-wrap justify-center">
            <a href="#" class="mr-3.5 pb-2 xl:pb-0">
              <p class="city-btn hover:bg-primary-header-color hover:text-white-color ease-in-out duration-300">London</p>
            </a>
            <a href="#" class="mr-3.5 pb-2 xl:pb-0">
              <p class="city-btn hover:bg-primary-header-color hover:text-white-color ease-in-out duration-300">Bangkok</p>
            </a>
            <a href="#" class="mr-3.5 pb-2 xl:pb-0">
              <p class="city-btn hover:bg-primary-header-color hover:text-white-color ease-in-out duration-300">England</p>
            </a>
            <a href="#" class="mr-3.5 pb-2 xl:pb-0">
              <p class="city-btn hover:bg-primary-header-color hover:text-white-color ease-in-out duration-300">Singapore</p>
            </a>
            <a href="#" class="mr-3.5 pb-2 xl:pb-0">
              <p class="city-btn hover:bg-primary-header-color hover:text-white-color ease-in-out duration-300">Italy</p>
            </a>
          </div>
        </div>
        <div class="parent-grid mt-[51px]">
          <div class="grid1-sm xl:grid1">
            <figure class="relative">
              <img class="h-[250px]" src="./assets/images/vietnam-1.png" alt="vietnam">
              <span class="figcaption-light">3.5</span>
              <div class="absolute left-6 bottom-6 flex flex-col">
                <figcaption class="figcaption-country">Vientam</figcaption>
                <figcaption class="figcaption-city">Worefall</figcaption>
              </div>
            </figure>
          </div>
          <div class="grid2">
            <figure class="relative">
              <img class="h-[250px]" src="./assets/images/vietnam-2.png" alt="vietnam">
              <span class="figcaption-light">3.5</span>
              <div class="absolute left-6 bottom-6 flex flex-col">
                <figcaption class="figcaption-country">Vientam</figcaption>
                <figcaption class="figcaption-city">Worefall</figcaption>
              </div>
            </figure>
          </div>
          <div class="grid3">
            <figure class="relative">
              <img class="h-[517px]" src="./assets/images/vietnam-3.png" alt="vietnam">
              <span class="figcaption-light">3.5</span>
              <div class="absolute left-6 bottom-6 flex flex-col">
                <figcaption class="figcaption-country">Vientam</figcaption>
                <figcaption class="figcaption-city">Worefall</figcaption>
              </div>
            </figure>
          </div>
          <div class="grid4">
            <figure class="relative">
              <img class="h-[250px]" src="./assets/images/vietnam-4.png" alt="vietnam">
              <span class="figcaption-dark">3.5</span>
              <div class="absolute left-6 bottom-6 flex flex-col">
                <figcaption class="figcaption-country">Vientam</figcaption>
                <figcaption class="figcaption-city">Worefall</figcaption>
              </div>
            </figure>
          </div>
          <div class="grid5">
            <figure class="relative">
              <img class="h-[253px]" src="./assets/images/vietnam-5.png" alt="vietnam">
              <span class="figcaption-dark">3.5</span>
              <div class="absolute left-6 bottom-6 flex flex-col">
                <figcaption class="figcaption-country">Vientam</figcaption>
                <figcaption class="figcaption-city">Worefall</figcaption>
              </div>
            </figure>
          </div>
          <div class="grid6">
            <figure class="relative">
              <img class="h-[253px]" src="./assets/images/vietnam-6.png" alt="vietnam">
              <span class="figcaption-dark">3.5</span>
              <div class="absolute left-6 bottom-6 flex flex-col">
                <figcaption class="figcaption-country">Vientam</figcaption>
                <figcaption class="figcaption-city">Worefall</figcaption>
              </div>
            </figure>
          </div>
        </div>
      </section>
      <section class="mt-16 flex flex-col xl:justify-between xl:flex-row xl:mt-[116px]">
        <img class="w-60 mx-auto xl:w-[400px] p-2" src="./assets/images/traveler-3.png" alt="traveler">
        <div class="mt-[51px]">
          <hr class="w-16 mb-3 border-4 rounded-full border-warm-yellow">
          <h2 class="text-4xl font-main font-semibold text-primary-header-color tracking-normal xl:text-[56px] xl:leading-[66px]">
            A Customer Said <br class="hidden xl:inline">About Us:
          </h2>
          <div class="max-w-[537px] mt-[27px] p-[30px] bg-bg-white-color rounded-[14px]">
            <p class="max-w-[473px] font-main text-lg text-grey-color mb-[26px] leading-8 tracking-wide">
              Salty helped me a lot in finding the best place for our
              first outdoor adventure trip. They responded very
              quickly and gave me a detailed account of the place—
              its history, as well as its best features.
            </p>
            <div class="flex">
              <img class="mr-1 cursor-pointer" src="./assets/images/star.svg" alt="star">
              <img class="mr-1 cursor-pointer" src="./assets/images/star.svg" alt="star">
              <img class="mr-1 cursor-pointer" src="./assets/images/star.svg" alt="star">
              <img class="mr-1 cursor-pointer" src="./assets/images/star.svg" alt="star">
              <img class="cursor-pointer" src="./assets/images/star.svg" alt="star">
            </div>
            <div class="flex mt-[17px]">
              <div>
                <p class="font-main text-xl font-medium text-primary-header-color leading-5 mb-2">
                  Andrew Sarma
                </p>
                <p class="font-main font-normal text-xs leading-3 text-primary-text-color">
                  Enterpreneur
                </p>
              </div>
              <div class="flex ml-[auto]">
                <div class="slider-btn-small">
                  <img class="pt-[13px] pl-[15px]" src="./assets/images/dark-arrow.svg" alt="left-button">
                </div>
                <div class="slider-btn-small ml-[16px] bg-primary-header-color">
                  <img class="pt-[13px] pl-[15px]" src="./assets/images/light-arrow.svg" alt="right-button">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-16 xl:mt-32 relative">
        <img class="absolute w-full" src="./assets/images/curved-lines.svg">
        <div class="max-w-[537px] bg-warm-yellow py-[75px] rounded-[30px] xl:max-w-none">
          <h2 class="text-4xl mb-[16px] text-center font-main font-semibold text-dark-grey tracking-[0.15px] xl:text-[40px] xl:leading-10">
            Sign up to our newsletter
          </h2>
          <p class="max-w-[415px] mx-[auto] mb-10 font-main text-base leading-7 text-center text-grey-color tracking-wide">
            Review latest news, update, and many other things every week.
          </p>
          <form class="relative flex content-center px-[10px] py-[8px] bg-white w-[450px] rounded-[12px] mx-[auto]">
            <input
              class="w-full pl-6 text-sm leading-7 tracking-wide placeholder:text-[14px] placeholder:leading-7"
              type="text"
              placeholder="Enter Your email address"
            >
            <button class="relative w-10 h-10 bg-coral-color rounded-[12px]">
              <img class="absolute top-[7px]" src="./assets/images/paper-plane.svg" alt="form-send-btn">
            </button>
          </form>
        </div>
      </section>
    </main>
    <footer class="footer mt-16 mb-20 flex xl:mt-36">
      <div class="mr-16">
        <div class="flex items-center">
          <img class="mr-1.5" src="./assets/images/logo.svg" alt="logo">
          <p class="text-xl font-sen font-normal">Salty</p>
        </div>
        <p class="mt-5 mb-4 font-main text-base text-primary-text-color leading-[26px] max-w-[141px] xl:mb-10">
          Enjoy the touring with Salty
        </p>
        <div class="flex">
          <img class="mr-3.5" src="./assets/images/facebook.svg" alt="facebook">
          <img class="mr-3.5" src="./assets/images/instagram.svg" alt="instagram">
          <img src="./assets/images/twitter.svg" alt="twitter">
        </div>
      </div>
      <div class="flex flex-wrap ml-[auto]">
        <div class="mr-16 xl:mr-28">
          <h6 class="footer-header">Resources</h6>
          <ul>
            <li class="footer-text"><a href="#">Download</a></li>
            <li class="footer-text"><a href="#">Help Center</a></li>
            <li class="footer-text"><a href="#">Guide Book</a></li>
            <li class="footer-text mb-4"><a href="#">App Directory</a></li>
          </ul>
        </div>
        <div class="mr-16 xl:mr-28">
          <h6 class="footer-header">Travelers</h6>
          <ul>
            <li class="footer-text"><a href="#">Why Travelers</a></li>
            <li class="footer-text"><a href="#">Enterprise</a></li>
            <li class="footer-text"><a href="#">Customer Stories</a></li>
            <li class="footer-text mb-4"><a href="#">Instagram post</a></li>
          </ul>
        </div>
        <div class="mr-16 xl:mr-28">
          <h6 class="footer-header">Company</h6>
          <ul>
            <li class="footer-text"><a href="#">Travelling</a></li>
            <li class="footer-text"><a href="#">About Location</a></li>
            <li class="footer-text"><a href="#">Success</a></li>
            <li class="footer-text mb-4"><a href="#">Information</a></li>
          </ul>
        </div>
        <div>
          <h6 class="footer-header">Get App</h6>
          <ul>
            <li class="footer-text"><a href="#">App Store</a></li>
            <li class="footer-text mb-4"><a href="#">Google Play Store</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
// YOUR CODE HERE
</script>

<style lang="scss">
.app-container {
  max-width: 1440px;
  padding: 24px 135px 80px 135px;
}

.parent-grid {
display: grid;
grid-column-gap: 15px;
grid-row-gap: 15px;
}

.grid1 { grid-area: 1 / 1 / 2 / 2; }
.grid2 { grid-area: 2 / 1 / 3 / 2; }
.grid3 { grid-area: 1 / 2 / 3 / 4; }
.grid4 { grid-area: 1 / 4 / 2 / 6; }
.grid5 { grid-area: 2 / 4 / 3 / 5; }
.grid6 { grid-area: 2 / 5 / 3 / 6; }

// .grid1-sm { grid-area: 1 / 1 / 2 / 2; }
// .grid2-sm { grid-area: 2 / 1 / 3 / 2; }
// .grid3-sm { grid-area: 1 / 2 / 3 / 3; }
// .grid4-sm { grid-area: 3 / 1 / 4 / 3; }
// .grid5-sm { grid-area: 4 / 1 / 5 / 2; }
// .grid6-sm { grid-area: 4 / 2 / 5 / 3; }
</style>
