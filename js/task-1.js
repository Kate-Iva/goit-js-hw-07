'use strict';
const categoriesEl = document.querySelector('ul');
//console.log(categoriesEl);
const categoriesChildrenLength = categoriesEl.children.length;
console.log(`Number of categories: ${categoriesChildrenLength}`);

const categoriesChildrenArray = document.querySelectorAll('.item');
//const categoriesChildrenArray = Array.from(categories.children);
//console.log(categoriesChildrenArray);

categoriesChildrenArray.forEach(category => {
    const categoryName = category.children[0].textContent;
    const elementsCount = category.children[1].children.length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
  });