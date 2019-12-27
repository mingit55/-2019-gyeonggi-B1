class App {
    static pen = 1;
    static curve = 2;
    static figure = 3;
    static compass = 4;
    static ruler = 5;
    static fill = 6;
    static eraser = 7;

    constructor(aside, canvas_wrap){
        this.type = App.pen;
        this.aside = document.querySelector(aside);
        this.canvas_wrap = document.querySelector(canvas_wrap);
        this.width = this.canvas_wrap.offsetWidth;
        this.height = this.canvas_wrap.offsetHeight;

        this.canvas = new Canvas(this);
        
        this.eventTrigger();
    }

    eventTrigger(){
        // 툴 선택
        this.aside.querySelectorAll("#tools .tool").forEach((x, i) => {
            x.addEventListener("dblclick", () => {
                this.type = i + 1;
                document.querySelector("#tools .tool.active").classList.remove("active");
                x.classList.add("active");
            });
        });

        // 옵션 선택
        this.aside.querySelectorAll("#options input, #options select").forEach(x => {
            x.addEventListener("change", e => {
                this.canvas.option(x.name, x.value);
            });
        });
    }
};


window.addEventListener("load", () => {
    const workspace = new App("aside", "#main-canvas");
});