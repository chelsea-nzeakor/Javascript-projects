const accButtons = document.querySelectorAll(".down-btn");

let currentTab = null;
let currentTabButton = null;

accButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const accordionDiv = this.closest(".accordion");

    const panel = accordionDiv.querySelector(".hide");

    if (currentTab && currentTab !== panel) {
      currentTab.style.maxHeight = null;
      currentTabButton.classList.remove("rotate");
    }

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      btn.classList.remove("rotate");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      btn.classList.add("rotate");
    }

    currentTab = panel;
    currentTabButton = btn;
  });
});
