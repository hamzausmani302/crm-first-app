function showToast(toasttype , message){
    document.querySelector('#type_toast').trigger({type:toasttype, content: message,position:"top-right"});
}