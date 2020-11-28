
class HospitalEmployee {

  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() {

    return Math.floor(Math.random() * 10000);

  }
}



class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(certification) {
    this._certifications.push(certification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.addCertification('Genetics');


class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = insurance;
  }

  get insurance() {
    return this._insurance;
  }
} 