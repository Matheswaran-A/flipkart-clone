function showCategory(cat) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";
    products[cat].forEach(p => {
      container.innerHTML += `
        <div class="product-card">
          <img src="${p.img}" />
          <h3>${p.name}</h3>
          <p>${p.price}</p>
        </div>`;
    });
  }
  
  function logout() {
    localStorage.removeItem("loggedIn");
    window.location = "login.html";
  }
  
  window.onload = () => {
    if (location.pathname.includes("index.html") && localStorage.getItem("loggedIn") !== "true") {
      window.location = "login.html";
    }
  };
  