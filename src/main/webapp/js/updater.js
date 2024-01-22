$(document).ready(function () {
    $.ajax({
        url: "/MyOwnLab2-1.0-SNAPSHOT/SubmitServlet",
        async: true,
        type: "POST",
        cache: false,
        data : {
            "getPoints" : "yes"
        },
        success: function (response) {
            restore(response);
        }

    })
})

function restore(response){
    console.log(response);
    let points = JSON.parse(response);
    console.log(points);
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');
    const side = canvas.width;
    let rows = response.split('\n');
    points.forEach(function (value, index, array){
        let x = parseFloat(value.x);
        let y = parseFloat(value.y);
        let r = parseFloat(value.r);

        x = (x*side)/(3*r) + 200;
        y = (-1)*(y*side)/(3*r) + 200;

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI*2, );
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    })
}