package pl.iwonabendig.tasker_backend.role.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import pl.iwonabendig.tasker_backend.user.dto.UserResponseDTO;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class RoleResponseDTO {
    private String name;
    private List<UserResponseDTO> users;
}
