<template>
  <div>
    Welcome to your dashboard<br>
    Here we will have your secured data encoded.
  </div>
</template>
<script>

export default {
  data() {
    return {
      data: [],
    }
  },
  mounted(){
    // Here I was going to use the user's password to encrypt and decrypt the data saved, I am using CryptoJS for encryption and decryption.
    if (localStorage.getItem('currentUser')) {
      let password = JSON.parse(localStorage.getItem('currentUser')).password;
      const encryptedText = this.CryptoJS.AES.encrypt('Secured Data', password).toString()
      const decryptedText = this.CryptoJS.AES.decrypt(encryptedText, password).toString(this.CryptoJS.enc.Utf8)
      console.log(decryptedText)
    }
  }
}
</script>
