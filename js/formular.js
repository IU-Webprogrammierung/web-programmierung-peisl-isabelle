document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".kontakt-box form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const nachricht = document.getElementById("nachricht").value.trim();

        if (!name || !email || !nachricht) {
            alert("Bitte fülle alle Felder aus.");
            return;
        }

        const subject = "Nachricht von " + name;
        const body = nachricht;

        window.location.href = "mailto:isabelle.peisl@iu-study.org" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);
    });
});

