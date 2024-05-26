import BaseModel from "../BaseModel";

class LinkedinModel extends BaseModel {
    constructor() {
        super();
        this.completed = [];
    }

    addCompleted(url) {
        this.completed.push(url);
    }

    isCompleted(url) {
        return this.completed.includes(url);
    }

    getCompleted() {
        return this.completed;
    }
    extractFollowData(view) {
        return view.getStory().StartLinkedinFollow;
    }

    getConnectButtons(view) {
        return view.getLinksByTag('button').filter(button =>
            button.getAttribute("aria-label") &&
            button.getAttribute("data-control-name") &&
            button.getAttribute("data-control-name").includes("connect") &&
            button.getAttribute("aria-label").includes("Connect")
        );
    }

    getSendNowButtons(view) {
        return view.getLinksByTag('button').filter(button =>
            button.getAttribute("aria-label") &&
            button.getAttribute("aria-label").includes("Send now")
        );
    }

    getMessageData(view) {
        return {
            target: view.getTarget(),
            username: "none",
            url: "none",
            img: "https://instoo.com/logo.png"
        };
    }
}

export default LinkedinModel