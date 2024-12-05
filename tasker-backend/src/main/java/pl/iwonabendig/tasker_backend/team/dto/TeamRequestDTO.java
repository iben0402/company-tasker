package pl.iwonabendig.tasker_backend.team.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class TeamRequestDTO {
    private Long id;
    private String name;
    private String description;
    private Long ownerId;
    private List<Long> users;
}
