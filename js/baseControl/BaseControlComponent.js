import { Dimension } from './Dimension.js'
import { Backgrounds } from './Backgrounds.js'
import { Layout } from './Layout.js'
/**
 * 基础单元，包含了标签可设置的基本css,和基本的控件事件
 * 
 */
class BaseControlComponent {
    constructor(baseParm) {
        this.labelId = baseParm.labelId;
        this.dimension = new Dimension(baseParm.dimension);
        this.backgrounds = new Backgrounds(baseParm.backgrounds);
        if (baseParm.layout != null) {
            this.layout = new Layout(baseParm.layout);
        }

    }


    //渲染
    render(parent) {
        this.div = document.createElement("div");

        this.div.style.width = this.dimension.width;
        this.div.style.height = this.dimension.height;

        this.div.style.backgroundColor = this.backgrounds.backgroundsColor;


        if (this.layout != null) {
            this.div.style.display = this.layout.flex.display;
            this.div.style.flexDirection = this.layout.flex.flexDirection;   
        }



        
        parent.appendChild(this.div);
    }

}

export { BaseControlComponent }