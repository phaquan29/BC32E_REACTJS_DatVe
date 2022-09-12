import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./Components/ClassComponent"; //muốn sử dụng <ClassComponent></ClassComponent> hoặc <FunctionComponent></FunctionComponent> ta phải import hai cái này
import FunctionComponent from "./Components/FunctionComponent";
import Content from "./Components/BTLayout/Content";
import Footer from "./Components/BTLayout/Footer";
import Header from "./Components/BTLayout/Header";
import Navigation from "./Components/BTLayout/Navigation";
import Home from "./Components/BTLayout/Home";
import DataBinding from "./Components/Databinding/DataBinding";
import HandleEvent from "./Components/BTLayout/handleEvent/HandleEvent";
import StyleComponent from "./Components/styleComponent/styleComponent";
import RenderingWithCondition from "./Components/RenderingWithConditions/RenderingWithCondition";
import RenderingWithMap from "./Components/RenderingWithMap/RenderingWithMap";
import State from "./Components/State/State";
import BaiTapChonXe from "./Components/BTXe/BaiTapChonXe";
import BaiTapMovie from "./Components/BTMovie/BaiTapMovie";
import Children from "./Components/props/Children";
import Parent from "./Components/props/Parent";
import BTShoeShop from "./Components/BTShoeShop/BTShoeShop";
import BTPhone from "./Components/BTPhone/BTPhone";
import DemoRedux from "./Components/DemoRedux/DemoRedux";
import BaiTapChonXeRedux from "./Components/BTXeRedux/BaiTapChonXeRedux";
import BTPhoneRedux from "./Components/BTPhoneRedux/BTPhoneRedux";
//jsx =javascript+xml
//cái này là cú pháp đặc biệt cho phép viết html trong js
/**
 * Các property/attribute sẽ đc viết theo quy tắc camelCase
 * Class => className
 * component có 2 loại
 * function component
 * class component
 *
 * ;
 */
function App() {
  return (
    <div className="App">
      {/* <ClassComponent></ClassComponent>
      <ClassComponent />
      <FunctionComponent></FunctionComponent>
      <FunctionComponent/>
      <Content/> */}
      {/* <Footer/>
      <Header/> */}
      {/* <Home/> */}
      {/* <Navigation/> */}
      {/* <DataBinding/> */}
      {/* <HandleEvent/> */}
      {/* Viết hoa chữ cái đầu */}
      {/* <StyleComponent /> */}
      {/* // <RenderingWithCondition/> */}
      {/* <RenderingWithMap/> */}
      {/* <State/> */}
      {/* <BaiTapChonXe/> */}
      {/* <BaiTapMovie/> */}
      {/* <Parent/> */}
      {/* <BTShoeShop></BTShoeShop> */}
      {/* <BTPhone></BTPhone> */}
      {/* <DemoRedux></DemoRedux> */}
      {/* <BaiTapChonXeRedux></BaiTapChonXeRedux> */}
      <BTPhoneRedux></BTPhoneRedux>
    </div>
  );
}

export default App;
