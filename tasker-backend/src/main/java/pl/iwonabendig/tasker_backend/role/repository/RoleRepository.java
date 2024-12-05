package pl.iwonabendig.tasker_backend.role.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pl.iwonabendig.tasker_backend.role.entity.Role;

import java.util.List;

public interface RoleRepository extends JpaRepository<Role, Long> {
    @Query("SELECT r FROM Role r WHERE r.id IN (" +
            "SELECT u.role.id FROM User u WHERE u.id = :userId)")
    List<Role> findAllRolesByUserId(Long userId);
}
