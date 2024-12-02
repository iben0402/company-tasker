package pl.iwonabendig.tasker_backend.attachment.entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import pl.iwonabendig.tasker_backend.task.entity.Task;
import pl.iwonabendig.tasker_backend.user.entity.User;

import java.util.Date;

@Entity
@Table(name = "attachments")
@Getter
@Setter
public class Attachment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String path;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "task_id")
    private Task task;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;

    @Column(name = "create_date")
    private Date createDate;
}
