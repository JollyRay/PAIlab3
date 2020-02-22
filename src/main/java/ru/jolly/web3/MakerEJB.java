package ru.jolly.web3;

import javax.ejb.LocalBean;
import javax.ejb.Stateful;
import javax.faces.context.FacesContext;
import javax.persistence.*;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Stateful
@LocalBean
public class MakerEJB implements ModernizationSessions{// implements ModernizationSessions

//    @PersistenceContext(unitName = "examplePU")
//    private EntityManager entityManager;
    public EntityManager entityManager = Persistence.createEntityManagerFactory("examplePU").createEntityManager();

    public Points add(Points points){
        entityManager.getTransaction().begin();
        Points point = entityManager.merge(points);
        entityManager.getTransaction().commit();
        return point;
    }

    public void delete(long id){
        entityManager.getTransaction().begin();
        entityManager.remove(get(id));
        entityManager.getTransaction().commit();
    }

    public Points get(long id){
        return entityManager.find(Points.class, id);
    }

    public void update(Points points){
        entityManager.getTransaction().begin();
        entityManager.merge(points);
        entityManager.getTransaction().commit();
    }

    public void clearSession(String idSession) {
        Query q =entityManager.createQuery("DELETE FROM Points WHERE sessionNumber=:idSession");
        q.setParameter("idSession", idSession);
        q.executeUpdate();
    }

    public List<Points> getAll(String idSession){
        HttpServletRequest req = (HttpServletRequest) FacesContext.getCurrentInstance().getExternalContext().getRequest();
        req.getSession().getId();
        TypedQuery<Points> namedQuery = entityManager.createQuery("SELECT point FROM Points point WHERE sessionNumber LIKE :session ORDER BY point.id DESC", Points.class);
//        TypedQuery<Points> namedQuery = entityManager.createQuery("FROM Points", Points.class);
//        TypedQuery<Points> namedQuery = entityManager.createNamedQuery("Points.getAll", Points.class);
        namedQuery.setParameter("session", idSession);
        return namedQuery.getResultList();
    }

    public boolean checkHit(int x, float y, float r){
        if (x>=0 && y >=0 && r>=y && r>= x)
            return true;

        if (x>=0 && y <= 0 && (x*x+y*y<=r*r/4))
            return true;

        return x <= 0 && y <= 0 && y >= -r - 2 * x;
    }
}
