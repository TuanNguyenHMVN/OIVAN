import { Apollo } from 'apollo-angular';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GET_ARTICLES_DETAIL } from 'src/app/graphql/graphql.queries';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input() article!: Article;
  item: Article = new Article();
  defaultSubtitle: string = 'https://news.ycombinator.com';
  constructor(private apollo: Apollo, private router: Router) {}

  ngOnInit(): void {
    this.item = { ...this.article };
    if (!this.item.coverImageUrl) {
      this.onGetArticleInfo();
    }
  }

  onGetArticleInfo() {
    const regex = new RegExp('^item.?id=d{0,}', 'g');
    const inValidUrl = regex.test(this.article.url);
    this.apollo
      .watchQuery({
        query: GET_ARTICLES_DETAIL,
        variables: {
          url: inValidUrl
            ? `https://news.ycombinator.com/${this.item.url}`
            : this.item.url,
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.item.coverImageUrl = data.article.coverImageUrl;
      });
  }

  onViewDetail() {
    this.router.navigate(['/article'], { queryParams: { url: this.item.url } });
  }
}
