package ru.jolly.web3;

import javax.annotation.ManagedBean;
import javax.ejb.EJB;
import javax.enterprise.context.SessionScoped;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.util.LinkedList;
import java.util.List;

@Named
@ManagedBean("connectorCDI")
@SessionScoped
public class ConnectorCDI implements Serializable {

    private String x, y, r;
    String idSession = ((HttpServletRequest) FacesContext.getCurrentInstance().getExternalContext().getRequest()).getSession().getId();
    @EJB
    private MakerEJB makerEJB;

    public String getX() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }

    public String getY() {
        return y;
    }

    public void setY(String y) {
        this.y = y;
    }

    public String getR() {
        return r;
    }

    public void setR(String r) {
        this.r = r;
    }

    public void delete(long id){
        makerEJB.delete(id);
    }

    public void pointCheck(){
        try{
            y=y.replace(',', '.');
            int x = Integer.parseInt(this.x);
            float y = Float.parseFloat(this.y);
            float r = Float.parseFloat(this.r);
            if (y<=3 && y>=-5)
                makerEJB.add(new Points(x, y, r, makerEJB.checkHit(x, y, r), idSession));
            else
                this.y="";
        }
        catch (Exception e){
            //TODO
        }
    }

    public void clearSession(){
        makerEJB.clearSession(idSession);
    }

    public List<Points> getAll(){
        try {
            return makerEJB.getAll(idSession);
        }catch (Exception e){
            return new LinkedList<Points>();
        }
    }
    public void setM4X() {
        this.x = "-4";
    }
    public void setM3X() {
        this.x = "-3";
    }
    public void setM2X() {
        this.x = "-2";
    }
    public void setM1X() {
        this.x = "-1";
    }
    public void set0X() {
        this.x = "0";
    }
    public void set1X() {
        this.x = "1";
    }
    public void set2X() {
        this.x = "2";
    }
    public void set3X() {
        this.x = "3";
    }
    public void set4X() {
        this.x = "4";
    }

    public void set1R(){
        this.r="1";
    }
    public void set15R(){
        this.r="1.5";
    }
    public void set2R(){
        this.r="2";
    }
    public void set25R(){
        this.r="2.5";
    }
    public void set3R(){
        this.r="3";
    }
}
