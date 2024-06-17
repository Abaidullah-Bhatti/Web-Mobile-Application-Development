// let x;
// function preNexBtn(x) {
//     switch(x) {
//         case 1:
//           document.getElementById("preBtn").style.boxShadow = "inset 0 0 0 2px #FFF, inset 0 0 0 4px #008296";
//           document.getElementById("nexBtn").style.boxShadow = "0 0 0 0";
//           console.log("1");
//           break;
//         case 2:
//             document.getElementById("nexBtn").style.boxShadow = "inset 0 0 0 2px #FFF, inset 0 0 0 4px #008296";
//             document.getElementById("preBtn").style.boxShadow = "0 0 0 0";
//             console.log("2");
//           break;
//       }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const children = document.querySelectorAll('.carousel-item');
//     let currentIndex = 0;
  
//     function highlightNextChild() {
//       children.forEach(function(child) {
//         child.classList.remove('active');
//       });
  
//       // Add 'selected' class to the next child element
//       children[currentIndex].classList.add('active');
//       children[currentIndex].classList.add('slide-in-right');
//       children[currentIndex].classList.add('slide-out-left');
      
//       // Increment currentIndex and reset to 0 if it exceeds the length of children
//       currentIndex = (currentIndex + 1) % children.length;
//     }
  
//     // Highlight the next child element every 2 seconds
//     setInterval(highlightNextChild, 2000);
//   });

// setInterval(function(){
//     let x = 1;

//     console.log("a",x)
//     x++;
// }, 1000);

// document.addEventListener("DOMContentLoaded", function() {
//     const children = document.querySelectorAll('.carousel-item');
//     let currentIndex = 0;

//     function highlightNextChild() {
//         // Remove 'active' class from all elements
//         children.forEach(function(child) {
//             child.classList.remove('active', 'slide-in-right', 'slide-out-left');
//         });

//         // Add 'active' class to the current child element
//         children[currentIndex].classList.add('active', 'slide-in-right');

//         // Calculate the index of the next child element
//         const nextIndex = (currentIndex + 1) % children.length;

//         // Add 'active' class to the next child element
//         children[nextIndex].classList.add('active', 'slide-out-left');

//         // Increment currentIndex
//         currentIndex = nextIndex;
//     }

//     // Highlight the next child element every 2 seconds
//     setInterval(highlightNextChild, 2000);
// });








document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');

    function preNexBtn(direction) {
        const nextIndex = (currentIndex + direction + carouselItems.length) % carouselItems.length;

        // Apply animation classes to the current and next items
        carouselItems[currentIndex].classList.remove('active');
        carouselItems[currentIndex].classList.add('slide-out-left');
        carouselItems[nextIndex].classList.add('active', 'slide-in-right');

        // Reset animation classes after transition
        setTimeout(() => {
            carouselItems[currentIndex].classList.remove('slide-out-left');
            carouselItems[nextIndex].classList.remove('slide-in-right');
        }, 500); // Animation duration

        // Update currentIndex
        currentIndex = nextIndex;
    }

    // Button click event listeners
    document.getElementById('preBtn').addEventListener('click', () => preNexBtn(-1));
    document.getElementById('nexBtn').addEventListener('click', () => preNexBtn(1));
});