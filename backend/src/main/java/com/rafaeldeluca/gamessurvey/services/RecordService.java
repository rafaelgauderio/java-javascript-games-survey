package com.rafaeldeluca.gamessurvey.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rafaeldeluca.gamessurvey.dto.RecordCompleteDTO;
import com.rafaeldeluca.gamessurvey.dto.RecordInsertDTO;
import com.rafaeldeluca.gamessurvey.entities.Record;
import com.rafaeldeluca.gamessurvey.repositories.GameRepository;
import com.rafaeldeluca.gamessurvey.repositories.RecordRepository;

@Service
public class RecordService {

	@Autowired
	private RecordRepository recordRepository;

	@Autowired
	private GameRepository gameRepository;

	@Transactional(readOnly = false)
	public RecordCompleteDTO insertRecord(RecordInsertDTO recordInsertDTO) {
		// instanciar um novo registro e setar os valores dele
		Record record = new Record();
		// id é autoincrement
		record.setName(recordInsertDTO.getName());
		record.setAge(recordInsertDTO.getAge());
		record.setMoment(Instant.now());
		// tem que fazer um referêcia a um objeto do tipo Game e não apenas ao Long id
		// do Game
		record.setGame(gameRepository.getReferenceById(recordInsertDTO.getGameId()));
		// salva os dados isntanciados em memória na entidade Record
		record = recordRepository.save(record);
		RecordCompleteDTO recordCompleteDTO = new RecordCompleteDTO(record);
		return recordCompleteDTO;
	}

	@Transactional(readOnly = true)
	public Page<RecordCompleteDTO> findRecordsByMoments(Instant minimumDate, Instant maximumDate,
			PageRequest pageRequest) {
		return recordRepository.findRecordsByMoments(minimumDate, maximumDate, pageRequest)
				.map((rec) -> new RecordCompleteDTO(rec));
	}

}
