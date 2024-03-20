package com.rafaeldeluca.gamessurver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rafaeldeluca.gamessurver.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepository <Genre, Long>{

}
