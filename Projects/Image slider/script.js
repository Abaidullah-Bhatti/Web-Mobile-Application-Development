let i = 0;
document.getElementsByTagName('input')[0].checked = true;
// Left Button

function ltBtn() {
    if (i == 0) {
        i = imageArr.length - 1;
    } else {
        i--;
    }
    document.getElementsByTagName('input')[i].checked = true;
    document.getElementById("sliderImage").src = imageArr[i];
    console.log(i);
}

// Right Button

function rtBtn() {
    if (i == 3) {
        i = 0;
    } else {
        i++;
    }
    document.getElementsByTagName('input')[i].checked = true;
    document.getElementById("sliderImage").src = imageArr[i];
    console.log(i);
}

// Radio Buttons

const imageArr = ["./assets/image1.jpg", "./assets/image2.jpg", "./assets/image3.jpg", "./assets/image4.jpg"];
function changeImage(props) {
    document.getElementById("sliderImage").src = imageArr[props];
}
