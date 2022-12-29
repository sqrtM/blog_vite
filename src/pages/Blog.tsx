import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Blog.scss';


export default function Blog(): JSX.Element {

  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch('api/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setInput(event.target.value);
  }


  async function handleSubmit(event: { preventDefault: () => void; }): Promise<void> {
    event.preventDefault();
    axios.get('http://localhost:8080/api/posts')
      .then(response => {
        if (response.status === 200) {
          axios.post("http://localhost:8080/api/post", {
            title: input,
          })
        }
      })
      .catch(err => console.log(err))
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

