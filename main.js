window.addEventListener("load", () => {
    // All resources finished loading!

    console.log("loading_test")

    // header
    const form = document.querySelector('#task-form');
    const input = document.querySelector('#task-input');
    
    // tasks_list
    const list_el = document.querySelector('#tasks');

    console.log(input);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert('Please Input The Task')
            return;
        } else {
            console.log('Success');

            const task_el = document.createElement('div');
            task_el.classList.add('task');

            const task_content_el = document.createElement('div');
            task_content_el.classList.add('content');
            task_content_el.innerText = task;

            task_el.appendChild(task_content_el);

            // 按鈕
            const task_actions_el = document.createElement('div');
            task_actions_el.classList.add('actions');

            const task_edit_el = document.createElement('button');
            task_edit_el.classList.add('edit');
            task_edit_el.innerHTML = 'xxx';

            const task_delete_el = document.createElement('button');
            task_delete_el.classList.add('delete');
            task_delete_el.innerHTML = 'Delete';


            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);
            task_el.appendChild(task_actions_el);
            

            
            list_el.appendChild(task_el);
        }

        
    })
    
})