import React, { useState } from 'react'

export default function TextForm(props) {
    // Text convert into upper case
    const toUpper = () => {
        if (text === '') {
            props.showAlert("Text has been not present", 'warning')
        } else {
            setText(text.toUpperCase())
            props.showAlert("Text has been Converted in Uppercase", 'success')
        }
    }

    // Text convert into lower case
    function toSmall() {
        if (text === '') {
            props.showAlert("Text has been not present", 'warning')
        } else {
            setText(text.toLowerCase())
            props.showAlert("Text has been Converted in Lowercase", 'success')
        }
    }

    // Change Handler on textarea
    function onChangeHandler(event) {
        // console.log('On Change')
        setText(event.target.value)
    }

    // Text has been Reverse
    function toReverse() {
        if (text === '') {
            props.showAlert("Text has been not present", 'warning')
        } else {
            let t = ''
            for (let i = text.length - 1; i >= 0; i--) {
                t += text[i];
            }
            setText(t)
            props.showAlert("Text has been Reverse", 'success')
        }
    }

    // Text clear from textarea
    function toClear() {
        if (text === '') {
            props.showAlert("Text has been not present Clear", 'warning')
        }
        else {
            setText('');
            props.showAlert("Text has been Clear", 'success')
        }
    }

    // Text speak out
    function toSeakOut() {
        if (text === '') {
            props.showAlert("Text has been not present", 'warning')
        } else {
            let speech = new SpeechSynthesisUtterance(text)
            window.speechSynthesis.speak(speech)
            props.showAlert("Text has been Seak Out", 'success')
        }
    }

    // Email find from Text
    function toEmailFind() {
        if (text === '') {
            props.showAlert("Text has been not present", 'warning')
        } else {
            let data = text.split(/\s+/)//angular expression which \n and white spaces
            let ids = "Email Ids : \n"
            data = Array.from(data)
            let check = false
            for (let i = 0; i < data.length; i++) {
                if (data[i].endsWith("@gmail.com") || data[i].endsWith("@GMAIL.COM")) {
                    ids += data[i] + "\n";
                    check = true
                }
            }
            document.getElementById("email").innerText = ids
            if (check) {
                props.showAlert("Email has been find in Text", 'success')
            }
            else {
                props.showAlert("Email has been not exits in Text", 'success')
            }
        }
    }

    // Number find from text
    function toFindNumber() {
        if (text === '') {
            props.showAlert("Text has been not present", 'warning')
        } else {
            let numData = text.split(/\s+/)//angular expression which \n and white spaces
            let nums = "Number's : \n"
            numData = Array.from(numData)
            let check = false
            for (let i = 0; i < numData.length; i++) {
                if (parseFloat(numData[i])) {
                    nums += numData[i] + "\n"
                    check = true
                }
            }
            document.getElementById("number").innerText = nums
            if (check) {
                props.showAlert("Number has been find in Text", 'success')
            }
            else {
                props.showAlert("Number has been not exits in Text", 'success')
            }
        }
    }

    //Panctuation Remove from Text
    function toPanctuation() {
        if (text === '') {
            props.showAlert("Text has been not present", 'warning')
        } else {
            let str = `!@#$%^&*()_+-={}|[]''\\":;'<>?,./~`
            let newText = ""
            for (let i in text) {
                if (!str.includes(text[i])) {
                    newText += text[i]
                }
            }
            setText(newText)
            props.showAlert("Punctuation has been Remove from Text", 'success')
        }
    }

    // Text convert in word form
    function toWrodsArray() {
        if (text === '') {
            props.showAlert("Text has been not present", 'warning')
        } else {
            let data = Array.from(text.split(" "))
            document.getElementById("words").innerText = data
            props.showAlert("Text has been Converted in Words Array", 'success')
        }
    }

    // Text store in localStorage
    function toLocalStorage() {
        if (text === '') {
            props.showAlert("Text has been not present", 'warning')
        } else {
            let time = new Date()
            localStorage.setItem(time.getTime(), text)
            // alert("Successfully store data")
            props.showAlert("Text has been Store in LocalStorage", 'success')
        }
    }

    // Check History from localStorage
    function toHistory() {
        let str = ''
        for (let i = 0; i < localStorage.length; i++) {
            str += localStorage.getItem(localStorage.key(i)) + "\n "
        }
        document.getElementById("words").innerText = str
        props.showAlert("History has been checked", 'success')
    }

    // Clear LocalStorage
    function toClearLocalStorage() {
        localStorage.clear()
        props.showAlert("Data has been Delete from LocalStorage", 'success')
    }

    // Text has been Bold
    function toBold() {
        if (text === '') {
            props.showAlert("Text has been not present", 'warning')
        } else {
            document.getElementById("bold").innerHTML = `<b>${text}</b>`
            props.showAlert("Text has been Bold", 'success')
        }
    }

    // Text has been Iterative
    function toIterative() {
        if (text === '') {
            props.showAlert("Text has been not present", 'warning')
        } else {
            document.getElementById("bold").innerHTML = `<i>${text}</i>`
            props.showAlert("Text has been Iterative", 'success')
        }
    }

    // Text has been Bold and Iterative
    function toIterativeBold() {
        if (text === '') {
            props.showAlert("Text has been not present", 'warning')
        } else {
            document.getElementById("bold").innerHTML = `<b><i>${text}</i></b>`
            props.showAlert("Text has been Bold and Iterative", 'success')
        }
    }

    // Text has been Copied
    function toHandleCopy() {
        // let text = document.getElementById("text")
        if (text !== '') {
            // text.select() //show text copied
            navigator.clipboard.writeText(text) // text copy
            // document.getSelection().removeAllRanges()//for remove hghlight text
            props.showAlert("Text has been cpoied", 'success')
        }
        else {
            props.showAlert("Text has been not present cpoied", 'warning')
        }
    }

    //Extra Space Remove from Text
    function toRemoveExtraSpace() {
        if (text === '') {
            props.showAlert("Text has been not present", 'warning')
        } else {
            let newText = text.split(/[ ]+/)
            setText(newText.join(" "))
            props.showAlert("Extra Space has been remove from Text", 'success')
        }
    }

    // Text has been paste
    async function toPasteText() {
        if (await navigator.clipboard.readText() === ``) {
            props.showAlert("Text has been not exits pasted", 'warning')
        } else {
            setText(await navigator.clipboard.readText())
            props.showAlert("Text has been pasted", 'success')
        }
    }

    // UseState 1
    const [text, setText] = useState("")

    // UseState 2
    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'white',
    //     color: 'black',
    //     transition: '1s'
    // })

    // UseState 3
    // const [btnMode, setBtnMode] = useState("Enable Dark Mode")

    // const toggleDarkMode = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             backgroundColor: 'black',
    //             color: 'white',
    //             transition: '1s'
    //         })
    //         setBtnMode("Enable Dark Mode")
    //     } else {
    //         setMyStyle({
    //             backgroundColor: 'white',
    //             color: 'black',
    //             transition: '1s'
    //         })
    //         setBtnMode("Enable Light Mode")
    //     }
    // }


    // text = "bbdnbgjbe"//->Wrong way to update the text var
    // setText("bjkbdjbv")//correct way to upadte the text var
    return (
        <div >
            <div className="container" style={{ color: props.mode === 'dark' ? 'light' : '#343a40' }}>
                <h1 className={`heading text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={{ transition: '1s',fontSize:'33px' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control my-3 text text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', transition: '1s',resize:'none' }} value={text} onChange={onChangeHandler} id="text" rows="5"></textarea>
                </div>
                <div className="container">
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toUpper}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toSmall}>Convert to Smallcase</button>
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toClear}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toHandleCopy}>Text Copy</button>
                    <button className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toPasteText}>Text Paste</button>
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toReverse}>Convert to Reverse Order</button>
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toSeakOut}>Read Out Text</button>
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toEmailFind}>Email Finder</button>
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toFindNumber}>Number Finder</button>
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toPanctuation}>Punctuation Remover</button>
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toWrodsArray}>Convert Words Array</button>
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toLocalStorage}>Store Data</button>
                    <button className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toHistory}>Check History</button>
                    <button className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toClearLocalStorage}>Clear History</button>
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toBold}>Text Bold</button>
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toIterative}>Text Iterative</button>
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toIterativeBold}>Text Iterative & Bold</button>
                    <button disabled={text.length === 0} className="btn btn-cls cls btn-primary mb-3 mx-3 mt-3" onClick={toRemoveExtraSpace}>Remove Extra Space Remove</button>
                </div>
            </div>
            <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={{ transition: '1s' }}>
                <h2>Your Text Summary</h2>
                <p>{text.length} Characters <br /> {text.replaceAll('\n',' ').split(' ').filter((element)=>{return element.length !== 0}).length} Words <br />{text.split("\n").filter((element)=>{return element.length !== 0}).length} Lines</p>
                {/* <p>{0.008 * (text.replaceAll('\n',' ').split(' ').filter((element)=>{return element.length !== 0}).length)} Minutes Read</p> */}
                <p>{0.008 * (text.split(/\s+/).filter((element)=>{return element.length !== 0}).length)} Minutes Read</p>
                <p id="email"></p>
                <p id="number"></p>
                <p id="bold"></p>
                <textarea disabled className={`form-control my-3 text text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', transition: '1s', resize:'none' }} rows="4" id='words'></textarea>
                <h3>Preview</h3>
                <p className='m-3'>{text === '' ? "Enter any where text in here text box" : text}</p>
            </div>
        </div>
    )
}
