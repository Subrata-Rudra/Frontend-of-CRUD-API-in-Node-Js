fetch("http://localhost:3000/product/read")
  .then((data) => {
    return data.json(); //converted the response to an object, the the data now is in json format
  })
  .then((objectData) => {
    // console.log(objectData[0].name);
    let tableData = "";
    objectData.map((values) => {
      tableData += `<tr>
      <td>${values.id}</td>
      <td>${values.name}</td>
      <td>${values.description}</td>
      <td>${values.price}</td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
    // console.log(tableData);
  })
  .catch((error) => {
    console.log(error);
  });


//function of the Refresh Button
function refresh() {
  window.location.reload();
}
