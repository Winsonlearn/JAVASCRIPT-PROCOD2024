function navigateTo(sectionId) {
    var loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';

    setTimeout(function() {
        var sections = document.querySelectorAll('.section');
        sections.forEach(function(section) {
            section.classList.remove('active');
        });

        document.getElementById(sectionId).classList.add('active');
        loadingScreen.style.display = 'none';
    }, 1500); 
}

window.onload = function() {
    var loadingScreen = document.getElementById('loadingScreen');
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 1500); 
}
