<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>MyCanvas</title>
</head>
<body>
<link rel="stylesheet" href="css/style.css">
<form method="post" action="${pageContext.request.contextPath}/SubmitServlet">

    <label for="x">x
        <select name="x" id="x">
            <option value="-4">-4</option>
            <option value="-3">-3</option>
            <option value="-2">-2</option>
            <option value="-1">-1</option>
            <option value="0">&nbsp0</option>
            <option value="1">&nbsp1</option>
            <option value="2">&nbsp2</option>
            <option value="3">&nbsp3</option>
            <option value="4">&nbsp4</option>
        </select>
    </label>

    <label for="y">y
        <input class="input-field" type="number" name="y" id="y" min="-3" max="5">
    </label>

    <label>R
        <select name="r" id="r">
            <option value="1">&nbsp1</option>
            <option value="2">&nbsp2</option>
            <option value="3">&nbsp3</option>
            <option value="4">&nbsp4</option>
            <option value="5">&nbsp5</option>
        </select>
    </label>

    <table>
        <tr>
            <th class="hat" colspan="3">Березовский Артемий Сергеевич<br>Р3232<br></th>
        </tr>
    </table>

    <input type="submit" value="Submit">

    <div>
        <canvas id="canvas" width="400" height="400"></canvas>
    </div>
</form>
<script src="${pageContext.request.contextPath}/js/graph.js"></script>
<script src="${pageContext.request.contextPath}/js/updater.js"></script>
</body>
</html>