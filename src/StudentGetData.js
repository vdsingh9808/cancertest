import { useEffect, useState } from "react"
import "./StudentGetData.css"
function StudentGetData(){

  const [data,setData] = useState();

  async  function getAPiData(){
         const getAwaitData = await fetch('https://fakestoreapi.com/products');
        //  console.log(await getAwaitData.json())
        const getData = await getAwaitData.json();
        
         setData(getData)
    }

    useEffect(()=>{
        getAPiData()
    },[])

    return (
        <>
        <h3>StudentGetData</h3>
       
            <div className="productSection">
            { data?.map((item,index)=>{
              
                // <img src={item.image} />
                // console.log(item.title)
                
              return  <div className="productDiv" key={index}>
                                <div className="prodcutImage">
                                        <img src={item.image} />
                                </div>
                                <div className="productName">
                                    {item.title}
                                </div>
                                <div className="productPrice">
                                    <span>Price : {item.price}</span>
                                </div>
                                <div className="addToCart">
                                    <button>Add To Cart</button>
                                </div>
                            </div>  
            })
        }
        </div>
        </>
    )
}
export default StudentGetData