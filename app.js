document.addEventListener('DOMContentLoaded',function(){
 document.getElementById('gradeForm').addEventListener('submit',function(event){
        event.preventDefault();

        const Java=parseInt(document.getElementById('Java').value);
        const Python=parseInt(document.getElementById('Python').value);
        const Mathematics = parseInt(document.getElementById('Mathematics').value);
        const DataStructures=parseInt(document.getElementById('DataStructures').value)
       
        //calculating Total and average
        const totalMarks = Java + Python + Mathematics + DataStructures;
        const AveragePercentage = totalMarks / 4;

        let grade;
        if(AveragePercentage>=90)
        {
            grade='A';
        }
        else if(AveragePercentage>=80)
        {
            grade='B';
        }
        else if(AveragePercentage>=70)
        {
            grade='C';
        }
        else if(AveragePercentage>=60)
        {
            grade='D';    
        }
        else if(AveragePercentage>=50)
        {
            grade='E';   
        }
        else{
            grade='F';
        }

        const resultsDiv=document.getElementById('results');
        resultsDiv.innerHTML=`<h2>Results</h2>
        <p>Total Marks:${totalMarks}</p>
        <p>Average Percentage:${AveragePercentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>`;
    });
});