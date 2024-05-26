import BaseController from './BaseController.js';
import TinderModel from './TinderModel.js';
import TinderView from './TinderView.js';

class TinderController extends BaseController {
    constructor() {
        super("tinder");
        this.model = new TinderModel();
        this.view = new TinderView();
    }

    likeUser(msg) {
        const msg_data = this.model.likeUser(msg);
    
        const likeButton = this.view.getElementsByTag('button').find(button => button.innerHTML.includes("Like") && !button.innerHTML.includes("Super Like"));
        if (likeButton) {
            likeButton.click();
            this.view.log(likeButton);
        }
    }
    
}

export default TinderController;
