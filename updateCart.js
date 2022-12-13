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

  //   fetch(api_url + id, {
  //       method: "PATCH",
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
  //       alert("Product updated!");
  //       window.location.reload();
  //       return;
  //   })
  //   .catch((error) => {
  //       alert("⚠️Some error occured.");
  //       console.log(error);
  //   })

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
        alert("🚫Product of this Id does not exist");
      } else if (response.status === 200) {
        console.log("Request successfull");
        alert("Product Updated!");
        window.location.reload();
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
