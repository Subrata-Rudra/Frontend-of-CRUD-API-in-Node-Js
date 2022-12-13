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
        alert("Product Added Successfully to your Cart!");
        window.location.reload();
      }
    })
    .catch((error) => {
      alert("⚠️Something error occured.");
      console.log(error);
    });
}
