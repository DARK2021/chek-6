class  human{
    name;
    job;
    skills=["html"];
  
    getJob(a){
      this.job=a
      console.log(a)
    }
   leaveJob(){
     this.job="web developer"
     console.log(this.job)
   }
   learnNewSkill(h){
     this.skills.push(h)
     console.log(this.skills)
   }
   forgetSkill(c){
       let tab = this.skills
       let index = tab.indexOf(c);
       let delet = tab.splice(index,1,c);
    console.log(delet);
    
  }
  }
  export default human;