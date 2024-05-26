import BaseModel from "../BaseModel";

class PinterestModel extends BaseModel {
    constructor() {
        super();
        this.msg_data = {
            url: "",
            username: "",
            img: "",
            website: "none",
            twitter: "none",
            sales: 0,
            email: "none",
            connected: "none"
        };
        this.vid = 0;
        this.counter = 0;
    }

    setSharedData(data) {
        super.setSharedData(data);
        this.vid = parseInt(Math.floor(Math.random() * 20) + 1);
        this.counter = 0;
    }
    
    getPinterestVideos() {
        return Array.from(document.querySelectorAll('a[href*="/pin/"]'));
    };

    getSecondPinImage() {
        return document.querySelectorAll('img[src*="pinimg"]')[1]?.src || "https://instoo.com/logo.png";
    };

    getFollowButton() {
        return Array.from(document.querySelectorAll('button'))
            .find(button => button.textContent.includes("Follow") && !button.textContent.includes("Following"));
    };

    clickEngagementIcons() {
        document.querySelectorAll('div.engagement-icon, button[aria-label^="reaction"]').forEach(element => element.click());
    };
}

export default PinterestModel;
