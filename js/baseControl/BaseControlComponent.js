import { Dimension } from './Dimension.js'
import { Backgrounds } from './Backgrounds.js'
import { Layout } from './layout/Layout.js'
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
        this.label = document.createElement("div");

        this.label.setAttribute("id",this.labelId);

        this.label.style.width = this.dimension.width;
        this.label.style.height = this.dimension.height;

        this.label.style.backgroundColor = this.backgrounds.backgroundsColor;


        if (this.layout != null) {
            this.label.style.display = this.layout.flex.display;
            this.label.style.flexDirection = this.layout.flex.flexDirection;   
        }



        
        parent.appendChild(this.label);
    }

}

export { BaseControlComponent }