// FacebookController.js
import BaseController from './BaseController.js';
import FacebookModel from './FacebookModel.js';
import FacebookView from './FacebookView.js';

class FacebookController extends BaseController {
    constructor() {
        super("facebook");
        this.model = new FacebookModel();
        this.view = new FacebookView();
    }

    onMessageReceive(msg) {
        super.onMessageReceive(msg);
        if (msg.Tag === "LikeFollow") {
            this.view.scrollToBottom();
            if (msg.story.StartfacebookFollow && msg.story.FollowedPoolfacebookSize < msg.story.MaxfacebookFollows) {
                this.scrollLike(5);
            }
        }
    }

    async scrollLike(num) {
        const delay = this.model.getRandomDelay();
        await this.model.sleep(delay);
        this.view.scrollToBottom();

        const videos = this.view.getVideos();
        const total = videos.length;

        if (total > 0) {
            const targetIndex = this.model.getRandomIndex(total);
            this.processVideo(videos, targetIndex);
        }

        if (num > 0) {
            await this.scrollLike(num - 1);
        }
    }


    processVideo(videos, targetIndex) {
        let counter = 0;

        videos.some(video => {
            counter++;
            if (counter === targetIndex) {
                this.view.clickVideo(video);
                const msg_data = this.model.prepareMessageData(video);
                this.sendMessage("DonefacebookFollow", "User", msg_data);
                this.view.scrollToBottom();
                return true;
            }
            return false;
        });
    }


  
}

export default FacebookController;
