import { Controller, Get } from '@nestjs/common';
import * as RSS from 'rss';

@Controller('rss')
export class RssController {
  @Get()
  generateRssFeed() {
    const feed = new RSS({
      title: 'My Blog RSS Feed',
      description: 'Latest blog posts',
      feed_url: 'http://localhost:3000/rss',
      site_url: 'http://localhost:3000',
    });

    const posts = [
      {
        title: 'Post 1',
        description: 'Description 1',
        link: 'http://localhost:3000/blog/1',
      },
      {
        title: 'Post 2',
        description: 'Description 2',
        link: 'http://localhost:3000/blog/2',
      },
    ];

    posts.forEach((post) => {
      feed.item({
        title: post.title,
        description: post.description,
        url: post.link,
      });
    });

    return feed.xml();
  }
}
