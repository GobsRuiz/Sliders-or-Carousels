// Variables
const slider4 = document.querySelectorAll('.slider4');
// Buttons
const slider4ButtonsNext = document.querySelectorAll('#section4 .slider4-button-next');
const slider4ButtonsPrev = document.querySelectorAll('#section4 .slider4-button-prev');
// Image div
const slider4Images = document.querySelectorAll('.slider4-images');
// Images size
const slider4Images_imgWidth = document.querySelector('.slider4-images img').scrollWidth;

var indexs = [];
var translatexs = [];



// Functions
// Indexs
function function_indexs() {
    for(var i = 0; i < slider4Images.length; i++){
        indexs[i] = 3;
    }
}function_indexs();

// Translatexs
function function_translatexs() {
    for(var i = 0; i < slider4Images.length; i++){
        translatexs[i] = 0;
    }
}function_translatexs();

// moveSlider
// Next
function moveSliderNext() {
    slider4ButtonsNext.forEach(element => {
        element.addEventListener('click', event => {
            var btnPosition = 0;
            var sliderId = '';
            var slider4images_countChild = 0;
            
            // Button position and button id
            btnPosition = getButtonNextPosition(event.target.id)
            
            // Carousel id
            sliderId = getSliderId(btnPosition);

            // Child element count 
            slider4images_countChild = slider4Images[btnPosition].childElementCount * 3;
            
            // Change
            if(indexs[btnPosition] < slider4images_countChild){
                indexs[btnPosition] += 1;
                translatexs[btnPosition] -= slider4Images_imgWidth;
                imagesDiv(sliderId, btnPosition)
            }
            else if(indexs[btnPosition] === slider4images_countChild){
                indexs[btnPosition] = 3;
                translatexs[btnPosition] = 0;
                imagesDiv(sliderId, btnPosition)
            }


            
            // Buttons prev
            if(indexs[btnPosition] > 3){
                slider4ButtonsPrev[btnPosition].style.display = 'block';
            }else{
                slider4ButtonsPrev[btnPosition].style.display = 'none';
            }
        })
    });
}moveSliderNext()
// Prev
function moveSliderPrev(){
    slider4ButtonsPrev.forEach(element => {
        element.addEventListener('click', event => {
            var btnPosition;
            var sliderId;
            
            // Button position and button id
            btnPosition = getButtonPrevPosition(event.target.id)
            
            // Carousel id
            sliderId = getSliderId(btnPosition);

            if(indexs[btnPosition] > 3){
                indexs[btnPosition] -= 1;
                translatexs[btnPosition] += slider4Images_imgWidth;
                imagesDiv(sliderId, btnPosition)
            }
            if(indexs[btnPosition] === 3) {
                slider4ButtonsPrev[btnPosition].style.display = 'none';
            }
        })
    })
}moveSliderPrev()

// Get button position
// Button next
function getButtonNextPosition(id){
    var btnPosition = 0;

    for(var i = 0; i < slider4ButtonsNext.length; i++){
        if(id === slider4ButtonsNext[i].id){
            btnPosition = i;
        }
    }

    return btnPosition;
}
// Button prev
function getButtonPrevPosition(id){
    var btnPosition = 0;

    for(var i = 0; i < slider4ButtonsPrev.length; i++){
        if(id === slider4ButtonsPrev[i].id){
            btnPosition = i;
        }
    }

    return btnPosition;
}

// Get slider id
function getSliderId(btnPosition) {
    var sliderId = slider4Images[btnPosition]
    return sliderId;
}

// Images div
function imagesDiv(sliderId, btnPosition) {
    sliderId.style.transform = `translateX(${translatexs[btnPosition]}px)`;
}