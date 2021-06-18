import PropTypes from 'prop-types'
import React,{useState} from 'react'
import Name from './Name'
import './NamesList.css'


const NamesList = ({datas, search}) => {
    const [indexFav, setindexFav] = useState([]);
    datas.sort(function(a,b){
        return a.name - b.name;
    })
    // datas.map((data , index)=>{
    //     let a = data , b = datas[index+1];
    //     // [data.name , datas[index+1].] = [datas[index+1]. , data.]
    //     if(index +1 ){
    //         console.log(data);
    //         // data.name > datas[index+1] && (datas[index+1]= a , data=b);
    //         // data.name > datas[index+1] && ([data , datas[index+1]] = [datas[index+1] , data]);
    //     }
    // })
    const filterDatas = datas.filter(person => person.name.toLocaleLowerCase().startsWith(search))
    const showNames = filterDatas.map(person => <Name data={person} onClick={()=>setindexFav(...indexFav, person)}/>)
    // console.log(indexFav);
    return (
        <div className='namesListContainer'>
            {showNames}
        </div>
    )
}

NamesList.propTypes = {
    datas: PropTypes.array,
    search: PropTypes.string
}

export default NamesList;
