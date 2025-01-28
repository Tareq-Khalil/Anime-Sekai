document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const autocompleteList = document.getElementById('autocomplete-list');
    const animeList = [
        "Kusuriya no Hitorigoto",
        "Charlotte",
        "Ragna Crimson",
        "Sousou no Frieren",
        "100-man no Inochi no Ue ni Ore wa Tatteiru",
        "Oshi no Ko",
        "Kimetsu no Yaiba",
        "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e",
        "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
        "No Game No Life"
    ];
    const animeURLs = {
        "Kusuriya no Hitorigoto": "kusuriya.html",
        "Charlotte": "charlotte.html",
        "Ragna Crimson": "ragna-crimson.html",
        "Sousou no Frieren": "sousou-no-frieren.html",
        "100-man no Inochi no Ue ni Ore wa Tatteiru": "100-man-no-inochi.html",
        "Oshi no Ko": "oshi-no-ko.html",
        "Kimetsu no Yaiba": "kimetsu no yaiba.html",
        "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e": "classroom-of-the-elite.html",
        "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen": "kaguya-sama.html",
        "No Game No Life": "no-game-no-life.html"
    };
    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        autocompleteList.innerHTML = '';
        if (query) {
            const suggestions = animeList.filter(anime =>
                anime.toLowerCase().includes(query)
            );
            suggestions.forEach(suggestion => {
                const div = document.createElement('div');
                div.classList.add('autocomplete-item');
                div.textContent = suggestion;
                div.addEventListener('click', () => {
                    searchInput.value = suggestion;
                    autocompleteList.innerHTML = '';
                    window.location.href = animeURLs[suggestion];
                });
                autocompleteList.appendChild(div);
            });
            if (suggestions.length === 0) {
                const noResults = document.createElement('div');
                noResults.classList.add('autocomplete-item');
                noResults.textContent = 'No results found';
                autocompleteList.appendChild(noResults);
            }
        }
    });
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target)) {
            autocompleteList.innerHTML = '';
        }
    });
    document.querySelector('button[type="button"]').addEventListener('click', () => {
        const query = searchInput.value;
        if (animeURLs[query]) {
            window.location.href = animeURLs[query];
        } else {
            alert('Anime not found.');
        }
    });
});
function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.toggle("active");
  }