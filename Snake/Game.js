/**
 * Created by MYL on 2017/9/16.
 */
(function () {
    
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
    }
    // 开始 （）调用
    Game.prototype.start = function (map) {
        //  生成食物  和  蛇
        this.food.init(this.map);
        this.snake.init(this.map);
        //   调用定时器 方法
        snakeRun(this.map,this.snake,this.food);
        //  调用  按键控制方向的方法
        pressKey(this.snake);
    }
    //  定时器 移动
    var timer = null;
    function snakeRun(map,snake,food) {
        timer = setInterval(function () {
            //  小蛇移动
            snake.move(map,food);
            //  判断： 蛇头是否碰到 map的边缘，若是，则game over；
            //  蛇头的  横纵 坐标
            var x = snake.body[0].left * snake.width;
            var y = snake.body[0].top * snake.height;
            //console.log(x);
            //console.log(y);
            if (x < 0 || x > map.offsetWidth-snake.width) {
                alert("Game over");
                clearInterval(timer);
            }
            if (y < 0 || y > map.offsetHeight-snake.height) {
                alert("Game over");
                clearInterval(timer);
            }
        },200);
    }
    function pressKey(snake) {
        document.onkeydown = function (event) {
            event = event || window.event;
            switch (event.keyCode) {
                case 37:
                    snake.direction = "left";
                    break;
                case 38:
                    snake.direction = "top";
                    break;
                case 39:
                    snake.direction = "right";
                    break;
                case 40:
                    snake.direction = "bottom";
                    break;
            }
        }
    }

    //  按键 改变方向
    
    
    
    window.Game = Game;
})();