(function () {
    function pageIsActive() {
        let itemHtml = document.location.pathname.split('/').pop();
        let item = itemHtml.substring(0, itemHtml.length - 5)
        document.getElementById(item).style.filter = "drop-shadow(0 0 3px black)";
        document.getElementById(item).style.borderRadius = "5px";
    }

    document.addEventListener('DOMContentLoaded', pageIsActive);
})();