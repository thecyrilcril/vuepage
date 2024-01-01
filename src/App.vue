<script setup>
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import Navigation from '@/components/Navigation.vue'
const userMenu = ref(false)
</script>

<template>
  <div class="grid grid-cols-[18.12rem_1fr] h-screen bg-v-gray">
    <Navigation />
    <main class="px-[1.62rem] pt-[1.75rem] pb-[1.93rem]">
      <div class="header bg-white rounded-[0.25rem] px-6 py-[18px] flex justify-between">
        <div class="flex space-x-6 items-center">
          <Hamburger class="w-6 h-6" />
          <div class="flex">
            <input type="text" class="border-0 bg-v-form-gray w-[13.75rem] h-10" placeholder="My Workspace">
            <button class="bg-v-blue p-2">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="flex space-x-6 items-center space-x-[5.25rem] relative">
          <div class="flex items-center space-x-8">
            <div class="flex items-center">
              <input type="text" class="border-0 bg-v-form-gray w-[13.75rem] h-10" placeholder="Search here">
              <button class="flex items-center space-x-2 bg-v-blue p-2 px-4 text-white">
                <span>Search</span>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5232 12.4626L16.7353 15.6746L15.6746 16.7353L12.4626 13.5232C11.3077 14.4472 9.843 15 8.25 15C4.524 15 1.5 11.976 1.5 8.25C1.5 4.524 4.524 1.5 8.25 1.5C11.976 1.5 15 4.524 15 8.25C15 9.843 14.4472 11.3077 13.5232 12.4626ZM12.0185 11.9061C12.9356 10.9609 13.5 9.6717 13.5 8.25C13.5 5.34937 11.1506 3 8.25 3C5.34937 3 3 5.34937 3 8.25C3 11.1506 5.34937 13.5 8.25 13.5C9.6717 13.5 10.9609 12.9356 11.9061 12.0185L12.0185 11.9061Z" />
                </svg>

              </button>
            </div>
            <Notifications class="h-6 w-6"/>
            <Issues class="h-5 w-5"/>

          </div>
          <a
            @click="userMenu = ! userMenu"
            v-on-click-outside="() => userMenu = false"
            href="#"
            class="mr-auto flex flex-col text-sm leading-4"
          >
            <span class="font-medium">Welcome Grace</span>
            <span class="font-light">Admin</span>
          </a>
          <div v-show="userMenu" class="flex flex-col text-sm divide-y w-36 absolute top-10 right-0 bg-white rounded shadow">
            <a href="#" class="py-3 px-3 text-gray-700">Profile</a>
            <a href="#" class="py-3 px-3 text-gray-700">Support</a>
            <a href="#" class="py-3 px-3 text-gray-700">Settings</a>
            <a href="#" class="py-3 px-3 text-gray-700">Log Out</a>
          </div>

        </div>
      </div>
      <div class="flex justify-start items-center my-5">
        <button class="px-5 py-3 mr-[15px] rounded-md bg-v-blue">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.32841 9.0001L9.6924 14.3641L8.2782 15.7783L0.500008 8.0001L8.27821 0.221999L9.6924 1.6362L4.32841 7.0001L16.5 7.0001L16.5 9.0001L4.32841 9.0001Z" fill="white"/>
          </svg>
        </button>
        <p class="text-v-text-gray font-bold text-2xl">Write</p>
      </div>
      <div class="bg-white rounded-md pb-[3.87rem] w-[97.31rem] pl-[1.93rem] pt-[1.31rem] text-v-text-gray shadow-sm flex flex-col">
        <h3 class="text-[1.06rem] font-bold mb-[1.18rem] leading-8">Header Setting</h3>
        <div class="flex items-end space-x-4">
          <div class="w-[70.75rem]">
            <div class="flex justify-between">
              <label for="keyword" class="mb-[0.62rem]">Main Keyword<span class="align-top text-red-500 leading-[1.62rem]">*</span></label>
              <span>61/80</span>

            </div>
            <input id="keyword" type="text" class="w-full py-[0.75rem] rounded border-gray-200" placeholder="What do dermatologist prescribe for skin whitening?">

          </div>
          <button class="bg-v-blue w-[15.81rem] h-[3.12rem] py-[0.90rem] rounded text-white font-bold text-sm">Regenerate Title</button>
        </div>
        <div class="flex space-x-4 mt-[1.43rem]">
          <div class="w-[70.75rem]">
            <div class="flex justify-between">
              <label for="keyword" class="mb-[0.62rem]">Title<span class="align-top text-red-500 leading-[1.62rem]">*</span></label>
              <span>6/100</span>

            </div>
            <input id="keyword" type="text" class="w-full py-[0.75rem] rounded border-gray-200" placeholder="What do dermatologist prescribe for skin whitening? Discover Now!">

          </div>
        </div>
      </div>
    </main>

  </div>
</template>
