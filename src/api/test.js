export default function test(data){
    var xhr = new XMLHttpRequest()

    xhr.open('POST','/api/a/login')
    xhr.send(data)
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                console.log('cg')
            }else{
                console.log('sb')
            }
        }
    }
}