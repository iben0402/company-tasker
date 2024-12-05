package pl.iwonabendig.tasker_backend.team.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import pl.iwonabendig.tasker_backend.user.dto.UserResponseDTO;

import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class TeamResponseWithUsersDTO {
    private Long id;
    private String name;
    private String description;
    private String ownerUsername;
    private List<UserResponseDTO> users;
}
