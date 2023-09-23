import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: any[] = []; 
  articlesCategory: any[] = []; 
  showCategory : boolean = false;
  category: string = "";
  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {this.articles = this.articleService.getArticles();
    // this.articlesCategory = this.articleService.getArticlesByCategory(this.category);
    });
  }

  getArticleCategory(category: string){
      this.category = category;
      this.articlesCategory = this.articleService.getArticlesByCategory(category);
      this.showCategory = true;
      if(category == "all"){
        this.showCategory = false;
      }
  }

  viewArticle(article: any) {
    // Implement navigation to view full article
    console.log(article);
    this.router.navigate(['/articles', article.id]);
  }
}
