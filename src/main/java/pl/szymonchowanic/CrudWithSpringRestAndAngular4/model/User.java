package pl.szymonchowanic.CrudWithSpringRestAndAngular4.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String fname;
    private String lname;

    public User() {
    }

    public User(String name, String lastname) {
        this.fname = name;
        this.lname = lastname;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return fname;
    }

    public void setName(String name) {
        this.fname = name;
    }

    public String getLastname() {
        return lname;
    }

    public void setLastname(String lastname) {
        this.lname = lastname;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + fname + '\'' +
                ", lastname='" + lname + '\'' +
                '}';
    }
}
