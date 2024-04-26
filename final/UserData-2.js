export default {
    template: `<div style="background-color:white;color:white;">
    <h3 style="color:grey;font-weight:bold;">{{title}}</h3>
    
    <p style="color:#FFB64D;font-weight:bold; font-size:19px; marginTop: 15px;">{{value}}</p>
    <p style="color:#4D336E; font-size:14px;">{{duration}} ({{year}})</p>

    </div>
    `,
    data() {
        return {
            title: "Impact",
		    value: "42.6%",
		    duration: "Jul 01 - Dec 10",
		    year: 2023

        }
    },
}