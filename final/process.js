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