const categoriesList = document.getElementById('categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItems) => {
    const categoryName = categoryItems.querySelector('h2').textContent;
    const categoryElements = categoryItems.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Number of elements ${categoryElements}`);
    console.log('');

});