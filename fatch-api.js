class Request{

    get(url){
        return new Promise((resolve,reject)=>{
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
        })
    }
    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
        
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                }
              })
              .then(response => response.json()) // bize promis içinde response objesi döner biz o responsu yakalıyoruz
              .then(data =>resolve(data))
              .catch(err=> reject(err))
        })
    }
    put(url,data){
        return new Promise((resolve,reject)=>{
         fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          .then(response => response.json())
          .then(data=>resolve(data))
          .catch(err => reject(err))
        })
    }
    delete(url){
        return new Promise((resolve,reject) => {
            fetch("https://jsonplaceholder.typicode.com/albums/1",{
                method: 'DELETE'
            }).then(response= resolve("Veri Silme İşlemi Başarılı"))
            .catch(err =>reject("İşlem BAŞARISIZ"))
        }
    
    )}
}
const request =new Request()
// let albums //! Get İşlemi
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(data=> {
//     albums=data
//     console.log(albums)})
// .catch(err => console.log(err))

//! POST işlemi
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Triller"})
// .then(newAlbum=>console.log(newAlbum))
// .catch(err => console.log(err))

//! PUT işlemi idsi 1 olan veriyi değiştireceğiz
// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"deneme metin"})
// .then(album => console.log(album))
// .catch(err => console.log(err))

//! Silme İşlemi
request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.log(err))