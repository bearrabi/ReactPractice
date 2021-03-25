import React, {useEffect, useRef, useState} from 'react';



const Counter: React.FC<{}> = () => {

    // ここでanyで型指定しても、次の<number>でnumber型で固定できる
    const initValue: any = 0;
    const [value, setValue] = useState<number>(initValue);

    const increment = () => {
        // setValue(value+1);
        setValue((prevState) => prevState+1);
    };

    const decrement = () => {
        setValue(value-1);
    };

    // イベントが発生した回数をインクリメントする処理
    const renderTimes = useRef<number>(0);
    useEffect(() => {
        renderTimes.current = renderTimes.current +1;
    });

    // nullの後ろの!はnon-null-assertion
    const ref = useRef<HTMLInputElement>(null!);
    const focusInput = () => {
        // const current = ref.current;
        // if(current != null) current.focus();

        // nullだったら呼び出さない
        // ref.current?.focus();
        ref.current.focus();
    };

    return (
        <div>
            <div>value: {value}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <div>This component was re-rendered {renderTimes.current} times!</div>
            <input ref={ref} type="text"/>
            <button onClick={focusInput}>Click Me!</button>
        </div>
    );
}

export default Counter;