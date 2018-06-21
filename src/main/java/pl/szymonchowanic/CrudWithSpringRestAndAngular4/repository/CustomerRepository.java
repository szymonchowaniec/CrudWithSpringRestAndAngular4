package pl.szymonchowanic.CrudWithSpringRestAndAngular4.repository;


import org.springframework.data.repository.CrudRepository;
import pl.szymonchowanic.CrudWithSpringRestAndAngular4.model.Customer;

import java.util.List;

public interface CustomerRepository extends CrudRepository<Customer, Long> {
    List<Customer> findByLastName(String lastName);
}
