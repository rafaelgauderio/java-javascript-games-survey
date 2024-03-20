package com.rafaeldeluca.gamessurver.dto;

import java.io.Serializable;
import java.time.Instant;

import com.rafaeldeluca.gamessurver.entities.Platform;
import com.rafaeldeluca.gamessurver.entities.Record;

public class RecordCompleteDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private Integer age;
	private Instant moment;
	private String genreName;
	private String gameTitle;
	private Platform gamePlatform;

	public RecordCompleteDTO() {

	}

	public RecordCompleteDTO(Record record) {
		id = record.getId();
		name = record.getName();
		age = record.getAge();
		moment = record.getMoment();
		genreName = record.getGame().getRenge().getName();
		gameTitle = record.getGame().getTitle();
		gamePlatform = record.getGame().getPlatfomr();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Instant getMoment() {
		return moment;
	}

	public void setMoment(Instant moment) {
		this.moment = moment;
	}

	public String getGenreName() {
		return genreName;
	}

	public void setGenreName(String genreName) {
		this.genreName = genreName;
	}

	public String getGameTitle() {
		return gameTitle;
	}

	public void setGameTitle(String gameTitle) {
		this.gameTitle = gameTitle;
	}

	public Platform getGamePlatform() {
		return gamePlatform;
	}

	public void setGamePlatform(Platform gamePlatform) {
		this.gamePlatform = gamePlatform;
	}

}
