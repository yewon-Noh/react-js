import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 의존성 배열이 없음 - 마운트 직후 호출, 이후 컴포넌트가 업데이트될 때마다 호출
    useEffect(() => {
        console.log("==================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    // 의존성 배열 있음 - 마운트 직후 호출, 이후 count 값이 변경될 때마다 호출
    useEffect(() => {
        // 정원이 가득찼는지 isFull state에 저장
        // count 값이 10 이상이 되면 더이상 useEffect Hook을 호출하지 않는 것을 확인할 수 있었음
        setIsFull(count >= MAX_CAPACITY);  
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;