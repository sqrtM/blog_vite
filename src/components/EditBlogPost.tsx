import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DefaultPostDetails, PostDetailsType } from './types';

import './styles/EditBlogPost.scss'
import ReactTextareaAutosize from 'react-textarea-autosize';
import Loading from './Loading';

export default function EditBlogPost(): JSX.Element {

  const { postID } = useParams();
  const [postDetails, setPostDetails] = useState<PostDetailsType>(DefaultPostDetails);
  const [selectedInputField, setSelectedInputField] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [onDeleteScreen, setOnDeleteScreen] = useState<boolean>(false);
  const [isPostDeleted, setIsPostDeleted] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState({ done: false, response: 0 });

  useEffect(() => {
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
          });
          setLoading(false)
        }
      });
  }, []);

  function handleChange(event: { target: { value: string; }; }) {
    setPostDetails({
      ...postDetails,
      [selectedInputField]: event.target.value
    });
  }

  function handleSubmit(): void {
    setLoading(true);
    axios.put('http://localhost:8080/api/post/' + postID, postDetails)
      .then(res => {
        if (res.status != 200) {
          console.log(res);
        }
        setLoading(false);
        setIsEditing({ done: true, response: res.status });
      });
  }

  if (onDeleteScreen) {
    function handlePostDeletion(): void {
      setLoading(true);
      axios.delete('http://localhost:8080/api/post/' + postID)
        .then(res => {
          if (res.status != 200) {
            console.log(res);
          }
          setLoading(false);
          setIsPostDeleted(true);
        });
    }
    return isPostDeleted ? (
      <div>
        <p>
          post successfully deleted
        </p>
        <p>
          <Link to={`/blog`} className="edit_page_element_button">
            <input type="button" value="return to blog" className='edit_page_element_button' />
          </Link>
        </p>
      </div>
    ) : (
      <div>
        <p>
          are you sure you want to delete this post?
        </p>
        <p>
          this action cannot be undone.
        </p>
        <p>
          <input type="button" value="return to edit page" className='edit_page_element_button' onClick={() => setOnDeleteScreen(false)} />
        </p>
        <p>
          <input type="button" value="delete post" id='confirm_delete_post' onClick={handlePostDeletion} />
        </p>
      </div>
    );
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
      <div>
        <input type="button" value="delete post" id='delete_post' onClick={() => setOnDeleteScreen(true)} />
      </div>
    </div>
  );
}