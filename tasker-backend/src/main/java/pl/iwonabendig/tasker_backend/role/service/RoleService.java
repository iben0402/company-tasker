package pl.iwonabendig.tasker_backend.role.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.iwonabendig.tasker_backend.role.entity.Role;
import pl.iwonabendig.tasker_backend.role.repository.RoleRepository;
import pl.iwonabendig.tasker_backend.user.entity.User;
import pl.iwonabendig.tasker_backend.user.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoleService {
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    public List<Role> getAllRolesByUser(Long userId) {
        return roleRepository.findAllRolesByUserId(userId);
    }

    public Optional<Role> getRoleById(Long id) {
        return roleRepository.findById(id);
    }

    public Role createRole(String name, List<Long> userIds) {
        Role role = new Role();
        role.setName(name);

        Role savedRole = roleRepository.save(role);

        List<User> users = userRepository.findAllById(userIds);
        users.forEach(user -> {
            user.setRole(savedRole);
        });
        return savedRole;
    }

}
