package pl.iwonabendig.tasker_backend.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.iwonabendig.tasker_backend.role.entity.Role;
import pl.iwonabendig.tasker_backend.user.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsernameAndPassword(String username, String password);
    List<User> findAllByRole(Role role);
}
