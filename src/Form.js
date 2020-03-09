import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Form() {
  const dispatch = useDispatch();

  const initialData = { top: "", bottom: "", url: "" };
  const [formData, setFormData] = useState(initialData);


  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({type: "ADD", payload: formData});
    setFormData(initialData);
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label htmlFor='top'>Top Text</label>
        <input id='top'
          name='top'
          value={formData.top}
          onChange={handleChange}
          type="text">
        </input>

        <label htmlFor='bottom'>Bottom Text</label>
        <input id='bottom'
          name='bottom'
          value={formData.bottom}
          onChange={handleChange}
          type="text">
        </input>

        <label htmlFor='url'>Image URL</label>
        <input id='url'
          name='url'
          value={formData.url}
          onChange={handleChange}
          type="text">
        </input>

        <button type="submit">Add Meme!</button>
      </form>
    </div>
  )
}

export default Form;