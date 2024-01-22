package com.example.myownlab2.myTools;

public class Data {
    private double x;
    private double y;
    private double r;
    private boolean hit;

    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public static boolean wasHit(Double x, Double y, Double radius) {
        if (x > 0 && y > 0) {
            return false;
        } else if (x <= 0 && y >= 0) {
            return isSecondQuarter(x, y, radius);
        } else if (x <= 0 && y <= 0) {
            return isThirdQuarter(x, y, radius);
        } else {
            return isFourthQuarter(x, y, radius);
        }
    }

    private static boolean isFourthQuarter(Double x, Double y, Double radius) {
        return Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(radius / 2, 2);
    }

    private static boolean isThirdQuarter(Double x, Double y, Double radius) {
        return (y >= (-radius / 2)) && (x >= -radius);
    }

    private static boolean isSecondQuarter(Double x, Double y, Double radius) {
        return y <= (x + radius) / 2;
    }
}
