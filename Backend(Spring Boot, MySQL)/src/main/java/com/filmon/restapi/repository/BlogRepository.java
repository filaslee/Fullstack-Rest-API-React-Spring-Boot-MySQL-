package com.filmon.restapi.repository;

import com.filmon.restapi.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Long > {

}
