
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks(){
localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(){
const text=document.getElementById('taskInput').value;
const status=document.getElementById('status').value;

if(text===''){
alert('Enter task');
return;
}

tasks.push({text,status});
saveTasks();
renderTasks();
document.getElementById('taskInput').value='';
}

function deleteTask(index){
tasks.splice(index,1);
saveTasks();
renderTasks();
}

function renderTasks(){
document.getElementById('todo').innerHTML='';
document.getElementById('progress').innerHTML='';
document.getElementById('done').innerHTML='';

tasks.forEach((task,index)=>{
const div=document.createElement('div');
div.className='task';

div.innerHTML=`
<b>${task.text}</b><br><br>
<select onchange="changeStatus(${index}, this.value)">
<option ${task.status==='To Do'?'selected':''}>To Do</option>
<option ${task.status==='In Progress'?'selected':''}>In Progress</option>
<option ${task.status==='Done'?'selected':''}>Done</option>
</select>
<br>
<button class="delete" onclick="deleteTask(${index})">Delete</button>
`;

if(task.status==='To Do')
document.getElementById('todo').appendChild(div);
else if(task.status==='In Progress')
document.getElementById('progress').appendChild(div);
else
document.getElementById('done').appendChild(div);
});
}

function changeStatus(index,newStatus){
tasks[index].status=newStatus;
saveTasks();
renderTasks();
}

renderTasks();
