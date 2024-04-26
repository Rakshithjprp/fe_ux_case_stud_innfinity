import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import HelloWorld from './HelloWorld.js'
import UserData from './UserData.js'
import UserData2 from  './UserData-2.js'


createApp({
components: {
    "hello-world":HelloWorld,
    "user-data":UserData,
    "user-data-2":UserData2
},

setup() {
  const message = ref('Hello vue!')
  return {
    message
  }
}
}).mount('#app')


//   Project_Progress_Summary
var app = new Vue({
    el: '#app2',
    data: {
      project_progress_summary: [
        {
          title: "Published Project",
          value: 532,
          percentage: "+1.69%"
        },
        {
          title: "Completed Task",
          value: 4569,
          percentage: "-0.5%"
        },
        {
          title: "Successfull Task",
          value: 89,
          percentage: "+0.99%"
        },
        {
          title: "Ongoing Project",
          value: 365,
          percentage: "+0.35%"
        }
      ]
    }
  });