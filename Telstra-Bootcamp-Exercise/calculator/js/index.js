
const displa=document.querySelector('.display')
const button=document.querySelectorAll('button');
var flag=false
var value=""
for (var i = 0; i < button.length;  i++)
{
	button[i].addEventListener('click',e=> 
	{
		if (e.target.matches('.btn-number'))
		{
			const key=(e.target.textContent)
			if(displa.textContent===0)
			{
				displa.textContent=key
				value+=key
				flag=false
			}
			else
			{
				displa.textContent+=key
				value+=key
				flag=false
			}
		}
		else if(e.target.matches('.btn-op'))
		{	
			const operator=e.target.textContent
			if(flag==false)
			{
				
				displa.textContent+=operator
				value+=operator
				flag=true
				
			}
			

		}
		else if(e.target.matches('.btn-eval'))
		{
			displa.textContent=eval(value)
			value=value
			console.log(value)
		}
		else if(e.target.matches('.btn-cancel'))
		{
			displa.textContent=0
			value=0
			console.log(value)
		}
		else if(e.target.matches('.btn-recall'))
		{
			displa.textContent=value
			console.log(value)
		}
		
})}