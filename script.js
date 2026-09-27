
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  color: #222;
}

header {
  background: #163c35;
  color: white;
  padding: 18px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 8px;
}

.hero {
  text-align: center;
  padding: 90px 20px;
  background: linear-gradient(
    rgba(0,0,0,0.55),
    rgba(0,0,0,0.55)
  ),
  url("https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80")
  center/cover;

  color: white;
}

.hero h1 {
  font-size: 38px;
  margin-bottom: 15px;
}

.hero p {
  margin-bottom: 25px;
}

#search {
  width: 90%;
  max-width: 450px;
  padding: 14px;
  border: none;
  border-radius: 8px;
  margin-bottom: 25px;
}

.btn {
  display: inline-block;
  background: #e87524;
  color: white;
  padding: 12px 20px;
  border-
