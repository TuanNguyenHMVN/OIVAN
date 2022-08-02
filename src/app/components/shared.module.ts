import { NgModule } from '@angular/core';
import { ArticleCardComponent } from './article/article-card/article-card.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { PaginationComponent } from './common/pagination/pagination.component';

@NgModule({
  declarations: [
    PaginationComponent,
    ArticleCardComponent,
    ArticleDetailComponent,
  ],
  exports: [PaginationComponent, ArticleCardComponent, ArticleDetailComponent],
})
export class SharedModule {}
