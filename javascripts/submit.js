
function OnButton1()
{
document.mailform.action = "response1.php"
action="//rangshifter.us10.list-manage.com/subscribe/post?u=2c1168ea43f4ed7f3e516a472&amp;id=4f3fc6d76d"
method="post"
id="mc-embedded-subscribe-form"
name="mc-embedded-subscribe-form"
class="validate"
target="_blank"
novalidate
document.mailform.submit(); // Submit the page
return true;
}

function OnButton2()
{
document.mailform.action = "response2.php"
document.mailform.target = "_blank"; // Open in a new window
document.mailform.submit(); // Submit the page
return true;
}
