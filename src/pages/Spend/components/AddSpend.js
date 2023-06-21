import React, { useState } from "react";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field, ErrorMessage } from "formik";

Modal.setAppElement("#root");

function AddSpend() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("payment");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (resetForm) => {
    setIsOpen(false);
    resetForm();
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    values.type = type;
    console.log(values);
    closeModal(resetForm);
    setSubmitting(false);
  };

  const initialValues = {
    type: "payment",
    date: "",
    sourceFund: "bank",
    typeMoney: "eating",
    money: "",
  };

  const validateForm = (values) => {
    // Add your form validation logic here if needed
  };

  const handleType = (text) => {
    setType(text);
  };

  const types = [
    { name: "Chi", value: "payment" },
    { name: "Thu", value: "income" },
  ];
  const sourceFunds = [
    { name: "Thẻ ngân hàng", value: "bank" },
    { name: "Tiền mặt", value: "money" },
    { name: "Thẻ tín dụng", value: "credit" },
  ];
  const paymentTypes = [
    { name: "Ăn uống", value: "eating" },
    { name: "Giải trí", value: "entertainment" },
    { name: "Giao thông", value: "traffic" },
    { name: "Sở thích", value: "hobby" },
    { name: "Sinh hoạt", value: "living" },
    { name: "Quần áo", value: "clothes" },
    { name: "Sức khỏe", value: "health" },
    { name: "Giáo dục", value: "education" },
    { name: "Sự kiện", value: "event" },
    { name: "Khác", value: "other" },
  ];
  const incomeTypes = [
    { name: "Tiền lương", value: "salary" },
    { name: "Thu nhập từ đầu tư", value: "investments" },
    { name: "Thu nhập từ cho thuê", value: "rental" },
    { name: "Thu nhập từ kinh doanh", value: "business" },
    { name: "Khác", value: "other" },
  ];

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
          onClick={() => closeModal}
          className="cursor-pointer absolute right-4"
        />
        <h2 className="text-2xl py-6 px-2">Quản lý tài chính</h2>
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ errors, touched, resetForm }) => (
            <Form>
              <div className="flex cursor-pointer justify-around">
                {types.map((item, index) => (
                  <div
                    key={index}
                    className={`px-[20%] rounded-lg border-2 border-black ${
                      type === item.value ? "bg-slate-200" : ""
                    }`}
                    onClick={() => {
                      handleType(item.value);
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>

              <div className="pt-8 w-full">
                <label htmlFor="date">Ngày</label>
                <Field
                  className="w-full mt-2 py-1 px-2 border border-gray-600 rounded transition duration-300 focus:border-blue-500"
                  type="date"
                  id="date"
                  name="date"
                />
                <ErrorMessage name="date" component="div" />
              </div>

              <div className="pt-8 w-full">
                <label htmlFor="sourceFund">Nguồn tiền</label>
                <Field
                  as="select"
                  name="sourceFund"
                  className="w-full mt-2 py-1 px-2 border border-gray-600 rounded transition duration-300 focus:border-blue-500"
                >
                  {sourceFunds.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="sourceFund" component="div" />
              </div>

              <div className="pt-8 w-full">
                <label htmlFor="typeMoney">Thể loại</label>
                <Field
                  as="select"
                  name="typeMoney"
                  className="w-full mt-2 py-1 px-2 border border-gray-600 rounded transition duration-300 focus:border-blue-500"
                >
                  {type === "payment"
                    ? paymentTypes.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.name}
                        </option>
                      ))
                    : incomeTypes.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                </Field>
                <ErrorMessage name="typeMoney" component="div" />
              </div>

              <div className="pt-8 w-full pb-14">
                <label htmlFor="money">Số tiền</label>
                <Field
                  className="w-full mt-2 py-1 px-2 border border-gray-600 rounded transition duration-300 focus:border-blue-500"
                  type="number"
                  id="money"
                  name="money"
                />
                <ErrorMessage name="money" component="div" />
              </div>
              <div className="absolute bottom-4 right-4">
                <button
                  onClick={() => closeModal(resetForm)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded"
                >
                  Đóng dialog
                </button>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Xác nhận
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}

export default AddSpend;
