package pl.iwonabendig.tasker_backend.team.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.iwonabendig.tasker_backend.team.entity.Team;

public interface TeamRepository extends JpaRepository<Team, Long> {
}
