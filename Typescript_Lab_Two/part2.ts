let tasks: string[] = [];

function addTask(task:string):number{

    tasks.push(task);
    console.log("______________ New Task Added _______________");
    console.log("Task "+task+ " inserted in the list");
    return tasks.length;

}

function listAllTasks():void{
    console.log("All Items in Array:");
    tasks.forEach(function(task){
        console.log(task);
    })
    console.log("END: All items in Array:");
}

function deleteTask(task:string):number{
    let index:number = tasks.indexOf(task);
    if(index> -1){
        tasks.splice(index,1);
        console.log("____________ Task Removed ____________")
        console.log("Task " + task + " removed from the list.")

    }
    return tasks.length;
}

let x :number = addTask('wake up');
console.log("Number of items in list: " + x);
addTask('sleep');


listAllTasks();

deleteTask('sleep');

