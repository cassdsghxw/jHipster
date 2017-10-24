package com.ncs.iframe5.sample.monolith.generated.repository;

import com.ncs.iframe5.sample.monolith.generated.domain.Order;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Order entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

}
