import { BaseControlComponent } from "../baseControl/BaseControlComponent.js";
import { BoxControlComponent } from "./BoxControlComponent.js";
import { HandleControlComponent } from "./HandleControlComponent.js";

/**
 * 抽屉控件
 */
class DrawerControlComponent extends BaseControlComponent{
 
    constructor(drawerParam){
        super(drawerParam.baseParm)
        this.handleControlComponent = new HandleControlComponent(drawerParam.handleParm);
        this.boxControlComponent = new BoxControlComponent(drawerParam.boxParm);
    }

    render(parent){
        super.render(parent);
        this.boxControlComponent.render(this.label);
        this.handleControlComponent.render(this.label);
    }
    
}

export {DrawerControlComponent}