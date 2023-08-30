import React from "react";
import "../style/Homepage.css";
import NavBar from "../components/bar/NavBar";
import MainBar from "../components/bar/MainBar";
import { Slide, ToastContainer } from 'react-toastify';
// import { useAuthContext } from "../hooks/useAuthContext";

const HomePage = () => {

  return (
    <div className="containerHome">
      <NavBar />
      <MainBar />
      <ToastContainer theme='dark' transition={Slide} autoClose={3000} />
    </div>
  );
}

export default HomePage;





































// const HomePage = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     getTodos();
//   }, []);

//   const getTodos = async () => {
//     const response = await axios.get("http://localhost:5000/todos");
//     setTodos(response.data);
//   };

//   const filteredTodos = todos.filter((todo) => {
//     return todo.title.toLowerCase();
//   });
//   return (
//     <div>
//       <div>
//         <TodoItemList todos={filteredTodos} />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
