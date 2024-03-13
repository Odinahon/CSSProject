var backdrop = document.querySelector('.backdrop');
// console.dir(backdrop);
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal button');
// backdrop.style.display = 'block'
var selectedPlanButtons = document.querySelectorAll('.plan button');
// console.dir(selectedButtons);
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
for( var i = 0; i < selectedPlanButtons.length; i++) {
    selectedPlanButtons[i].addEventListener('click', function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; // This will actually overwrites the comple class;
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

// console.dir(closeButton);
if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal)
}

//close sidebar when click backdrop
backdrop.addEventListener('click', function(){
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});
function closeModal(){
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if (modal) {
       modal.classList.remove('open'); 
    }
    backdrop.classList.remove('open');
}

//TODO
// select toggle button 
// add event listener to open the modal
// style property change the display property
// select mobile nav 

// open the sidebar when we click the button
toggleButton.addEventListener('click', function(){
    // mobileNav.style.display='block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})