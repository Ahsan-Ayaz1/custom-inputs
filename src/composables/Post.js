import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/posts");
    return response;
  } catch (err) {
    return err;
  }
};

export const savePost = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/posts", data);
    return response;
  } catch (err) {
    return err;
  }
};

export const getPost = async (id) => {
  try {
    const response = await axios.get("http://localhost:3000/posts/" + id);
    return response;
  } catch (err) {
    return err;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await axios.delete("http://localhost:3000/posts/" + id);
    return response;
  } catch (err) {
    return err;
  }
};

export const updatePost = async (id, data) => {
  try {
    const response = await axios.put("http://localhost:3000/posts/" + id, data);
    return response;
  } catch (err) {
    return err;
  }
};
