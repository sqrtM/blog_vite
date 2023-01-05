import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DefaultPostDetails, PostDetailsType } from '../components/types';

import './styles/CreateNewPost.scss'
import ReactTextareaAutosize from 'react-textarea-autosize';
import Loading from '../components/Loading';

export default function CreateNewPost() {

  const [postDetails, setPostDetails] = useState<PostDetailsType>(DefaultPostDetails);
  const [selectedInputField, setSelectedInputField] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState({ done: false, response: 0 });


  useEffect(() => {
    axios.get('http://localhost:8080/api/posts')
      .then((response): void => {
        if (response.status === 200 && loading) {
          console.log(response.data.length);
          setPostDetails({
            ...postDetails,
            id: response.data.length + 1
          });
          setLoading(false);
        }
      });
  }, [])

  function handleChange(event: { target: { value: string; }; }) {
    setPostDetails({
      ...postDetails,
      [selectedInputField]: event.target.value
    });
  }

  function handleSubmit() {
    setLoading(true);
    axios.post('http://localhost:8080/api/post', postDetails)
      .then(res => {
        if (res.status != 200) { 
          console.log(res); 
        }
        setLoading(false);
        setIsEditing({ done: true, response: res.status });
      });
  }

  if (isEditing.done) {
    return isEditing.response === 200 ?
      <div>
        <p>
          post successfully published
        </p>
        <p>
          <Link to={`/post/` + postDetails.id} className="edit_page_element_button">
            <input type="button" value="go to post" className='edit_page_element_button' />
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
          <Link to={`/blog`} className="edit_page_element_button">
            <input type="button" value="return to blog" className='edit_page_element_button' />
          </Link>
        </p>
      </div>
  }

  if (loading) {
    return <Loading />;
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