package pl.iwonabendig.tasker_backend.team.controller;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.iwonabendig.tasker_backend.team.dto.TeamRequestDTO;
import pl.iwonabendig.tasker_backend.team.dto.TeamResponseDTO;
import pl.iwonabendig.tasker_backend.team.dto.TeamResponseWithUsersDTO;
import pl.iwonabendig.tasker_backend.team.entity.Team;
import pl.iwonabendig.tasker_backend.team.service.TeamService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/teams")
@RequiredArgsConstructor
public class TeamController {
    private final TeamService teamService;

    @GetMapping
    public ResponseEntity<List<TeamResponseDTO>> getAllTeams() {
        List<TeamResponseDTO> teams = teamService.getAllTeams();
        if(teams.isEmpty()) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else return new ResponseEntity<>(teams, HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<TeamResponseDTO>> getTeamsByUserId(@PathVariable Long id) {
        List<TeamResponseDTO> teams = teamService.getTeamsByUser(id);
        if(teams.isEmpty()) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else return new ResponseEntity<>(teams, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeamResponseWithUsersDTO> getTeamById(@PathVariable Long id) {
        Optional<TeamResponseWithUsersDTO> team = teamService.getTeamById(id);
        if(team.isPresent()) return new ResponseEntity<>(team.get(), HttpStatus.OK);
        else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<TeamResponseDTO> createTeam(@RequestBody TeamRequestDTO teamRequestDTO) {
        Team createdTeam = teamService.createTeam(teamRequestDTO);

        TeamResponseDTO responseDTO = new TeamResponseDTO(
                createdTeam.getId(),
                createdTeam.getName(),
                createdTeam.getDescription(),
                createdTeam.getOwner().getUsername()
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(responseDTO);
    }

}
