

form.onsubmit = async e =>                                                                                                                                        {
    e.preventDefault();

    const body = {
        name: e.target[0].value,
        assistant: e.target[1].value,
        age: e.target[2].value,
        date: e.target[3].value,
        time: e.target[4].value,
        comment:e.target[5].value,
    }


    submit(body)


    for(let i = 0; i < e.target.length; i++) {
        e.target[i].value = null;
    }
}

const submit = async body => {

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://127.0.0.1:3000/newVisitor";

    const res = await fetch(url,  {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)


    });


    const data = await res.json();
    createTableRows([data.visitors]);

    return data;
}



const init = async () => {

    const res = await fetch('http://127.0.0.1:3000/viewAllVisitors');
    const data = await res.json();

    createTableRows(data.visitors);
}

const createTableRows = visitors => {
    const tbody = document.getElementById('visitors');

    for (let i = 0; i < visitors.length; i++) {
        let row = tableColums(visitors[i]);

        
        row.setAttribute('id', `visitor-${visitors[i].id}`);
        tbody.prepend(row);
    }
}

const tableColums = visitor => {


    let row = document.createElement('tr');

    let tdID = document.createElement('td');
    tdID.innerHTML = visitor.id;
    row.appendChild(tdID);

    let tdName = document.createElement('td');
    tdName.innerHTML = visitor.visitor_name;
    row.appendChild(tdName)


    let tdAge = document.createElement('td');
    tdAge.innerHTML = visitor.visitors_age;
    row.appendChild(tdAge);


    let tdDate = document.createElement('td');
    tdDate.innerHTML = new Date(visitor.date_of_visit).toLocaleDateString();
    row.appendChild(tdDate);


    let tdTime = document.createElement('td');
    tdTime.innerHTML = visitor.time_of_visit;
    row.appendChild(tdTime);


    let tdAssistant = document.createElement('td');
    tdAssistant.innerHTML = visitor.assistant_name;
    row.appendChild(tdAssistant);


    let tdComments = document.createElement('td');
    tdComments.innerHTML = visitor.comments;
    row.appendChild(tdComments);


    const button = deleteButton(visitor.id);
    row.appendChild(button);

    return row;
}


const deleteButton = id => {
    let td = document.createElement('td');


    td.innerHTML = `<button onclick="deleteTableRow(${id})">DEL</button>`;

    return td;
}


const deleteTableRow = async id => {
    const tbody = document.getElementById('visitors');
    const row = document.getElementById(`visitor-${id}`);


    const res = await fetch(`http://127.0.0.1:3000/deleteVisitor/${id}`, {
        method: 'delete'
    });

    const data = await res.json();

    if (data.status == 'ok') {

        tbody.removeChild(row);
    }
}




init();

module.exports = {submitForm,
    deleteTableRow,
    init}



















