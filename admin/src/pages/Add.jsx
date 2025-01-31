import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);

      if (response.data.success) {
        setData({
          name: '',
          description: '',
          price: '',
          category: 'Salad',
        });
        setImage(false);
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='add w-[70%] ml-[max(5vw, 25px)] mt-[50px] text-[#6d6d6d] text-[16px]'>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-[10px]'>
        <div className='add-img-upload flex flex-col gap-[10px] w-[120px]'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=''
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type='file'
            id='image'
            hidden
            required
          />
        </div>
        <div className='add-product-name w-[max(40%, 280px)] flex flex-col gap-[10px]'>
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type='text'
            name='name'
            placeholder='Type here...'
            className='border p-[10px]'
          />
        </div>
        <div className='add-product-description w-[max(40%, 280px)] flex flex-col gap-[10px]'>
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name='description'
            rows='6'
            placeholder='Write content here...'
            required
            className='border p-[10px]'
          ></textarea>
        </div>
        <div className='add-category-price flex gap-[30px]'>
          <div className='add-category flex flex-col gap-[10px]'>
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name='category'
              className='border max-w-[120px] p-[10px]'
            >
              <option value='Salad'>Salad</option>
              <option value='Rolls'>Rolls</option>
              <option value='Deserts'>Deserts</option>
              <option value='Sandwitch'>Sandwitch</option>
              <option value='Cake'>Cake</option>
              <option value='Pure Veg'>Pure Veg</option>
              <option value='Pasta'>Pasta</option>
              <option value='Noodles'>Noodles</option>
            </select>
          </div>
          <div className='add-price flex flex-col gap-[10px]'>
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type='Number'
              name='price'
              placeholder='TK. 120'
              className='border max-w-[120px] p-[10px]'
            />
          </div>
        </div>
        <button
          type='submit'
          className='add-btn cursor-pointer max-w-[120px] p-[10px] bg-black text-white'
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
