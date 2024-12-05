package pl.iwonabendig.tasker_backend.project.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import pl.iwonabendig.tasker_backend.team.entity.Team;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "projects")
@Getter
@Setter
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column
    private String description;

    @ManyToMany
    @JoinTable(
            name = "project_team",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "team_id")
    )
    private Set<Team> teams = new HashSet<>();

    public void addTeam(Team team) {
        this.teams.add(team);
        team.getProjects().add(this);
    }

    public void removeTeam(Team team) {
        this.teams.remove(team);
        team.getProjects().remove(this);
    }
}
