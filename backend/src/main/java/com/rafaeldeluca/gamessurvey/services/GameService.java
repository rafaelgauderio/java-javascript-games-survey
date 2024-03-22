package com.rafaeldeluca.gamessurvey.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rafaeldeluca.gamessurvey.dto.GameDTO;
import com.rafaeldeluca.gamessurvey.entities.Game;
import com.rafaeldeluca.gamessurvey.repositories.GameRepository;


@Service
public class GameService {
	
	@Autowired
	private GameRepository gameRepository;
		
	@Transactional(readOnly =true)
	public List<GameDTO> findAllGames () { 
		
		List<Game> gameList= gameRepository.findAll();
		// conveter a lista de Game em uma lista de GameDTO
		List<GameDTO> gameDTOList = gameList.stream().map((game) -> new GameDTO(game)).collect(Collectors.toList());
		return gameDTOList;		
	}
}
