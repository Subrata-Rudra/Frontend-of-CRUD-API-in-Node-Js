const api_url = "http://localhost:3000/product/delete/";

function del()
{
    var id = document.getElementById("pId").value;
    var final_url = api_url + id;

    //XMLHttpRequest
    const req = new XMLHttpRequest();
    req.open('DELETE', final_url);

    req.addEventListener('load', function() {
        if(req.status === 200 && req.readyState === 4)
        {
            console.log("Request successfull");
            alert("Product Removed from your Cart.");
            window.location.reload();
        }
        else if(req.status === 404 && req.readyState === 4)
        {
            console.log("Request successfull");
            alert("🚫Product with this Id does not exist in your cart.");
        }
        else
        {
            alert("⚠️Something error occured.");
            throw new Error("Bad request");
        }
    })

    req.send();
}





