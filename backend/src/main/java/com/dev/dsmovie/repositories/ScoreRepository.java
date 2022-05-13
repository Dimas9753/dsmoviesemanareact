package com.dev.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.dsmovie.Entities.Score;
import com.dev.dsmovie.Entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

	
}
