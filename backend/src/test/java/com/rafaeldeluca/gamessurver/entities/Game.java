package com.rafaeldeluca.gamessurver.entities;

import java.io.Serializable;

public class Game implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private Platform platfomr;
	private Genre renge;
	
	public Game () {
		
	}

	public Game(Long id, String title, Platform platfomr, Genre renge) {
		super();
		this.id = id;
		this.title = title;
		this.platfomr = platfomr;
		this.renge = renge;
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

	public Platform getPlatfomr() {
		return platfomr;
	}

	public void setPlatfomr(Platform platfomr) {
		this.platfomr = platfomr;
	}

	public Genre getRenge() {
		return renge;
	}

	public void setRenge(Genre renge) {
		this.renge = renge;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Game other = (Game) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Game [id= " + id + ", title= " + title + ", platfomr= " + platfomr + ", renge= " + renge + "]";
	}
	
	
	
	
	

}
