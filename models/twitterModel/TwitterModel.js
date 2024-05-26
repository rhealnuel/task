import BaseModel from "../BaseModel";

class TwitterModel extends BaseModel {
    constructor() {
        super();
        this.lastMsg = null;
    }

    setLastMsg(msg) {
        this.lastMsg = msg;
    }

    getLastMsg() {
        return this.lastMsg;
    }
}

export default TwitterModel;