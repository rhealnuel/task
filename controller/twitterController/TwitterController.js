import BaseController from './BaseController.js';
import TwitterModel from './TwitterModel.js';
import TwitterView from './TwitterView.js';

class TwitterController extends BaseController {
    constructor() {
        super("twitter", true);
        this.model = new TwitterModel();
        this.view = new TwitterView();
    }

    handleLike(link) {
        const msgData = this.extractData(link);
        if (this.model.getLastMsg().story.StartTwitterLike) {
            link.click();
            this.sendMessage("DoneTwitterLike", "User", msgData);
        }
        setTimeout(() => this.handleRetweet(link, msgData), 1000);
    }

    handleRetweet(link, msgData) {
        link.closest('div').querySelectorAll('div[role="button"]')[1].click();
        setTimeout(() => {
            const tweetButton = Array.from(this.view.getLinksByTag('div')).find(link =>
                link.getAttribute("testid")?.includes("tweetButton")
            );
            if (tweetButton) {
                tweetButton.click();
                this.sendMessage("DoneTwitterRetweet", "User", msgData);
            }
            this.retryRetweet(msgData);
        }, 5000);
    }

    retryRetweet(msgData) {
        setTimeout(() => {
            const retweetButton = Array.from(this.view.getLinksByTag('span')).find(link =>
                link.innerText.includes("Retweet")
            );
            if (retweetButton) {
                retweetButton.click();
                this.sendMessage("DoneTwitterRetweet", "User", msgData);
            }
        }, 5000);
    }

    extractData(link) {
        const article = link.closest('article');
        const url = window.location.href;
        const username = article.querySelector('a').getAttribute("href").replace('/', '');
        const img = article.querySelector('img').getAttribute("src");
        return { url, username, img };
    }
}

export default TwitterController;
