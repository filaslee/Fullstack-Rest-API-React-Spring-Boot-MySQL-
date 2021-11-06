package com.filmon.restapi.service;


import com.filmon.restapi.model.Blog;
import com.filmon.restapi.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogService {
  @Autowired
  private BlogRepository eRepository;
  public List<Blog> getBlogs(){
         return eRepository.findAll();
  }
    public Blog saveBlog(Blog blog){
        return eRepository.save(blog);
    }
    public Blog getBlog(Long id){
        Optional<Blog> blog  = eRepository.findById(id);
        if(blog.isPresent()){
            return blog.get();
        }
        throw new RuntimeException("No");
    }
    public void deleteBlog(Long id){
            eRepository.deleteById(id);
    }
    public Blog updateBlog(Blog blog){
        return eRepository.save(blog);
    }
}
