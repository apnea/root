
function OnButton1()
{
document.Form1.action = "response1.php"
action="//rangshifter.us10.list-manage.com/subscribe/post?u=2c1168ea43f4ed7f3e516a472&amp;id=4f3fc6d76d"
method="post"
id="mc-embedded-subscribe-form"
name="mc-embedded-subscribe-form"
class="validate"
target="_blank"
novalidate
document.Form1.submit(); // Submit the page
return true;
}

function OnButton2()
{
document.Form1.action = "response2.php"
document.Form1.target = "_blank"; // Open in a new window
document.Form1.submit(); // Submit the page
return true;
}
