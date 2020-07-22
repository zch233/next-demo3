import "reflect-metadata";
import {createConnection} from 'typeorm';
import {Post} from './entity/Post';

createConnection().then(async connection => {
  const posts = await connection.manager.find(Post)
  console.log(posts);
  const p = new Post()
  p.title = 'title'
  p.content = 'content'
  p.authorId = 111
  await connection.manager.save(p)
  const newPosts = await connection.manager.find(Post)
  console.log(newPosts)
  await connection.close()
}).catch(error => console.log(error));