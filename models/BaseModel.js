class BaseModel {
    constructor() {
        this.ComPort = null;
        this.SharedData = null;
    }

    setComPort(port) {
        this.ComPort = port;
    }

    setSharedData(data) {
        this.SharedData = data;
    }
}

export default BaseModel;