import BaseController from './BaseController.js';
import { PinterestModel } from '../models/PinterestModel.js';
import { PinterestView } from '../views/PinterestView.js';

export class PinterestController extends BaseController {
    constructor() {
        super("pinterest", true);
        this.model = new PinterestModel();
        this.view = new PinterestView();
    }

    handleUpdatePinterest() {
        const videos = document.querySelectorAll('a.result-item[href]');
        videos.forEach(video => {
            super.sendMessage("PinterestTarget", "target", video.getAttribute("href"));
        });
    }

    handleLikeFollow() {
        this.model.sendMessage("DonePinterest", "target", "window.location.href");
        const videos = this.model.getPinterestVideos();

        if (videos.length) {
            const randomIndex = Math.floor(Math.random() * videos.length);
            videos[randomIndex].click();

            setTimeout(() => {
                this.handlePostClickActions();
            }, 5000);
        }
    }

    handlePostClickActions() {
        const img = this.model.getSecondPinImage();
        this.model.sendMessage("DonePinterestData", "User", {});

        const { StartPinterestFollow, FollowedPoolPinterestSize, MaxPinterestFollows, StartPinterestLike, LikedMediaPinterestSize, MaxPinterestLikes } = this.model.getSharedData();

        if (StartPinterestFollow && FollowedPoolPinterestSize < MaxPinterestFollows) {
            const followButton = this.model.getFollowButton();
            followButton && followButton.click() && this.model.sendMessage("DonePinterestFollow", "User", {});
        }

        if (StartPinterestLike && LikedMediaPinterestSize < MaxPinterestLikes) {
            setTimeout(() => this.model.clickEngagementIcons(), 4000);
        }
    }
}

export default PinterestController;
