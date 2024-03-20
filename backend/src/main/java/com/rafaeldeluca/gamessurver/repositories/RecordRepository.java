package com.rafaeldeluca.gamessurver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rafaeldeluca.gamessurver.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
