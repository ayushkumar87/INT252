import React from "react";

const DisplayData = ({ data,onDelete }) => {
    // if (!data) return null;
  return (
    <div>
        {data.map((items,idx)=>{
            return(
            <div key={idx}>
                <p>{items.name}</p>
                <p>{items.age}</p>
                <button onClick={()=>{
                    onDelete(idx)
                }}>Delete</button>
            </div>
            )
        })}
    </div>
  );
};

export default DisplayData;
