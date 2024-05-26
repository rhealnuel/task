import BaseView from "../BaseView";

export class PinterestView extends BaseView {
  constructor(){
      super();
      this.videos = document.getElementsByTagName('a');
  }

  checkIfVideosInURL() {
      return window.location.href.includes("videos");
  }

  handleLikeFollow(msg) {
      this.sendMessage("DonePinterest", "target", "window.location.href");
      var vid = parseInt(Math.floor(Math.random() * 20) + 1);
      var counter = 0;
      var videos = document.getElementsByTagName('a');
      const pinterestVideos = Array.from(videos).filter(video =>
          video.getAttribute("href")?.includes("/pin/")
      );
        
      if (pinterestVideos.length > 0) {
          const selectedVideo = pinterestVideos[Math.floor(Math.random() * pinterestVideos.length)];
          selectedVideo.click();
        
          setTimeout(() => {
              const img = Array.from(document.getElementsByTagName('img'))
                  .find((img, index) => img.getAttribute("src")?.includes("pinimg") && index === 1)?.src || "https://instoo.com/logo.png";
        
              this.sendMessage("DonePinterestData", "User", {});
        
              if (msg.story.StartPinterestFollow && msg.story.FollowedPoolPinterestSize < msg.story.MaxPinterestFollows) {
                  const followButton = Array.from(document.getElementsByTagName('button')).find(button =>
                      button.innerText.includes("Follow") && !button.innerText.includes("Following")
                  );
                  if (followButton) {
                      followButton.click();
                      this.sendMessage("DonePinterestFollow", "User", {});
                  }
              }
        
              if (msg.story.StartPinterestLike && msg.story.LikedMediaPinterestSize < msg.story.MaxPinterestLikes) {
                  setTimeout(() => {
                      Array.from(document.querySelectorAll('div.engagement-icon')).forEach(icon => icon.click());
                      Array.from(document.querySelectorAll('button[aria-label^="reaction"]')).forEach(button => button.click());
                  }, 4000);
              }
          }, 5000);
      }
  }
}
