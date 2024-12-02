package pl.iwonabendig.tasker_backend.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.iwonabendig.tasker_backend.project.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
