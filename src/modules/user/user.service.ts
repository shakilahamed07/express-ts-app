import httpStatus from "http-status";

const getUser = async () => {
  const data = [
    {
      id: 1,
      name: "Jon do",
      email: "john.doe@example.com",
      password: "password123",
      phone: "1234567890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "password456",
      phone: "0987654321",
    },
  ];

  return data;
};

const userService = {
  getUser,
};

export default userService;
