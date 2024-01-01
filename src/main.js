import './assets/main.css'
import '@fontsource-variable/red-hat-display'
import { createApp } from 'vue'
import App from './App.vue'
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

createApp(App)
    .component('Dashboard', Dashboard)
    .component('Projects', Projects)
    .component('Scheduler', Scheduler)
    .component('ContentWizard', ContentWizard)
    .component('Documents', Documents)
    .component('LogOut', LogOut)
    .component('Union', Union)
    .component('Hamburger', Hamburger)
    .component('Notifications', Notifications)
    .component('Issues', Issues)
    .mount('#app')
