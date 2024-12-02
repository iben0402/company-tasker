package pl.iwonabendig.tasker_backend.role.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.iwonabendig.tasker_backend.role.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
