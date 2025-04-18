package pl.iwonabendig.tasker_backend.project.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@Getter
@Setter
public class ProjectResponseDTO {
    private Long id;
    private String name;
    private String description;
    private Set<String> teams = new HashSet<>();
}
