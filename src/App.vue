<script setup>
import Dashboard from './components/icons/Dashboard.vue'
import Projects from './components/icons/Projects.vue'
import Scheduler from './components/icons/Scheduler.vue'
import ContentWizard from './components/icons/ContentWizard.vue'
import Documents from './components/icons/Documents.vue'
import LogOut from './components/icons/LogOut.vue'
import Union from './components/icons/Union.vue'
import Hamburger from './components/icons/Hamburger.vue'
import Notifications from './components/icons/Notifications.vue'
import Issues from './components/icons/Issues.vue'
</script>

<template>
  <div class="grid grid-cols-[18.12rem_1fr] h-screen bg-v-gray">
    <header class="bg-v-purple divide-y divide-gray-100/10 px-[2rem]">
      <h1 class="flex justify-center my-[41px] items-center space-x-1">
        <span class="relative flex justify-center">
          <Union />
          <span class="absolute text-[1.68rem] font-bold text-v-blue pt-1">W</span>

        </span>
        <span class="text-[1.68rem] font-bold text-white leading-[1.68rem] tracking-wide">WordPilot</span>
      </h1>
      <!-- <hr class="mx-[2rem] mb-[2.56rem] mt-[2.93rem] border-[0.2px]"> -->
      <ul class="text-v-link space-y-2 pt-[2.93rem]">
        <li>
          <a href="#" class="group group flex space-x-3 rounded-[0.25rem] pl-[0.81rem] py-[0.69rem] h-[2.87rem] font-bold hover:bg-v-blue hover:text-white active:font-bold">
            <Dashboard class="w-6 h-6 group-hover:text-white" />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" class="group flex space-x-3 rounded-[0.25rem] pl-[0.81rem] py-[0.69rem] h-[2.87rem] hover:bg-v-blue hover:text-white active:font-bold">
            <Projects class="w-6 h-6 group-hover:text-white" />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="#" class="group flex space-x-3 rounded-[0.25rem] pl-[0.81rem] py-[0.69rem] h-[2.87rem] hover:bg-v-blue hover:text-white active:font-bold">
            <Scheduler class="w-6 h-6 group-hover:text-white" />
            <span>Scheduler</span>
          </a>
        </li>
        <li>
          <a href="#" class="group flex space-x-3 rounded-[0.25rem] pl-[0.81rem] py-[0.69rem] h-[2.87rem] hover:bg-v-blue hover:text-white active:font-bold">
            <ContentWizard class="w-6 h-6 group-hover:text-white" />
            <span>Content Wizard</span>
          </a>
        </li>
        <li>
          <a href="#" class="group flex space-x-3 rounded-[0.25rem] pl-[0.81rem] py-[0.69rem] h-[2.87rem] hover:bg-v-blue hover:text-white active:font-bold">
            <Documents class="w-6 h-6 group-hover:text-white" />
            <span>Documents</span>
          </a>
        </li>
        <li>
          <a href="#" class="group flex space-x-3 rounded-[0.25rem] pl-[0.81rem] py-[0.69rem] h-[2.87rem] hover:bg-v-blue hover:text-white active:font-bold">
            <LogOut class="w-6 h-6 group-hover:text-white" />
            <span>Log Out</span>
          </a>
        </li>
      </ul>
    </header>

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

        <div class="flex space-x-6 items-center space-x-[5.25rem]">
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
          <div class="mr-auto flex flex-col text-sm leading-4">
            <span class="font-medium">Welcome Grace</span>
            <span class="font-light">Admin</span>
          </div>

      </div>
      </div>
    </main>

  </div>
</template>
