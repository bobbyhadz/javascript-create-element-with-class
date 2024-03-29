console.log('bobbyhadz.com');

// ✅ Create element
const el = document.createElement('div');

// ✅ Add classes to element
el.classList.add('bg-yellow', 'text-lg');

// ✅ Set ID attribute on the element
el.setAttribute('id', 'my-id');

// ✅ Add text content to the element
el.textContent = 'Hello world';

// ✅ Or set the innerHTML of the element
// el.innerHTML = `<span>One, two, three</span>`;

// ✅ add element to DOM
const box = document.getElementById('box');
box.appendChild(el);
