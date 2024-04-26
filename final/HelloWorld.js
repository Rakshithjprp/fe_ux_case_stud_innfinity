export default {
    template: `<div style="background-color:white;color:white;">
    <h3 style="color:grey;font-weight:bold;">{{title}}</h3>
    
    <p style="color:#2ED8B9;font-weight:bold; font-size:19px; marginTop: 15px;">{{value}}</p>
    <p style="color:#4D336E; font-size:14px;">{{duration}} ({{year}})</p>

    </div>
    `,
    data() {
        return {
            title: "Goal",
		    value: "30564",
		    duration: "May 23 - Jun 01",
		    year: 2023
        }
    },
}