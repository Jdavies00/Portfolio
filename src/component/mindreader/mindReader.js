import React, { useState, useEffect } from 'react'

function Mindreader() {

    const [instruction, setInstructions] = useState();
    const [header, setHeader] = useState();
    const [content, setContent] = useState();
    const [reset, setReset] = useState();
    const [go, setGo] = useState();
    const [state, setState] = useState(0);

    // var symbols = [" ! ", " @ ", " # ", " $ ", " % ", " ^ ", " & ", " * ", " ~ ", " + "]
    // var state = 1

    // var selected = null

    // var symbols = [" ! ", " @ ", " # ", " $ ", " % ", " ^ ", " & ", " * ", " ~ ", " + "]

    // function init() {
    //     renderState()
    // }

    // useEffect(() =>{
    //     var answer = symbols[Math.floor(Math.random() * 10)]
    //     var str = "";
    //     for (i = 0; i <= 99; i++) {
    //         if (i % 9) {
    //             var righterAnswer = symbols[Math.floor(Math.random() * 10)]
    //             console.log(i)
    //             str = str + i + "=" + righterAnswer + "<br>"
    //         }
    //         else {
    //             str = str + i + "=" + answer + "<br>"
    //             selected = answer
    //         }
    //     }
    //     str = str
    //     return str;
    // }) 


    function forward() {
        for (i = 0; i <= 6; i++) {
            setState(i)
        }}

        function reverse() {
            setState(1)
        }
        function renderState() {
            if (state == 1) {
                //         document.getElementById("content").innerHTML= 
                setContent("for a small fee, of course.")
                //         document.getElementById("instruction").innerHTML= "Click Go to continue"
                setInstructions("Click Go to continue")
                //         document.getElementById("reset").style.visibility = "hidden"
                setReset("hidden")
                //         document.getElementById("go").style.visibility = "initial"
                setGo()
            }
            else if (state == 2) {
                //         document.getElementById("content").innerHTML= "Pick a number 01 -99 "
                setContent("for a small fee, of course.")
                //         document.getElementById("instruction").innerHTML= "Once you have your number click next "
                setInstructions("Once you have your number click next ")
                //         document.getElementById("reset").style.visibility = "initial"
                setReset("hidden")
                //         document.getElementById("go").style.visibility = "initial"
                setGo()

            }
            else if (state == 3) {
                //         document.getElementById("content").innerHTML= "Add both digits together to get a new number "
                setContent("for a small fee, of course.")
                //         document.getElementById("instruction").innerHTML= "EX: 14 is 1 + 4 = 5  click next to continue "
                setInstructions("EX: 14 is 1 + 4 = 5  click next to continue ")
                //         document.getElementById("reset").style.visibility = "initial"
                setReset("hidden")
                //         document.getElementById("go").style.visibility = "initial"
                setGo()

            }
            else if (state == 4) {
                //         document.getElementById("content").innerHTML= "Subtract your new number from the original"
                setContent("for a small fee, of course.")
                //         document.getElementById("instruction").innerHTML= "EX: 14 - 5 =9 click next to continue "
                setInstructions("Click Go to continue")
                //         document.getElementById("reset").style.visibility = "initial"
                setReset("hidden")
                //         document.getElementById("go").style.visibility = "initial"
                setGo()

            }
            else if (state == 5) {
                //         var newRandom= randomCard()

                //         document.getElementById("content").innerHTML= newRandom;
                setHeadr("for a small fee, of course.")
                //         document.getElementById("instruction").innerHTML= "Find your New Number.  Note the symbol beside the number "
                setContent("Click Go to continue")
                //         document.getElementById("reset").style.visibility = "initial"
                setReset("hidden")
                //         document.getElementById("go").style.visibility = "initial"
                setGo()

            }
            else if (state == 6) {
                //         document.getElementById("content").innerHTML= " your symbol is : <br>" + selected 
                setHeadr("for a small fee, of course.")
                //         document.getElementById("instruction").innerHTML= "a bill will be mailed to you"
                setContent("Click Go to continue")
                //         document.getElementById("reset").style.visibility = "initial"
                setReset("hidden")
                //         document.getElementById("go").style.visibility = "initial"
                setGo()

            }
        }
        // renderState()

        return (
            <>
                <div className="mt-3"
                //  onload={init()}
                >
                    <div className="container ">
                        <div className="col- 3 text-center ">
                            <div className=" overflow-auto border rounded">
                                <h4 className="card-title text-center pt-3 ">{header}<i className="fab fa-readme"></i> I Can Read Your Mind
                        <i className="fab fa-readme"></i> </h4>
                                <hr />
                                <div>
                                    <p className="display-4  pt-6"> {content}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div className=" container ">
                        <div className=" text-center ">
                            <div className="container">
                                <div className=" text-center ">
                                    <button id="reset" type="button" className="btn btn-secondary btn-lg justify-content-center" onClick={reverse()}>Restart</button>
                                    <button id="go" type="button" className="btn btn-primary btn-lg" >Go</button>
                                </div>
                            </div>
                            <br />
                            <p className="text-center">{instruction}</p>
                            <br />
                            <button id="go" type="button" className="btn btn-primary btn-lg" onClick={forward()}> Go </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    export default Mindreader
