package pl.iwonabendig.tasker_backend.task.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@Getter
@Setter
public class TaskRequestDTO {
    private Long id;
    private String name;
    private String description;
    private Long projectId;
    private Date deadline;
    private Date createDate;
    private Date finishDate;
    private Long assigneeId;
}
