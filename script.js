setTimeout(function() {
  document.getElementById("mesajKutusu").style.display = "block";
}, 2000);

setTimeout(function() {
  document.getElementById("mesajKutusu").style.display = "none";
}, 5000);

function aracSecildi(aracAdi) {
  alert("Seçtiğiniz araç: " + aracAdi + "\nDetaylı bilgi için lütfen iletişime geçin.");
  console.log("Seçilen araç: " + aracAdi);
}

function fiyatSorgula(aracAdi, fiyat) {
  var onay = confirm(aracAdi + " için fiyat: ₺" + fiyat.toLocaleString('tr-TR') + "\n\nDetaylı bilgi almak ister misiniz?");
  
  if (onay) {
    document.getElementById("iletisim").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("aciklama").value = aracAdi + " hakkında bilgi almak istiyorum.";
  }
}

function yakitSecildi(yakitTipi) {
  var pilller = document.querySelectorAll(".yakit-pill");
  for (var i = 0; i < pilller.length; i++) {
    pilller[i].style.backgroundColor = "#f0f0f0";
    pilller[i].style.color = "#333";
  }
  
  event.target.style.backgroundColor = "#f4c542";
  event.target.style.color = "white";
  
  console.log("Seçilen yakıt tipi: " + yakitTipi);
}

function formGonderildi(event) {
  event.preventDefault();
  
  var ad = document.getElementById("ad").value;
  var email = document.getElementById("mail").value;
  var telefon = document.getElementById("telefon").value;
  var aciklama = document.getElementById("aciklama").value;
  var il = document.getElementById("il").value;
  
  alert("Teşekkürler " + ad + "!\n\nMesajınız başarıyla gönderildi.\nEn kısa sürede size dönüş yapacağız.");
  
  document.getElementById("ad").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("telefon").value = "";
  document.getElementById("aciklama").value = "";
  document.getElementById("il").value = "";
  
  var pilller = document.querySelectorAll(".yakit-pill");
  for (var i = 0; i < pilller.length; i++) {
    pilller[i].style.backgroundColor = "#f0f0f0";
    pilller[i].style.color = "#333";
  }
  
  console.log("Form gönderildi:", { ad: ad, email: email, telefon: telefon, il: il });
}

window.onscroll = function() {
  if (window.pageYOffset > 100) {
  }
};







