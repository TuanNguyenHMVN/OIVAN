import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ARTICLES } from '../graphql/graphql.queries';
import { Article } from '../model/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];
  error: any;
  pageNumber: number = 0;
  isLoading: boolean = false;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.onGetArticles();
  }

  onGetArticles(page?: number) {
    this.isLoading = true;
    this.pageNumber = !page || page < 0 ? 0 : page;
    this.apollo
      .watchQuery({
        query: GET_ARTICLES,
        variables: {
          pageNumber: this.pageNumber + 1,
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.articles = data.articles;
        this.error = error;
        this.isLoading = false;
      });
  }
}
