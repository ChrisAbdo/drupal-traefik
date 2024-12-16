// js/loadNavbar.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('components/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            setActiveNavLink();
        })
        .catch(error => {
            console.error('Error fetching the navbar:', error);
        });
});

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    let navId = '';
    switch(currentPage) {
        case 'index.html':
        case '':
            navId = 'nav-home';
            break;
        case 'about.html':
            navId = 'nav-about';
            break;
        case 'blogs.html':
            navId = 'nav-blog';
            break;
        case 'contact.html':
            navId = 'nav-contact';
            break;
        default:
            navId = '';
    }
    if (navId) {
        const activeLink = document.getElementById(navId);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

