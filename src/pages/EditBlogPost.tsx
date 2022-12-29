import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
export default function EditBlogPost() {
  const { postID } = useParams();

  const [postDetails, setPostDetails] = useState({
    author: null,
    body: null,
    comments: [],
    date: null,
    id: 0,
    title: ""
  });
  const [loading, setLoading] = useState(true);


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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        {postDetails.title}
      </div>
      <div>
      {postDetails.author}
      </div>
      <div>
        edit
      </div>
      <div>
        edit
      </div>
      <div>
        edit
      </div>
    </div>
  );
}