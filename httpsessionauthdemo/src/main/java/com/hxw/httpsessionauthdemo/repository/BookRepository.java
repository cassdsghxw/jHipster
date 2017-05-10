package com.hxw.httpsessionauthdemo.repository;

import com.hxw.httpsessionauthdemo.domain.Book;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Book entity.
 */
@SuppressWarnings("unused")
public interface BookRepository extends JpaRepository<Book,Long> {

}
