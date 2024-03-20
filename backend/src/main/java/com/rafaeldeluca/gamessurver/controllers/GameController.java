package com.rafaeldeluca.gamessurver.controllers;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rafaeldeluca.gamessurver.entities.Game;
import com.rafaeldeluca.gamessurver.repositories.GameRepository;

@RestController
@RequestMapping(value = "/games")
public class GameController {

	@Autowired
	private GameRepository gameRepository;

	@GetMapping
	public ResponseEntity<List<Game>> findAllGames() {
		List<Game> gameList = gameRepository.findAll();
		return ResponseEntity.ok().body(gameList);
	}
}
