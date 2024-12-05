package pl.iwonabendig.tasker_backend.project.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.iwonabendig.tasker_backend.project.dto.ProjectRequestDTO;
import pl.iwonabendig.tasker_backend.project.dto.ProjectResponseDTO;
import pl.iwonabendig.tasker_backend.project.entity.Project;
import pl.iwonabendig.tasker_backend.project.service.ProjectService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectService projectService;

    @GetMapping
    public List<ProjectResponseDTO> getAllProjects() {
        return projectService.getAllProjects();
    }

    @PostMapping
    public ResponseEntity<ProjectResponseDTO> createProject(@RequestBody ProjectRequestDTO projectRequestDTO) {
        try {
            Project createdProject = projectService.createProject(projectRequestDTO);
            return new ResponseEntity<>(projectService.buildProjectResponse(createdProject), HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProjectResponseDTO> getProjectById(@PathVariable Long id) {
        Optional<ProjectResponseDTO> project = projectService.getProjectById(id);
        if(project.isPresent()) return new ResponseEntity<>(project.get(), HttpStatus.OK);
        else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<ProjectResponseDTO>> getProjectsByUserId(@PathVariable Long id) {
        List<ProjectResponseDTO> projects = projectService.getProjectsByUserId(id);
        if(projects.isEmpty()) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else return new ResponseEntity<>(projects, HttpStatus.OK);
    }

}
