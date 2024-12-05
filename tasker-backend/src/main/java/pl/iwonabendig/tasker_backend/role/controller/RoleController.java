package pl.iwonabendig.tasker_backend.role.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.iwonabendig.tasker_backend.role.RoleRequestDTO;
import pl.iwonabendig.tasker_backend.role.entity.Role;
import pl.iwonabendig.tasker_backend.role.service.RoleService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/roles")
@RequiredArgsConstructor
public class RoleController {
    private final RoleService roleService;

    @GetMapping
    public ResponseEntity<List<Role>> getAllRoles() {
        List<Role> roles = roleService.getAllRoles();
        if(roles.isEmpty()) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else return new ResponseEntity<>(roles, HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<Role>> getAllRolesByUser(@PathVariable Long id) {
        List<Role> roles = roleService.getAllRolesByUser(id);
        if(roles.isEmpty()) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else return new ResponseEntity<>(roles, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Role> getRoleById(@PathVariable Long id) {
        Optional<Role> role = roleService.getRoleById(id);
        if(role.isPresent()) return new ResponseEntity<>(role.get(), HttpStatus.OK);
        else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Role> createRole(@RequestBody RoleRequestDTO roleRequestDTO) {
        Role createdRole = roleService.createRole(roleRequestDTO.getName(), roleRequestDTO.getUserIds());
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRole);
    }
}
