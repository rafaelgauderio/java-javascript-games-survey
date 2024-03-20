package com.rafaeldeluca.gamessurver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rafaeldeluca.gamessurver.entities.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long> {

}
