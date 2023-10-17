import MyDiv11 from "./MyDiv11";

// const MyDiv1 = (probs) => {
const MyDiv1 = ({num}) => {
    return (
        <>
            <div>MyDiv1, n = {num}</div>
            <MyDiv11 num={num} />
        </>
    );
}

export default MyDiv1;