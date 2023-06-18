import React, { useState } from "react";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field, ErrorMessage } from "formik";

Modal.setAppElement("#root");

function AddSpend() {
  const [isOpen, setIsOpen] = useState(false);

  const [type, setType] = useState("thu");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (values) => {
    values.type = type;
    console.log(values);
  };

  const initialValues = {
    type: "",
    date: "",
    account: "",
    typeMoney: "",
    money: "",
  };

  const validateForm = (values) => {};

  const handleType = (text) => {
    setType(text);
  };

  const items = ["Chi", "Thu"];

  return (
    <div>
      <button onClick={openModal} className="cursor-pointer">
        Mở dialog
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          content: {
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
          },
        }}
      >
        <CloseIcon
          onClick={closeModal}
          className="cursor-pointer absolute right-4"
        />
        <h2 className="text-2xl py-6 px-2">Quản lý tài chính</h2>
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="flex cursor-pointer justify-around">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`px-[20%] rounded-lg border-2 border-black ${
                    type === item ? "bg-slate-200" : ""
                  }`}
                  onClick={() => {
                    handleType(item);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="date">Ngày</label>
              <Field type="text" id="date" name="date" />
              <ErrorMessage name="date" component="div" />
            </div>

            <div>
              <label htmlFor="account">Nguồn tiền</label>
              <Field type="text" id="account" name="account" />
              <ErrorMessage name="account" component="div" />
            </div>

            <div>
              <label htmlFor="typeMoney">Thể loại</label>
              <Field type="text" id="typeMoney" name="typeMoney" />
              <ErrorMessage name="typeMoney" component="div" />
            </div>

            <div>
              <label htmlFor="money">Số tiền</label>
              <Field type="text" id="money" name="money" />
              <ErrorMessage name="money" component="div" />
            </div>

            <button onClick={closeModal}>Đóng dialog</button>
            <button type="submit">Xác nhận</button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

export default AddSpend;
