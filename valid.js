function myfun()
{
	var UserName=document.getElementById('username').value;
    var UPass=document.getElementById('pass').value;

    if(UserName=="")
    {
        document.getElementById('UBlank').innerHTML="Please Enter the User Name";
       // return false;
    }
    else if (UserName!="")
    {
        document.getElementById('UBlank').innerHTML="";
    }
    if(UPass=="")
    {
        document.getElementById('PassBlank').innerHTML="Please Enter UR Password";
       // return false;
    }
    else if(UPass!="")
    {
        document.getElementById('PassBlank').innerHTML="";
    }

	else if(UserName!="" && UPass!="")
    {
        document.getElementById('Success').innerHTML=" You Have Successfully Register";
       // window.location=('http://www.onlineittuts.com');
       return true;
    }
  //  return true;
}