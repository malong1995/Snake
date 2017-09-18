/**
 * Created by MYL on 2017/9/16.
 */
(function (window) {

    function Food(width,height,top,left,bg) {
        this.width = width || 20;
        this.height = height || 20;
        this.top = top || 0;
        this.left = left || 0;
        this.bg = bg || "green";
    }
    var div = null;
    Food.prototype.init = function (map) {
        remove(map);
        div = document.createElement("div");
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.background = this.bg;
        div.style.position = "absolute";

        //  top left 的值必须得是食物宽高的整数倍，
        //this.top = parseInt(Math.random()*(map.offsetHeight-this.height));
        //this.left = parseInt(Math.random()*(map.offsetWidth-this.width));
        //  改进 如下
        this.top = parseInt(Math.random()*(map.offsetHeight-this.height)/this.height)*this.height;
        this.left = parseInt(Math.random()*(map.offsetWidth-this.width)/this.width)*this.width;
        div.style.top = this.top + "px";
        div.style.left = this.left + "px";

        map.appendChild(div);
    }

    function remove(map) {
        if(div != null) {
            map.removeChild(div);
        }
    }
    window.Food = Food;
})(window)