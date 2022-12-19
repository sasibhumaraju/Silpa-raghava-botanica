

 class Draw {
    static points = [];
    static  allDrawing = [];
    static addPoint = (x,y) => {
          this.points.push(+x);
          this.points.push(+y);
        
    }

    static addDrawing = (id,points) => {
          let obj ={
            'available':false,
            'coords':[...points],
            'name':id,
           'shape':'poly',
            'facing':'-',
            'dimension':'-',
            'size':'-'
           }
           this.allDrawing.push(obj);
           console.log(Draw.allDrawing)         
           this.points.length = 0;

    }
 }

 export default Draw;