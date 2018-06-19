package pl.szymonchowanic.CrudWithSpringRestAndAngular4;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import pl.szymonchowanic.CrudWithSpringRestAndAngular4.model.User;
//import pl.szymonchowanic.CrudWithSpringRestAndAngular4.repository.UserRepository;

@SpringBootApplication
public class CrudWithSpringRestAndAngular4Application{

//	@Autowired
//	private UserRepository userRepository;
//
//
//
//	@Override
//	public void run(String... strings) throws Exception {
//		userRepository.save(new User("Wojciech", "Bodziuch"));
//		userRepository.save(new User("Paulina", "Kocańda"));
//		userRepository.save(new User("Konrad", "Janik"));
//	}


	public static void main(String[] args) {
		SpringApplication.run(CrudWithSpringRestAndAngular4Application.class, args);
	}
}
