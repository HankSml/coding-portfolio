var appCards = document.querySelectorAll('.app-card');

for (let index = 0; index < appCards.length; index++) {
    appCards[index].addEventListener('click', function (event) {
        event.preventDefault();
        var e = event.target;
        var link = e.closest('.app-card').getAttribute("data-link");
        window.location.href = link;
    })
}
