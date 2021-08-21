import React, {useState, useEffect} from 'react'

const Cleanup: React.FC = () => {
    const [currentNum, setCurrentNum] = useState(0);
    const incrementNum = () => {
        console.log("Mouse event invoked!");
        setCurrentNum((preNumber) => preNumber + 1);
    }
    useEffect(() => {
        console.log("useEffect in CleanUp invoked!")
        window.addEventListener("mousedown", incrementNum)
        return () => {
            console.log("CleanedUp invoked!");
            window.removeEventListener("mousedown", incrementNum) // 解除
        };
    },[])
    return (
        <div>
            {currentNum}
        </div>
    )
}

export default Cleanup
