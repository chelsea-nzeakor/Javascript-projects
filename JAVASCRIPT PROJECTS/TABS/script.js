const tabs = document.querySelectorAll('.tabs');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(function(btn){
    btn.addEventListener("click", function(){
        // Hide all tab contents
        tabContents.forEach(function(content){
            content.style.display = "none";
        });
       
         

        // Show the selected tab content
        const tabId = this.getAttribute("data-tab");
        const selectedTabContent = document.getElementById(tabId);
        selectedTabContent.style.display = "block";

         // Remove the "active" class from all tabs
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

     // Add the "active" class to the clicked tab
     this.classList.add('active');
      
    });

   

    document.getElementById("open-first").click();
});
