package pl.iwonabendig.tasker_backend.team.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pl.iwonabendig.tasker_backend.project.entity.Project;
import pl.iwonabendig.tasker_backend.team.entity.Team;

import java.util.List;

public interface TeamRepository extends JpaRepository<Team, Long> {

    @Query("SELECT t FROM Team t " +
            "WHERE t.owner.id = :userId " +
            "OR :userId IN (SELECT ut.id FROM User ut WHERE ut.team.id = t.id)")
    List<Team> findTeamsByUserId(Long userId);
}
