function genereateToken(){
const token = sessionStorage.getItem("token")

return token
}

export default genereateToken