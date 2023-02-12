import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/service/articles.service';

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.component.html',
  styleUrls: ['./view-story.component.css']
})
export class ViewStoryComponent implements OnInit, OnDestroy {

  article: Article | undefined;

  subscription: Subscription | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.subscription = this.articlesService.articles$.subscribe(data => {
      if (data.length === 0) {
        this.articlesService.loadArticles();
      } else {
        this.article = data[id];
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
