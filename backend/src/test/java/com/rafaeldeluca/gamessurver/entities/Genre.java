package com.rafaeldeluca.gamessurver.entities;

import java.io.Serializable;
import java.util.LinkedList;
import java.util.List;

public class Genre implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private List<Game> games = new LinkedList<Game>();
	private List<Record> records = new LinkedList<Record>();

	public Genre() {
	}

	public Genre(Long id, String name) {
		this.id = id;
		this.name = name;
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

	public List<Game> getGames() {
		return games;
	}

	/* Não usar métodos set para coleções
	public void setGames(List<Game> games) {
		this.games = games;
	}
	*/
	
	public List<Record> getRecords () {
		return records;
	}
	
	/*
	public void setRecords(List<Record> records) {
		this.records = records;
	}
	*/

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
		Genre other = (Genre) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Genre [id= " + id + ", name= " + name + ", games= " + games + ", records= " + records + "]";
	}

	
	

}
