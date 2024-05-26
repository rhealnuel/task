class BaseView {
    scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    scrollTo(x, y) {
        window.scrollTo(x, y);
    }

    scrollBy(x, y) {
        window.scrollBy(x, y);
    }

    getElementsByTag(tag) {
        return document.getElementsByTagName(tag);
    }

    getLinksByTag(tag) {
        return document.getElementsByTagName(tag);
    }

    log(...args) {
        console.log(...args);
    }

    appendToBody(html) {
        $('body').append(html);
    }
}

export default BaseView