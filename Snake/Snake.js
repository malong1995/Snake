/**
 * Created by MYL on 2017/9/16.
 */
(function () {
    function Snake(width, height, direction) {
        this.width = width || 20;
        this.height = height || 20;
        this.body = [
            {top: 2, left: 3, color: "red"},  //  头部
            {top: 2, left: 2, color: "orange"},
            {top: 2, left: 1, color: "orange"}
        ];  //   数组
        this.direction = direction || "right";
    }

    //  头部和身体需要循环遍历的创建，
    var arr = [];
    Snake.prototype.init = function (map) {
        //remove(map);
        for (var i = 0; i < this.body.length; i++) {
            var div = document.createElement("div");
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.position = "absolute";
            div.style.top = this.body[i].top * this.height + "px";
            div.style.left = this.body[i].left * this.width + "px";
            div.style.background = this.body[i].color;
            map.appendChild(div);
            arr.push(div);
        }
    }

    function remove(map) {
        for (var i = 0; i < arr.length; i++) {
            //  从map中删除div
           map.removeChild(arr[0]);
            //  删除数组中 的每一项
            //console.log(map);
            arr.shift();  //  删除第一项
            i--;
        }
    }

    //  移动  （删除旧的蛇，，初始化新的蛇）
    Snake.prototype.move = function (map, food) {
        //  删除旧的蛇，
        remove(map);
        //  从第二个开始，后面 的继承前面的，第一个由方向决定
        /**
         * 从后往前（反向遍历）
         *   把前面的赋值给后面，
         *   第一个不算，
         */
        for (var i = this.body.length - 1; i >= 1; i--) {
            this.body[i].top = this.body[i - 1].top;
            this.body[i].left = this.body[i - 1].left;
        }
        //  第一个由方向控制
        switch (this.direction) {
            case "right":
                this.body[0].left += 1;
                break;
            case "left":
                this.body[0].left -= 1;
                break;
            case "top":
                this.body[0].top -= 1;
                break;
            case "bottom":
                this.body[0].top += 1;
        }
        //  吃食物
        // 如果头部的坐标和食物的坐标完全相同，则吃食物
        var headx = this.body[0].left * this.width;
        var heady = this.body[0].top * this.height; //  头部的纵坐标

        //  判断
        if (food.left == headx && food.top == heady) {
            //  重新生成食物
            food.init(map);
            //  把蛇的最后一个部位，（复制）添加到蛇的身体上
            var last = this.body[this.body.length-1];
            var obj = {
                top:last.top,
                left:last.left,
                color:last.color
            };
            this.body.push(obj);
        }
        //  画出新的蛇
        this.init(map);
    }
    window.Snake = Snake;
})();