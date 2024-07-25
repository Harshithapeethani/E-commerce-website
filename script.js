const bar = document.getElementById('bar');
const close =document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
   bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
 }

 if (close) {
  close.addEventListener('click', () => {
   nav.classList.remove('active');
 })
} 


/* sort and category */

// Sample data
const items = [
  { name: 'Laptop A', price: 1000, category: 'laptops' },
  { name: 'Laptop B', price: 1500, category: 'laptops' },
  { name: 'Desktop A', price: 2000, category: 'desktops' },
  { name: 'Accessory A', price: 50, category: 'accessories' }
];



// Initial display of items
displayItems(items);

// Function to sort items
function sortItems() {
  const sortValue = document.getElementById('sortPrice').value;
  let sortedItems;
  if (sortValue === 'low-to-high') {
      sortedItems = items.sort((a, b) => a.price - b.price);
  } else {
      sortedItems = items.sort((a, b) => b.price - a.price);
  }
  displayItems(sortedItems);
}

// Function to filter items
function filterItems() {
  const categoryValue = document.getElementById('categories').value;
  let filteredItems;
  if (categoryValue === 'all') {
      filteredItems = items;
  } else {
      filteredItems = items.filter(item => item.category === categoryValue);
  }
  displayItems(filteredItems);
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var message = document.getElementById('message');

  
});