package pl.iwonabendig.tasker_backend.team;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class TeamResponseDTO {
    private Long id;
    private String name;
    private String description;
    private String ownerUsername;
}
