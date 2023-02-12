import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { Article } from '../models/article';

interface ArticlesHTTPResponse {
  status: string
  totalResults: number
  articles: Article[]
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiurl = 'https://newsapi.org/v2/top-headlines';

  articles$ = new BehaviorSubject<Article[]>([]);
  loadingError$ = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) { }

  private resetLoadindError(): void {
    this.loadingError$.next(null);
  }

  loadArticles(keyword: string = 'country=us'): void {
    this.resetLoadindError();

    this.http.get(this.apiurl + '?' + keyword).subscribe({
      next: (data: any) => {
        this.articles$.next(data.articles);
      },
      error: (error) => {
        this.loadingError$.next(error.message);
      }
    });
  }
}
