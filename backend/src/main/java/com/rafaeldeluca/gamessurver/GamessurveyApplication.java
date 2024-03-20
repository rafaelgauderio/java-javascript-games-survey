package com.rafaeldeluca.gamessurver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GamessurveyApplication {

	public static void main(String[] args) {
		startApplication(args);
	}

	public static void startApplication(String[] params) {
		SpringApplication.run(GamessurveyApplication.class, params);
	}
}
