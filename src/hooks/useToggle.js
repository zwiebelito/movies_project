import {useState} from "react";

const useToggle = (defaultValue) => {
    const [value, setValue] = useState(false)

    const change = (defaultValue) => {
        setValue(value => !value)
        localStorage.setItem('theme', value ? 'dark' : 'light');
    }
    return {value, change, setValue}
}

export {useToggle}