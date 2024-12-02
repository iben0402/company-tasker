package pl.iwonabendig.tasker_backend.comment.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import pl.iwonabendig.tasker_backend.task.entity.Task;
import pl.iwonabendig.tasker_backend.user.entity.User;

import java.util.Date;

@Entity
@Table(name = "comments")
@Getter
@Setter
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "task_id")
    private Task task;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;

    @Column(name = "create_date")
    private Date createDate;
}
