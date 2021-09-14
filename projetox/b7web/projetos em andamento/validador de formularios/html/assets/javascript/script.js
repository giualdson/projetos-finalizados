let B7Validator = {
    handleSubmit:(event)=>{
        event.preventDefault();
    }
};
let form = document.querySelecector('.b7validator');
form.addEventListener('submit',B7Validator.handleSubmit);