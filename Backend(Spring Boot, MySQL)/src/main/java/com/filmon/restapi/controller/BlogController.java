package com.filmon.restapi.entities;

import com.filmon.restapi.model.Blog;
import com.filmon.restapi.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class BlogController {
    @Autowired
    private BlogService eService;

    @Value("${app.name}")
    private String appName;

    @Value("${app.version}")
    private String appVersion;

    @GetMapping("/version")
    public String getDetails(){
        return appName + appVersion;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/blogs")
    public List<Blog>getBlogs(){
        return eService.getBlogs();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/blog/{id}")
    public Blog getBlog(@PathVariable("id") Long id)
    {
        return eService.getBlog(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/blogs")
    public Blog saveBlog(@RequestBody Blog blog)
    {
        return eService.saveBlog(blog);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/blogs")
    public void deleteBlog(@RequestParam("id") Long id){
        eService.deleteBlog(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/blogupdate/{id}")
    public Blog putBlog(@PathVariable("id") Long id, @RequestBody Blog blog)
    {
        blog.setId(id);
        return eService.updateBlog(blog);
    }
}
