class Fill {
    constructor(app){
        this.app = app;
        this.canvas = app.canvas;
        this.ctx = app.canvas.ctx;
        
        this.strokeStyle = app.canvas.strokeStyle;
    }

    mousedown(e){
        const {x, y} = this.canvas.toCxy(e);
        
        this.empty(x, y);
    }

    empty(x, y){
        let idata = this.ctx.getImageData(x, y, 1, 1).data;
        console.log(idata);
    }
}   