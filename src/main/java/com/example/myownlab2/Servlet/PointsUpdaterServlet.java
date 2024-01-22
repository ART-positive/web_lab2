package com.example.myownlab2.Servlet;

import com.example.myownlab2.myTools.Data;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "PointsUpdaterServlet", value = "/PointsUpdaterServlet")
public class PointsUpdaterServlet extends HttpServlet {
    private final ObjectMapper objectMapper = new ObjectMapper();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        List<Data> points = AreaCheckServlet.getStorage(request).getList(request.getSession());
        response.getWriter().println(objectMapper.writeValueAsString(points));
    }
}
