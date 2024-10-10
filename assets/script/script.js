const toggle = document.querySelector('.toggle-input');
const initialState = localStorage.getItem('toggleState') == 'true';
const bodyTheme = document.getElementsByTagName("body")[0];
toggle.checked = initialState;
bodyTheme.className = toggle.checked?"theme-dark":"theme-light";

toggle.addEventListener('change', function() {
  localStorage.setItem('toggleState', toggle.checked);
  bodyTheme.className = toggle.checked?"theme-dark":"theme-light";
});
