<template>
    <header class="bg-v-purple divide-y divide-gray-100/10 px-[2rem]">
      <h1 class="flex justify-center my-[41px] items-center space-x-1">
        <span class="relative flex justify-center">
          <Union />
          <span class="absolute text-[1.68rem] font-bold text-v-blue pt-1">W</span>

        </span>
        <span class="text-[1.68rem] font-bold text-white leading-[1.68rem] tracking-wide">WordPilot</span>
      </h1>
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
</template>
