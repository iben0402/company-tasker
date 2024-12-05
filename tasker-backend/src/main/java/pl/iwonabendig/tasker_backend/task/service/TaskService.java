package pl.iwonabendig.tasker_backend.task.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.iwonabendig.tasker_backend.project.entity.Project;
import pl.iwonabendig.tasker_backend.project.repository.ProjectRepository;
import pl.iwonabendig.tasker_backend.task.dto.TaskRequestDTO;
import pl.iwonabendig.tasker_backend.task.dto.TaskResponseDTO;
import pl.iwonabendig.tasker_backend.task.entity.Task;
import pl.iwonabendig.tasker_backend.task.repository.TaskRepository;
import pl.iwonabendig.tasker_backend.user.entity.User;
import pl.iwonabendig.tasker_backend.user.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    public TaskResponseDTO buildTaskResponseDTO(Task task) {
        return new TaskResponseDTO(task.getId(), task.getName(), task.getDescription(), task.getProject().getId(), task.getProject().getName(), task.getDeadline(), task.getCreateDate(), task.getFinishDate(), task.getAssignee().getUsername(), task.getStatus());
    }

    public List<TaskResponseDTO> getAllTasks() {
        return taskRepository.findAll().stream()
                .map(this::buildTaskResponseDTO)
                .collect(Collectors.toList());
    }

    public List<TaskResponseDTO> getAllTasksByAssigneeId(Long id) {
        Optional<User> assigneeOptional = userRepository.findById(id);
        if (assigneeOptional.isEmpty()) {
            throw new IllegalArgumentException("Invalid assignee ID");
        }
        return taskRepository.findAllByAssignee(assigneeOptional.get()).stream()
                .map(this::buildTaskResponseDTO)
                .collect(Collectors.toList());
    }

    public Task createTask(TaskRequestDTO taskRequestDTO) {
        // Validate the project exists
        Optional<Project> projectOptional = projectRepository.findById(taskRequestDTO.getProjectId());
        if (projectOptional.isEmpty()) {
            throw new IllegalArgumentException("Invalid project ID");
        }

        // Validate the assignee exists
        Optional<User> assigneeOptional = userRepository.findById(taskRequestDTO.getAssigneeId());
        if (taskRequestDTO.getAssigneeId() != null && assigneeOptional.isEmpty()) {
            throw new IllegalArgumentException("Invalid assignee ID");
        }

        // Create the task entity
        Task task = new Task();
        task.setName(taskRequestDTO.getName());
        task.setDescription(taskRequestDTO.getDescription());
        task.setProject(projectOptional.get());
        task.setDeadline(taskRequestDTO.getDeadline());
        task.setCreateDate(taskRequestDTO.getCreateDate());
        task.setFinishDate(taskRequestDTO.getFinishDate());
        task.setAssignee(assigneeOptional.orElse(null));
        task.setStatus("TODO");

        // Save and return the task
        return taskRepository.save(task);
    }

    public Optional<TaskResponseDTO> getTaskById(Long id) {
        Optional<Task> foundTask = taskRepository.findById(id);
        if(foundTask.isPresent())
            return Optional.ofNullable(buildTaskResponseDTO(foundTask.get()));
        else{
            return Optional.empty();
        }
    }
}
