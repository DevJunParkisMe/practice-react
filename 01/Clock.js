import ClockImage from "./ClockImage";
import ClockText from "./ClockText";
import MyComN from "../03/MyComN";
const Clock = () => {
    return (
        <div className="App">
            <header className="App-header">
                <ClockImage />
                <ClockText />
                {/* <MyComN num="1000"/> */}
            </header>
        </div>
    );
}

export default Clock;