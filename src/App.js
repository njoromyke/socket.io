import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "./actions/userActions";
const App = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { users, loading } = userList;
  useEffect(() => {
    const socket = io("ws://localhost:5000");

    socket.on("connnection", () => {
      console.log("connected to server");
    });

    socket.on("user-added", (user) => {

      dispatch(listUsers());

      console.log(user.id);
    });

    socket.on("message", (message) => {
      console.log(message);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnecting");
    });
    dispatch(listUsers());
  }, [dispatch]);

  return (
    <div>
      <table>
        <thead>
          <th>Name </th>
          <th>Age </th>
        </thead>
        {!loading && users.length}

        {users &&
          users.map((user) => (
            <>
              <tbody>
                <tr style={{ border: "1px" }}>
                  <td> {user.name} </td>
                  <td> {user.age} </td>
                </tr>
              </tbody>
            </>
          ))}
      </table>
    </div>
  );
};

export default App;
