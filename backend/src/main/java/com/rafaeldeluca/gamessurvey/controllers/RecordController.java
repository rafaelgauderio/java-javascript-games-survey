package com.rafaeldeluca.gamessurvey.controllers;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rafaeldeluca.gamessurvey.dto.RecordCompleteDTO;
import com.rafaeldeluca.gamessurvey.dto.RecordInsertDTO;
import com.rafaeldeluca.gamessurvey.services.RecordService;

@RestController
@RequestMapping(value = "/records")
public class RecordController {

	@Autowired
	private RecordService recordService;

	@PostMapping
	public ResponseEntity<RecordCompleteDTO> inserRecod(@RequestBody RecordInsertDTO recordInsertDTO) {
		RecordCompleteDTO newCompleteRecordDTO = new RecordCompleteDTO();
		newCompleteRecordDTO = recordService.insertRecord(recordInsertDTO);
		return ResponseEntity.ok().body(newCompleteRecordDTO);
	}

	@GetMapping
	public ResponseEntity<Page<RecordCompleteDTO>> findAllRecords(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPAge", defaultValue = "0") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "moment") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction,
			@RequestParam(value = "min", defaultValue = "") String min,
			@RequestParam(value = "max", defaultValue = "") String max) {

		Instant minimumDate = ("".equals(min)) ? null : Instant.parse(min);		

		Instant maximumDate = ("".equals(max)) ? null : Instant.parse(max);

		if (linesPerPage == 0) {
			linesPerPage = Integer.MAX_VALUE;
		}

		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);

		Page<RecordCompleteDTO> recordsPage = recordService.findRecordsByMoments(minimumDate, maximumDate, pageRequest);
		return ResponseEntity.ok().body(recordsPage);
	}
}