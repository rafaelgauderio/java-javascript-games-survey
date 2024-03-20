package com.rafaeldeluca.gamessurver.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rafaeldeluca.gamessurver.dto.RecordCompleteDTO;
import com.rafaeldeluca.gamessurver.dto.RecordInsertDTO;
import com.rafaeldeluca.gamessurver.services.RecordService;

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
}