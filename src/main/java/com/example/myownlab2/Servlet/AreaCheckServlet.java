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
    @Override
    public void init() {
    }

    public static Storage getStorage(HttpServletRequest request) {
        HttpSession session = request.getSession();
        Storage storage = (Storage) session.getAttribute("storage");
        if (storage == null) {
            storage = new Storage();
            session.setAttribute("storage", storage);
        }
        return storage;
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        LinkedList<Data> hits = getStorage(request).getList(request.getSession());
        request.setAttribute("hitsFromServer", hits);
        request.getServletContext().getRequestDispatcher("/table.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            double x = Double.parseDouble(request.getParameter("x"));
            double y = Double.parseDouble(request.getParameter("y"));
            double r = Double.parseDouble(request.getParameter("r"));

            if (checkConditions(r, x, y)) {
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

        // Используем сессию для хранения точек
        getStorage(request).add(request.getSession(), data);

        doGet(request, response);
    }

    private static boolean checkConditions(double r, double x, double y) {
        return 1 <= r && r <= 5 && -4 <= x && x <= 4 && -3 <= y && y <= 5;
    }
}
