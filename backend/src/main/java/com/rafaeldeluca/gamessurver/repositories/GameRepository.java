package com.rafaeldeluca.gamessurver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rafaeldeluca.gamessurver.entities.Game;

public interface GameRepository extends JpaRepository <Game, Long>{
	
}


