import BaseView from "../BaseView";

class FacebookView extends BaseView {

    getVideos() {
        return Array.from(document.getElementsByTagName('div')).filter(video => 
            video.getAttribute("aria-label") && video.getAttribute("aria-label").includes("Add Friend"));
    }

    clickVideo(video) {
        video.click();
    }
}

export default FacebookView;
