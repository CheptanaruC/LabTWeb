interface Persoana {
    nume: string;
    varsta: number;
    email: string;
    adresa: string;
    telefon: string;
  }
  interface Student extends Persoana {
    anStudiu: number;
    specializare: string;
  }
  const student: Student = {
    nume: "Ion Popescu",
    varsta: 20,
    email: "ion.popescu@example.com",
    adresa: "Str. Principală, nr. 12",
    telefon: "0712345678",
    anStudiu: 2,
    specializare: "Informatică"
  };