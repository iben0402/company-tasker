package pl.iwonabendig.tasker_backend.task.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.iwonabendig.tasker_backend.task.dto.TaskRequestDTO;
import pl.iwonabendig.tasker_backend.task.dto.TaskResponseDTO;
import pl.iwonabendig.tasker_backend.task.entity.Task;
import pl.iwonabendig.tasker_backend.task.service.TaskService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {
    private final TaskService taskService;

    @GetMapping
    public ResponseEntity<List<TaskResponseDTO>> getAllTasks() {
        List<TaskResponseDTO> tasks = taskService.getAllTasks();
        if(tasks.isEmpty()) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody TaskRequestDTO taskRequestDTO) {
        try {
            Task createdTask = taskService.createTask(taskRequestDTO);
            return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<TaskResponseDTO>> getAllTasksByAssignee(@PathVariable Long id) {
        List<TaskResponseDTO> tasks = taskService.getAllTasksByAssigneeId(id);
        if(tasks.isEmpty()) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskResponseDTO> getTaskById(@PathVariable Long id) {
        Optional<TaskResponseDTO> task = taskService.getTaskById(id);
        if(task.isPresent()) return new ResponseEntity<>(task.get(), HttpStatus.OK);
        else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
