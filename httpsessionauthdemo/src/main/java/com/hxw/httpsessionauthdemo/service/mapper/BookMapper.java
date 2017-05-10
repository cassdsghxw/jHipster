package com.hxw.httpsessionauthdemo.service.mapper;

import com.hxw.httpsessionauthdemo.domain.*;
import com.hxw.httpsessionauthdemo.service.dto.BookDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity Book and its DTO BookDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface BookMapper {

    BookDTO bookToBookDTO(Book book);

    List<BookDTO> booksToBookDTOs(List<Book> books);

    Book bookDTOToBook(BookDTO bookDTO);

    List<Book> bookDTOsToBooks(List<BookDTO> bookDTOs);
    /**
     * generating the fromId for all mappers if the databaseType is sql, as the class has relationship to it might need it, instead of
     * creating a new attribute to know if the entity has any relationship from some other entity
     *
     * @param id id of the entity
     * @return the entity instance
     */
     
    default Book bookFromId(Long id) {
        if (id == null) {
            return null;
        }
        Book book = new Book();
        book.setId(id);
        return book;
    }
    

}
