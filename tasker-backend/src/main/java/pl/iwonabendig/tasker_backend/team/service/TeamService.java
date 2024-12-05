package pl.iwonabendig.tasker_backend.team.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.iwonabendig.tasker_backend.team.TeamResponseDTO;
import pl.iwonabendig.tasker_backend.team.entity.Team;
import pl.iwonabendig.tasker_backend.team.repository.TeamRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TeamService {
    private final TeamRepository teamRepository;

    public List<TeamResponseDTO> getAllTeams() {
        return teamRepository.findAll().stream()
                .map(this::buildTeamResponseDto)
                .collect(Collectors.toList());
    }

    public TeamResponseDTO buildTeamResponseDto(Team team) {
        return new TeamResponseDTO(team.getId(), team.getName(), team.getDescription(), team.getOwner().getUsername());
    }
}
