package pl.szymonchowanic.CrudWithSpringRestAndAngular4.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//import pl.szymonchowanic.CrudWithSpringRestAndAngular4.model.User;
//import pl.szymonchowanic.CrudWithSpringRestAndAngular4.repository.UserRepository;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api")
//@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
//public class UserController {
//    @Autowired
//    private UserRepository userRepository;
//
//    @PostMapping("/user")
//    public User createUser(User user){
//        return userRepository.save(user);
//    }
//
//    @GetMapping("/users")
//    public List<User> getAllUser(){
//        return userRepository.findAll();
//    }
//
//    @GetMapping("/user/{id}")
//    public User getUser(@PathVariable("id") Long id){
//        return userRepository.findOne(id);
//    }
//
//    @DeleteMapping("/user/{id}")
//    public boolean removeUser(@PathVariable("id") Long id){
//         userRepository.delete(id);
//         return true;
//    }
//    @PutMapping("/user")
//    public User updateUser(User user){
//        return userRepository.save(user);
//    }
//}
