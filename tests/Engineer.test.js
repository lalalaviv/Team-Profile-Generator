// Import class constructors
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  
  
  describe("Engineer object instantiation", () => {
    it("Creates an object with name, id, email, and github properties", () => {
      const engineer = new Engineer("Jane Doe", 1, "janedoe@gmail.com", "janedoegit");

      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toEqual("Jane Doe");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("janedoe@gmail.com");
      expect(engineer.github).toEqual("janedoegit");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const engineer = new Engineer("Jane Doe", 1, "janedoe@gmail.com", "janedoegit");

      expect(engineer.getName()).toEqual("Jane Doe");
    });
  });

  
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const engineer = new Engineer("John Smith", 1, "johnsmith@gmail.com", "johnsmithgithub");

      expect(engineer.getId()).toEqual(1);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const engineer = new Engineer("John Smith", 1, "johnsmith@gmail.com", "johnsmithgithub");

      expect(engineer.getEmail()).toEqual("johnsmith@gmail.com");
    });
  });

 
  describe("getGithub", () => {
    it("Should return the object's github property", () => {
      const engineer = new Engineer("John Smith", 1, "johnsmith@gmail.com", "johnsmithgithub");

      expect(engineer.getGithub()).toEqual("johnsmithgithub");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Engineer", () => {
      const engineer = new Engineer("John Smith", 1, "johnsmith@gmail.com", "johnsmithgithub");

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});