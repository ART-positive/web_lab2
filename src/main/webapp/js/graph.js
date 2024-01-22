function postForm(addR, r, addX, clientX, addY, clientY) {
    let form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "/MyOwnLab2-1.0-SNAPSHOT/SubmitServlet  ");
    form.setAttribute("id", "canvas");
    form.style.display = 'none';
    addR(form, r);
    addX(form, clientX);
    addY(form, clientY);
    document.body.appendChild(form);
    form.submit();
}

function drawAreas(ctx, centerX, centerY, side) {
    // 2
    ctx.fillStyle = "#00b4d8";
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX - side / 3, centerY);
    ctx.lineTo(centerX, centerY - side / 6);
    ctx.fill();
    ctx.closePath();

    // 3
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX - side / 3, centerY);
    ctx.lineTo(centerX - side / 3, centerY + side / 6);
    ctx.lineTo(centerX, centerY + side / 6);
    ctx.fill();
    ctx.closePath();

    // 4
    ctx.beginPath();
    const radius = side / 6;
    const startAngle = 0;
    const endAngle = Math.PI * 0.5;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
    ctx.fill();
    ctx.closePath();
}

function drawAxis(ctx, centerX, side, centerY) {
    //x axis
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(centerX - side / 2, centerY);
    ctx.lineTo(centerX + side / 2, centerY);
    ctx.stroke();
    ctx.closePath();

    //y axis
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + side / 2);
    ctx.lineTo(centerX, centerY - side / 2);
    ctx.stroke();
    ctx.closePath();
}

function drawArrows(ctx, centerX, side, centerY) {
    //x arrow
    ctx.beginPath();
    ctx.moveTo(centerX + side / 2, centerY);
    ctx.lineTo(centerX + side / 2 - 10, centerY + 10);
    ctx.lineTo(centerX + side / 2 - 10, centerY - 10);
    ctx.lineTo(centerX + side / 2, centerY);
    ctx.fill();
    ctx.closePath();

    //y arrow
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - side / 2);
    ctx.lineTo(centerX + 10, centerY - side / 2 + 10);
    ctx.lineTo(centerX - 10, centerY - side / 2 + 10);
    ctx.lineTo(centerX, centerY - side / 2);
    ctx.fill();
    ctx.closePath();
}

function drawLinesOnCanvas(ctx, centerX, side, r, k, centerY) {
    ctx.beginPath();
    ctx.moveTo(centerX + side / 6 * (r / k), centerY);
    ctx.lineTo(centerX + side / 6 * (r / k), centerY + 5);
    ctx.lineTo(centerX + side / 6 * (r / k), centerY - 5);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX - side / 6 * (r / k), centerY);
    ctx.lineTo(centerX - side / 6 * (r / k), centerY + 5);
    ctx.lineTo(centerX - side / 6 * (r / k), centerY - 5);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY + side / 6 * (r / k));
    ctx.lineTo(centerX - 5, centerY + side / 6 * (r / k));
    ctx.lineTo(centerX + 5, centerY + side / 6 * (r / k));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY - side / 6 * (r / k));
    ctx.lineTo(centerX - 5, centerY - side / 6 * (r / k));
    ctx.lineTo(centerX + 5, centerY - side / 6 * (r / k));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX + side / 3 * (r / k), centerY);
    ctx.lineTo(centerX + side / 3 * (r / k), centerY + 5);
    ctx.lineTo(centerX + side / 3 * (r / k), centerY - 5);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX - side / 3 * (r / k), centerY);
    ctx.lineTo(centerX - side / 3 * (r / k), centerY + 5);
    ctx.lineTo(centerX - side / 3 * (r / k), centerY - 5);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY + side / 3 * (r / k));
    ctx.lineTo(centerX - 5, centerY + side / 3 * (r / k));
    ctx.lineTo(centerX + 5, centerY + side / 3 * (r / k));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY - side / 3 * (r / k));
    ctx.lineTo(centerX - 5, centerY - side / 3 * (r / k));
    ctx.lineTo(centerX + 5, centerY - side / 3 * (r / k));
    ctx.stroke();
    ctx.closePath();
}

function drawRadius(ctx, centerX, centerY, side, r, k) {
    ctx.fillStyle = "black";
    ctx.font = "bold 10px";

    ctx.beginPath();
    ctx.fillText("R", centerX - 20, centerY - side / 3 * (r / k));
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("R/2", centerX - 30, centerY - side / 6 * (r / k));
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("-R/2", centerX - 35, centerY + side / 6 * (r / k));
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("-R", centerX - 25, centerY + side / 3 * (r / k));
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("-R/2", centerX - side / 6 * (r / k) - 10, centerY - 10);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("-R", centerX - side / 3 * (r / k) - 5, centerY - 10);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("R/2", centerX + side / 6 * (r / k) - 10, centerY - 10);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("R", centerX + side / 3 * (r / k) - 5, centerY - 10);
    ctx.closePath();
}

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    let r = 4;
    const side = canvas.width;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    ctx.lineWidth = 2;
    const k = 4;
    ctx.strokeRect(centerX - side / 2, centerY - side / 2, side, side);
    drawGraph(r);


    canvas.addEventListener("click", function (event) {
        let radius = parseFloat(document.getElementById("r").value);
        if (isNaN(radius) || (1 > radius) || (radius > 5)) {
            alert("Wrong radius!");
        } else {
            clicked(event);
        }
    })

    function drawGraph(r) {
        drawAreas(ctx, centerX, centerY, side);

        drawAxis(ctx, centerX, side, centerY);

        drawArrows(ctx, centerX, side, centerY);

        drawLinesOnCanvas(ctx, centerX, side, r, k, centerY);

        drawRadius(ctx, centerX, centerY, side, r, k);
    }

    function addX(form, clientX) {
        let j = document.createElement("input");
        j.type = "text";
        j.name = "x";
        j.value = clientX;
        form.append(j);
    }

    function addY(form, clientY) {
        let i = document.createElement("input");
        i.type = "text";
        i.name = "y";
        i.value = clientY;
        form.append(i);
    }

    function addR(form, r) {
        let k = document.createElement("input");
        k.type = "text";
        k.name = "r";
        k.value = r;
        form.append(k);
    }

    function clicked(event) {
        let r = parseFloat(document.getElementById("r").value);
        if (!((1 > r) || (r > 5))) {
            let x = event.offsetX;
            let y = event.offsetY;

            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            let rect = canvas.getBoundingClientRect();
            let clientX = (event.clientX - rect.left - 200) / (side / 3) * r;
            let clientY = ((-1) * (event.clientY - rect.top - 200)) / (side / 3) * r;

            document.getElementsByName("x").value = clientX;
            document.getElementsByName("y").value = clientY;
            document.getElementsByName("r").value = r;

            postForm(addR, r, addX, clientX, addY, clientY);
        }
    }
})
