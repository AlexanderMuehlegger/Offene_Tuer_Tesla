function newNotification(msg, status, reload){
    const notiContainer = document.querySelector(".notification-container")
    let notification = document.createElement("div")
    notification.classList.add("notification")

    let heading
    
    if (status.toLowerCase() == "failed" || status.toLowerCase() == "error" || status.toLowerCase() == "unauthorized") {
        heading = status
        notification.classList.add("failed")
    }
    else if (status.toLowerCase() == "success") {
        heading = "Success"
        notification.classList.add("success")
    }
    else if (status.toLowerCase() == "pending") {
        heading = "Pending"
         notification.classList.add("pending")    
    }
    else if (status.toLowerCase() == "coming_soon") {
        heading = "Coming Soon"
        notification.classList.add("coming_soon")
    }
    else
        return "Error"
    
    let h1 = document.createElement("h1")
    h1.innerHTML = heading
    let h2 = document.createElement("h2")
    h2.innerHTML = msg

    let underline = document.createElement("div")
    underline.classList.add("underline")

    notification.appendChild(h1)
    notification.appendChild(h2)
    notification.appendChild(underline)
    notiContainer.appendChild(notification)
    
    setTimeout(() => {
        notification.classList.add("active")
        
    },250)

    setTimeout(() => {
        notification.classList.remove("active")
        setTimeout(() => {
            notiContainer.removeChild(notification)
            if(reload)
                location.reload()
        }, 500)
    }, 3500)
}