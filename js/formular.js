document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".kontakt-box form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.elements["name"].value.trim();
        const email = form.elements["email"].value.trim();
        const nachricht = form.elements["nachricht"].value.trim();

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
