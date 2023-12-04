import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "../../components/AboutListAuthors/AboutAuthors";
import { Container } from "@mui/material";


const DetailPosts = () => {
    const { id } = useParams();
    const data = categories.filter((item) => item.id === +id)[0];
    console.log(data);
  return (
    <Container>
        
    </Container>
  )
}

export default DetailPosts