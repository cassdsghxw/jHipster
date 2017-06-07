package com.hxw.jhipster.sample.app.ng2.repository;

import com.hxw.jhipster.sample.app.ng2.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
