package ru.jolly.web3;


import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

@ManagedBean
@SessionScoped
public class RouterBean {
    public String routeOnClock(){
        return "success";
    }
    public String routeOnWelcome(){
        return "success";
    }
}
