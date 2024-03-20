package com.rafaeldeluca.gamessurver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rafaeldeluca.gamessurver.entities.Genre;

public interface GenreRepository extends JpaRepository <Genre, Long>{

}
