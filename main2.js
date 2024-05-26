import {  TwitterController } from './controller/twitterController/TwitterController.js';
import { TinderController } from './controller/TinderController.js';
import { TikTokController } from './controller/TiktokController.js';
import { PinterestController } from './controller/PinterestController.js';
import {LinkedinController} from "./controller/linkedinController/LinkedinController.js"
import {FacebookController} from './controller/facebookController/facebookController.js'



$(document).ready(function() {
    const twitterController = new TwitterController();
    const tinderController = new TinderController()
    const tiktokController = new TikTokController()
    const pinterestController = new PinterestController()
    const linkedinController = new LinkedinController()
    const facebookController = new FacebookController()


    twitterController.init();
    tinderController.init()
    tiktokController.init()
    pinterestController.init()
    linkedinController.init()
    facebookController.init()
});
