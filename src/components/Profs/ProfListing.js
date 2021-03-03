import React from 'react';
import '../../component-design/Profs/ProfListing.css';

import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

//<ProfListing prof={{id:0,name:"Herberto", img:"", pop:0,ex:2}}/>
export default class ProfListing extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

   
    
    render() {
        const reshtml = [];
        var btnProf;
        console.log(this.props.prof)
        for (const [idx, val] of this.props.prof.entries()){
            if (val.locked){
                btnProf = (<button type="button" class="btn btn-primary" onClick={()=>{this.buyProf(val.price, idx)}}>Buy for {val.price} <RemoveCircleOutlineIcon/></button>)
            }else{
                btnProf = (<button type="button" class="btn btn-primary">Add to room</button>)
            }
            if (val.locked == this.props.displayInShop){
                reshtml.push(
                    <div className='ProfBumper'>
                        <div class="card" style={{width: "18rem"}}>
                            <img src={val.img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{val.name}</h5>
                                <p class="card-text">
                                    <ul><li>
                                        <SupervisedUserCircleIcon/> Popularity: {val.pop*100}%
                                        </li>
                                        <li>
                                        <RemoveCircleOutlineIcon/> Exmatriculation: {val.ex*100}%
                                        </li></ul>
                                </p>
                            </div>
                            <div class="card-footer">{}
                                {btnProf}
                            </div>
                        </div>
                    </div>
                )
            }
            
        }

        return(
            <div className='ProfList'>{reshtml}</div>
            
        );
    }
    buyProf(price,id)
    {
        alert(price+" "+id)
        
    }


   
    
}

