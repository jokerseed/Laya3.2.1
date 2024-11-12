import { Sprite } from "../display/Sprite";

export class SpineSocket {
    /**
     * @en Path of the target joint.
     * @zh 此挂点的目标骨骼名称。
     */
    public boneName = '';

    /**
     * @en Transform output node.
     * @zh 此挂点的变换信息输出节点。
     */
    public target: Sprite | null = null;

    constructor(boneName = '', target: Sprite | null = null) {
        this.boneName = boneName;
        this.target = target;
    }
}