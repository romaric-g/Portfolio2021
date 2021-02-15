
document.body.onload = () => {
    const cursor = document.getElementById('cursor');
    
    const onMouseMove = (e) => {
        const target = (e.target);
        if(target) {
            cursor.style.top = e.clientY + 'px';
            cursor.style.left = e.clientX + 'px';

            if (hasSomeParentTheClass(target, "cursor--action")) {
                cursor.classList.add('action')
            } else {
                cursor.classList.remove('action')
            }

            if (hasSomeParentTheClass(target, "cursor--hide")) {
                cursor.classList.add('hide')
            } else {
                cursor.classList.remove('hide')
            }
        }
    }

    document.body.addEventListener('mousemove', onMouseMove);
    document.onwheel = (e) => {
        if (hasSomeParentTheClass(e.target, "Home")) {
            if (e.wheelDeltaY > 0) {
                scrollPrevProject();
            } else {
                scrollNextProject();
            }
        }
    }
}

const scrollDelay = 500;
let scrollLastTime = 0;

const scrollPrevProject = () => {
    const now = Date.now();

    if (now - scrollLastTime > scrollDelay) {
        scrollLastTime = now;
        prevProject();
    }

}

const scrollNextProject = () => {
    const now = Date.now();

    if (now - scrollLastTime > scrollDelay) {
        scrollLastTime = now;
        nextProject();
    }
}


const hasSomeParentTheClass = (element, classname) => {
    if (element.className && element.className.split(' ').indexOf(classname)>=0) return true;
    return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
}


/* SWIPE MOBILE */

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
        } else {
            /* right swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
            scrollPrevProject()
        } else { 
            /* down swipe */
            scrollNextProject()
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};