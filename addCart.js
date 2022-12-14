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

function create() {
  var name = document.getElementById("productName").value;
  var desc = document.getElementById("productDesc").value;
  var price = document.getElementById("productPrice").value;

  var obj = {
    name: name,
    description: desc,
    price: price,
  };

  //   console.log(obj);

  //   fetch("http://localhost:3000/product/create/", {
  //       method: "POST",
  //       headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(obj)
  //   })
  //   .then(() => {
  //       return;
  //   })
  //   .then(() => {
  //       alert("Product added to the cart!");
  //       window.location.reload();
  //       return;
  //   })
  //   .catch((error) => {
  //       alert("⚠️Some error occured.");
  //       console.log(error);
  //   })
  // }

  fetch("http://localhost:3000/product/create/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => {
      if (response.status === 200) {
        console.log("Request successfull");
        // alert("Product Added Successfully to your Cart!");
        Alert.render("Product Added Successfully to your Cart!");
      }
    })
    .catch((error) => {
      // alert("⚠️Something error occured.");
      Alert.render("⚠️Something error occured.");
      console.log(error);
    });
  Alert.render("Product Added Successfully to your Cart!");
}
