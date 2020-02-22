package ru.jolly.web3;

import javax.persistence.*;
import java.io.BufferedReader;
import java.io.InputStreamReader;

@Entity
//@Table(name="Points")
@NamedQuery(name = "Points.getAll", query = "SELECT point from Points point")
public class Points{
    public Points(){
        super();
    }
    public Points(int x, float y, float r, boolean hit, String sessionNumber){
        this.x = x;
        this.y = y;
        this.r = r;
        this.hit = hit;
        this.sessionNumber = sessionNumber;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_seq")
    @SequenceGenerator(name = "id_seq")
    private long id;
    private String sessionNumber;
    private int x;
    private float y,r;
    private boolean hit;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSessionNumber() {
        return sessionNumber;
    }

    public void setSessionNumber(String sessionNumber) {
        this.sessionNumber = sessionNumber;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public float getR() {
        return r;
    }

    public void setR(float r) {
        this.r = r;
    }

    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }

    public String getHitable() {
        if (hit)
            return "Попадание";
        return "Промах";
    }
}
