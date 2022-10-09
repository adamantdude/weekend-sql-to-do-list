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
    console.log('in Add');
}

function onComplete() {

}

function onDelete() {

}