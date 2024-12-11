import NavBar from "./src/Components/NavBar";
import Footer from "./src/Components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="font-siliguri flex flex-col h-screen">
        <NavBar />
        <div className="grow">{children}</div>
        <Footer />
      </div>
    </>
  );
}
