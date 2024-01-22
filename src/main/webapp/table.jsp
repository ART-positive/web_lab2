<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
</head>
<body>

<link rel="stylesheet" href="css/style.css">

<div class="link">
    <a href="index.jsp">Вернуться назад</a>
</div>

<table>
    <tr>
        <th>попадание</th>
        <th>радиус</th>
        <th>Y</th>
        <th>X</th>
    </tr>
    <jsp:useBean id="hitsFromServer" scope="request" type="java.util.List"/>
    <c:forEach items="${hitsFromServer}" var="hits">
        <tr>
            <td>${hits.hit}</td>
            <td>${hits.r}</td>
            <td>${hits.y}</td>
            <td>${hits.x}</td>
        </tr>
    </c:forEach>
</table>

</body>
</html>
