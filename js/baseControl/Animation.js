/**
 * 动画
 */
class Animation {
    constructor({ animationName, animationDuration, animationIterationCount }) {
        /*动画名字*/
        this.animationName = animationName;
        /*动画时间*/
        this.animationDuration = animationDuration;
        /*运行次数,indinite代表无限*/
        this.animationIterationCount = animationIterationCount;
    }
}
export { Animation }