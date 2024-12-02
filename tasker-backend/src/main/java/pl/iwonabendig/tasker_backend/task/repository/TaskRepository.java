package pl.iwonabendig.tasker_backend.task.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.iwonabendig.tasker_backend.task.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
