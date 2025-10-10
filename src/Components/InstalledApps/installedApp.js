const getStoredApp = () => {
    const storedApp = localStorage.getItem("installed")
    if (storedApp) {
        const storedAppData = JSON.parse(storedApp)
        return storedAppData
    }
    else {
        return []
    }
}

const addToStore = (id) => {
    const storedAppData = getStoredApp()

    if (storedAppData.includes(id)) {
        alert('App already Installed')
    }
    else {
        storedAppData.push(id)
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("installed", data)
    }
}
export { addToStore, getStoredApp }