import axios from 'axios'


export const js = 'js/-M57zgVEMyvOop9Bq0JT.json'
export const vue = 'vue/-M5S5HM6GC7yMPzk9q2Z.json'
export const react = 'react/-M5S7FwS1yExRide26OB.json'
export const angular = 'angular/-M5S6NXXg9lSzw5YJ_Wc.json'
export const css = 'css/-M5S7xsS5GKdwFtI7XVX.json'
export const html = 'html/-M5S1xEZHAbu5Uwp0QWP.json'
export const SQL = 'SQL/-M58JTcZCBvfHIyqOKQ7.json'
export const mongoDB = 'mongoDB/-M5S8PI9LBRBcglpIrhG.json'




export default axios.create({
    baseURL: 'https://store-16405.firebaseio.com/'
})