import BaseModel from "../BaseModel";

class FacebookModel extends BaseModel {
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
    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getRandomDelay() {
        return parseInt(Math.floor(Math.random() * 30000) + 1000);
    }

    getRandomIndex(total) {
        return Math.floor(Math.random() * total) + 1;
    }

    prepareMessageData(video) {
        const url = "https://facebook.com/" + video.closest('[data-testid="friend_list_item"]').querySelector('a').getAttribute("href");
        const username = video.closest('[data-testid="friend_list_item"]').querySelector('a').innerText;
        const img = video.closest('[data-testid="friend_list_item"]').querySelector('img').getAttribute("src");
        return { url, username, img };
    }
}

export default FacebookModel;