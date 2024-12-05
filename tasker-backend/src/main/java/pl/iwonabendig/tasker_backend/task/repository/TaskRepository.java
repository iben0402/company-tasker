package pl.iwonabendig.tasker_backend.task.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.iwonabendig.tasker_backend.task.entity.Task;
import pl.iwonabendig.tasker_backend.user.entity.User;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findAllByAssignee(User assignee);
}
