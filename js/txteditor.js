let sm = document.querySelectorAll(".sm");
sm.forEach(e => {
    let val;
    let ele = e.getAttribute("id");
    e.addEventListener('click', () => {
        if (e.getAttribute("class") == "active1") {
            document.execCommand(`${ele}`, false)
            if (ele.includes("List")) {
                document.execCommand(`outdent`, true)
            }

            e.setAttribute("class", "nactive1")
        } else {
            if (ele.includes("insert")) {
                document.execCommand(`indent`, true)
            }
            if(ele.includes("createlink")){
                val=prompt("Enter Link to add");
            }
            document.execCommand(`${ele}`, true,val)
            e.setAttribute("class", "active1");
        }
    })
})