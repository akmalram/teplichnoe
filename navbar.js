window.addEventListener('DOMContentLoaded', () => {
    let navbarSearchToggler = () => {

        let btn = document.querySelector('.navbar-search-btn');
        let element = document.querySelector('.navbar-search-modal');
        let input = document.querySelector('.navbar-search .input-wrapper')
        let modalBackground = document.querySelector('.navbar-search-modal .background');

        if(btn) {
            btn.addEventListener('click', () => {
                if(window.getComputedStyle(element).visibility == 'hidden') {
                    element.style.cssText = `visibility: visible; 
                                             opacity: 1;`;
                    input.style.cssText = `opacity: 1;
                                           transform: translateY(0)`;
                }
            });

            modalBackground.addEventListener('click', () => {
                element.style.cssText = `visibility: hidden; 
                                            opacity: 0;`;
                input.style.cssText = `opacity: 0;
                                        transform: translateY(-50px)`;
            });
        }
    }

    let menuToggler = () => {
        let btn = document.querySelector('.navbar .toggle-btn');
        let target = document.querySelector('.navbar .menu');

        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            target.classList.toggle('active');
        });
    }

    menuToggler();

    navbarSearchToggler();
});