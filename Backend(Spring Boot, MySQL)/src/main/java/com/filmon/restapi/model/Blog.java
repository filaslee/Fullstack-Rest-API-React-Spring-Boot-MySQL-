package com.filmon.restapi.model;
import lombok.*;
import javax.persistence.*;
import javax.persistence.GenerationType;
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name="title")
    private String title;
    @Column(name="body")
    private String body;
    @Column(name="author")
    private String author;
}
