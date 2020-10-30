// Variables
const slider1 = document.getElementById('slider1');
// Buttons
const slider1Buttons = document.querySelectorAll('#slider1 i');
// Picture div
const slider1Images = document.getElementById('slider1-images');
// Width picture div
const slider1Images_width = slider1Images.clientWidth;
// Picture div - elements count
const slider1Images_countChild = slider1Images.childElementCount;


// Variables to change images
var index = 1;
var translatex = 0;



// Functions
// Change images
function changeImages() {
    slider1Buttons.forEach(element => {
        element.addEventListener('click', event => {
            if(event.target.id == 'slider1-prev'){
                if(index > 1){
                    index -= 1;
                    translatex += slider1Images_width;
                }else{
                    index = slider1Images_countChild;
                    translatex = -slider1Images_width * (slider1Images_countChild - 1);
                }
            }else if(event.target.id == 'slider1-next'){
                if(index < 7){
                    index += 1;
                    translatex -= slider1Images_width;
                }else{
                    index = 1;
                    translatex = 0;
                }
                
            }

            slider1Images.style.transform = `translateX(${translatex}px)`;
        })
    })
}changeImages()



// Icon size
function iconSize() {
    var windowSize = window.innerWidth;
    var string = windowSize.toString();
    if(string.length === 4 || string.length > 4){
        slider1Buttons.forEach(element => {
            var value = string[0] * 20 + 30;
            element.style.fontSize = value + 'px';
        });
    }
}iconSize()






