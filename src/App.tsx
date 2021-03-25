import React from 'react';
// import Counter from './Counter';
import CounterWithReducer from "./CounterWithReducer";
interface AppProps{
    message?: string;
}

const App: React.FunctionComponent<AppProps> = ({message}) => {
    // return <div>{message}</div>;
    return (
        <div>
            {/*<Counter />*/}
            <CounterWithReducer />
        </div>
    )
};

App.defaultProps = {
    message: 'Hello, defaultProps!',
    // ここではAppPropsで定義したものしか入れることはできない
    // description: 'This is App Component.'
};

export default App;
