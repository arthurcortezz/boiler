import { Box } from "@chakra-ui/react";

import TableColumn from "../../components/Table";
import AuthLayout from "../../components/AuthLayout";

const users = [
  {
    id: 1,
    name: "User 1",
    email: "email1",
  },
  {
    id: 2,
    name: "User 2",
    email: "email2",
  },
  {
    id: 3,
    name: "User 3",
    email: "email3",
  },
];

const userData = {
  columns: [
    { name: "Nome", key: "name" },
    { name: "ID", key: "id" },
    { name: "E-mail", key: "email" },
  ],
  rows: users.map((user) => ({ key: user.id.toString(), ...user })),
};
const UsersList = () => (
  <AuthLayout title={"Usuários"}>
    <Box w={"100%"} p={8}>
      <TableColumn title={"Lista de usuários"} data={userData} />
    </Box>
  </AuthLayout>
);

export default UsersList;
