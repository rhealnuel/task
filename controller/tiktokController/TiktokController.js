import BaseController from './BaseController.js';
import TikTokModel from './TikTokModel.js';
import TikTokView from './TikTokView.js';

class TikTokController extends BaseController {
    constructor() {
        super("tiktok", true);
        this.model = new TikTokModel();
        this.view = new TikTokView();
    }
    
    startProcessing() {
        this.view.getLinksByTag('a')
            .filter(video => video.classList.contains("result-item"))
            .forEach(video => this.sendMessage("TikTokTarget", "target", video.href));
    }

    processLikeFollow(msg) {
        const vid = Math.floor(Math.random() * 6) + 1;
        let counter = 0;

        this.view.getLinksByTag('a')
            .filter(video => video.classList.contains("video-feed-item"))
            .some(video => {
                counter++;
                if (counter === vid) {
                    video.click();
                    setTimeout(() => this.handleVideoActions(msg), 5000);
                    return true;
                }
                return false;
            });
    }

    handleVideoActions(msg) {
        const msg_data = this.model.getUserData(this.view);
        this.sendMessage("DoneTikTokData", "User", msg_data);

        if (msg.story.StartTikTokFollow && msg.story.FollowedPoolTikTokSize < msg.story.MaxTikTokFollows) {
            this.followUser(msg_data);
        }

        if (msg.story.StartTikTokLike && msg.story.LikedMediaTikTokSize < msg.story.MaxTikTokLikes) {
            setTimeout(() => this.likeMedia(msg_data), 4000);
        }
    }
    

    followUser(msg_data) {
        this.view.getLinksByTag('button')
            .find(button => button.classList.contains("follow") && !button.innerText.includes("Following"))
            ?.click();
        this.sendMessage("DoneTikTokFollow", "User", msg_data);
    }

    likeMedia(msg_data) {
        const likeButton = this.view.getLinksByTag('div').find(button => button.classList.contains("engagement-icon"));
        const likeSpan = this.view.getLinksByTag('span').find(span => span.classList.contains("icons like"));

        likeButton?.click();
        likeSpan?.click();

        this.sendMessage("DoneTikTokLike", "User", msg_data);
    }
}

export default TikTokController;
