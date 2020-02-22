package ru.jolly.web3;

import javax.ejb.Local;
import java.util.List;

@Local
public interface ModernizationSessions {
    public void clearSession(String idSession);
    public List<Points> getAll(String idSession);
    public Points add(Points points);
    public void delete(long id);
    public Points get(long id);
    public void update(Points points);
}
