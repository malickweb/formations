// Store
import { CounterStore } from '@/store/counterStore';

export function Counter() {
    const incrementCounter = CounterStore.use.increment();
    const decrementCounter = CounterStore.use.decrement();
    const counter = CounterStore.use.count();
    return (
        <>
            <div>
                <ul className={`inline-flex items-center border rounded-r-sm rounded-l-sm`}>
                    {counter > 1 && (
                        <li
                            className={`m-1 cursor-pointer`}
                            onClick={() => {
                                decrementCounter();
                            }}
                        >
                            -
                        </li>
                    )}
                    <li className={`${counter > 1 && `border-l`} border-r p-1.5`}>{counter}</li>
                    <li
                        className={`m-1 cursor-pointer`}
                        onClick={() => {
                            incrementCounter();
                        }}
                    >
                        +
                    </li>
                </ul>
            </div>
        </>
    );
}
