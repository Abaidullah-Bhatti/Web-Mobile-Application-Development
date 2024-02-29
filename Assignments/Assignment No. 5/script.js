// Pre-Loader
var loader = document.getElementById("preLoader");
var main = document.getElementById("page");

window.addEventListener("load", function () {
  this.setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "block";
  }, 2800);
});

// Scrolling Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//  Show More Button
function showMore() {
  let ocm_2 = document.getElementById("ocm-2");
  let smBtn = document.getElementById("smBtn");
  if (smBtn.innerHTML === "Show More") {
    ocm_2.style.display = "flex";
    smBtn.innerHTML = "Show Less";
  } else {
    ocm_2.style.display = "none";
    smBtn.innerHTML = "Show More";
  }
}

// Work Section
let disp = "block";
let nodisp = "none";
let top1 = "0vw";
let top2 = "3.26vw";
let top3 = "6.5vw";
let top4 = "9.75vw";
let wnLink = "workNavLink";
let wnLinka = " active";

let wc1 = document.getElementById("wc-1");
let wc2 = document.getElementById("wc-2");
let wc3 = document.getElementById("wc-3");
let wc4 = document.getElementById("wc-4");
let leftLine = document.getElementById("leftLine");
let wnBtn1 = document.getElementById("wnBtn-1");
let wnBtn2 = document.getElementById("wnBtn-2");
let wnBtn3 = document.getElementById("wnBtn-3");
let wnBtn4 = document.getElementById("wnBtn-4");

function wnBtn(x) {
  switch (x) {
    case 1:
      wc1.style["display"] = disp;
      wc2.style["display"] = nodisp;
      wc3.style["display"] = nodisp;
      wc4.style["display"] = nodisp;
      leftLine.style["top"] = top1;
      wnBtn1.className = wnLink + wnLinka;
      wnBtn2.className = wnLink;
      wnBtn3.className = wnLink;
      wnBtn4.className = wnLink;
      break;
    case 2:
      wc1.style["display"] = nodisp;
      wc2.style["display"] = disp;
      wc3.style["display"] = nodisp;
      wc4.style["display"] = nodisp;
      leftLine.style["top"] = top2;
      wnBtn1.className = wnLink;
      wnBtn2.className = wnLink + wnLinka;
      wnBtn3.className = wnLink;
      wnBtn4.className = wnLink;
      break;
    case 3:
      wc1.style["display"] = nodisp;
      wc2.style["display"] = nodisp;
      wc3.style["display"] = disp;
      wc4.style["display"] = nodisp;
      leftLine.style["top"] = top3;
      wnBtn1.className = wnLink;
      wnBtn2.className = wnLink;
      wnBtn3.className = wnLink + wnLinka;
      wnBtn4.className = wnLink;
      break;
    case 4:
      wc1.style["display"] = nodisp;
      wc2.style["display"] = nodisp;
      wc3.style["display"] = nodisp;
      wc4.style["display"] = disp;
      leftLine.style["top"] = top4;
      wnBtn1.className = wnLink;
      wnBtn2.className = wnLink;
      wnBtn3.className = wnLink;
      wnBtn4.className = wnLink + wnLinka;
      break;
    default:
      wc1.style["display"] = disp;
      wc2.style["display"] = nodisp;
      wc3.style["display"] = nodisp;
      wc4.style["display"] = nodisp;
      leftLine.style["top"] = top1;
      wnBtn1.className = wnLink + wnLinka;
      wnBtn2.className = wnLink;
      wnBtn3.className = wnLink;
      wnBtn4.className = wnLink;
      break;
  }
}
