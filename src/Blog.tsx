import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './styles/Blog.scss';


function Blog(): JSX.Element {

  const [posts, setposts] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch('api/posts')
      .then(response => response.json())
      .then(data => {
        setposts(data);
        setLoading(false);
        console.log(data)
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
        <div>
          {
            posts.map((post: any) =>
              <div key={post.id} className="link_to_post">
                  <Link to={`/posts/` + post.title} className="link_text">{post.title}</Link>
              </div>
            )
          }
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="input" onChange={handleChange} className="input_styles"/>
            <input type="submit" value="submit" className='submit_styles' />
          </form>
        </div>
      </header>
    </div>
  );
}

export default Blog;
