import BaseController from './BaseController.js';
import LinkedInModel from './LinkedInModel.js';
import LinkedInView from './LinkedInView.js';

class LinkedInController extends BaseController {
    constructor() {
        super("linkedin");
        this.model = new LinkedInModel();
        this.view = new LinkedInView();
    }

    scrollLike(num) {
        this.view.scrollBy(0, 300);
        const vid = Math.floor(Math.random() * 6) + 1;
        let counter = 0;

        this.view.getLinksByTag('span').some(link => {
            if (this.isValidLink(link)) {
                counter++;
                if (counter === vid) {
                    this.likeLink(link, num);
                    return true;
                }
            }
            return false;
        });
    }

    isValidLink(link) {
        return link && link.getAttribute("class") && 
               link.getAttribute("class").includes("entity-result__title-text ") && 
               !link.innerHTML.includes("<img") && 
               !this.model.isCompleted(link.getAttribute("href"));
    }

    likeLink(link, num) {
        this.model.addCompleted(link.getAttribute("href"));
        link.children[0].click();
        if (num > 0) {
            this.view.setContactHtml(this.view.getResult());
            setTimeout(() => this.handleLinkedInFollow(num), 3000);
        }
    }
    handleLinkedInFollow(num) {
        if (this.model.extractFollowData(this.view)) {
            this.model.getConnectButtons(this.view).forEach(button => {
                button.click();
                button.click();
                setTimeout(() => {
                    this.model.getSendNowButtons(this.view).forEach(sendNowButton => sendNowButton.click());
                    super.sendMessage("DoneLinkedinFollow", "User", this.model.getMessageData(this.view));
                }, 2000);
            });
        }
    }
}

export default LinkedInController;
