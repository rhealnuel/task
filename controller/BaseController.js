class BaseController {
    constructor(tag, startStory) {
        this.tag = tag;
        this.startStory = startStory;
        this.comPort = null;
        this.sharedData = null;
        this.lastMsg = null;
        this.userTag = "._7UhW9";
        this.msgUser = "";
        this.tagDict = {};
        this.accountDict = {};
        this.imageSrc = "";
        this.storySet = false;
    }

    init() {
        this.createComPort();
        console.log("SETUp!");
        $(document).ready(() => {
            this.scrollTop(10); // Example usage
        });
    }

    createComPort(name) {
        this.comPort = chrome.runtime.connect({ name: name });
        this.comPort.onMessage.addListener(this.onMessageReceive.bind(this));
        window.addEventListener("message", this.handleWindowMessage.bind(this), false);
    }

    handleWindowMessage(event) {
        if (event.source != window) return;
        if (event.data.Tag && event.data.Tag == "SharedData") {
            this.sharedData = event.data.SharedData;
        }
    }

    onMessageReceive(msg) {
        console.log(msg);
        this.lastMsg = msg;
        if (msg.Tag == "LikeFollow" && (this.tag === "facebook" || this.tag === "twitter")) {
            window.scrollTo(0, document.body.scrollHeight);
        } else if (msg.Tag == "LikeFollow") {
            this.scrollLike(3);
        } else if (msg.Tag == "Updatefacebook" || msg.Tag == "UpdateTwitter" || msg.Tag == "UpdateTikTok") {
            console.log(msg.story);
        }
    }

    sendMessage(tag, msgTag, msg) {
        const sendObj = { "Tag": tag };
        sendObj[msgTag] = msg;
        console.log(sendObj);
        console.log(this.comPort);
        this.comPort.postMessage(sendObj);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    scrollTop(starter) {
        if (starter > 0) {
            window.scrollTo(0, document.body.scrollHeight);
            setTimeout(() => {
                this.scrollTop(starter - 1);
            }, 300);
        }
    }

    scrollLike(num) {
        window.scrollBy(0, 600);
        // Implement scrollLike functionality
        // This part will be specific to each social media platform
    }
}

export default BaseController;
