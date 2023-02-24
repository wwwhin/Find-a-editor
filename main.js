  var sure = document.getElementById("sure");
  var submitBtn = document.getElementById("submit");
  sure.style.display="none";
  submitBtn.style.display="none";
  function submit(){
    sure.style.display="";
    submitBtn.style.display="";
  }
  function whatsapp(){
    sure.style.display="none";
    submitBtn.style.display="none"
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    
      var url = "https://wa.me/8627033174?text=" +
       "Hello sir , I am " + name + ", I need a editor" + "%0a" +
       "My required details -" + "%0a" + 
       "Name = " + name + "%0a" + 
       "Mobile No. = " + number + "%0a" +
       "Age - " + age + "%0a" +
       "Gender = " + gender;
      
      window.open(url,"_blank").focus();
    }