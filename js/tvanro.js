function toggleMobileMenu(){
    document.querySelector('#primary-menu > ul').classList.toggle('show');
}

document.querySelector('#primary-menu-trigger').addEventListener('click', toggleMobileMenu);
