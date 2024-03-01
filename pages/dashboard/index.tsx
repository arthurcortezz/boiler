import { useRouter } from "next/router";

import AuthLayout from "../../components/AuthLayout";

const Dashboard = () => {
  const router = useRouter();

  const handleRedirect = (route: string) => {
    router.push(route);
  };
  return (
    <AuthLayout title="Início">
      <h1>Dashboard</h1>
    </AuthLayout>
  );
};
export default Dashboard;
