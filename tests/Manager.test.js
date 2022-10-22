// Import class constructors
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


describe("Manager", () => {
  
  
  describe("Manager object instantiation", () => {
    it("Creates an object with name, id, email, and officeNumber properties", () => {
      const manager = new Manager("John Smith", 1, "johnsmith@gmail.com", 20);

      expect(manager).toBeInstanceOf(Manager);
      expect(manager.name).toEqual("John Smith");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("johnsmith@gmail.com");
      expect(manager.officeNumber).toEqual(20);
    });
  });

  describe("getName", () => {
    it("Should return the object's name property", () => {
      const manager = new Manager("John Smith", 1, "johnsmith@gmail.com", 20);

      expect(manager.getName()).toEqual("Jane Doe");
    });
  });

  describe("getId", () => {
    it("Should return the object's id property", () => {
      const manager = new Manager("John Smith", 1, "johnsmith@gmail.com", 20);

      expect(manager.getID()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const manager = new Manager("John Smith", 1, "johnsmith@gmail.com", 20);

      expect(manager.getEmail()).toEqual("johnsmith@gmail.com");
    });
  });
  
  describe("getOffice", () => {
    it("Should return the object's officeNumber property", () => {
      const manager = new Manager("John Smith", 1, "johnsmith@gmail.com", 20);

      expect(manager.getOffice()).toEqual(20);
    });
  });

  describe("getRole", () => {
    it("Should return the string 'Manager'", () => {
      const manager = new Manager("John Smith", 1, "johnsmith@gmail.com", 20);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});