import { BlogModel } from 'src/app/models/blogModel';
import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { BlogDetailModel } from 'src/app/models/blogDetailModel';
import { Router } from '@angular/router';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: BlogModel[] = [];
  blogCount: number = 6;
  blogContent?:string;

  constructor(private blogService: BlogService, private router: Router, private detailService:DetailService) {
  }

  ngOnInit(): void {
    this.getAllBlogs();

    this.detailService.blogDetail.subscribe(detail=>{
      if(detail)
        this.blogContent = detail.blogContent;
    });

    //constructor'da yapmıştık burayı ngOnInit'e taşıdım
    
  }

  //get all blogs
  getAllBlogs() {
    this.blogService.getAll().subscribe((response) => {
      this.blogs = response.data;
    });
  }

  //navigate to detail component by choosen blog
  onSelect(id: number) {
    this.router.navigate(['blog/detail/' + id]);
  }

  riseCountOfBlog() {
    this.blogCount = this.blogCount + 5;
  }
}
