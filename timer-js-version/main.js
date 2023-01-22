




function main() {
    const root = document.getElementById("root");


    this.state = "stopped";


    this.laps = [0];


    const time_section = document.createElement("div");
    root.appendChild(time_section);


    let time_display = document.createTextNode("00");
    time_section.appendChild(time_display);


    const buttons_section = document.createElement("div");
    root.appendChild(buttons_section);

    const start_button = document.createElement("button");
    start_button.appendChild(document.createTextNode("start"));
    buttons_section.appendChild(start_button);


    const reset_button = document.createElement("button");
    reset_button.appendChild(document.createTextNode("reset"));
    buttons_section.appendChild(reset_button);



    start_button.addEventListener("click", () => {

        const lap_button = document.createElement("button");
        lap_button.appendChild(document.createTextNode("lap"));
        buttons_section.appendChild(lap_button);
        lap_button.addEventListener("click", () => {
            this.laps.push(0);
        })
    
    
        const pause_button = document.createElement("button");
        pause_button.appendChild(document.createTextNode("pause"));
        buttons_section.appendChild(pause_button);
    

        let start_time = new Date();

        this.interval_reference = setInterval(() => {
        
            this.laps[this.laps.length - 1] = (new Date() - start_time) / 1000;
    
            for (let n = 0; n < this.laps.length - 1; n += 1) {
                this.laps[this.laps.length - 1] -= this.laps[n];
            }
    
    
            
            let total_time = this.laps.reduce((a, b) => a + b);
            time_display.nodeValue = total_time.toString() + " s";
           
            console.log(this.laps, total_time);
        
        }, 50);
    });
}   



setTimeout(main(), 0);

