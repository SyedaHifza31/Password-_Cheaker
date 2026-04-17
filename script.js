// INPUT ELEMENTS

const password = document.getElementById("password");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const result = document.getElementById("result");
const show = document.getElementById("show");


// RULE ELEMENTS

const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
const r4 = document.getElementById("r4");
const r5 = document.getElementById("r5");


// PASSWORD CHECK EVENT

password.addEventListener("input", function () {

let p = password.value;

let score = 0;


// RESET CONDITION

if (p.length === 0) {

bar.style.width = "0%";
percent.innerText = "0%";
result.innerText = "ENTER PASSWORD";

r1.innerText = "✗ Minimum 8 characters";
r2.innerText = "✗ Uppercase letter";
r3.innerText = "✗ Lowercase letter";
r4.innerText = "✗ Number";
r5.innerText = "✗ Special character";

return;

}


// LENGTH CHECK

if (p.length >= 8) {

score += 20;
r1.innerText = "✓ Minimum 8 characters";

} else {

r1.innerText = "✗ Minimum 8 characters";

}


// UPPERCASE CHECK

if (/[A-Z]/.test(p)) {

score += 20;
r2.innerText = "✓ Uppercase letter";

} else {

r2.innerText = "✗ Uppercase letter";

}


// LOWERCASE CHECK

if (/[a-z]/.test(p)) {

score += 20;
r3.innerText = "✓ Lowercase letter";

} else {

r3.innerText = "✗ Lowercase letter";

}


// NUMBER CHECK

if (/[0-9]/.test(p)) {

score += 20;
r4.innerText = "✓ Number";

} else {

r4.innerText = "✗ Number";

}


// SPECIAL CHARACTER CHECK

if (/[!@#$%^&*]/.test(p)) {

score += 20;
r5.innerText = "✓ Special character";

} else {

r5.innerText = "✗ Special character";

}


// UPDATE METER

bar.style.width = score + "%";
percent.innerText = score + "%";


// FINAL RESULT

if (score <= 40) {

result.innerText = "WEAK PASSWORD";
result.style.color = "red";
bar.style.background = "red";

}

else if (score <= 80) {

result.innerText = "MEDIUM PASSWORD";
result.style.color = "orange";
bar.style.background = "orange";

}

else {

result.innerText = "STRONG PASSWORD";
result.style.color = "lime";
bar.style.background = "lime";

}

});


// SHOW / HIDE PASSWORD

show.addEventListener("change", function () {

if (show.checked) {

password.type = "text";

} else {

password.type = "password";

}

});