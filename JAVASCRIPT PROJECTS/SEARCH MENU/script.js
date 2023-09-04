// Define a JavaScript function named 'search'
function search() {
    // Get the search input element by its 'id'
    let input = document.getElementById("search");
    // Get the menu (list) element by its 'id'
    let ul = document.getElementById("menu");
    // Get all the list items (menu items) within the menu
    let li = ul.getElementsByTagName("li");

    // Capture the user's input from the search bar and convert it to uppercase
    let searchFilter = input.value.toUpperCase();

    // Loop through each menu item
    for (let i = 0; i < li.length; i++) {
        // Access the anchor (link) element within the menu item
        let a = li[i].getElementsByTagName("a")[0];

        // Check if the text of the anchor element contains the search input
        if (a.innerHTML.toUpperCase().indexOf(searchFilter) > -1) {
            // Display the menu item if it matches the search
            li[i].style.display = "";
        } else {
            // Hide the menu item if it doesn't match the search
            li[i].style.display = "none";
        }
    }
}
