var resume = {
  name: "Karthick",
  DOB: "25.05.2001",
  Mail: "rajakarthick924@gmail.com",
  contact: "6386286799",
  Education: "goverment engineering college",
  "year of passing": "2022",
  CGPA: "7.7",
  Department: "Automobile",
  coursework:
    "Strength of materials,mechanics of machines,design of machine elements,spark ignition engines,compression ignition engines",
  skill: "SKILFUL IN PEOPLE MANAGEMENT,ENGINE DISMANTLING,OBD2",
  projects: "Automatic vechicle accident detection using GPS and GSM",
};

console.log(resume);

for (const i = 0; i < resume.length; i++) {
  console.log(resume);
}
for (let index in resume) {
  console.log(resume[index]);
}
for (let obj of resume) {
  console.log(obj.CGPA);
}
