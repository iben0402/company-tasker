package pl.iwonabendig.tasker_backend.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.iwonabendig.tasker_backend.user.dto.UserResponseDTO;
import pl.iwonabendig.tasker_backend.user.entity.User;
import pl.iwonabendig.tasker_backend.user.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<UserResponseDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user -> new UserResponseDTO(
                        user.getName(),
                        user.getSurname(),
                        user.getUsername(),
                        user.getRole().getName(),
                        user.getTeam() != null ? user.getTeam().getName() : null
                ))
                .collect(Collectors.toList());
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public Optional<User> login(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }

    public Optional<UserResponseDTO> getUser(Long id) {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()) {
            User foundUser = user.get();
            return Optional.of(buildUserResponse(foundUser));
        }
        else
            return Optional.empty();
    }

    public UserResponseDTO buildUserResponse(User user) {
        return new UserResponseDTO(user.getName(), user.getSurname(), user.getUsername(), user.getRole().getName(), user.getTeam().getName());
    }
}
