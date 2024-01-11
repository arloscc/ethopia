$(document).ready(function () {
  hasil = "";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "produk.json", true);
  xhttp.onload = function () {
    data = JSON.parse(this.response);
    data["data"].forEach((d) => {
      console.log(d);
      hasil +=
        `<div class="col mb-5">
      <div class="card h-100">
          <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
          <a onclick="changeDetail(` +
        d["id"] +
        `)"><img class="card-img-top" src="` +
        d["Gambar"] +
        `" alt="..." /></a>
          <div class="card-body p-4">
              <div class="text-center">
                  <h5 class="fw-bolder">` +
        d["jenis"] +
        `</h5>
                  <div class='d-flex justify-content-center small text-warning mb-2'>`;
      for (let i = 1; i <= d["Bintang"]; i++) {
        hasil += `<div class="bi-star-fill"></div>`;
      }
      hasil += "</div>";
      if (d["diskon"]) {
        hasil +=
          "<span class='text-muted text-decoration-line-through'>" +
          d["HargaDiskon"] +
          "</span>";
      }
      hasil +=
        d["Harga"] +
        `
              </div>
          </div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <button class="apacoba" onclick="addToCart()">Add to Cart</button>
          </div>
      </div>
  </div>`;
    });
    // alert(JSON.parse(this.response));
    $("#prod").html(hasil);
  };
  xhttp.send();
});
function changeDetail(id) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "produk.json", true);
  xhttp.onload = function () {
    data = JSON.parse(this.response);
    data["data"].forEach((d) => {
        if (d["id"] === id) {
            if (d["diskon"]) {
                hargadiskon =
                  `<span class="text-decoration-line-through">` +
                  d["HargaDiskon"] +
                  "</span><span> "+d["Harga"]+`</span>`
                  
                  ;
              }
            $("#gmb").attr("src",d["Gambar"]);
            $("#sku").text(d["sku"]);
            $("#nama").text(d["Nama"]);
            $("#desc").text(d["desc"]);
            $("#harga").html(hargadiskon);
        }
    });
  };
  xhttp.send();
}
