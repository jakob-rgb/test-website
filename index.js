function enterSite() {
  const name = document.getElementById('clientName').value;
  if(name.trim() === "") return;

  document.getElementById('userDisplay').textContent = name;
  document.getElementById('welcomeScreen').style.display = 'none';
}