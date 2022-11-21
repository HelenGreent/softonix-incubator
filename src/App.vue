<template>
  <div class="app-container">
    <header class="flex justify-between items-center">
      <div class="flex items-center">
        <div class="flex items-center ">
          <img class="mr-1.5" src="./assets/styles/images/logo.svg" alt="logo">
          <p class="text-xl font-logo font-normal">Salty</p>
        </div>
        <nav class="flex font-nav ml-[72px] text-link-color tracking-[0.16px]">
          <a href="#" class="ml-9">Home</a>
          <a href="#" class="ml-9">About us</a>
          <a href="#" class="ml-9">Destinations</a>
          <a href="#" class="ml-9">Tours</a>
          <a href="#" class="ml-9">Blog</a>
        </nav>
      </div>
      <div class="flex">
        <button class="flex justify-center items-center w-[170px] h-[54px] btn border-2 border-accent-coral-color">
          <span class="mr-1.5 text-accent-coral-color font-nav font-medium">Book Now</span>
          <img src="./assets/styles/images/red-arrow.svg" alt="arrow-book-now">
        </button>
      </div>
    </header>
    <main>
      <section class="flex justify-between">
        <div class="mt-[74px] truncate">
          <h1 class="font-logo font-bold text-[84px] text-primary-header-color leading-[86px] truncate">Discover the <br> Best Lovely <br> Places</h1>
          <p class="mt-[26px] font-main font-normal text-lg text-primary-text-color leading-7 truncate">Plan and book your perfect trip with expert advice, travel <br> tips, destination information and inspiration from us.</p>
          <div class="flex items-center h-[76px] mt-[40px] pl-[28px] pr-[20px] bg-bg-white-color mx-[auto] rounded-[100px]">
            <div class="mr-[68px]">
              <p class="mb-[8px] text-[18px] leading-[17px]">Where</p>
              <div class="flex">
                <p class="mr-[26px] text-[12px] leading-[12px] text-lightgrey-text-color cursor-pointer">Center Point, Lo...</p>
                <img src="./assets/styles/images/point.svg" alt="point">
              </div>
            </div>
            <div
              class="before:block before:absolute before:h-[47px] before:w-[1px] relative inline-block before:top-[-5px] before:left-[-35px]"
            >
              <p class="text-[18px] leading-[17px] mb-[8px]">Date</p>
              <div class="flex">
                <p class="mr-[26px] text-lightgrey-text-color text-[12px] leading-[12px] cursor-pointer">
                  09th March 2021
                </p>
                <img src="./assets/styles/images/date.svg" alt="date">
              </div>
            </div>
            <img class="pl-[57px] cursor-pointer" src="./assets/styles/images/search.svg" alt="search">
          </div>
        </div>
        <div
          class="relative w-[470px] h-[596px] "
        >
          <img
            class="absolute top-[29px] left-[15px]"
            src="./assets/styles/images/traveler-1.png"
            alt="about image"
          >
          <img
            class="absolute top-[134px] right-[-22px]"
            src="./assets/styles/images/globe.svg"
            alt="globe"
          >
          <img
            class="absolute top-[72px] left-[54px] rotate-[-33.79deg)]"
            src="./assets/styles/images/map.svg"
            alt="map"
          >
          <div
            class="w-[133px] h-[145.7px] bg-[#FFF] rounded-[10px] absolute bottom-[52.3px] left-[-42px]"
          >
            <img src="./assets/styles/images/desert.svg" alt="desert">
            <div
              class="absolute top-[28px] right-[-13px] flex pt-[7px] pl-[6px] pr-[5px] pb-[6px] bg-white rounded-[5px]"
            >
              <img class="mr-[5px]" src="./assets/styles/images/point-black.svg" alt="pointer">
              <p class="text-[10px] leading-[12px]">Dubai</p>
            </div>
            <p class="mt-[11px] text-center text-[12px] leading-[15px]"> Dubai moruvumi </p>
            <div class="flex absolute bottom-[-15px] right-[4px]">
              <img
                class="w-[33.3px] h-[33.3px] rounded-[50%] border-[2.5px] border-white"
                src="./assets/styles/images/ava1.png"
                alt="avatar"
              >
              <img
                class="w-[33.3px] h-[33.3px] rounded-[50%] border-[2.5px] border-white translate-x-[-10px]"
                src="./assets/styles/images/ava2.png"
                alt="avatar"
              >
              <img
                class="w-[33.3px] h-[33.3px] rounded-[50%] border-[2.5px] border-white translate-x-[-20px]"
                src="./assets/styles/images/ava3.png"
                alt="avatar"
              >
            </div>
          </div>
        </div>
      </section>
      <section class="mt-32">
        <div class="flex justify-between items-start">
          <div class="truncate">
            <h1 class="font-main font-semibold text-[56px] leading-[56px]">Categories</h1>
            <p class="mt-[24px] font-main font-normal text-base text-primary-text-color leading-[26px] truncate">Here are lots of interesting destinations to visit, <br> but don’t be confused—they’re already grouped <br> by category.</p>
          </div>
          <div class="flex justify-center flex-row">
            <div class="slider-btn">
              <img class="pt-[20px] pl-[21px]" src="./assets/styles/images/dark-arrow.svg" alt="left-button">
            </div>
            <div class="slider-btn ml-[16px] bg-primary-header-color">
              <img class="pt-[20px] pl-[23px]" src="./assets/styles/images/light-arrow.svg" alt="right-button">
            </div>
          </div>
        </div>
        <div class="flex shrink mt-[60px] text-center font-main font-medium text-[26px] text-primary-header-color">
          <figure>
            <img class="w-[170px]" src="./assets/styles/images/beach.png" alt="Beach">
            <figcaption class="pt-[18px] leading-[26px]"> Beach </figcaption>
          </figure>
          <figure class="pl-[30px]">
            <img class="w-[170px]" src="./assets/styles/images/desert.png" alt="Desert">
            <figcaption class="pt-[18px] leading-[26px]"> Desert </figcaption>
          </figure>
          <figure class="pl-[30px]">
            <img class="w-[170px]" src="./assets/styles/images/mountain.png" alt="Mountain">
            <figcaption class="pt-[18px] leading-[26px]"> Mountain </figcaption>
          </figure>
          <figure class="pl-[30px]">
            <img class="w-[170px]" src="./assets/styles/images/temple.png" alt="Temple">
            <figcaption class="pt-[18px] leading-[26px]"> Temple </figcaption>
          </figure>
          <figure class="pl-[30px]">
            <img class="w-[170px]" src="./assets/styles/images/tower.png" alt="Tower">
            <figcaption class="pt-[18px] leading-[26px]"> Tower </figcaption>
          </figure>
          <figure class="pl-[30px]">
            <img class="w-[170px]" src="./assets/styles/images/pyramid.png" alt="Pyramid">
            <figcaption class="pt-[18px] leading-[26px]"> Pyramid </figcaption>
          </figure>
        </div>
      </section>
      <section class="mt-[140px] flex justify-between">
        <div class="w-[492px] h-[659px] relative mx-[auto]">
          <img class="absolute left-[4px]" src="./assets/styles/images/traveler-2.png" alt="traveler">
          <div
            class="absolute bottom-[184px] left-[-53px] flex flex-col items-center py-[20px] bg-white rounded-[14px] w-[140px]"
          >
            <img class="pt-[20px]" src="./assets/styles/images/destination-icon.svg" alt="destinations">
            <p class="pt-[20px] font-semibold text-[30px] text-accent-coral-color">600%</p>
            <span class="pt-[4px] font-normal text-[21px] leading-[29px]  text-lightgrey-text-span-color">Destinations</span>
          </div>
          <div
            class="absolute px-[21px] py-[20px] bg-white rounded-[10px] w-[171px] bottom-[77px] right-[10px]"
          >
            <div class="flex items-center mb-[10px]">
              <img class="mr-[16px]" src="./assets/styles/images/signal-icon.svg" alt="signal">
              <p class="font-semibold text-[24px] text-primary-header-color">5000+</p>
            </div>
            <span class="ml-[38px] font-nav font-normal text-lightgrey-text-span-color">Customers</span>
          </div>
        </div>

        <div class="pl-[153px] pt-16 font-main truncate">
          <h1 class="font-semibold text-xl text-accent-coral-color leading-5 tracking-[3px]">Our Experience</h1>
          <h2 class="pt-5 font-semibold text-[56px] primary-header-color leading-[66px]">Our Stories Have <br> Adventures</h2>
          <p class="pt-5 font-normal text-base text-primary-text-color truncate">We are experienced in bringing adventures to stay their <br> journey, with all outdoor destinations in the world as our <br> specialties. Start your adventure now! Nature has already  <br> called you!</p>
          <div class="flex justify-between pt-[40px]">
            <div class="card-bg text-center pt-[28px]">
              <p class="font-semibold text-[46px] text-accent-coral-color">12K+</p>
              <span class="font-normal text-[21px] leading-[29px]  text-lightgrey-text-span-color">Succes <br> Journey</span>
            </div>
            <div class="card-bg ml-[20px] pt-[28px] text-center">
              <p class=" font-semibold text-[46px] text-accent-coral-color">16+</p>
              <span class="font-normal text-[21px] leading-[29px]  text-lightgrey-text-span-color">Awards <br> Winning</span>
            </div>
            <div class="card-bg ml-[20px] pt-[28px] text-center">
              <p class="font-semibold text-[46px] text-accent-coral-color">20+</p>
              <span class="font-normal text-[21px] leading-[29px] text-lightgrey-text-span-color">Years Of <br> Experience</span>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-[132px]">
        <div class="flex justify-between items-center">
          <h1 class="font-main font-semibold text-[56px] leading-[66px]">Find Popular <br> Destination</h1>
          <div class="flex justify-center flex-row">
            <div class="slider-btn">
              <img class="pt-[20px] pl-[21px]" src="./assets/styles/images/dark-arrow.svg" alt="left-button">
            </div>
            <div class="slider-btn ml-[16px] bg-primary-header-color">
              <img class="pt-[20px] pl-[23px]" src="./assets/styles/images/light-arrow.svg" alt="right-button">
            </div>
          </div>
        </div>
        <div class="flex mt-[35px]">
          <div
            class="w-[386px] mr-[30px] px-[12px] pt-[12px] pb-[36px] border-[2px] border-bg-white-color rounded-[16px]"
          >
            <img
              class="rounded-[16px]  "
              src="./assets/styles/images/mountain-tour.png"
              alt="Mountain Hiking Tour"
            >
            <h3
              class="mt-[24px] mb-[14px] font-main font-semibold text-[24px] leading-[24px] text-primary-header-color"
            >
              Mountain Hiking Tour
            </h3>
            <p
              class="font-main mb-[35px] text-[14px] leading-[14px] text-primary-text-color"
            >
              Mountain Hiking Tour
            </p>
            <div class="flex">
              <p
                class="font-main font-semibold text-[24px] text-primary-header-color leading-[20px]"
              >
                $99<span
                  class="font-main text-[16px] text-primary-text-color leading-[20px]"
                >/Person</span>
              </p>
              <a
                class="w-[100px] h-[37px] ml-[auto] flex justify-center items-center bg-primary-header-color  border-primary-header-color border-[1px] rounded-[46px]"
                href="#"
              ><p
                class="text-bg-white-color font-main text-[14px] leading-[14px]"
              >
                Book Now
              </p></a>
            </div>
          </div>
          <div
            class="w-[386px] mr-[30px] px-[12px] pt-[12px] pb-[36px] border-[2px] border-bg-white-color rounded-[16px]"
          >
            <img
              class="rounded-[16px]  "
              src="./assets/styles/images/peru-tour.png"
              alt="Machu Picchu Tour"
            >
            <h3
              class="mt-[24px] mb-[14px] font-main font-semibold text-[24px] leading-[24px] text-primary-header-color"
            >
              Machu Picchu, Peru
            </h3>
            <p
              class="font-main mb-[35px] text-[14px] leading-[14px] text-primary-text-color"
            >
              Machu Picchu, Peru
            </p>
            <div class="flex">
              <p
                class="font-main font-semibold text-[24px] text-primary-header-color leading-[20px]"
              >
                $99<span
                  class="font-main text-[16px] text-primary-text-color leading-[20px]"
                >/Person</span>
              </p>
              <a
                class="w-[100px] h-[37px] ml-[auto] flex justify-center items-center bg-bg-white-color border-primary-header-color border-[1px] rounded-[46px]"
                href="#"
              ><p
                class="text-primary-header-color font-main text-[14px] leading-[14px]"
              >
                Book Now
              </p></a>
            </div>
          </div>
          <div
            class="w-[386px] mr-[30px] px-[12px] pt-[12px] pb-[36px] border-[2px] border-bg-white-color rounded-[16px]"
          >
            <img
              class="rounded-[16px]  "
              src="./assets/styles/images/arizona-tour.png"
              alt="The Grand Canyon Tour"
            >
            <h3
              class="mt-[24px] mb-[14px] font-main font-semibold text-[24px] leading-[24px] text-primary-header-color"
            >
              The Grand Canyon, Arizona
            </h3>
            <p
              class="font-main mb-[35px] text-[14px] leading-[14px] text-primary-text-color"
            >
              The Grand Canyon, Arizona
            </p>
            <div class="flex">
              <p
                class="font-main font-semibold text-[24px] text-primary-header-color leading-[20px]"
              >
                $99<span
                  class="font-main text-[16px] text-primary-text-color leading-[20px]"
                >/Person</span>
              </p>
              <a
                class="w-[100px] h-[37px] ml-[auto] flex justify-center items-center bg-bg-white-color border-primary-header-color border-[1px] rounded-[46px]"
                href="#"
              ><p
                class="text-primary-header-color font-main text-[14px] leading-[14px]"
              >
                Book Now
              </p></a>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-[115px]">
        <div>
          <h2 class="font-main font-semibold text-[56px] leading-[66px] text-primary-header-color text-center">
            Top Destinations
          </h2>
          <p class="text-center font-main text-primary-text-color mb-[28px]">
            Sost Brilliant reasons Entrada should be your one-stop-shop!
          </p>

          <div class="flex justify-center">
            <a href="#" class="mr-[14px]">
              <p
                class="font-nav text-[14px] leading-[14px] text-bg-white-color px-[20px] py-[10px] bg-primary-header-color rounded-[30px]"
              >
                London
              </p>
            </a>
            <a href="#" class="mr-[14px]">
              <p
                class="font-nav text-[14px] leading-[14px] text-primary-header-color px-[20px] py-[10px] bg-bg-white-color rounded-[30px] border-[1px] border-primary-header-color"
              >
                Bangkok
              </p>
            </a>
            <a href="#" class="mr-[14px]">
              <p
                class="font-nav text-[14px] leading-[14px] text-primary-header-color px-[20px] py-[10px] bg-bg-white-color   rounded-[30px] border-[1px] border-primary-header-color"
              >
                England
              </p>
            </a>
            <a href="#" class="mr-[14px]">
              <p
                class="font-nav text-[14px] leading-[14px] text-primary-header-color px-[20px] py-[10px] bg-bg-white-color rounded-[30px] border-[1px] border-primary-header-color"
              >
                Singapore
              </p>
            </a>
            <a href="#">
              <p
                class="font-nav text-[14px] leading-[14px] text-primary-header-color px-[20px] py-[10px] bg-bg-white-color rounded-[30px] border-[1px] border-primary-header-color"
              >
                Italy
              </p>
            </a>
          </div>
        </div>
        <!-- <div> Grid</div> -->
      </section>

      <!-- <section class="mt-[116px] flex justify-between">
        <img
          class="px-[8px] pt-[8px] pb-[16px]"
          src="./assets/styles/images/traveler-3.png"
          alt="traveler"
        >
       <div class="ml-[auto] mt-[51px]">
          <h2
            class="font-main font-semibold text-[56px] text-primary-header-color leading-[66px]"
          >
            A customer said about us:
          </h2>

          <div
            class="mt-[26px] p-[30px] bg-bg-white-color rounded-[14px]"
          >
            <p
              class="font-main text-[18px] text- primary-text-color mb-[26px] leading-[30px]"
            >
              Salty helped me a lot in finding the best place for our first
              outdoor adventure trip. They responded very quickly and gave me a
              detailed account of the place—its history, as well as its best
              features.
            </p>
            <div class="flex">
              <img class="cursor-pointer" src="./assets/styles/images/star.svg" alt="star">
              <img class="cursor-pointer" src="./assets/styles/images/star.svg" alt="star">
              <img class="cursor-pointer" src="./assets/styles/images/star.svg" alt="star">
              <img class="cursor-pointer" src="./assets/styles/images/star.svg" alt="star">
              <img class="cursor-pointer" src="./assets/styles/images/star.svg" alt="star">
            </div>
            <div class="flex mt-[17px]">
              <div>
                <p
                  class="font-main font-medium text-[20px] leading-[20px] mb-[8px]"
                >
                  Andrew Sarma
                </p>
                <p class="font-main text-[12px] leading-[12px] text- primary-text-color">
                  Enterpreneur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> -->
      <!-- <section>7</section> -->
    </main>
    <footer class="footer py-20 flex">
      <div>
        <div class="flex items-center ">
          <img class="mr-1.5" src="./assets/styles/images/logo.svg" alt="logo">
          <p class="text-xl font-logo font-normal">Salty</p>
        </div>
        <p
          class="mt-5 mb-10 font-main text-[16px] text-primary-text-color leading-[26px] "
        >
          Enjoy the touring <br> with Salty
        </p>
        <div class="flex">
          <img class="mr-3.5" src="./assets/styles/images/facebook.svg" alt="facebook">
          <img class="mr-3.5" src="./assets/styles/images/instagram.svg" alt="instagram">
          <img src="./assets/styles/images/twitter.svg" alt="twitter">
        </div>
      </div>
      <div class="flex ml-[auto]">
        <div class="mr-28">
          <h6 class="footer-header">Resources</h6>
          <ul>
            <li class="footer-text"><a href="#">Download</a></li>
            <li class="footer-text"><a href="#">Help Center</a></li>
            <li class="footer-text"><a href="#">Guide Book</a></li>
            <li class="footer-text"><a href="#">App Directory</a></li>
          </ul>
        </div>
        <div class="mr-28">
          <h6 class="footer-header">Travelers</h6>
          <ul>
            <li class="footer-text"><a href="#"> Why Travelers</a></li>
            <li class="footer-text"><a href="#">Enterprise</a></li>
            <li class="footer-text"><a href="#">Customer Stories</a></li>
            <li class="footer-text"><a href="#">Instagram post</a></li>
          </ul>
        </div>
        <div class="mr-28">
          <h6 class="footer-header">Company</h6>
          <ul>
            <li class="footer-text"><a href="#">Travelling</a></li>
            <li class="footer-text"><a href="#">About Location</a></li>
            <li class="footer-text"><a href="#">Success</a></li>
            <li class="footer-text"><a href="#">Information</a></li>
          </ul>
        </div>
        <div>
          <h6 class="footer-header">Get App</h6>
          <ul>
            <li class="footer-text"><a href="#">App Store</a></li>
            <li class="footer-text"><a href="#">Google Play Store</a></li>
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
</style>
