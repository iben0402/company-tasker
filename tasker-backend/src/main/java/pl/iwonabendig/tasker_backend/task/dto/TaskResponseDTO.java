package pl.iwonabendig.tasker_backend.task.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@Getter
@Setter
public class TaskResponseDTO {
    private Long id;
    private String name;
    private String description;
    private Long projectId;
    private String projectName;
    private Date deadline;
    private Date createDate;
    private Date finishDate;
    private String assigneeUsername;
    private String status;
}
