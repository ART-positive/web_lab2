package com.example.myownlab2.Servlet;

import com.example.myownlab2.myTools.Data;
import com.example.myownlab2.myTools.Storage;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.LinkedList;

import static com.example.myownlab2.myTools.Data.wasHit;


@WebServlet(name = "AreaCheckServlet", value = "/AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {
    private static Storage storage;

    public static Storage getStorage() {
        return storage;
    }

    @Override
    public void init() {
        storage = new Storage();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        LinkedList<Data> hits = storage.getList();
        request.setAttribute("hitsFromServer", hits);
        request.getServletContext().getRequestDispatcher("/table.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            double x = Double.parseDouble(request.getParameter("x"));
            double y = Double.parseDouble(request.getParameter("y"));
            double r = Double.parseDouble(request.getParameter("r"));

            if (checkCoditions(r, x, y)) {
                returnTable(request, response, r, x, y);
            }
        } catch (NumberFormatException e) {
            RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/index.jsp");
            dispatcher.forward(request, response);
        }
    }

    private void returnTable(HttpServletRequest request, HttpServletResponse response, double r, double x, double y) throws ServletException, IOException {
        Data data = new Data();
        data.setR(r);
        data.setX(x);
        data.setY(y);
        data.setHit(wasHit(x, y, r));
        storage.add(data);
        doGet(request, response);
    }

    private static boolean checkCoditions(double r, double x, double y) {
        return 1 <= r && r <= 5 && -4 <= x && x <= 4 && -3 <= y && y <= 5;
    }
}
