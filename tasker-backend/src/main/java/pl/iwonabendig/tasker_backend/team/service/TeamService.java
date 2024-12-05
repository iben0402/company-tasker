package pl.iwonabendig.tasker_backend.team.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.iwonabendig.tasker_backend.team.dto.TeamRequestDTO;
import pl.iwonabendig.tasker_backend.team.dto.TeamResponseDTO;
import pl.iwonabendig.tasker_backend.team.dto.TeamResponseWithUsersDTO;
import pl.iwonabendig.tasker_backend.team.entity.Team;
import pl.iwonabendig.tasker_backend.team.repository.TeamRepository;
import pl.iwonabendig.tasker_backend.user.dto.UserResponseDTO;

import pl.iwonabendig.tasker_backend.user.entity.User;
import pl.iwonabendig.tasker_backend.user.repository.UserRepository;
import pl.iwonabendig.tasker_backend.user.service.UserService;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TeamService {
    private final TeamRepository teamRepository;
    private final UserRepository userRepository;
    private final UserService userService;

    public List<TeamResponseDTO> getAllTeams() {
        return teamRepository.findAll().stream()
                .map(this::buildTeamResponseDto)
                .collect(Collectors.toList());
    }

    public List<TeamResponseDTO> getTeamsByUser(Long id) {
        return teamRepository.findTeamsByUserId(id).stream()
                .map(this::buildTeamResponseDto)
                .collect(Collectors.toList());
    }

    public Optional<TeamResponseWithUsersDTO> getTeamById(Long id) {
        return Optional.ofNullable(buildTeamResponseWithUsersDto(teamRepository.findById(id).get()));
    }

    public Team createTeam(TeamRequestDTO teamRequestDTO) {
        // Fetch owner
        User owner = userRepository.findById(teamRequestDTO.getOwnerId())
                .orElseThrow(() -> new IllegalArgumentException("Owner not found with id: " + teamRequestDTO.getOwnerId()));

        // Fetch users (if provided)
        List<User> users = teamRequestDTO.getUsers() != null ?
                userRepository.findAllById(teamRequestDTO.getUsers()) :
                Collections.emptyList();

        // Create and save team
        Team team = new Team();
        team.setName(teamRequestDTO.getName());
        team.setDescription(teamRequestDTO.getDescription());
        team.setOwner(owner);
        team.setUsers(users);

        return teamRepository.save(team);
    }

    public TeamResponseDTO buildTeamResponseDto(Team team) {
        return new TeamResponseDTO(team.getId(), team.getName(), team.getDescription(), team.getOwner().getUsername());
    }

    public TeamResponseWithUsersDTO buildTeamResponseWithUsersDto(Team team) {
        List<UserResponseDTO> users = team.getUsers().stream()
                .map(userService::buildUserResponse)
                .toList();

        return new TeamResponseWithUsersDTO(team.getId(), team.getName(), team.getDescription(), team.getOwner().getUsername(), users);
    }
}
