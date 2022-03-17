init();

function init() {
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    const modalContent = document.createElement('div');
    modalContent.setAttribute('class', 'modal-content');
    
    // creating the modal
    const banner = document.createElement('h1');
    banner.setAttribute('class', 'banner');
    banner.innerText = "Take a deep breath!";
    modalContent.appendChild(banner);
    
    const instructions = document.createElement('div');
    instructions.setAttribute('class', 'instructions');
    const makingSure = document.createElement('p');
    makingSure.innerText = 'Just making sure you\'re doing okay.';
    const typeQuote = document.createElement('p');
    typeQuote.innerText = 'Type the inspirational quote below if you wish to continue browsing:';
    instructions.appendChild(makingSure);
    instructions.appendChild(typeQuote);
    modalContent.appendChild(instructions);
    
    const quoteBox = document.createElement('div');
    quoteBox.setAttribute('class', 'quote-box');
    const quote = document.createElement('p');
    quote.innerHTML = '<em>When you have to make a choice and don\'t make it, that is in itself a choice.</em>';
    quoteBox.appendChild(quote);
    modalContent.appendChild(quoteBox);
    
    const form = document.createElement('div');
    form.setAttribute('class', 'form');
    
    const typeHere = document.createElement('input');
    typeHere.setAttribute('class', 'type-here');
    typeHere.type = 'text';
    const continueBtn = document.createElement('button');
    continueBtn.setAttribute('class', 'continue-btn');
    continueBtn.innerText = 'continue';
    form.appendChild(typeHere);
    form.appendChild(continueBtn);
    modalContent.appendChild(form);
    
    const closeTab = document.createElement('div');
    closeTab.setAttribute('class', 'close-tab');
    // closeTab.setAttribute('href', 'https://www.google.com/');
    closeTab.innerHTML = '<a href="https://www.google.com/"><span>Or click here to leave this page.</span> 😊</a>';
    modalContent.appendChild(closeTab);
    
    document.querySelector('body').appendChild(modal).appendChild(modalContent);
    
    // // get inspirational quote
    // fetch("https://zenquotes.io/api/today ")
    // .then(data => data.json())
    // .then(data => console.log(data));
    
    // check if quotation typed in correctly
    continueBtn.addEventListener('click', () => {
        console.log('typeHere.value:', typeHere.value);
        console.log('quote.innerText:', quote.innerText);
        if (typeHere.value === quote.innerText) {
            modal.style.visibility = 'hidden';
            console.log('modal hidden');
        }
    });
}
    
document.addEventListener("pjax:end", init);