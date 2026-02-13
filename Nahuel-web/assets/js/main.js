function loadComponent(id, path) {
  fetch(path)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error("Error:", err));
}

document.addEventListener("DOMContentLoaded", () => {

  const inPages = window.location.pathname.includes("/pages/");

  const componentPath = inPages ? "../components/" : "components/";

  loadComponent("header", componentPath + "header.html");
  loadComponent("footer", componentPath + "footer.html");

});


