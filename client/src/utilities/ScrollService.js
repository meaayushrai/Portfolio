import {TOTAL_SCREENS} from "./CommonUtils";
import {Subject} from "rxjs";

export default class ScrollService{
    static scrollHandler = new ScrollService();

    static currentSreenBroadcaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor(){
        window.addEventListener('scroll',this.checkCurrentScreenUnderViewport);
    }
    

    scrollToHireMe = ()=>{
        let contactMeScreen = document.getElementById("Contact Me");
        if(!contactMeScreen) return;
        contactMeScreen.scrooIntoView({behaviour:"smooth"})

    }
    scrollToHome = ()=>{
        let homeScreen = document.getElementById("Home");
        if(!homeScreen) return;
        homeScreen.scrooIntoView({behaviour:"smooth"})

    }
    
    isElementInView = (elem, type)=>{
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementBottom>=0;
        let completlyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

            switch(type){
                case "partial":
                return partiallyVisible;

                case "complete":
                return completlyVisible;
                
                default:
                return false;
            }
    }
    checkCurrentScreenUnderViewport = (event)=>{
        if(!event || Object.keys(event).length<1)
        return;
        for(let screen of TOTAL_SCREENS){
            let screenFromDOM = document.getElementById(screen.screen_name);
            if(!screenFromDOM)
            continue;

            let fullyVisible = this.isElementInView(screenFromDOM, "complete")
            let partiallyVisible = this.isElementInView(screenFromDOM,"partial")
            if(fullyVisible || partiallyVisible){
                if(partiallyVisible && !screen.alreadyRendered){
                    ScrollService.currentScreenFadeIn.nextt({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered']=true;
                    break;
                }
                if(fullyVisible){
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name
                    });
                    break;
                }
            }
        }
    }

}