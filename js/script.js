// Selecting the list and contacts
var contacts = document.querySelectorAll('.contact-item')
var list = document.querySelector('.contact-list')

// Clearing all contacts
do{
    showContacts(1);
    var flag = false;
} while(flag)

// Calculation of pages (dynamic)
var numberOfContacts = contacts.length;
var pages;
if(numberOfContacts % 10 == 0) {
    pages = numberOfContacts / 10;
} else{
    pages = Math.ceil(numberOfContacts / 10);
}

// Putting page numbers
var pagesList = document.querySelector('.pagination');
for(var i = 1; i <= pages; i++) {
    pagesList.innerHTML += `<li><a href="#" onclick='showContacts(${i})'>${i}</a></li>`;
}

// Function to show contacts
function showContacts(num) {

    // Clearing all contacts
    list.innerHTML = '';    

    lastContactIndex = num * 10;
    startIndex = lastContactIndex - 10;

    for(var i = startIndex; i <= lastContactIndex && i < contacts.length; i++){
        var item = contacts[i];
        list.append(item);
    }
}