import React, { useState } from 'react';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Form, Field, ErrorMessage } from 'formik';


Modal.setAppElement('#root');

function AddSpend() {
    const [isOpen, setIsOpen] = useState(false);

    const [type, setType] = useState ('payment')

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    
    const handleSubmit = (values) => {
        values.type = type
        console.log(values);
    };
    
    const initialValues = {
        type: '',
        date: '',
        account: '',
        typeMoney: '',
        money: ''
    };

    const validateForm = (values) => {
        
    }

    const handleType = (text) => {
        setType(text)
    }

  return (
    <div >
      <button onClick={openModal} className='cursor-pointer'>Mở dialog</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
        content: {
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
        },
        }}

    >
        <CloseIcon onClick={closeModal} className='cursor-pointer absolute right-4'/>
        <h2>Quản lý tài chính</h2>
        <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
        >
        <Form>

        <div onClick={() => {handleType('payment')}}> Payment </div>
        <div onClick={() => {handleType('receipt')}}> Receipt </div>

        <div>
            <label htmlFor="date">Tên:</label>
            <Field type="text" id="date" name="date" />
            <ErrorMessage name="date" component="div" />
        </div>

        <div>
            <label htmlFor="account">Email:</label>
            <Field type="text" id="account" name="account" />
            <ErrorMessage name="account" component="div" />
        </div>

        <div>
            <label htmlFor="typeMoney">Tin nhắn:</label>
            <Field type="text" id="typeMoney" name="typeMoney" />
            <ErrorMessage name="typeMoney" component="div" />
        </div>
                      
        <div>
            <label htmlFor="money">Tên:</label>
            <Field type="text" id="money" name="money" />
            <ErrorMessage name="money" component="div" />
        </div>  
                      
        <button onClick={closeModal}>Đóng dialog</button>
        <button type="submit">Gửi</button>
        </Form>
      </Formik>    
      </Modal>
    </div>
  );
}

export default AddSpend