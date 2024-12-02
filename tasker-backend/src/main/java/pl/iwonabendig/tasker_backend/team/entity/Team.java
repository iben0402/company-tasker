package pl.iwonabendig.tasker_backend.team.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import pl.iwonabendig.tasker_backend.project.entity.Project;
import pl.iwonabendig.tasker_backend.user.entity.User;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "teams")
@Getter
@Setter
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id")
    private User owner;

    @ManyToMany(mappedBy = "teams")
    private Set<Project> projects = new HashSet<>();

    public void addProject(Project project) {
        this.projects.add(project);
        project.getTeams().add(this);
    }

    public void removeProject(Project project) {
        this.projects.remove(project);
        project.getTeams().remove(this);
    }

}
