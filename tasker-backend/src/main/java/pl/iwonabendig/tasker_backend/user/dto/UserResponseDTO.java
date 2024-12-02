package pl.iwonabendig.tasker_backend.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class UserResponseDTO {
    private String username;
    private String role;
    private String team;
}
