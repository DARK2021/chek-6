  import human from './human';
  function App(){
  class Student extends human{
    name = "ALA DIN";
    job = "developer";
    skills = ["htlm","js"];
  }
const me = new Student()

me.getJob("developer");
me.leaveJob("web developer");
me.learnNewSkill("css");
me.forgetSkill("js");


 } 
  export default App;


