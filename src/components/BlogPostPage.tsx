import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Marked } from '@ts-stack/markdown';

import './styles/BlogPostPage.scss';
import { DefaultPostDetails, PostDetailsType } from './types';
import Loading from './Loading';

export default function BlogPostPage(): JSX.Element {

  const { postID } = useParams();
  const [postDetails, setPostDetails] = useState<PostDetailsType>(DefaultPostDetails);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/post/' + postID)
      .then(response => {
        if (response.status === 200 && loading) {
          setPostDetails({
            author: response.data.author,
            body: response.data.body,
            comments: response.data.comments,
            date: response.data.date,
            id: response.data.id,
            title: response.data.title
          })
          setLoading(false)
        }
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='blog_post_container'>
      <div className='post_header'>
        <div className='post_title'>
          {postDetails.title}
        </div>
        <div className='post_author'>
          {postDetails.author}
        </div>
      </div>
      <div className='post_body' dangerouslySetInnerHTML={{ __html: Marked.parse(postDetails.body) }} />
      <div>
        <Link to={`/post/` + postDetails.id + '/edit'} className="edit_button">
          <input type="button" value="edit" className='edit_button' />
        </Link>
      </div>
    </div>
  );
}
