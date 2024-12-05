package pl.iwonabendig.tasker_backend.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.iwonabendig.tasker_backend.user.dto.UserResponseDTO;
import pl.iwonabendig.tasker_backend.user.entity.User;
import pl.iwonabendig.tasker_backend.user.service.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping
    public List<UserResponseDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO> getUser(@PathVariable Long id) {
        Optional<UserResponseDTO> user = userService.getUser(id);
        if(user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(user);
        return ResponseEntity.ok(createdUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    // TEMPORARY, TODO: IMPLEMENT AUTHOURIZATION USING SPRING SECURITY OR STH ELSE (ISSUE #1)
    @PostMapping("/login/{username}/{password}")
    public ResponseEntity<UserResponseDTO> login(@PathVariable String username, @PathVariable String password) {
        Optional<User> user = userService.login(username, password);

        if (user.isPresent()) {
            return new ResponseEntity<>(userService.buildUserResponse(user.get()), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
