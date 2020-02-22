package ru.jolly.web3;

import javax.ejb.Local;

@Local
public interface Cleaner {
    public void cleanerBD();
}
