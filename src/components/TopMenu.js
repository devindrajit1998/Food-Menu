import React from "react";

export default function TopMenu({ filterMenu, newNavList }) {
  return (
    <>
      <div className="top_menu">
        {newNavList.map((cate) => {
          return (
            <>
            
              <button
                type="button"
                class="btn btn-danger my-3 mx-3 navbtn"
                onClick={() => filterMenu(cate)}
              >
                {cate}
              </button>
            </>
          );
        })}
      </div>
    </>
  );
}
