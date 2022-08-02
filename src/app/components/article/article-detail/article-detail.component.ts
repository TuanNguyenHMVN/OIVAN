import { Article } from 'src/app/model/article';
import { GET_ARTICLES_DETAIL } from 'src/app/graphql/graphql.queries';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  articleDetail!: Article;
  constructor(private route: ActivatedRoute, private apollo: Apollo) {
    this.articleDetail = new Article();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any): void => {
      const regex = new RegExp('^item.?id=d{0,}', 'g');
      const inValidUrl = regex.test(params.url);
      this.apollo
        .watchQuery({
          query: GET_ARTICLES_DETAIL,
          variables: {
            url: inValidUrl
              ? `https://news.ycombinator.com/${params.url}`
              : params.url,
          },
        })
        .valueChanges.subscribe(({ data, error }: any) => {
          this.articleDetail = data.article;
          // this.articles = data.articles;
          // this.error = error;
          // this.isLoading = false;
          console.log(
            '🚀 ~ file: article-detail.component.ts ~ line 28 ~ ArticleDetailComponent ~ .valueChanges.subscribe ~ data',
            this.articleDetail.content
          );
        });
    });
  }
}
