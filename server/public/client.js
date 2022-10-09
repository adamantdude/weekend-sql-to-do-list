$(main);

function main() {
    handleListeners();
    render();
}

function render() {

}

function handleListeners() {
    $(document).on('click', '#addBtn', onAdd);
    $(document).on('click', '.completeBtn', onComplete);
    $(document).on('click', '.deleteBtn', onDelete);
}

function onAdd() {
    
}

function onComplete() {

}

function onDelete() {

}