const uuid = require("uuid");

const postDB = [{

  "id": "uuid",
  "title": "string",
  "content": "string",
  "header_image": "url_to_img",
  "user_id": "uuid",//Aqui hara referencia al usuario de tu userDB
  "published": true
}];

const getAllPosts = () => {
  return postDB;
};

const getPostById = (id) => {
  const data = postDB.filter((item) => item.id === id);
  return data.length ? data[0] : false
};

const createPost = (data, user) => {
  const newPost = {
    id: uuid.v4(), //Obligatorio y unico
    title: string, // Obligatorio
    content: string, //Obligatorio
    header_image: url_to_img,
    user_id: user,// Obligatorio
    published: true //obligatorio y por defecto true 
  };

  postDB.push(newPost);
  return newPost;
};

const editPost = (id, data, user) => {
  const index = postDB.findIndex((user) => user.id === id);
  if (index !== -1) {
    postDB[index] = {
      id: id,
      title: data.title,
      content: data.content,
      header_image: data.header_image,
      user_id: user,
      published: data.published
    };
    return postDB[index];
  } else {
    return createPost(data);
  }
};

const deletePost = (id, user) => {
  const postFiltered = postDB.filter((item) => item.user_id === user && id === item.id)
  if (postFiltered.length) {
    const index = postDB.findIndex(user => user.id === id)
    postDB.splice(index, 1)
    return true
  }
    return false
}


const getAllPostByUser = (id) => {
  const data = postDB.filter((item) => item.user_id === id);
  return data 
}

const getUserPostById = (user, id) => {
  const data = postDB.filter((item) => item.user_id === user);
  const UserPosts = data.filter((item) => item.id === id);
  return UserPosts.length ? UserPosts[0] : false
}

module.exports = {
  getUserPostById,
  getAllPostByUser,
  deletePost,
  editPost,
  createPost,
  getPostById,
  getAllPosts
}

