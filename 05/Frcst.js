import Hh1 from "../comm/Hh1";
import data from "./dataFrcst.json";
import style from './Frcst.module.css';
import { useState, useEffect } from "react";
const Frcst = () => {
    const dt = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    const cn = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
    let dtcn = {};
    const [cnTag, setCnTag] = useState();
    // 날짜가 클릭이 됐을 때,
    const handleClick = (k) => {
        let temp = dtcn[k].split(','); // split = 배열이 나옴
        let city = [];
        let value = [];
        temp.map((item, idx) => {
                item = item.trim().split(' : ');
                city.push(item[0]);
                value.push(item[1]);
            }
        );
        let cvTag = city.map((item, idx) =>  
            <div key={`cvTag`+idx}>
                <span className={style.sp1}>{item}</span>
                {value[idx] === '낮음' 
                ? <span className={style.sp21}>{value[idx]}</span>
                : value[idx] === '보통'
                    ? <span className={style.sp22}>{value[idx]}</span>
                    : <span className={style.sp23}>{value[idx]}</span> }
            </div>
        );
        setCnTag(cvTag);      
    }
    
    dt.map((item, idx) =>
        dtcn[data[item]] = data[cn[idx]]
    );
    let dtcnKey = Object.keys(dtcn);
    let dtTag = dtcnKey.map((item, idx) =>
        <div
            key={"dtcn" + idx}
            className={style.dtcnKey}
            onClick={() => {handleClick(item)}}
        >
            {item}
        </div>
    );
    

    return (
        <main className="container">
            <article>
                <Hh1 title='미세먼지확인' />
                <div className="grid">
                    {dtTag}
                </div>
                <div className="grid">
                    {cnTag}
                </div>
            </article>
        </main>
    );
}
export default Frcst;
