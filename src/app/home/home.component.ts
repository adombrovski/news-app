import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { ArticlesService } from '../service/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchKeyword = '';

  constructor(
    private router: Router,
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.articlesService.loadArticles();
  }

  getArticlesByKeyword(): void {
    let keyWord;
    if (this.searchKeyword.length > 0) {
      keyWord = `q=${this.searchKeyword}`
    }
    this.articlesService.loadArticles(keyWord);
  }

  saveKeyword(v: string): void {
    this.searchKeyword = v;
  }

  redirectLogIn(): void {
    this.router.navigate(['login']);
  }

  redirectStoryView(v: number): void {
    this.router.navigate([`story/${v}`]);
  }

  getArticles$(): Observable<Article[]> {
    return this.articlesService.articles$.asObservable();
  }

  getLoadingError$(): Observable<string | null> {
    return this.articlesService.loadingError$.asObservable();
  }
}
