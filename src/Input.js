import { useState } from "react"


export const Input = () => {
    const [inputList, setInputList] = useState('')
    const [items, setItems] = useState([])
    const handleClick = () => {

        console.log(inputList);
        setItems([...items, inputList])
        setInputList('')
    }
    const onChange = (event) => {
        setInputList(event.target.value)
    }
    const onDelete = (index) => {
        const newData = items.filter((item, id) => {
            return index !== id
        })
        setItems(newData)
        // setItems()
    }

    return (
        <>
            <input
                type={"text"}
                placeholder={"enter text..."}
                value={inputList}
                onChange={onChange} />
            <button onClick={handleClick}>+</button>

            <ul>
                {/* <li>{items}</li> */}
                {
                    items.map((item, index) => {
                        return (
                            <>
                                <li key={index}>{item}</li>
                                <button onClick={() => onDelete(index)}>remove</button>
                            </>
                        )

                    })}
            </ul>
        </>
    )
}


