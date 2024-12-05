package pl.iwonabendig.tasker_backend.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pl.iwonabendig.tasker_backend.project.entity.Project;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {

    @Query("SELECT p FROM Project p " +
            "JOIN p.teams t " +
            "WHERE t.owner.id = :userId " +
            "OR :userId IN (SELECT ut.id FROM User ut WHERE ut.team.id = t.id)")
    List<Project> findProjectsByUserId(Long userId);
}
