// Import class constructors
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");


describe("Intern", () => {
  
  
  describe("Intern object instantiation", () => {
    it("Creates an object with name, id, email, and school properties", () => {
      const intern = new Intern("John Smith", 1, "johnsmith@gmail.com", "Monash University");

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("John Smith");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("johnsmith@gmail.com");
      expect(intern.school).toEqual("Monash University");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const intern = new Intern("John Smith", 1, "johnsmith@gmail.com", "Monash University");

      expect(intern.getName()).toEqual("John Smith");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const intern = new Intern("John Smith", 1, "johnsmith@gmail.com", "Monash University");

      expect(intern.getId()).toEqual(1);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const intern = new Intern("John Smith", 1, "johnsmith@gmail.com", "Monash University");

      expect(intern.getEmail()).toEqual("johnsmith@gmail.com");
    });
  });

  describe("getSchool", () => {
    it("Should return the object's school property", () => {
      const intern = new Intern("John Smith", 1, "johnsmith@gmail.com", "Monash University");

      expect(intern.getSchool()).toEqual("Monash University");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Intern", () => {
      const intern = new Intern("John smith", 1, "johnsmith@gmail.com", "Monash University");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});