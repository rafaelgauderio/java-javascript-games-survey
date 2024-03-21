package com.rafaeldeluca.gamessurvey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rafaeldeluca.gamessurvey.entities.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long> {

}
