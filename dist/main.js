const button = document.querySelector('#submit');
const spans = document.querySelectorAll('span');
const sect1 = document.querySelector('#one');
const sect2 = document.querySelector('#two');
const review = document.querySelector('#review');


spans.forEach( span => {
    span.addEventListener('click', function(){
        const newText = span.innerText;
        review.innerText = `You selected ${newText} out of 5`
    });
});

button.addEventListener('click', function(){
    sect1.classList.add('hidden')
    sect2.classList.add('flex');
    sect2.classList.remove('hidden');

});

