import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  selectedArticle: any; // Replace with your article data structure

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
    // Retrieve the selected article using route params
    this.route.params.subscribe(params => {
      const articleId = +params['id'];
      this.selectedArticle = this.articleService.getArticleById(articleId);
      // Fetch and assign the article based on the provided parameter
    });
  }

  goBack() {
    this.router.navigate(['/articles']);
  }
}
