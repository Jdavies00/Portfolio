import React, { useState } from 'react';
// import Card from 'react-bootstrap/Card';

import '/Users/jamesdavies/Sites/Portfolio /portfolio/src/css/calculator.css'
function Calculator() {

    const [numStr, setNumStr] = useState("0");
    const [display, setDisplay] = useState("0");
    const [operator, setOperator] = useState("");
    const [firstNum, setFirstNum] = useState("0");
    const [secondNum, setSecondNum] = useState("0");



    let buttons = [
        "C", "+/-", "%", "/",
        "7", "8", "9", "x",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", "", ".", "="
    ]

    function calculate(special) {

        let setMath = operator === "x" ? firstNum * secondNum :
                      operator === "+" ? +firstNum + +secondNum :
                      operator === "-" ? firstNum - secondNum :
                      operator === "/" ? firstNum / secondNum :
                      special === "%" ? firstNum / 100 :
                      special === "+/-" ? firstNum * -1 : null

        if (setMath.toString() === "Infinity" || setMath.toString() === "NaN") {
            setDisplay("Error")
            setFirstNum("Error")
            setSecondNum("0")
            
        } else {
            setNumStr("0")
            setDisplay(setMath.toString())
            setFirstNum(setMath.toString())
            setSecondNum("0")
        }

    }

    function pushButton(item) {
        console.log("click")


        let operators = "+x/-=";
        let arr = []

        for (let i = 0; i < numStr.length; i++) {
            for (let j = 0; j < operators.length; j++) {
                if (numStr[i] === operators[j]) {
                    arr = numStr.split(operators[j])
                    setFirstNum(arr[0].toString())
                    setOperator(operators[j])
                    setSecondNum(arr[1].toString())
                }
            }
        }

        if (item === "%" || item === "+/-") {
            setOperator("")
            calculate(item)

        } else if ((item === "=" || item === "+" || item === "-" || item === "x" || item === "/") && firstNum === "0") {
            return

        } else if (item === "." && numStr.includes(".")) {
            return

        } else if (item === "." && numStr === "0") {
                setDisplay("0.")
                setNumStr("0.")
                setFirstNum("0.")
                setSecondNum("0")

        } else if (item === "=" && secondNum === "0") {
                setDisplay(firstNum)
        

        } else if (item === "C") {
            setNumStr("0")
            setDisplay("0");
            setFirstNum("0");
            setSecondNum("0");
            setOperator("");

        } else if (!(item === "=" ||
            item === "+" ||
            item === "-" ||
            item === "x" ||
            item === "/") &&
            !operator) {
            if (numStr === "0") {
                setNumStr(item)
                setDisplay(item)
                setFirstNum(item)
            } else {
                setNumStr(numStr.concat(item))
                setDisplay(display.concat(item))
                setFirstNum(numStr.concat(item))
            }

        } else if (!(item === "=" || item === "+" || item === "-" || item === "x" || item === "/") && operator) {
            if (numStr === "0") {
                setNumStr(item)
                setDisplay(item)
                setSecondNum(item)
            } else {
                setNumStr(numStr.concat(item))
                setDisplay(numStr.concat(item))
                setSecondNum(numStr.concat(item))
            }


        } else if ((item === "=" || item === "+" || item === "-" || item === "x" || item === "/") && !operator) {

            setNumStr("0")
            setOperator(item)


        } else if ((item === "=" || item === "+" || item === "-" || item === "x" || item === "/") && operator) {
            if (item === "+" || item === "-" || item === "x" || item === "/") {
                setOperator(item)
                setNumStr("0")
                setFirstNum(secondNum)
                calculate()
            } else {
                setOperator("")
                setNumStr("0")
                setFirstNum(secondNum)
                calculate()
            }

        }
    }


    let board = buttons.map((item, index) => {
        return (
            <button id="buttons" key={index} className={item === "+" || item === "-" || item === "=" || item === "/" || item === "x" ? "btn border border-dark bg-warning rounded-0" : item === "%" || item === "C" || item === "+/-" ? "btn border border-secondary bg-dark rounded-0" : "btn border border-dark bg-secondary rounded-0"}>
                <h3 className="mt-3 text-white" onClick={() => pushButton(item)}>{item}</h3>
            </button>
        )
    })

    return (   
    
        <div id = "calculator" className=" mb-5 pb-5">
            <div className="row">
                <div className="col-md-4 text-center">
                    <div className="row">
                        <div id="display" className="col-12 text-right bg-dark">
                            <h1 className="display-3 mb-0 text-white">{display}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div id="buttonRow" className="col-12">
                            <div className="row">
                                {board}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;
