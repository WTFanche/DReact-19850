const prods = [
    {id: 1, name: "Toallita", price: 300},
    {id: 2, name: "Protector diario", price: 240},
    {id: 3, name: "Copa menstrual", price: 650}
]

export const getFetch = new Promise((resolve, reject)=>{
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(prods)
        }, 2000);
        
    } else {
        reject("400 - not found")
    }
}
)


export const gFetchB = new Promise((resolve, reject)=>{
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(prods)                    
        }, 2000);
    } else {
        reject('400 - not found')        
    }
})
