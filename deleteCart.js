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

const api_url = "http://localhost:3000/product/delete/";

function del() {
  var id = document.getElementById("pId").value;
  var final_url = api_url + id;

  //XMLHttpRequest
  const req = new XMLHttpRequest();
  req.open("DELETE", final_url);

  req.addEventListener("load", function () {
    if (req.status === 200 && req.readyState === 4) {
      console.log("Request successfull");
      Alert.render("Product Removed from your Cart.");
    } else if (req.status === 404 && req.readyState === 4) {
      console.log("Request successfull");
      Alert.render("🚫Product with this Id does not exist in your cart.");
    } else {
      Alert.render("⚠️Something error occured.");
      throw new Error("Bad request");
    }
  });

  req.send();
}
