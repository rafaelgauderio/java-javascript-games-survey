package com.rafaeldeluca.gamessurvey.repositories;

import java.time.Instant;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.rafaeldeluca.gamessurvey.entities.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long> {
	
	// repository não conhece DTO apenas Entidade
	@Query(
			"SELECT objectRecord "
			+ "FROM Record objectRecord "
			+ "WHERE "
			+ "(:minimum IS NULL OR objectRecord.moment >= :minimum) "
			+ "AND "
			+ "(:maximum IS NULL OR objectRecord.moment <= :maximum )"
			) 
	Page<Record> findRecordsByMoments (Instant minimum, Instant maximum, Pageable pageable);

}
