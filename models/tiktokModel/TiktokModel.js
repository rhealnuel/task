import BaseModel from "../BaseModel";

class TikTokModel extends BaseModel {
    constructor() {
        super();
        this.LastUsername = "";
        this.CurrentUser = null;
    }

    setCurrentUser(user) {
        this.CurrentUser = user;
    }

    setLastUsername(username) {
        this.LastUsername = username;
    }
    
    getUserData(view) {
        const url = window.location.href;
        const username = url.split("/")[3];
        const img = view.getLinksByTag('a')
            .find(video => video.classList.contains("user-avatar"))
            ?.firstElementChild.firstElementChild.src || "https://instoo.com/logo.png";
        return { url, username, img, website: "none", twitter: "none", sales: 0, email: "none", connected: "none" };
    }
}

export default TikTokModel;