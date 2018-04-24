package pl.szymonchowanic.CrudWithSpringRestAndAngular4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.szymonchowanic.CrudWithSpringRestAndAngular4.model.User;
@Repository
public interface UserRepository extends JpaRepository <User, Long>{
}
