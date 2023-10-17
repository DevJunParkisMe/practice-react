import style from './Lotto.module.css';

const LottoNums = ({nums}) => {
    console.log(nums);

    const numsTag = nums.map((item, idx) => {
        // let temp;
        // // if (item < 10) {
        // //     temp = <div key={'ns' + idx} className={style.lottoNum + " " + style.lottoNum1}>{item}</div>
        // // }
        // // else if (item < 20) temp = <div key={'ns' + idx} className={style.lottoNum + " " + style.lottoNum2}>{item}</div>
        // // else if (item < 30) temp = <div key={'ns' + idx} className={style.lottoNum + " " + style.lottoNum3}>{item}</div>
        // // else if (item < 40) temp = <div key={'ns' + idx} className={style.lottoNum + " " + style.lottoNum4}>{item}</div>
        // // else temp = <div key={'ns' + idx} className={style.lottoNum + " " + style.lottoNum5}>{item}</div>
       
        // let n = Math.floor(item / 10);
        // let ncss = style[`lottoNum${n+1}`];
        // switch (n) {
        //     case 0: 
        //         temp = <div key={'ns' + idx} className={style.lottoNum + " " + ncss}>{item}</div>
        //         break;
        //     case 1: 
        //         temp = <div key={'ns' + idx} className={style.lottoNum + " " + ncss}>{item}</div>
        //         break;
        //     case 2: 
        //         temp = <div key={'ns' + idx} className={style.lottoNum + " " + ncss}>{item}</div>
        //         break;
        //     case 3: 
        //         temp = <div key={'ns' + idx} className={style.lottoNum + " " + ncss}>{item}</div>
        //         break;
        //     case 4: 
        //         temp = <div key={'ns' + idx} className={style.lottoNum + " " + ncss}>{item}</div>
        //         break;
        // }
        // return temp
        
        return (idx === (nums.length - 1) ? <div> + </div> : <div key={'ns' + idx} className={style.lottoNum + " " + style[`lottoNum${Math.floor(item / 10)+1}`]}>{item}</div>);
    });

    let n = Math.floor(nums.at(-1) / 10) + 1;
    return (
        <div className={style.lottoBox}>
            {numsTag}
        </div>
    )
}

export default LottoNums;
