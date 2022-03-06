  import FileReader from 'filereader';
  import Document, { DocumentContext } from 'next/document'
  //-------------------------------------
  //VARIABLE & DECLARATIONS//
//   if (process.browser) {
  var file = [];
  var reader = new FileReader();
  var namebox = Document.getElementById('namebox');
  var extlab = document.getElementById('extlab');
  var myimg = document.getElementById('myImg');
  var uplbtn = document.getElementById('uplbtn');
  var selbtn = document.getElementById('selbtn');
  var downbtn = document.getElementById('downbtn');
  var uploader = document.getElementById('uploader');
  var input = document.createElement('input');
  const storage = getStorage();
  input.type = 'file';
  input.onchange = e =>{
      var files = e.target.files;
      var extention = GetFileExtension(files[0]);
      var name = GetFileName(files[0]);
      namebox.value = name;
      extlab.innerHTML = extention;
      reader.readAsDataURL(files[0]);
  }
  reader.onload = function(){
      myimg.src = reader.result;
  }
  //------SELECTION----------//
function selbtn2() {
      input.click();
  }
  function GetFileExtension(file) {
      var temp = file.name.split('.');
      var ext = temp.slice(temp.length-1,temp.length);
      return '.'+ext[0];
  }
  function GetFileName(file) {
      var temp = file.name.split('.');
      var fname = temp.slice(0,-1).join('.');
      return fname;
  }
//---------UOLOAD PROCESS-----------//
async function uploadprocess() {
    var imgtoupload = file;
    var imgname = name.value + extlab.innerHTML;
const metadata = {
contentType: imgtoupload.type
}
const storageref = sref(storage,"images/"+imgname);
const uploadtask = uploadBytesResumable(storageref, imgtoupload,metadata);
uploadtask.on('state_changed',(snapshot)=>{
    var process = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
     uploader.innerHTML = process;
});
}
// (error) =>{
//     alert("errror: image not uploaded");
// }

//});
//()=>{
 //   getDownloadURL(uploadtask.snapshot.ref).then(downloadURL)=>{
   //     console.log(downloadURL);
    //}

//}

uplbtn.onclick = uploadprocess;
/*  
  var fileButton = document.getElementById('fileButton');
  fileButton.addEventListener('change', function(e){
  var file = e.target.files[0];
  const storage = getStorage();

const storageRef = ref(storage, 'image/'+file.name);


const mountainImagesRef = ref(storage, 'image/'+file.name);

mountainsRef.name === mountainImagesRef.name;           // true
mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 
  //var storageRef = firebase.storage().ref('image/'+file.name);
  var task = storageRef.put(file);
  task.on('state_changed', function progress(snapshot) {
    var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    uploader.value = percentage;

  }, function error(err) {


  },function complete() {

  });
});  
const storage = getStorage();
const listRef = ref(storage, 'image/');
// Find all the prefixes and items.
listRef.listAll()
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
    });
    res.items.forEach((itemRef) => {
      // All the items under listRef.
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });
  */
