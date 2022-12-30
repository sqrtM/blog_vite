import axios from 'axios';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PostDetailsType } from './types';

import './styles/EditBlogPost.scss'
import ReactTextareaAutosize from 'react-textarea-autosize';

export default function EditBlogPost() {

  const { postID } = useParams();
  const [postDetails, setPostDetails] = useState<PostDetailsType>({
    author: "",
    body: "",
    comments: [],
    date: "",
    id: 0,
    title: ""
  });
  const [selectedInputField, setSelectedInputField] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState({ done: false, response: 0 });


  axios.get('http://localhost:8080/api/post/' + postID)
    .then((response): void => {
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

  function handleChange(event: { target: { value: string; }; }) {
    setPostDetails({
      ...postDetails,
      [selectedInputField]: event.target.value
    });
  }

  function handleSubmit() {
    axios.put('http://localhost:8080/api/post/' + postID, postDetails)
      .then(res => {
        if (res.status != 200) { console.log(res); }
        setIsEditing({ done: true, response: res.status });
      });
  }

  if (isEditing.done) {
    return isEditing.response === 200 ?
      <div>
        <p>
          editing successful
        </p>
        <p>
          <Link to={`/post/` + postDetails.id} className="edit_page_element_button">
            <input type="button" value="return to post" className='edit_page_element_button' />
          </Link>
        </p>
        <p>
          <Link to={`/blog`} className="edit_page_element_button">
            <input type="button" value="return to blog" className='edit_page_element_button' />
          </Link>
        </p>
      </div> :
      <div>
        error has occurred. see console for details.
        <p>
          <Link to={`/post/` + postDetails.id} className="edit_page_element_button">
            <input type="button" value="return to post" className='edit_page_element_button' />
          </Link>
        </p>
        <p>
          <Link to={`/blog`} className="edit_page_element_button">
            <input type="button" value="return to blog" className='edit_page_element_button' />
          </Link>
        </p>
        </div>
  }

  return (
    <div className='edit_page_container'>
      <div className='edit_page_element'>
        post id : {postDetails.id}
      </div>
      <div className='edit_page_element'>
        title : {postDetails.title}
        <input type='button' value='edit' onClick={() => setSelectedInputField(selectedInputField === "title" ? "" : "title")} className='edit_page_element_button' />
        {selectedInputField === "title" && <input type='text' value={postDetails.title} onChange={handleChange} className='edit_page_element_input' id='title_input' />}
      </div>
      <div className='edit_page_element'>
        author : {postDetails.author}
        <input type='button' value='edit' onClick={() => setSelectedInputField(selectedInputField === "author" ? "" : "author")} className='edit_page_element_button' />
        {selectedInputField === "author" && <input type='text' value={postDetails.author} onChange={handleChange} className='edit_page_element_input' id='author_input' />}
      </div>
      <div className='edit_page_element'>
        date : {postDetails.date}
        <input type='button' value='edit' onClick={() => setSelectedInputField(selectedInputField === "date" ? "" : "date")} className='edit_page_element_button' />
        {selectedInputField === "date" && <input type='text' value={postDetails.date} onChange={handleChange} className='edit_page_element_input' id='date_input' />}
      </div>
      <div className='edit_page_element'>
        comments : {postDetails.comments}
        <input type='button' value='edit' onClick={() => setSelectedInputField(selectedInputField === "comments" ? "" : "comments")} className='edit_page_element_button' id='comment_input' />
      </div>
      <div className='edit_page_element'>
        body : {postDetails.body}
        <input type='button' value='edit' onClick={() => setSelectedInputField(selectedInputField === "body" ? "" : "body")} className='edit_page_element_button' />
        {selectedInputField === "body" && <ReactTextareaAutosize value={postDetails.body} onChange={handleChange} className='edit_page_element_input' id='body_input' />}
      </div>
      <div>
        <input type="button" value="submit changes" id='submit_changes' onClick={handleSubmit} />
      </div>
    </div>
  );
}