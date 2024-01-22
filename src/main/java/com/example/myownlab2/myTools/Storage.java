package com.example.myownlab2.myTools;

import java.util.LinkedList;

public class Storage {
    private LinkedList<Data> list;
    public Storage(){
        list = new LinkedList<>();
    }
    public void add(Data data){
        list.add(data);
    }
    public int size(){
        return list.size();
    }
    public Data get(int i){
        return list.get(i);
    }
    public void setList(LinkedList<Data> list){
        this.list = list;
    }
    public LinkedList<Data> getList(){
        return list;
    }
}
