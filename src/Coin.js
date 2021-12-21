import { selectOptions } from "@testing-library/user-event/dist/select-options";
import { useEffect, useState } from "react";

function Coin(){
    const [loading, setLoading] = useState(true);
    const [conis, setCoins] = useState([]);
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) =>{
        setCoins(json);
        setLoading(false);
    } );

    const [unit, setUnit] = useState(0)
    const [money, setMoney] = useState(0.0)
    const handleChange = (event) => {
        setUnit(event.target.selectedIndex);
    }
    useEffect(() => 
        {
            if(conis[unit] === undefined){
                console.log("맞췄으");

            }
            else{
                console.log(conis[unit]);
                setMoney(conis[unit].quotes.USD.price);
            } 
         }       
        ,[unit])

    return (
        <div>
            <h1>The Coin{loading ? "" : `(${conis.length})`}</h1>
            {loading ? <strong>Loading....</strong> :
             <select onChange={handleChange}>
             {conis.map(((coin) => <option key={coin.id}>{coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price}</option>))}
             </select>
            }
            <hr/>
            {money}USD
            

        </div>
    )
}
export default Coin;