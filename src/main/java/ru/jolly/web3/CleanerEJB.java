package ru.jolly.web3;

import javax.ejb.Schedule;
import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;

@Singleton
public class CleanerEJB implements Cleaner {
    private EntityManager entityManager = Persistence.createEntityManagerFactory("examplePU").createEntityManager();

    @Schedule
    public void cleanerBD(){
        entityManager.createQuery("DELETE FROM Points");
    }
}
