package pl.iwonabendig.tasker_backend.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.iwonabendig.tasker_backend.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
