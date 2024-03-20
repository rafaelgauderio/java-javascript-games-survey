package com.rafaeldeluca.gamessurver.dto;

import com.rafaeldeluca.gamessurver.entities.Game;
import com.rafaeldeluca.gamessurver.entities.Platform;

public class GameDTO {

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
