import React from "react";
import { useParams } from "react-router-dom";

const EditCategory = () => {
  const { categoryId } = useParams();
  return <div>EditCategory</div>;
};

export default EditCategory;
