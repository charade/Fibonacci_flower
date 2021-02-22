let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


class Flower{
    constructor(){
        this.angle = 0;
        this.radius = 20;
        this.rad = 1;
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.ctx = canvas.getContext('2d');
        this.anim = null;

        this.animate = ()=>{
            
            this.ctx.fillRect(0,0,canvas.width,canvas.height)
            this.draw();
            this.angle +=10;
            this.rad += 0.5;
            this.x += this.rad*Math.sin(this.angle);
            this.y += this.rad*Math.cos(this.angle);
            console.log('hey')
            this.anim = requestAnimationFrame(this.animate)
            this.ctx.fillStyle = 'rgba(36,153,153,0.005)'
            if(this.x > canvas.width) {cancelAnimationFrame(this.anim)}
        }
        this.anim = requestAnimationFrame(this.animate)
        console.log(this.anime)
    }

   
    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);
        this.ctx.fillStyle = 'rgba(0,200,10,0.4)';
        this.ctx.fill();
        this.ctx.strokeStyle = 'red';
        this.ctx.stroke();
    }

    
}

new Flower()

