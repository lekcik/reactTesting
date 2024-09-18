import { useState } from "react";

function List() {
    const [list, listChange] = useState(['halo']);

    function listAddElem() {
        const input = document.querySelector('.js-input').value;

        if (input.trim()) {
            listChange((l) => [...l, input]);
            document.querySelector('.js-input').value = '';
        }
    }

    function listRemoveItem(index) {
        listChange((l) => l.filter((_, i) => i !== index));
    }

    return (
        <section className="list">
            <ul>
                {list.map((element, index) => (
                    <li key={index} onClick={() => listRemoveItem(index)}>
                        {element}
                    </li>
                ))}
            </ul>
            <input className="js-input" />
            <button onClick={listAddElem}>Add</button>
        </section>
    );
}

export default List;
