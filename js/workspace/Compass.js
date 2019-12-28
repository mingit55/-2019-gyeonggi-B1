class Compass {
    constructor(app){
        this.app = app;
        this.canvas = app.canvas;
        this.ctx = this.canvas.ctx;

        this.lineWidth = this.canvas.lienWidth;
        this.strokeStyle = this.canvas.strokeStyle;

        this.history = [];

        this.select = null;
    }

    mousedown(e){
        if(e.which !== 1 ) return;
        if( !this.select && !this.canvas.contains(e) ) return;
        
        const {x, y} = this.canvas.toCxy(e);

        if(! this.select){
            this.select = {
                cx: x,
                cy: y,
                r: 0,
            };
        }
        else {
            
        }
    }

    mousemove(e){
        if(!this.select) return;

        const {x, y} = this.canvas.toCxy(e);
        
        if( e.which === 0){
            this.select.r = Math.sqrt(Math.pow(this.select.cx - x, 2) + Math.pow(this.select.cy - y, 2));
        }
        else if( e.which === 1) {

        }
    }

    redraw(){
        if(this.select) {
            this.ctx.fillStyle = App.subColor;
            this.ctx.strokeStyle = App.subColor;
            this.ctx.lineWidth = 1;
            
            this.ctx.beginPath();
            this.ctx.arc(this.select.cx, this.select.cy, 3, 0, Math.PI * 2);
            this.ctx.closePath();
            this.ctx.fill();

            this.ctx.beginPath();
            this.ctx.arc(this.select.cx, this.select.cy, this.select.r, 0, Math.PI * 2);
            this.ctx.closePath();
            this.ctx.stroke();
        }
    }
}