//this is for creating custom alert --start
function customAlert() {
  this.render = function (dialog) {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById("dialogoverlay");
    var dialogbox = document.getElementById("dialogbox");
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = winW / 2 - 550 * 0.5 + "px";
    dialogbox.style.top = "200px";
    dialogbox.style.display = "block";
    document.getElementById("dialogboxhead").innerHTML =
      "Message from Shop-ONN:";
    document.getElementById("dialogboxbody").innerHTML = dialog;
    document.getElementById("dialogboxfoot").innerHTML =
      '<button onclick="Alert.ok()">Ok</button>';
  };

  this.ok = function () {
    document.getElementById("dialogoverlay").style.display = "none";
    document.getElementById("dialogbox").style.display = "none";
    window.location.reload();
  };
}
var Alert = new customAlert();
//this is for creating custom alert --end

const api_url = "http://localhost:3000/product/update/";

function update() {
  var id = document.getElementById("productId").value;
  var name = document.getElementById("productName").value;
  var desc = document.getElementById("productDesc").value;
  var price = document.getElementById("productPrice").value;

  var obj = {
    id: id,
    name: name,
    description: desc,
    price: price,
  };

  fetch(api_url + id, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => {
      if (response.status === 404) {
        console.log("Request successfull");
        Alert.render("🚫Product of this Id does not exist");
      } else if (response.status === 200) {
        console.log("Request successfull");
        Alert.render("Product Updated!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
