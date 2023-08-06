import "./App.css";
import FoodCard from "./components/FoodCard";
import TopMenu from "./components/TopMenu";
import Navbar from "./components/navbar";
import MenuApi from "./components/MenuApi"
import { useState } from "react";

function App() {
  const [menuData, setMenuData] = useState(MenuApi)

// menu filter 
const filterMenu = (nData)=>{
  if(nData === "All") {
    setMenuData(MenuApi)
  } else {

  
const filData = MenuApi.filter((newData)=>{
  return newData.category === nData;
})
setMenuData(filData)
}
}
// Top menu Add autometically 
const categoryList =[ ...new Set (MenuApi.map((newNav) =>{
  return newNav.category;
})), "All"
];

const [newNavList, setNewNavList] = useState (categoryList)

  

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row ">
          <div className="col-md-12">
            <Navbar />
          </div>
        </div>
        </div>
        <div className="container">
        <div className="row text-center my-5">
          <div className="col-md-12 d-flex">
            <TopMenu filterMenu={filterMenu} newNavList = {newNavList} />
          </div>
        </div>
        <div className="row mt-2 ">
          <div className="col-md-12">
            <FoodCard menuData={menuData}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
