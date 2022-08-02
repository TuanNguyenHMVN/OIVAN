export class Article {
  coverImageUrl: string;
  title: string;
  content: string;
  description: string;
  subtitle: string;
  url: string;

  constructor(item?: Article) {
    this.title = item?.title || '';
    this.coverImageUrl = item?.coverImageUrl || '';
    this.content = item?.content || '';
    this.url = item?.url || '';
    this.description = item?.description || '';
    this.subtitle = item?.subtitle || '';
  }
}
