package com.example.myownlab2.myTools;

import javax.servlet.http.HttpSession;
import java.util.LinkedList;

public class Storage {
    private static final String SESSION_KEY = "pointsList";

    public static void add(HttpSession session, Data data) {
        LinkedList<Data> list = getList(session);
        list.add(data);
        setList(session, list);
    }

    public static int size(HttpSession session) {
        return getList(session).size();
    }

    public static Data get(HttpSession session, int i) {
        return getList(session).get(i);
    }

    public static void clear(HttpSession session) {
        session.setAttribute(SESSION_KEY, new LinkedList<>());
    }

    private static void setList(HttpSession session, LinkedList<Data> list) {
        session.setAttribute(SESSION_KEY, list);
    }

    public static LinkedList<Data> getList(HttpSession session) {
        LinkedList<Data> list = (LinkedList<Data>) session.getAttribute(SESSION_KEY);
        if (list == null) {
            list = new LinkedList<>();
            setList(session, list);
        }
        return list;
    }
}
