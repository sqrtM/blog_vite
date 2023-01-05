import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './styles/Blog.scss';
import { PostDetailsType } from '../components/types';
import Loading from '../components/Loading';


export default function Blog(): JSX.Element {

  const [posts, setPosts] = useState<PostDetailsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // change this to an axios call
  useEffect((): void => {
    setLoading(true);
    fetch('api/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <header>
        <div className='post_list_container'>
          {
            posts.map((post: any) =>
              <div key={post.id} className="post_list_entry">
                <div className="link_to_blog_post">
                  <Link to={`/post/` + post.id} className="link_text">{post.title}</Link>
                </div>
                <div>
                <Link to={`/post/` + post.id + '/edit'} className="edit_button"><input type="button" value="edit" className='edit_button'/></Link>
                </div>
              </div>
            )
          }
        </div>
        <div className="link_text">
          <Link to={`/blog/new_post`} className="link_text">make a new post</Link>
        </div>
      </header>
    </div>
  );
}

