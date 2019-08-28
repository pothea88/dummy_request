const url = "http://dummy.restapiexample.com/api/v1/employees";
const syn = true;
const method = "GET";
const ajax = new XMLHttpRequest();
ajax.open(method, url, syn);
ajax.onload = () => {
    const data = JSON.parse(ajax.response);
    console.log(data);
    data.forEach(el => {
        if (el.id < 71835) {
            //distructurin
            let items = document.querySelector('#table');
            items.innerHTML += `
                <tr>
                    <td>${el.id}</td>
                    <td>${el.employee_name}</td>
                    <td>${el.employee_salary}</td>
                </tr>
        `
        }
    })
}
ajax.send();