<template>
  <header class="pb-5 flex mr-3 text-base font-semibold">
    <RouterLink class="py-2 pr-4 nav-hover active" :to="{name: $routeNames.contacts}">Contacts</RouterLink>
    <RouterLink class="py-2 pr-4 nav-hover active" :to="{name: $routeNames.jobOpenings}">Job Openings</RouterLink>
  </header>
</template>

<style lang="scss">
  .active {
    &.exact {
      @apply text-[#696969];
    }
  }
  .nav-hover:after {
  content: '';
  height: 2px;
  width: 0%;
  background-color: blue;
  display: block;
  transition: .5s ease-in-out;
}
.nav-hover:hover::after {
  content: '';
  height: 2px;
  width: 60%;
  background-color: blue;
  display: block;
  transition: .5s ease-in-out;
}
</style>
