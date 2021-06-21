const tabsBtn = document.querySelectorAll(".tab_item");
const tabBody = document.querySelectorAll(".wraper");

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);


        tabsBtn.forEach(function (item) {
            item.classList.remove('active');
        });

        tabBody.forEach(function (item) {
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});