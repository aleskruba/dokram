let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

const languageElementCZ = document.getElementById('flagCZ');
const languageElementEN = document.getElementById('flagEN');

languageElementCZ.addEventListener('click', function() { 
    updateLanguage('cz');
});

languageElementEN.addEventListener('click', function() { 
    updateLanguage('en');
});

function updateLanguage(language) {
    localStorage.setItem('language', language);
    const newPath = `${window.location.origin}/${language}/index.html`;
    window.location.href = newPath;
}

 
 const themeElement = document.getElementById('theme');
     let checkTheme = localStorage.getItem('theme');
     const body = document.getElementsByTagName('body')
     let main = document.querySelector('.main')
     let iconElement = document.createElement('i');

 
     if (checkTheme === 'dark') {
         iconElement.className = 'bx bx-brightness';
         main.classList.remove('dark')  
         const oddSections = document.querySelectorAll('section:nth-child(odd)');
            oddSections.forEach(section => {
                section.style.background = '#323946';
            });
     } else {
         iconElement.className = 'bx bx-moon'; 
         main.classList.add('dark')  
         const oddSections = document.querySelectorAll('section:nth-child(odd)');
            oddSections.forEach(section => {
                section.style.background = 'lightgray';
            });
     }
 
     themeElement.appendChild(iconElement);
 
     themeElement.addEventListener('click', function() {
     const newTheme = localStorage.getItem('theme')
       
         if (newTheme==='dark') {
                    localStorage.setItem('theme', '') 
                     main.classList.add('dark')   
                     const oddSections = document.querySelectorAll('section:nth-child(odd)');
                     oddSections.forEach(section => {
                         section.style.background = 'lightgray';
                     });       
 
 };
         if (newTheme==='') {
                 localStorage.setItem('theme', 'dark') 
                main.classList.remove('dark')  
                const oddSections = document.querySelectorAll('section:nth-child(odd)');
                oddSections.forEach(section => {
                    section.style.background = '#323946';
                });
              
             };
 
         themeElement.innerHTML = '';
         iconElement = document.createElement('i');
         iconElement.className = newTheme === '' ? 'bx bx-brightness' : 'bx bx-moon';
 
         themeElement.appendChild(iconElement);
     });