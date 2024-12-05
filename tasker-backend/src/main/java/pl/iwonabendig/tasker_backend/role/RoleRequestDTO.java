package pl.iwonabendig.tasker_backend.role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class RoleRequestDTO {
    private String name;
    private List<Long> userIds;
}
