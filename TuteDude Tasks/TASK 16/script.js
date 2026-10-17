const arr = [
    {id: 1, name: "Pramod", marks: 183, class: "10th", address: "Visakhapatnam"},
    {id: 2, name: "Jyoshendra", marks: 192, class: "10th", address: "Hyderabad"},
    {id: 3, name: "Saatvik", marks: 112, class: "9th", address: "Warangal"},
    {id: 4, name: "Rahul", marks: 145, class: "10th", address: "Vijayawada"},
    {id: 5, name: "Rohit", marks: 176, class: "9th", address: "Guntur"},
    {id: 6, name: "Rakesh", marks: 128, class: "10th", address: "Nellore"},
    {id: 7, name: "Akhil", marks: 165, class: "9th", address: "Kakinada"},
    {id: 8, name: "Arjun", marks: 189, class: "10th", address: "Rajahmundry"},
    {id: 9, name: "Anirudh", marks: 154, class: "8th", address: "Hyderabad"},
    {id: 10, name: "Vikram", marks: 172, class: "10th", address: "Warangal"},
    {id: 11, name: "Varun", marks: 138, class: "9th", address: "Karimnagar"},
    {id: 12, name: "Vishal", marks: 181, class: "10th", address: "Vijayawada"},
    {id: 13, name: "Kiran", marks: 156, class: "8th", address: "Guntur"},
    {id: 14, name: "Karthik", marks: 194, class: "10th", address: "Visakhapatnam"},
    {id: 15, name: "Krishna", marks: 147, class: "9th", address: "Nellore"},
    {id: 16, name: "Sanjay", marks: 133, class: "8th", address: "Kakinada"},
    {id: 17, name: "Sandeep", marks: 178, class: "10th", address: "Hyderabad"},
    {id: 18, name: "Sachin", marks: 161, class: "9th", address: "Warangal"},
    {id: 19, name: "Manoj", marks: 142, class: "8th", address: "Rajahmundry"},
    {id: 20, name: "Mahesh", marks: 187, class: "10th", address: "Vijayawada"},
    {id: 21, name: "Mohan", marks: 119, class: "9th", address: "Karimnagar"},
    {id: 22, name: "Deepak", marks: 155, class: "8th", address: "Nellore"},
    {id: 23, name: "Dinesh", marks: 173, class: "10th", address: "Guntur"},
    {id: 24, name: "Dhanush", marks: 149, class: "9th", address: "Visakhapatnam"},
    {id: 25, name: "Naveen", marks: 182, class: "10th", address: "Hyderabad"},
    {id: 26, name: "Nikhil", marks: 136, class: "8th", address: "Warangal"},
    {id: 27, name: "Nitin", marks: 168, class: "9th", address: "Vijayawada"},
    {id: 28, name: "Pavan", marks: 191, class: "10th", address: "Kakinada"},
    {id: 29, name: "Prakash", marks: 126, class: "8th", address: "Nellore"},
    {id: 30, name: "Piyush", marks: 159, class: "9th", address: "Rajahmundry"},
    {id: 31, name: "Aditya", marks: 177, class: "10th", address: "Guntur"},
    {id: 32, name: "Ashwin", marks: 143, class: "8th", address: "Hyderabad"},
    {id: 33, name: "Abhishek", marks: 188, class: "10th", address: "Visakhapatnam"},
    {id: 34, name: "Ravi", marks: 152, class: "9th", address: "Warangal"},
    {id: 35, name: "Rajesh", marks: 164, class: "8th", address: "Vijayawada"},
    {id: 36, name: "Ramesh", marks: 131, class: "9th", address: "Karimnagar"},
    {id: 37, name: "Suresh", marks: 175, class: "10th", address: "Nellore"},
    {id: 38, name: "Sunil", marks: 140, class: "8th", address: "Kakinada"},
    {id: 39, name: "Surya", marks: 193, class: "10th", address: "Hyderabad"},
    {id: 40, name: "Vijay", marks: 157, class: "9th", address: "Guntur"},
    {id: 41, name: "Vivek", marks: 169, class: "10th", address: "Rajahmundry"},
    {id: 42, name: "Vamsi", marks: 121, class: "8th", address: "Visakhapatnam"},
    {id: 43, name: "Harish", marks: 184, class: "10th", address: "Warangal"},
    {id: 44, name: "Hemanth", marks: 146, class: "9th", address: "Vijayawada"},
    {id: 45, name: "Hari", marks: 158, class: "8th", address: "Nellore"},
    {id: 46, name: "Girish", marks: 135, class: "9th", address: "Kakinada"},
    {id: 47, name: "Gautham", marks: 180, class: "10th", address: "Hyderabad"},
    {id: 48, name: "Ganesh", marks: 153, class: "8th", address: "Guntur"},
    {id: 49, name: "Lokesh", marks: 167, class: "9th", address: "Rajahmundry"},
    {id: 50, name: "Lalit", marks: 124, class: "10th", address: "Visakhapatnam"}
];


const container = document.getElementById("data");

arr.map(student => {

    container.innerHTML += `
        <div>
           <h3>${student.name}</h3>
           <p>Marks: ${student.marks}</p>
           <p>Class: ${student.class}</p>
           <p>Address: ${student.address}</p>
        </div>
    `;

});


let input = document.getElementById('input');
let btn = document.getElementById('submit');

btn.addEventListener('click', (event) => {
    event.preventDefault();

    const a = input.value;

    const dup = arr.filter(function(val) {
        return val.name.toLowerCase().includes(a.toLowerCase());
    });

    container.innerHTML = "";

    dup.map(student => {
        container.innerHTML += `
            <div>
                 <h3>${student.name}</h3>
                <p>Marks: ${student.marks}</p>
                 <p>Class: ${student.class}</p>
                <p>Address: ${student.address}</p>
            </div>
        `;
    });
});

function displayStudents(students) {
    container.innerHTML = "";

    students.map(student => {
        container.innerHTML += `
            <div>
                <h3>${student.name}</h3>
                <p>Marks: ${student.marks}</p>
                <p>Class: ${student.class}</p>
                <p>Address: ${student.address}</p>
            </div>
        `;
    });
}

displayStudents(arr);

input.addEventListener("input", () => {

    const searchValue = input.value.toLowerCase();

    const filteredStudents = arr.filter(student => {
        return student.name.toLowerCase().includes(searchValue);
    });

    displayStudents(filteredStudents);
});