
class genObj {
    constructor() {

    }
    testLine(x, y) {
        //paper.setup('myCanvas');
        var path1 = new Path();
        path1.strokeColor = 'green';
        var start1 = new Point(200, 100);
        path1.moveTo(start1);
        path1.lineTo(start1.add([ x, y]));
        paper.view.draw();
    }
}
