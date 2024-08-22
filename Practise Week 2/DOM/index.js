// to get all the elements you use
document.body.childNodes 
//gives all the children under the body tag. 
// Includes new line as a node(denoated as text)

// to give all the children without new line
document.body.children 
//gives all children in the body tag

// to get the first child of an element(the first element inside an element)
document.body.firstChild

// to check if an element has a given child element
document.body.hasChildNodes()
// checks if body has any nested elements

// you can loop through child nodes
for (let i = 0; i < document.body.childNodes.length; i++) {
  const element = document.body.childNodes[i];
}

// to get the elements after or before that is not nested in the given element use sibling
document.body.previousSibling;
document.body.nextSibling;
// returns the elements just before or after the body element eg head

// to get the parent element a given element use parentNode
document.body.parentNode;
// returns the parent of the body elemen which is html

