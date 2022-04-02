

let sbmt = document.querySelector('.btn-submit');
let titleChange = document.querySelector('.card-rating-title');


sbmt.addEventListener('click', (e)=> {

    // Take Number to send RATES
    let specialClass = document.querySelector('.special');
    titleChange.style.display = 'flex';

    // first and second page
    let firstPageEl = document.querySelector('.first-page');
    let secondPageEl = document.querySelector('.second-page');


    // If we have SPECIALCLASS = Kliknutie na hviezdičku 
    // then first page NONE second page FLEX;
    if( specialClass ) {
        firstPageEl.style.display = 'none';
        secondPageEl.style.display = 'flex';
        titleChange.innerText = `You selected ${specialClass.innerText} out of 5`;
    }
    else {
        alert('Give rating');
    }
});





let special = document.querySelector('.card-rating');
let specialOne = Array.from(special.children);


// you can choose only ONE star 
// If click and mark STAR  another star will be UNMARK 
specialOne.forEach( (i) => {
    i.addEventListener('click', (e) => {

        i.classList.toggle('special');
        getSiblings(i).forEach( r => {
            r.classList.remove('special');
        });
    });
});


// Let have siblings
let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return  'something is bad ' + siblings;
        
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};