// fetch yapısı ajaxın yerine veri alma ve veri gönderme apisi
function getTextFile(){ // text dosyasından veri alma işlemi Eğer json verisi gelmesi gerekirse gerekli yerleri değiştir.
    fetch("example.txt")// fetch fonksiyonu bize bir response objesi döner
    .then(response => response.text())// example.txt dosyamızı text olarak getirir   
    .then(data=> console.log(data))
    .catch(err => console.log(err))
}
//getTextFile() çalıştırmak için aktif et
//-------------------------------------------------------------
//bu bölüm json verisi çekmek için
function getJsonFile(){
    fetch("example.json") // lokaldeki json dosyamızınyolunu verdik
    .then(response=> response.json()) //burada json fonksiyonunu kullanıyoruz
    .then(data=>console.log(JSON.stringify(data)))
    .catch(err=>console.log(err))
}
//çalıştırmak için aktif et
//getJsonFile()

//web apiden veri çekme
function getExternalAPI(){
    fetch("https://api.binance.com/api/v3/avgPrice?symbol=BNBUSDT")
    .then(response => response.json())
    .then(data => console.log(data.price))
    .catch(err => console.log(err))
}
getExternalAPI()