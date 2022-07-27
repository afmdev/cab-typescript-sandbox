declare namespace WebDev {
  type Mentor = "Raúl" | "Ottavia";

  interface Student {
    firstName: string;
    lastName: string;
    age: number;
    hasGlasses?: boolean;
    [key: string]: any;
  }

  //el ? hace opcional el campo hasGlasses

  type Cohort = Array<Student>;
}

declare namespace Data {
  type Mentor = "Killian" | "Virginia";

  interface Student {
    firstName: string;
    lastName: string;
    height: number;
    hasGlasses?: boolean;
    [key: string]: any;
  }
}

//
interface ApiResponse<Type> {
  errorMessage?: string;
  responseCode?: string;
  data?: Type;
}

// interface ApiResponseUsers {
//   errorMessage?: string;
//   responseCode?: string;
//   data?: UserData;
// }

// interface ApiResponseMuseums {
//   errorMessage?: string;
//   responseCode?: string;
//   data?: MuseumData;
// }

interface UserData {
  name: string;
  email: string;
}

interface MuseumData {
  name: string;
  likes: number;
}
