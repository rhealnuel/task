import BaseView from "../BaseView";

class LinkedInView extends BaseView {
    constructor() {
        super();
        this.result = "";
        this.target = "";
        this.story = {};
    }

    setContactHtml(html) {
        $('#contact').html(html);
    }

    setStory(story) {
        this.story = story;
    }

    setTarget(target) {
        this.target = target;
    }

    getStory() {
        return this.story;
    }

    getTarget() {
        return this.target;
    }

    addResult(html) {
        this.result += html;
    }

    getResult() {
        return this.result;
    }
}

export default LinkedInView;
