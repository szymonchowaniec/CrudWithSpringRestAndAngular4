package pl.szymonchowanic.CrudWithSpringRestAndAngular4.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.szymonchowanic.CrudWithSpringRestAndAngular4.model.Customer;
import pl.szymonchowanic.CrudWithSpringRestAndAngular4.repository.CustomerRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    CustomerRepository repository;

    @GetMapping(value="/customer",  produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Customer> getAll() {
        List<Customer> list = new ArrayList<>();
        Iterable<Customer> customers = repository.findAll();

        customers.forEach(list::add);
        return list;
    }

    @PostMapping(value="/postcustomer")
    public Customer postCustomer(@RequestBody Customer customer) {

        repository.save(new Customer(customer.getFirstName(), customer.getLastName()));
        return customer;
    }

    @GetMapping(value="/findbylastname/{lastName}",  produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Customer> findByLastName(@PathVariable String lastName) {

        List<Customer> customers = repository.findByLastName(lastName);
        return customers;
    }

    @DeleteMapping(value="/customer/{id}")
    public void deleteCustomer(@PathVariable long id){

        repository.delete(id);
    }
}
