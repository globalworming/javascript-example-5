const RunTest =  {
    test1() {
        setTimeout(() => {
            try {
                let foods = document.getElementsByClassName("foods")[0]
                let textContent = foods.textContent;
                if (textContent.includes("undefined")) {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected no 'undefined' food`
                    return
                }
                if (!textContent.includes("apple")) {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected at least one 'apple'`
                    return
                }
                if (!textContent.includes("banana")) {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected at least one 'banana' food`
                    return
                }
                document.getElementById("displayOnSuccess").hidden = false
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)
    },
    test2() {
        setTimeout(() => {
            try {
                if (document.getElementsByClassName("value-size")[0].textContent !== "big") {
                    document.getElementsByClassName("error")[0].textContent = `test failed, i'd like to have a "big" pizza`
                    return
                }
                if (document.getElementsByClassName("value-slices")[0].textContent !== "8") {
                    document.getElementsByClassName("error")[0].textContent = `test failed, i'd like to have a "8" slices`
                    return
                }

                document.getElementById("displayOnSuccess").hidden = false
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)
    },

    delayedShow() {
        setTimeout(() => {
            document.getElementById("displayOnSuccess").hidden = false
        }, 1000)
    }
}