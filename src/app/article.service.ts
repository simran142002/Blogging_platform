import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: any[] = [
    {
      id: 1,
      title: 'Introduction to Angular',
      summary: 'Learn the basics of Angular framework.',
      imageUrl: 'assets/angular.jpeg',
      content: 'This is the content of the article about Angular...Loren apsum aaaa bbbb cccc dddd eeee ffff gggg hhhh iiii jjjj kkkk llll',
      category: 'Technology',
    },
    {
      id: 2,
      title: 'Intro to Nervous System',
      summary: 'A guide to TypeScript for beginners.',
      imageUrl: 'assets/typescript.jpeg',
      content: 'This is the content of the article about TypeScript...',
      category: 'Health',
    },
    {
      id: 3,
      title: 'Biology Zoology',
      summary: 'A guide to TypeScript for beginners.',
      imageUrl: 'assets/typescript.jpeg',
      content: 'This is the content of the article about TypeScript...',
      category: 'Health',
    },
    {
      id: 3,
      title: 'Getting Started with TypeScript',
      summary: 'A guide to TypeScript for beginners.',
      imageUrl: 'assets/typescript.jpeg',
      content: 'This is the content of the article about TypeScript...',
      category: 'Technology',
    },
    {
      id: 4,
      title: 'Introduction to Angular',
      summary: 'Learn the basics of Angular framework.',
      imageUrl: 'assets/angular.jpeg',
      content: 'This is the content of the article about Angular...',
      category: 'Technology',
    },
    {
      id: 5,
      title: 'Health is wealth',
      summary: 'Learn the basics of Angular framework.',
      imageUrl: 'assets/angular.jpeg',
      content: 'This is the content of the article about Angular...',
      category: 'Health',
    },
    // Add more articles here
  ];

  constructor() { }

  getArticles() {
    return this.articles;
  }

  getArticleById(id: number) {
    return this.articles.find(article => article.id === id);
  }

  getArticlesByCategory(category: string){
    console.log(this.articles[0].category);
    return this.articles.filter(article => article.category.trim().toLowerCase() === category.trim().toLowerCase());
  }
}
