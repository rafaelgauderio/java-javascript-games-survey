package com.rafaeldeluca.gamessurvey.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rafaeldeluca.gamessurvey.dto.GameDTO;
import com.rafaeldeluca.gamessurvey.services.GameService;

@RestController
@RequestMapping(value = "/games")
public class GameController {
	
	// não se instancia Entidade na camada do controlador, apenas objetos do tipo DTO
	@Autowired
	private GameService gameService;
	

	@GetMapping
	public ResponseEntity<List<GameDTO>> findAllGames() {
		List<GameDTO> gameList = gameService.findAllGames(); 
		return ResponseEntity.ok().body(gameList);
	}
}
