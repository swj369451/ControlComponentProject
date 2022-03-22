import { Flex } from "./Flex.js";

/**
 * 布局对象
 */
 class Layout{
    constructor(layout){
        this.layout=layout;
        this.flex = new Flex(layout.display);
    }
}
export {Layout}