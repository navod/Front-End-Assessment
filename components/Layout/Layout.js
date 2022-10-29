import { useRouter } from "next/router";
import Navbar from "../UI/Navbar/Navbar";

const Layout = props => {
  const router = useRouter();

  return (
    <main>
      <Navbar />
      <div className="h-20"></div>
      {props.children}
    </main>
  );
};

export default Layout;
