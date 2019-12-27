class Canvas {
    constructor(app){
        this.app = app;
        this.root = document.createElement("canvas");
        this.root.width = app.width;
        this.root.height = app.height;
        this.ctx = this.root.getContext('2d');

        app.canvas_wrap.append(this.root);
    }

    winToOff(winX, winY){
        let x = winX - this.root.offsetLeft;
        let y = winY - this.root.offsetTop;
        x = x < 0 ? 0 : x > this.root.width ? this.root.width : x;
        y = y < 0 ? y : y > this.root.height ? this.root.height : y;

        return {x: x, y: y};
    }

    option(key, value){
        if(key === "color") {
            this.ctx.fillStyle = value;
            this.ctx.strokeStyle = value;
        }
        else this.ctx[key] = value;
    }
}