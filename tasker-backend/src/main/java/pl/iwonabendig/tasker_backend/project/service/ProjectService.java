package pl.iwonabendig.tasker_backend.project.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.iwonabendig.tasker_backend.project.dto.ProjectRequestDTO;
import pl.iwonabendig.tasker_backend.project.dto.ProjectResponseDTO;
import pl.iwonabendig.tasker_backend.project.entity.Project;
import pl.iwonabendig.tasker_backend.team.entity.Team;
import pl.iwonabendig.tasker_backend.project.repository.ProjectRepository;
import pl.iwonabendig.tasker_backend.team.repository.TeamRepository;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final TeamRepository teamRepository;

    public ProjectResponseDTO buildProjectResponse(Project project) {
        Set<String> teams = project.getTeams().stream()
                .map(Team::getName)
                .collect(Collectors.toSet());

        return new ProjectResponseDTO(project.getId(), project.getName(), project.getDescription(), teams);
    }

    public List<ProjectResponseDTO> getAllProjects() {
        return projectRepository.findAll().stream()
                .map(this::buildProjectResponse)
                .collect(Collectors.toList());
    }

    public Project createProject(ProjectRequestDTO projectRequestDTO) {
        Project project = new Project();
        project.setName(projectRequestDTO.getName());
        project.setDescription(projectRequestDTO.getDescription());

        // Fetch and assign teams using their IDs
        Set<Team> teams = projectRequestDTO.getTeams().stream()
                .map(teamId -> teamRepository.findById(teamId)
                        .orElseThrow(() -> new IllegalArgumentException("Team with ID " + teamId + " not found")))
                .collect(Collectors.toSet());

        // Add teams to the project
        teams.forEach(project::addTeam);

        // Save and return the project
        return projectRepository.save(project);
    }

}
