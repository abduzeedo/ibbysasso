const assets = document.querySelectorAll("img");
let loadedAssets = 0;

assets.forEach((asset) => {
  asset.addEventListener("load", () => {
    loadedAssets++;
    updateProgressBar(loadedAssets, assets.length);
  });
});
function updateProgressBar(loaded, total) {
  const progress = (loaded / total) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
  document.getElementById("progressPercentage").innerText =
    Math.round(progress) + "%";

  if (loaded === total) {
    document.getElementById("progressBarContainer").style.display = "none";
    document.querySelector(".grid").style.opacity = "100";
  }
}
function expand_collapse() {
  var expanded = false;
  var item = "";
  // grab state
  //const state = Flip.getState(squares);

  // Animate from the initial state to the end state
  document.querySelectorAll("ol li a").forEach((item) => {
    //const state = Flip.getState(item.parentElement);
    item.addEventListener("click", function (event) {
      // Prevent default action if needed

      event.preventDefault();

      if (item.parentElement.classList.contains("expanded")) {
        clearExpansion();
      } else {
        clearExpansion();
        item.parentElement.classList.add("expanded");

        document.querySelector(".about").style.opacity = 0;
      }
      //Flip.from(state, {duration: .6, ease: "back.out(1.7)"});

      // // Toggle 'expanded' class on the parent <li> element
      // if(!item.parentElement.classList.contains("expanded")){
      //   clearExpansion()
      // }
      // else{
      //   expanded = false
      // }
      // item.parentElement.classList.toggle("expanded");
    });
  });
}
function clearExpansion() {
  // Remove from previous
  document.querySelectorAll("ol li").forEach((item) => {
    document.querySelector(".about").style.opacity = 1;
    item.classList.remove("expanded");
  });
}
window.onload = function () {
  // This will hide the progress bar and show the content
  // once everything on the page has loaded
  document.getElementById("progressBarContainer").style.display = "none";
  document.querySelector(".grid").style.opacity = "100";
};
document.addEventListener("DOMContentLoaded", function () {
  // Adjust the interval time as needed
  expand_collapse();
  animateLines()

});
function animateLines(){
  // document.querySelectorAll("ol li").forEach((item) => {
  // }
  gsap.fromTo("h1, .about, h2", {
    y:-100,
    alpha: 0,
  },{
    y: 0,
    alpha: 1,
    duration: 1,
    delay:.5,
    ease: "back.out(1.7)",
    stagger: 0.2// 0.1 seconds between when each ".box" element starts animating
  });
  // Get the width of the window
  var windowWidth = window.innerWidth * -1;
  gsap.fromTo("ol li", {
    alpha: 0,
  },{
    x: 0,
    alpha: 1,
    duration: .8,
    delay:1,
    stagger: 0.2// 0.1 seconds between when each ".box" element starts animating
  });
  gsap.fromTo("footer p", {
    y:50,
    alpha: 0,
  },{
    y: 0,
    alpha: 1,
    duration: .6,
    delay:3,
    ease: "back.out(1.7)",
    stagger: 0.1// 0.1 seconds between when each ".box" element starts animating
  });
}
