package pl.iwonabendig.tasker_backend.user.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import pl.iwonabendig.tasker_backend.role.entity.Role;
import pl.iwonabendig.tasker_backend.team.entity.Team;


@Entity
@Table(name = "users")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name= "role_id", nullable = false)
    private Role role;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id")
    private Team team;
}
