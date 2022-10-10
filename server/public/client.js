$(main);

function main() {
    handleListeners();
    render();
}

function render() {
    $('#listBody').empty();
    $.ajax({
        url: '/list',
        method: 'GET'
    })
    .then((res) => {
        for(const task of res) {
            if(task.isComplete) {
                $('#listBody').append(`
                    <tr class="complete">
                        <td>${task.task}</td>
                        <td>DONE!</td>
                        <td></td>
                        <td>
                            <button class="deleteBtn" data-id="${task.id}">Delete</button>
                        </td>
                    </tr>
                `)
            }
            else {
                $('#listBody').append(`
                    <tr>
                        <td>${task.task}</td>
                        <td>Not Done</td>
                        <td>
                            <button class="completeBtn" data-id="${task.id}">Complete</button>
                        </td>
                        <td>
                            <button class="deleteBtn" data-id="${task.id}">Delete</button>
                        </td>
                    </tr>
                `)
            }
        }
    })
    .catch(err => {
        console.log('unable to get database info', err);
    })
}

function handleListeners() {
    $(document).on('click', '#addBtn', onAdd);
    $(document).on('click', '.completeBtn', onComplete);
    $(document).on('click', '.deleteBtn', onDelete);
}

function onAdd() {

    let textObj = {
        text: $('#taskText').val()
    }

    $('#taskText').val('');

    $.ajax({
        url: '/list',
        method: 'POST',
        data: textObj
    })
    .then(res => {
        render();
    })
    .catch(err => {
        console.log('unable to POST to database', err);
    })
}

function onComplete() {
    let listId = $(this).data('id');

    $.ajax({
        method: 'PUT',
        url: `/list/${listId}`
    })
    .then(res => {
        console.log('in onComplete');
        render();
    })
    .catch(err => {
        console.log('in onComplete error', err);
    })

}

function onDelete() {
    let listId = $(this).data('id');

    Swal.fire({
        icon: 'warning',
        showDenyButton: true,
        reverseButtons: true,
        focusDeny: true,
        title: 'Deleting Task',
        text: 'Are you sure you want to delete this task?',
    })
    .then(value => {
        if(value.isConfirmed) {
            $.ajax({
                url: `/list/${listId}`,
                method: 'DELETE'
            })
            .then(res => {
                Swal.fire('Task successfully deleted', '', 'success')
                render();
            })
            .catch(err => {
                console.log('in onDelete error', err);
            })
        }
        else {
            Swal.fire('Deletion cancelled', '', 'warning');
        }
    })
}