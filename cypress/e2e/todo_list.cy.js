function getTaskRandom() {
  const tasks = [
      "Develop a web application",
      "Optimize an algorithm",
      "Create a database",
      "Design a user interface",
      "Fix a bug in the code",
      "Implement a search function",
      "Perform unit testing",
      "Refactor the code",
      "Set up a server",
      "Create technical documentation",
      "Develop a mobile application",
      "Implement user authentication",
      "Optimize the performance of a web page",
      "Create a responsive website",
      "Develop a REST API",
      "Design a software architecture",
      "Perform software maintenance",
      "Implement security in an application",
      "Develop a desktop application",
      "Resolve a concurrency issue"
  ];

  const TaskRandom = tasks[Math.floor(Math.random() * tasks.length)];
  return TaskRandom;
}




describe('template spec',()=>{

    beforeEach(() => {
        cy.visit('https://j-o-s-eandres.github.io/todo-list/');
    
      });

      it('Task Life Cycle', () =>{
        cy.get('#input').click()
        cy.get('#input').type(getTaskRandom())
        cy.wait(1000);
        cy.get('#enter').click()
        cy.get('i.far.fa-circle[data="realizado"]').first().click();
        cy.wait(1000);
        cy.get('i.fas.fa-trash.de[data="eliminado"]').first().click();
      })
})



