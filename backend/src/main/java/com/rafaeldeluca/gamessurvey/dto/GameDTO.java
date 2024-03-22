package com.rafaeldeluca.gamessurvey.dto;

import java.io.Serializable;

import com.rafaeldeluca.gamessurvey.entities.Game;
import com.rafaeldeluca.gamessurvey.entities.Platform;

public class GameDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private Platform platform;

	public GameDTO() {

	}

	public GameDTO(Game game) {
		id = game.getId();
		title = game.getTitle();
		platform = game.getPlatfomr();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Platform getPlatform() {
		return platform;
	}

	public void setPlatform(Platform platform) {
		this.platform = platform;
	}

}
