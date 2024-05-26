import BaseModel from "../BaseModel";

class TinderModel extends BaseModel {
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
    
    likeUser(msg) {
        const usernameSpan = this.view.getElementsByTag('span').find(span => span.getAttribute("itemprop") === "name");
        const username = usernameSpan ? usernameSpan.innerText : null;
    
        const imgDiv = this.view.getElementsByTag('div').find(div => div.getAttribute("aria-label") === username && div.getAttribute("style"));
        const img = imgDiv ? imgDiv.getAttribute("style").split('"')[1] : null;
    
        const msg_data = { url: "tinder.com", username, img };
        return msg_data;
    }
}

export default TinderModel;