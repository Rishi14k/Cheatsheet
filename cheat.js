
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    function scrollToContent() {
        const searchTerm = searchInput.value.toLowerCase();
        const allHeaders = document.querySelectorAll('.main h2, .main h1, .main h3, .main h4, .main h5, .main h6');

        for (let header of allHeaders) {
            if (header.textContent.toLowerCase().includes(searchTerm)) {
                header.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            }
        }
    }

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            scrollToContent();
        }
    });

    searchButton.addEventListener('click', scrollToContent);
});