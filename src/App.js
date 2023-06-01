import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App({data}) {
  return (
    <div className="App">
      <Header data = {data.header}/>
      <Main data = {data.main}/>
      <Footer data = {data.footer}/>

    </div>
  );
}

export default App;
