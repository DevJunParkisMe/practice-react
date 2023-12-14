import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ViewTest = () => {
    const [boardList, setBoardList] = useState([])
    const [listTag, setListTag] = useState()
    let tempList = []
    useEffect(() => {
        axios.get('/api/getBoardList')
        .then(response => {
            setBoardList(response.data)
            response.data.map((item, idx)=> {
                const tempTag = 
                    <tr key={`item` + idx}>
                        <td>{item.seq}</td>
                        <td>{item.title}</td>
                        <td>{item.content}</td>
                        <td>{item.member.name}</td>
                        <td>{item.cnt}</td>
                    </tr>
            
                tempList.push(tempTag)
            })
        })
        .catch(error => console.log(error))

        console.log(tempList)
        setListTag(tempList)
    }, []);
    return (
        <div>
            백엔드에서 가져온 데이터입니다 :
            <table>
            {listTag}
            </table>
        </div>
    );
}

export default ViewTest
