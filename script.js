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
  var expanded = false
  var item = ""
  document.querySelectorAll("ol li a").forEach((item) => {
    item.addEventListener("click", function (event) {
      // Prevent default action if needed
      event.preventDefault();
      //
      if(item.parentElement.classList.contains("expanded")){
        clearExpansion()
      }
      else{
        clearExpansion()
        item.parentElement.classList.add("expanded");
        document.querySelector(".about").style.opacity = 0;
      }

      
      
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
function clearExpansion(){
    // Remove from previous
    document.querySelectorAll("ol li").forEach((item) => {
        document.querySelector(".about").style.opacity = 1;
        item.classList.remove("expanded");
    })
}
window.onload = function () {
  // This will hide the progress bar and show the content
  // once everything on the page has loaded
  document.getElementById("progressBarContainer").style.display = "none";
  document.querySelector(".grid").style.opacity = "100";
};
document.addEventListener("DOMContentLoaded", function () {
  // Adjust the interval time as needed
  expand_collapse()
});
